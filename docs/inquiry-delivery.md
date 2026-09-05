# D011 inquiry delivery

The homepage and `/rfq` forms submit to `POST /api/rfq`. The server validates the request and sends the inquiry through Resend to the JAMOOZ business inbox.

## Production settings

Configure these server-only environment variables in the active Vercel project:

- `RESEND_API_KEY`: created by the Vercel Resend integration.
- `RFQ_FROM_EMAIL`: verified sender, recommended `JAMOOZ Website <inquiry@notify.jmz.global>`.
- `RFQ_TO_EMAIL`: business inbox, currently `lee@jamooz.cn`.

Do not expose these values with a `NEXT_PUBLIC_` prefix and do not commit secrets to Git.

## Anti-spam controls

- same-origin POST enforcement;
- 16 KB request limit and strict server-side field validation;
- hidden honeypot field;
- minimum/maximum completion-time check;
- best-effort limit of five attempts per ten minutes per network address;
- no form contents or contact details are sent to analytics.

## Acceptance test

1. Verify the sender domain in Resend and deploy the environment variables.
2. Submit one inquiry from a desktop browser and one from a 375 px mobile viewport.
3. Confirm both messages arrive at `RFQ_TO_EMAIL`, the Reply-To address matches the submitted business email, and the website displays a unique reference.
4. Confirm the `form_submit` analytics event fires only after successful delivery.

## Response operations

Every delivered message includes the default assignee, China-time receipt timestamp, and a 30-minute first-response deadline. Follow `docs/inquiry-response-sop.md` and keep completed response logs in a private, access-controlled spreadsheet based on `docs/inquiry-response-log-template.csv`.
