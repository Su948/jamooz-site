import fs from 'node:fs/promises';

const siteUrl = (process.env.MONITOR_SITE_URL || 'https://www.jmz.global').replace(/\/$/, '');
const resultPath = process.env.MONITOR_RESULT_PATH || 'monitor-result.json';
const simulateFailure = process.env.MONITOR_SIMULATE_FAILURE === 'true';
const startedAt = new Date();

async function fetchPage(pathname) {
  const started = Date.now();
  const response = await fetch(`${siteUrl}${pathname}`, {
    headers: { 'user-agent': 'JAMOOZ-Availability-Monitor/1.0' },
    redirect: 'manual',
    signal: AbortSignal.timeout(15_000),
  });
  const body = await response.text();
  return { response, body, durationMs: Date.now() - started };
}

async function runCheck(id, label, check) {
  try {
    const details = await check();
    return { id, label, ok: true, ...details };
  } catch (error) {
    return {
      id,
      label,
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

const checks = [];

checks.push(await runCheck('homepage', 'Homepage availability', async () => {
  const { response, body, durationMs } = await fetchPage('/');
  if (response.status !== 200) throw new Error(`Expected HTTP 200, received ${response.status}`);
  if (!body.includes('JAMOOZ')) throw new Error('Expected JAMOOZ page marker was not found');
  return { status: response.status, durationMs };
}));

checks.push(await runCheck('inquiry-form', 'Inquiry entry point', async () => {
  const { response, body, durationMs } = await fetchPage('/');
  if (response.status !== 200) throw new Error(`Homepage returned HTTP ${response.status}`);
  const hasForm = body.includes('preview-inquiry-form');
  const hasEmailAction = body.includes('SEND INQUIRY BY EMAIL') && body.includes('mailto:');
  if (!hasForm || !hasEmailAction) {
    throw new Error(`Inquiry form markers missing (form=${hasForm}, emailAction=${hasEmailAction})`);
  }
  return { status: response.status, durationMs, formMode: 'mailto' };
}));

checks.push(await runCheck('404', 'Not-found response', async () => {
  const { response, body, durationMs } = await fetchPage(`/__availability-check-not-found__?t=${Date.now()}`);
  const hasNoindex = /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(body)
    || /<meta[^>]+content=["'][^"']*noindex[^"']*["'][^>]+name=["']robots["']/i.test(body);
  if (response.status !== 404) throw new Error(`Expected HTTP 404, received ${response.status}`);
  if (!hasNoindex) throw new Error('404 response is missing a noindex robots directive');
  return { status: response.status, durationMs, noindex: true };
}));

if (simulateFailure) {
  checks.push({
    id: 'test-alert',
    label: 'Manual test alert',
    ok: false,
    error: 'Intentional D010 test failure requested through workflow_dispatch',
  });
}

const result = {
  ok: checks.every((check) => check.ok),
  siteUrl,
  startedAt: startedAt.toISOString(),
  finishedAt: new Date().toISOString(),
  simulated: simulateFailure,
  checks,
};

await fs.writeFile(resultPath, `${JSON.stringify(result, null, 2)}\n`, 'utf8');
console.log(JSON.stringify(result, null, 2));

if (!result.ok) process.exitCode = 1;
