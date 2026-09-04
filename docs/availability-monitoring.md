# JAMOOZ availability monitoring runbook

## Coverage

The `D010 Availability Monitor` GitHub Actions workflow runs every five minutes and can also be started manually. It checks:

1. `https://www.jmz.global/` returns HTTP 200 and contains the JAMOOZ page marker.
2. The homepage still renders the inquiry form and its email action. It never enters or submits customer data.
3. A known non-existent URL returns HTTP 404 with a `noindex` directive.

GitHub scheduled workflows use a five-minute cron target but may start later during platform congestion.

## Alerts and ownership

Failed checks create or update one deduplicated GitHub issue and assign it to the repository owner.

- Operations owner: repository owner (`@Su948`) receives and acknowledges the issue.
- Technical owner: Codex diagnoses the site or deployment and prepares the repair.
- P0: homepage unavailable or inquiry entry missing. Acknowledge within 15 minutes; restore or provide a workaround within 60 minutes.
- P1: incorrect 404/noindex behavior. Acknowledge within 4 business hours; fix within 1 business day.

When every check passes again, the workflow comments with the recovery time and closes the incident automatically.

## Controlled alert test

1. Open **Actions → D010 Availability Monitor → Run workflow**.
2. Enable **Create a controlled test alert** and run it.
3. Confirm an issue named `[D010 Monitor] JAMOOZ production availability incident` is created and assigned to `@Su948`.
4. Run the workflow again with the test option disabled. Confirm the recovery comment appears and the issue closes.

The controlled test does not interrupt the website and does not submit the inquiry form.
