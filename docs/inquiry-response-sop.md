# D013 inquiry response SOP

This SOP turns every delivered website inquiry into an owned, timed sales task. The 30-minute target is an internal operating target, not a public promise to visitors.

## Roles and coverage

- **Duty owner:** the person monitoring `RFQ_TO_EMAIL` (currently `lee@jamooz.cn`). A delivered inquiry is automatically assigned to this inbox.
- **Backup owner:** the manager-designated backup for the current duty period. The backup takes over if the duty owner cannot acknowledge an inquiry within 15 minutes.
- **Manager:** publishes the duty and backup names in the private inquiry log before each staffed period and reviews missed-SLA rows weekly.
- Check the business inbox at least every 15 minutes during staffed periods. Do not put customer contact details or completed inquiry logs in GitHub.

## First-response workflow

1. Open the new inquiry email and find its unique `JAM-...` reference.
2. Claim the inquiry in the private log by entering the duty owner's name in `assignee` and setting `status` to `Assigned`.
3. Review product, quantity, OEM/ODM request, source page and message.
4. Reply from the business mailbox before the **First reply due** time shown in the email. The email's Reply-To points to the visitor's business email.
5. Record `first_response_at_china`, set `status` to `Replied`, and calculate `response_minutes` and `sla_met`.
6. Add the next action and due date. Escalate pricing, certification or technical questions to the responsible specialist without delaying the first acknowledgement.

## 30-minute first-response template

Subject: `Re: JAMOOZ inquiry — [product] — [reference]`

> Hello [name],
>
> Thank you for contacting JAMOOZ about [product]. I have received your request and am reviewing the suitable models, MOQ, pricing, customization options and lead time.
>
> To prepare an accurate recommendation, could you confirm [target market / expected quantity / required certification / target delivery date]?
>
> I will follow up with the relevant details by [specific time or date].
>
> Best regards,  
> [owner name]  
> JAMOOZ

Use only the questions relevant to the inquiry. Do not claim a fixed price, certification coverage or lead time before confirming the exact product and order.

## Escalation rules

- **15 minutes without claim:** backup owner claims the inquiry.
- **30 minutes without first reply:** mark `sla_met` as `No`, reply immediately, and notify the manager.
- **Delivery failure or missing email:** use the website reference and Vercel/Resend delivery evidence to diagnose; contact the lead by WhatsApp only when a valid number was provided and the business is authorized to use it.
- **Spam or invalid inquiry:** set status to `Rejected`, record a non-sensitive reason, and do not reply.

## Required private log fields

Start from `docs/inquiry-response-log-template.csv` in a private, access-controlled spreadsheet. Each real inquiry must record:

- reference and received time;
- source page and product;
- assignee and current status;
- first-response time, response minutes and SLA result;
- next action, next-action due date and non-sensitive notes.

The completed log contains customer and employee information. Keep it outside GitHub and restrict access to the sales and management team.

## D013 acceptance test

Run three sequential test inquiries during a staffed period:

1. Submit one homepage inquiry, one product-prefilled `/rfq` inquiry and one mobile inquiry.
2. Confirm all three messages arrive with a unique reference, assignment, received time and first-reply deadline.
3. Claim each row in the private log, reply to the test sender, and record the first-response time.
4. D013 passes only when all three rows show `Replied`, `response_minutes < 30`, and `sla_met = Yes`.
