import { readFile } from "node:fs/promises";

const SITE_URL = "https://www.jmz.global";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const INDEXNOW_KEY = "bbb7d38bc0a02f17d1b7cc8240607414";
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

const keyFile = new URL(`../public/${INDEXNOW_KEY}.txt`, import.meta.url);
const hostedKey = (await readFile(keyFile, "utf8")).trim();

if (hostedKey !== INDEXNOW_KEY) {
  throw new Error("The IndexNow key file does not match the configured key.");
}

const sitemapResponse = await fetch(`${SITE_URL}/sitemap.xml`, {
  headers: { "user-agent": "JAMOOZ-IndexNow/1.0" },
});

if (!sitemapResponse.ok) {
  throw new Error(
    `Unable to fetch the production sitemap (${sitemapResponse.status}).`,
  );
}

const sitemapXml = await sitemapResponse.text();
const urlList = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  ([, location]) => location.trim(),
);

if (urlList.length === 0) {
  throw new Error("The production sitemap contains no URLs.");
}

for (const pageUrl of urlList) {
  const parsedUrl = new URL(pageUrl);

  if (parsedUrl.origin !== SITE_URL) {
    throw new Error(`Refusing to submit a URL outside ${SITE_URL}: ${pageUrl}`);
  }
}

const response = await fetch(INDEXNOW_ENDPOINT, {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE_URL).hostname,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  }),
});

if (![200, 202].includes(response.status)) {
  const responseBody = await response.text();
  throw new Error(
    `IndexNow rejected the submission (${response.status}): ${responseBody}`,
  );
}

console.log(
  JSON.stringify(
    {
      status: response.status === 200 ? "submitted" : "accepted-pending-key-check",
      responseCode: response.status,
      keyLocation: KEY_LOCATION,
      submittedUrls: urlList,
    },
    null,
    2,
  ),
);
