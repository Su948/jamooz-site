# JAMOOZ analytics event specification

This site loads the production Google Tag Manager container
`GTM-MXCQZ9VF`. `NEXT_PUBLIC_GTM_ID` may override that public container ID for
an alternate environment. GTM forwards the fixed conversion events below to
the JAMOOZ GA4 property (`G-DGGY4HJPN3`).

| Event | Trigger | Parameters | Meaning |
| --- | --- | --- | --- |
| `form_submit` | Homepage inquiry form is validated and prepares the user's email client | `form_id`, `form_method`, `page_path`, `event_source` | Inquiry intent; this is not proof that the email was sent |
| `whatsapp_click` | A visitor clicks a `wa.me` or WhatsApp link | `link_location`, `page_path`, `event_source` | WhatsApp contact intent |
| `email_click` | A visitor clicks a `mailto:` link | `link_location`, `page_path`, `event_source` | Email contact intent |
| `phone_click` | A visitor clicks a future `tel:` link | `link_location`, `page_path`, `event_source` | Phone contact intent; no public phone link exists yet |
| `catalog_download` | A visitor clicks a download/PDF/catalogue link or a link marked `data-analytics-event="catalog_download"` | `link_location`, `page_path`, `event_source` | Catalogue download intent; no public catalogue link exists yet |

## Privacy rules

- Never send form field values, email addresses, phone numbers, message text,
  names, company names, or WhatsApp message contents to GTM or GA4.
- Microsoft Clarity uses project `ycuqa9xing`. The inquiry form's input,
  select, and textarea elements are explicitly protected with
  `data-clarity-mask="true"`; do not remove those attributes when editing the
  form. Clarity must never receive visitor-entered form values.
- `page_path` contains only the current path, without query parameters.
- `form_submit` is tracked before opening the visitor's email application. It
  must not be reported as a successfully delivered inquiry.

## GTM configuration

1. Add a Google tag using the JAMOOZ GA4 measurement ID and fire it on all pages.
2. Add one GA4 Event tag whose event name is the built-in `{{Event}}` variable.
3. Fire the event tag on this custom-event regular expression:
   `^(form_submit|whatsapp_click|email_click|phone_click|catalog_download)$`
4. The website also puts `event_category`, `event_source`, `page_path`,
   `form_id`, `form_method`, and `link_location` into the data layer without
   personal data. They can be registered as custom dimensions later if needed.
5. In GA4, mark all five event names as key events only after DebugView confirms
   one event per action.

## DebugView acceptance test

Use GTM Preview against the deployment URL and confirm each event appears once
in GA4 DebugView. The Vercel preview deployment exposes `/analytics-test` with
one safe control for each fixed event name. The route returns 404 outside
`VERCEL_ENV=preview`; its controls only push non-PII test events and do not
contact users or download files. Do not add fake links or contact details to
production.
