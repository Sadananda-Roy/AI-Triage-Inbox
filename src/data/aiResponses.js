const AI_RESPONSES = {
  itm_001: {
    summary_bullets: [
      "Premium increased ~28% (฿12,400 → ฿15,900) at renewal with no vehicle or claim changes",
      "3-year customer flagging the jump before deciding whether to renew",
      "No claims filed during the policy period",
      "Policy TH-CAR-44821 referenced",
    ],
    category: "Billing",
    priority: "P2",
    suggested_action:
      "Pull TH-CAR-44821, compare last two renewal rate calculations, respond with itemised breakdown within 24h",
    draft_reply:
      "Dear Nok,\n\nThank you for reaching out and for being a valued customer for the past three years.\n\nI can see that your renewal premium for policy TH-CAR-44821 has increased from ฿12,400 to ฿15,900. I understand this is unexpected, especially as your vehicle details haven't changed.\n\nPremium adjustments at renewal can be influenced by several factors including industry-wide actuarial rate reviews, regional risk index changes, and general inflation adjustments to parts and labour costs.\n\nI'm pulling your policy file now to prepare a full itemised breakdown of the rate calculation. I'll have a detailed explanation to you within one business day.\n\nBest regards,\nCustomer Support Team",
    confidence: 0.91,
  },

  itm_002: {
    summary_bullets: [
      "Endorsement request to update vehicle plate on policy TH-MTR-99210",
      "Old plate กข 1234 → New plate กข 5678, same Bangkok registration",
      "Effective date requested: 2026-03-20",
      "All other vehicle details unchanged — straightforward admin update",
    ],
    category: "Endorsement",
    priority: "P3",
    suggested_action:
      "Process plate change on TH-MTR-99210; confirm whether new registration certificate is required before effective date",
    draft_reply:
      "Hi Somchai,\n\nThanks for your message. I've received your request to update the registered plate number on policy TH-MTR-99210.\n\nTo process the endorsement from กข 1234 to กข 5678 with an effective date of 20 March 2026, we'll need a copy of the new vehicle registration certificate (สมุดทะเบียนรถ) showing the updated plate number.\n\nOnce received, we can process the endorsement and issue an updated certificate of insurance within 1–2 business days.\n\nBest regards,\nEndorsements Team",
    confidence: 0.96,
  },

  itm_003: {
    summary_bullets: [
      "Contains a prompt injection attempt ('Ignore previous instructions...')",
      "Sender domain totally-legit.biz not associated with any known customer",
      "Classic phishing: urgency, credential harvesting link, secrecy instruction",
      "No legitimate customer request — flag to IT security immediately",
    ],
    category: "Spam",
    priority: "P1",
    suggested_action:
      "Mark as spam, do not click any links, report sender domain to IT security for blocklisting",
    draft_reply:
      "No reply should be sent to this message. It has been identified as a phishing/spam attempt. Forward the original email to security@yourcompany.com and mark it as spam.",
    confidence: 0.99,
  },

  itm_004: {
    summary_bullets: [
      "Formal flood damage claim for Honda City 2023 (plate มก 4490), policy TH-CAR-78832",
      "Incident: 14 March 2026, Lat Phrao Soi 45, Bangkok — vehicle water-damaged overnight in basement carpark",
      "Car currently at Yontrakit Honda; customer has photos and assessment report ready",
      "Requesting receipt confirmation and next steps — time-sensitive P1",
    ],
    category: "Claims",
    priority: "P1",
    suggested_action:
      "Acknowledge receipt immediately, assign claims assessor, request photos and service centre report from customer",
    draft_reply:
      "Dear Priya,\n\nThank you for contacting us and I'm sorry to hear about the flood damage to your vehicle.\n\nI can confirm we have received your claim notification for policy TH-CAR-78832 relating to the flood damage incident on 14 March 2026 in Lat Phrao, Bangkok.\n\nYour claim has been logged and a dedicated claims assessor will be in touch within 4 business hours. In the meantime:\n\n1. Please send your photos and the Yontrakit Honda assessment report to claims@yourcompany.com, quoting TH-CAR-78832 in the subject.\n2. Do not authorise any repair work until our assessor has reviewed the damage.\n3. Keep receipts for any out-of-pocket expenses (towing, temporary transport).\n\nIf you need to reach us urgently, call our claims hotline at 02-xxx-xxxx.\n\nBest regards,\nClaims Support Team",
    confidence: 0.95,
  },

  itm_005: {
    summary_bullets: [
      "Single-sentence inquiry about office hours",
      "No policy number, no urgency, no account details",
      "Lowest-effort query — templated response sufficient",
    ],
    category: "General",
    priority: "P3",
    suggested_action: "Reply with office hours and contact options",
    draft_reply:
      "Hi Wiroj,\n\nThanks for reaching out!\n\nOur office hours are Monday to Friday, 8:30 AM – 5:30 PM (Bangkok time, GMT+7). We're closed on public holidays.\n\nYou can also reach us via:\n- Live chat on our website (office hours only)\n- Email: support@yourcompany.com (response within 1 business day)\n- Phone: 02-xxx-xxxx\n\nBest regards,\nCustomer Support Team",
    confidence: 0.98,
  },
  itm_006: {
    summary_bullets: [
      "Two separate issues: duplicate billing charge and named driver endorsement",
      "Duplicate debit of ฿3,200 on 2026-10-01 and 2026-10-03",
      "Endorsement to add spouse Malee Suwan (DOB 1988-07-22) on TH-CAR-55102",
      "Customer expects timeline confirmation for both",
    ],
    category: "BillingAndEndorsement",
    priority: "P2",
    suggested_action:
      "Split into two tickets: (1) refund duplicate charge, (2) process named driver endorsement with licence verification",
    draft_reply:
      "Dear Amara,\n\nThank you for your message — I can see you have two separate matters that need attention.\n\nRegarding the duplicate charge: I can see the two debits of ฿3,200 on 2026-10-01 and 2026-10-03. I'm raising a refund request now. Refunds typically take 5–7 business days.\n\nRegarding the named driver endorsement: To add Malee Suwan to policy TH-CAR-55102, please send a copy of her driving licence to endorsements@yourcompany.com quoting your policy number.\n\nI'll follow up on both items and keep you updated.\n\nBest regards,\nCustomer Support Team",
    confidence: 0.87,
  },

  itm_007: {
    summary_bullets: [
      "Cancellation of TH-CAR-61004 requested immediately following vehicle sale on 2026-03-15",
      "Buyer: Thanakorn Wiboon",
      "Customer asking about pro-rata refund, processing timeline, and required documents",
      "Status In Progress — straightforward cancellation given sale evidence",
    ],
    category: "General",
    priority: "P2",
    suggested_action:
      "Confirm cancellation effective 2026-03-15, calculate pro-rata refund, request vehicle sale agreement",
    draft_reply:
      "Hi Kamon,\n\nThank you for letting us know about the sale of your vehicle.\n\nPro-rata refund: I'm calculating the unused portion now and will confirm the exact amount within 2 business hours.\n\nProcessing timeline: Once documents are received, refunds are processed within 7–10 business days to your original payment method.\n\nRequired documents: Please send a copy of the vehicle sale agreement (สัญญาซื้อขายรถยนต์) or the transfer of ownership receipt to cancellations@yourcompany.com quoting policy TH-CAR-61004.\n\nBest regards,\nCustomer Support Team",
    confidence: 0.93,
  },

  itm_008: {
    summary_bullets: [
      "Rear-end collision on Don Mueang Tollway, 19 June 2026 at 7:45 AM",
      "Toyota Camry 2021 (TH-CAR-22019) hit from behind — rear bumper, boot lid, lights destroyed, possible chassis damage",
      "Third-party details provided: Preecha Duangkaew, plate พน 4432; police report DM-2026-06-19-0472",
      "Car towed to Bangkok Toyota Vibhavadi; customer urgently needs replacement transport",
    ],
    category: "Claims",
    priority: "P1",
    suggested_action:
      "Acknowledge urgently, assign assessor to Bangkok Toyota Vibhavadi, check replacement vehicle entitlement under policy TH-CAR-22019",
    draft_reply:
      "Dear Lalita,\n\nThank you for contacting us and I'm sorry to hear about the collision.\n\nI can confirm receipt of your claim for policy TH-CAR-22019 relating to the incident on 19 June 2026 on the Don Mueang Tollway.\n\nYour claim is being treated as priority. A claims assessor will contact you within 2 business hours. In the meantime:\n\n1. Please do not authorise any repairs at Bangkok Toyota Vibhavadi until our assessor has inspected the vehicle.\n2. Regarding replacement transport: please ask our assessor about your entitlement under your policy when they call.\n3. Please forward a copy of police report DM-2026-06-19-0472 to claims@yourcompany.com.\n\nWe'll do everything we can to resolve this quickly.\n\nBest regards,\nClaims Support Team",
    confidence: 0.94,
  },

  itm_009: {
    summary_bullets: [
      "Customer on third-party only coverage (TH-CAR-38821) requesting upgrade to comprehensive Type 1",
      "Vehicle: Isuzu D-Max 2020, plate กค 7821",
      "Renewal due in August — customer getting ahead of it",
      "Asking for quote and information on upgrade process and waiting period",
    ],
    category: "Endorsement",
    priority: "P3",
    suggested_action:
      "Prepare comprehensive Type 1 quote for Isuzu D-Max 2020 and advise on mid-term upgrade vs renewal upgrade process",
    draft_reply:
      "Hi Thanawat,\n\nThanks for getting in touch ahead of your renewal.\n\nI'll prepare a comprehensive Type 1 quote for your Isuzu D-Max 2020 (plate กค 7821) and send it to you within 1 business day.\n\nOn your question about the process: you have two options:\n1. Upgrade mid-term now — this is possible and coverage starts from the endorsement effective date, but involves a pro-rata premium top-up.\n2. Switch to comprehensive at your August renewal — simpler and often more cost-effective.\n\nI'd recommend waiting for the quote so you can compare both scenarios on cost.\n\nBest regards,\nEndorsements Team",
    confidence: 0.89,
  },

  itm_010: {
    summary_bullets: [
      "Bulk promotional email claiming a ฿50,000 reward — classic social engineering scam",
      "Requests highly sensitive personal and financial information (bank account, ID, DOB)",
      "Sender domain bulk-mailer99.net has no association with any customer",
      "Zero legitimate content — immediate spam classification",
    ],
    category: "Spam",
    priority: "P3",
    suggested_action:
      "Mark as spam, blocklist sender domain bulk-mailer99.net, no reply required",
    draft_reply:
      "No reply should be sent. This is a scam email designed to harvest personal and financial information. Mark as spam and blocklist the sender domain.",
    confidence: 0.99,
  },

  itm_011: {
    summary_bullets: [
      "Vehicle theft claim — Honda Civic 2022 (plate มม 1190) stolen from Central Westgate parking lot overnight",
      "Policy TH-CAR-90112; police report NB-2026-06-20-0089 already filed at Nonthaburi Police Station",
      "Customer discovered theft at 06:00, needs urgent guidance on documents and replacement vehicle",
      "High urgency — customer relies on car for work",
    ],
    category: "Claims",
    priority: "P1",
    suggested_action:
      "Acknowledge theft claim immediately, send theft claim document checklist, check if policy covers rental vehicle during claim period",
    draft_reply:
      "Dear Rujira,\n\nI'm very sorry to hear about the theft of your vehicle. I understand how stressful this is.\n\nI can confirm your theft claim has been logged under policy TH-CAR-90112. A dedicated claims handler will contact you within 2 hours.\n\nTo start the process, please send the following to claims@yourcompany.com:\n1. Copy of police report NB-2026-06-20-0089\n2. Copy of your vehicle registration document\n3. Copy of your driving licence\n4. Photos of any evidence at the scene (if available)\n\nRegarding a replacement vehicle: your policy entitlement will be confirmed by your claims handler when they call.\n\nPlease do not pay any 'recovery fees' to anyone claiming to have found your vehicle without speaking to us first.\n\nBest regards,\nClaims Support Team",
    confidence: 0.96,
  },

  itm_012: {
    summary_bullets: [
      "Fleet policy TH-FLT-00441 renewal due 15 July 2026 — 12 vehicles (down from 14)",
      "Mix: 8 Honda Jazz, 2 Toyota Fortuner, 2 Isuzu NPR trucks — all requesting comprehensive",
      "Zero claims last year — customer expects this reflected in pricing",
      "Quote needed by 30 June for both fleet manager and CFO",
    ],
    category: "Billing",
    priority: "P2",
    suggested_action:
      "Prepare comprehensive fleet renewal quote for 12 vehicles, apply no-claim discount, send to both contacts by 28 June to allow review time",
    draft_reply:
      "Dear Chanatip,\n\nThank you for getting in touch ahead of your fleet renewal.\n\nI've noted the updated fleet composition of 12 vehicles (8 Honda Jazz 2021, 2 Toyota Fortuner 2022, 2 Isuzu NPR trucks) for policy TH-FLT-00441, with renewal due 15 July 2026.\n\nYour zero-claim record last year is noted and will be factored into the renewal quote.\n\nI'll prepare comprehensive coverage quotes for all 12 vehicles and send them to both yourself and cfo@company.co.th by 28 June, giving you time to review before the 30 June deadline.\n\nBest regards,\nCommercial Team",
    confidence: 0.92,
  },

  itm_013: {
    summary_bullets: [
      "Follow-up on hail damage claim TH-CLM-2026-0341 submitted 3 weeks ago with no update",
      "Customer has called twice and been disconnected both times",
      "Garage is waiting for approval before starting repairs on policy TH-CAR-51209",
      "Escalation risk — frustrated customer, delayed repair authorisation",
    ],
    category: "Claims",
    priority: "P2",
    suggested_action:
      "Locate claim TH-CLM-2026-0341, contact assigned assessor for status, provide customer update within 2 hours and repair authorisation if approved",
    draft_reply:
      "Dear Pichaya,\n\nI sincerely apologise for the lack of updates on your claim and for the difficulty you've experienced reaching us by phone.\n\nI'm looking up claim TH-CLM-2026-0341 for policy TH-CAR-51209 right now and will have a status update for you within 2 business hours. I'll also escalate internally to ensure the garage receives their authorisation decision today.\n\nI'll contact you by email and phone at the number we have on file. If you have a preferred contact time, please let me know.\n\nAgain, I apologise for the inconvenience.\n\nBest regards,\nClaims Support Team",
    confidence: 0.91,
  },

  itm_014: {
    summary_bullets: [
      "Simple address change request for policy TH-CAR-29910",
      "New address: 45/12 Moo 3, Soi Ramintra 34, Khan Na Yao, Bangkok 10230",
      "No other changes requested — low complexity",
    ],
    category: "Endorsement",
    priority: "P3",
    suggested_action:
      "Update registered address on TH-CAR-29910 and send confirmation email",
    draft_reply:
      "Hello Natthaporn,\n\nThank you for letting us know about your move.\n\nI've updated the registered address on policy TH-CAR-29910 to:\n45/12 Moo 3, Soi Ramintra 34, Khan Na Yao, Bangkok 10230\n\nThe change is effective immediately. An updated policy document will be emailed to you within 1 business day.\n\nBest regards,\nEndorsements Team",
    confidence: 0.98,
  },

  itm_015: {
    summary_bullets: [
      "Hit and run — Mazda 2 (TH-CAR-71144) damaged while parked, other driver fled",
      "Front left door badly dented, side mirror broken; approximate time 22:00–06:00",
      "CCTV footage preserved at building entrance — valuable evidence",
      "No police report filed yet; customer unsure if required; relies on car for work",
    ],
    category: "Claims",
    priority: "P1",
    suggested_action:
      "Advise customer to file police report immediately, preserve CCTV evidence, and submit claim for hit-and-run under own comprehensive policy",
    draft_reply:
      "Dear Wanchai,\n\nI'm sorry to hear about the damage to your vehicle.\n\nTo answer your question: yes, you do need a police report for a hit-and-run claim. Please file one at your local police station as soon as possible — ideally today, citing the location and approximate time.\n\nIn the meantime, please take these steps:\n1. Ask the building manager to formally secure or export the CCTV footage now — this is critical evidence and footage is often overwritten within 24–48 hours.\n2. Take photos of the damage from multiple angles.\n3. Once you have the police report, send it along with photos to claims@yourcompany.com, quoting policy TH-CAR-71144.\n\nWe'll begin processing your claim as soon as documents are received.\n\nBest regards,\nClaims Support Team",
    confidence: 0.93,
  },

  itm_016: {
    summary_bullets: [
      "Invoice for TH-CAR-63320 shows ฿18,890 vs quoted price of ฿18,000 — discrepancy of ฿890",
      "Invoice has no itemised breakdown — single line total only",
      "Customer requesting itemised invoice and refund if charge is confirmed as an error",
    ],
    category: "Billing",
    priority: "P2",
    suggested_action:
      "Pull TH-CAR-63320 invoice, identify source of ฿890 discrepancy, send itemised breakdown and initiate refund if error confirmed",
    draft_reply:
      "Dear Supansa,\n\nThank you for flagging this.\n\nI'm reviewing the invoice for policy TH-CAR-63320 now. You're right that every invoice should include an itemised breakdown — I'll arrange for a corrected version to be sent to you within 1 business day.\n\nIf the ฿890 difference cannot be explained by a valid charge (such as a stamp duty or processing fee that may not have been included in the original quote), I will initiate a refund immediately.\n\nI'll be back in touch by end of business tomorrow with a full explanation.\n\nBest regards,\nBilling Team",
    confidence: 0.9,
  },

  itm_017: {
    summary_bullets: [
      "Customer asking how to add a newly licensed daughter as named driver on TH-CAR-40019",
      "Simple process query — no urgency, no dispute",
      "May incur additional premium depending on the daughter's age and licence type",
    ],
    category: "Endorsement",
    priority: "P3",
    suggested_action:
      "Explain named driver addition process and request daughter's licence details and DOB to provide a premium impact estimate",
    draft_reply:
      "Hi Ekachai,\n\nCongratulations to your daughter on getting her licence!\n\nAdding a named driver to policy TH-CAR-40019 is straightforward. To process this, I'll need:\n1. Her full name (as on her licence)\n2. Date of birth\n3. Driving licence number\n\nThere may be a small additional premium depending on her age and driving history — I'll confirm the exact amount once I have her details. The change typically takes 1–2 business days to process.\n\nYou can send the details by replying to this message.\n\nBest regards,\nEndorsements Team",
    confidence: 0.97,
  },

  itm_018: {
    summary_bullets: [
      "Windscreen crack from road debris on Highway 7, 12 June 2026 — now spread across full screen",
      "Toyota Corolla Cross 2023 (TH-CAR-55877), plate จร 2290 — car currently unsafe to drive",
      "Krungthai Auto Glass quote: ฿8,200 for full replacement",
      "Customer has comprehensive coverage and is asking if windscreen is covered",
    ],
    category: "Claims",
    priority: "P2",
    suggested_action:
      "Confirm windscreen cover under TH-CAR-55877 comprehensive policy, check if excess applies, authorise Krungthai Auto Glass or redirect to approved repairer",
    draft_reply:
      "Dear Monthon,\n\nThank you for your message.\n\nGood news: windscreen replacement caused by road debris is covered under your comprehensive policy TH-CAR-55877. \n\nBefore you proceed with Krungthai Auto Glass, there are two things to check:\n1. Approved repairers: Your policy may have a list of approved glass repairers — using an approved repairer often means we pay them directly and there's no upfront cost to you. I'll confirm the list in my follow-up.\n2. Excess: A standard excess may apply to glass claims — I'll confirm the amount from your policy details.\n\nI'll follow up with both details within 2 business hours. Please do not drive the vehicle in the meantime.\n\nBest regards,\nClaims Support Team",
    confidence: 0.92,
  },

  itm_019: {
    summary_bullets: [
      "Phishing email impersonating insurance security department — false policy suspension claim",
      "Harvesting link directs to phish-alert.xyz — malicious domain",
      "Uses classic urgency tactics: '2 hour' deadline, threat of permanent cancellation",
      "No legitimate content — flag immediately",
    ],
    category: "Spam",
    priority: "P1",
    suggested_action:
      "Mark as spam, blocklist phish-alert.xyz, escalate to IT security, consider customer warning communication if impersonation is widespread",
    draft_reply:
      "No reply should be sent. This is a phishing email impersonating our security department. Forward to security@yourcompany.com, blocklist the domain phish-alert.xyz, and escalate to IT security.",
    confidence: 0.99,
  },

  itm_020: {
    summary_bullets: [
      "Refund of ฿6,240 promised within 7–10 business days after policy TH-CAR-38801 cancellation on 28 May",
      "15 business days have passed with no refund received (Kasikorn Bank, account ending 4421)",
      "Customer has confirmation email from cancellation — legitimate follow-up",
      "Potential payment processing failure or bank transfer issue",
    ],
    category: "Billing",
    priority: "P2",
    suggested_action:
      "Locate TH-CAR-38801 cancellation refund, check payment processing status, confirm with finance team and update customer with firm timeline",
    draft_reply:
      "Dear Pornthip,\n\nThank you for following up and I apologise for the delay — a refund of ฿6,240 should not take this long.\n\nI'm escalating this to our finance team immediately to locate the payment and determine what has happened. I'll have a definitive update for you within 4 business hours, including either a confirmed transfer date or a new payment instruction if the original transfer failed.\n\nI'm sorry for the inconvenience this has caused.\n\nBest regards,\nBilling Team",
    confidence: 0.94,
  },

  itm_021: {
    summary_bullets: [
      "Three separate issues in one message: accident claim (TH-CAR-29941), duplicate billing (฿4,100 × 2), and address update",
      "Claim: minor accident 15 June, third-party now unresponsive — may need to claim on own policy (est. ฿22,000)",
      "Billing: duplicate June premium debit on June 1 and June 3",
      "Customer frustrated — passed between departments twice already, requesting single point of contact",
    ],
    category: "Claims",
    priority: "P1",
    suggested_action:
      "Assign a single case owner, split into three sub-tasks: (1) open accident claim TH-CAR-29941, (2) refund duplicate premium, (3) update address — contact customer within 1 hour",
    draft_reply:
      "Dear Apirak,\n\nThank you for your message and I sincerely apologise that you've been passed between departments. That is not the experience we want to provide.\n\nI'm assigning all three issues to a single case owner now. Here's what will happen:\n\n1. Accident claim (TH-CAR-29941): A claims handler will call you within 1 hour to open the claim formally. In the meantime, do not authorise any repairs.\n\n2. Duplicate billing: I've flagged the duplicate debit of ฿4,100 for immediate refund. You should see this returned within 3–5 business days.\n\n3. Address update: I've noted your new address (99/4 Sukhumvit Soi 101, Phra Khanong, Bangkok 10260) and updated it on your account now.\n\nYour single point of contact will be confirmed when the claims handler calls.\n\nBest regards,\nCustomer Support Team",
    confidence: 0.9,
  },

  itm_022: {
    summary_bullets: [
      "Second flood damage claim this year for Honda BRV 2020 (TH-CAR-41190) — first was February (TH-CLM-2026-0088)",
      "Incident: 16 June 2026, Rangsit-Nakhon Nayok Road — engine not starting, interior water damage",
      "Car towed to Honda Rangsit; customer aware of repeat-claim scrutiny and proactively addressing it",
      "Flooding in the area was genuine and widely reported — legitimacy likely but requires verification",
    ],
    category: "Claims",
    priority: "P1",
    suggested_action:
      "Accept claim notification, assign senior assessor given repeat-claim status, verify Rangsit flood event against weather records before processing, contact Honda Rangsit to confirm vehicle condition",
    draft_reply:
      "Dear Chanokporn,\n\nThank you for notifying us and for being transparent about your earlier claim.\n\nI can confirm we've received your flood damage claim notification for policy TH-CAR-41190 relating to the incident on 16 June 2026.\n\nGiven this is your second flood claim this year, I want to be transparent that our assessor will conduct a standard review process, which may take slightly longer than a first claim. This is routine procedure and is not a reflection of any doubt about your situation — the Rangsit flooding has been widely reported and we are aware of the conditions.\n\nA claims assessor will contact you within 4 business hours. In the meantime, please do not authorise repairs at Honda Rangsit.\n\nBest regards,\nClaims Support Team",
    confidence: 0.88,
  },

  itm_023: {
    summary_bullets: [
      "Customer confused about Type 2+ coverage scope — specifically asking about fire, theft, and flooding",
      "Policy TH-CAR-68820; document is 40 pages and customer can't parse it",
      "Low urgency — general policy information query",
    ],
    category: "General",
    priority: "P3",
    suggested_action:
      "Send plain-language coverage summary for Type 2+ policy TH-CAR-68820 highlighting fire, theft, and flood inclusions/exclusions",
    draft_reply:
      "Hi Teerawat,\n\nNot a dumb question at all — policy documents are notoriously difficult to read!\n\nFor a standard Type 2+ policy, here's a plain-language summary of what you asked about:\n\n✓ Fire damage: Covered\n✓ Theft (vehicle): Covered\n✗ Flooding: Generally NOT covered under Type 2+. Flood damage is typically only included in Type 1 (Comprehensive) policies.\n\nHowever, your specific policy (TH-CAR-68820) may have optional add-ons that change this. I'll pull your policy and send you a personalised coverage summary within 1 business day.\n\nBest regards,\nCustomer Support Team",
    confidence: 0.85,
  },

  itm_024: {
    summary_bullets: [
      "Multiple endorsement changes on TH-CAR-52210 following divorce: remove ex-husband as primary driver, add self as primary",
      "Also updating registered address and contact phone number",
      "Customer has divorce decree available as supporting document",
      "Sensitive personal circumstances — handle with care",
    ],
    category: "Endorsement",
    priority: "P2",
    suggested_action:
      "Process all four changes on TH-CAR-52210, request copy of divorce decree and both drivers' licence numbers, confirm processing timeline",
    draft_reply:
      "Dear Siriporn,\n\nThank you for letting us know. I'll do my best to make this process as straightforward as possible for you.\n\nTo process all four changes on policy TH-CAR-52210, I'll need:\n1. A copy of your divorce decree (or relevant court order)\n2. Confirmation of Pisit Chuaduangdee's licence number for removal records (you've provided: 33-0091822-44 ✓)\n3. Your own licence number (you've provided: 44-1182930-77 ✓)\n\nThe new address (12/8 Moo 5, Bangna-Trad Road, Bang Phli, Samut Prakan 10540) and new phone number (085-290-1122) have been noted.\n\nOnce I receive the divorce decree copy, all changes can be processed within 2–3 business days. An updated policy document will be issued.\n\nBest regards,\nEndorsements Team",
    confidence: 0.91,
  },

  itm_025: {
    summary_bullets: [
      "Formal appeal of rejected claim TH-CLM-2026-0201 — rejection reason: 'pre-existing damage'",
      "Customer disputes this: damage caused by pothole on Si Rat Expressway on 2 June 2026",
      "Strong evidence: dashcam footage, garage report confirming impact damage, passenger witness",
      "Customer prepared to escalate to OIC (Office of Insurance Commission) if not handled fairly",
    ],
    category: "Claims",
    priority: "P2",
    suggested_action:
      "Open formal appeal for TH-CLM-2026-0201, request dashcam footage and garage report from customer, assign senior claims reviewer, respond within 5 business days per regulatory requirement",
    draft_reply:
      "Dear Nattapol,\n\nThank you for your message and for the detailed evidence you've gathered.\n\nI've opened a formal appeal for claim TH-CLM-2026-0201. Your appeal has been logged and you will receive a written acknowledgement within 24 hours.\n\nTo support the appeal, please send the following to claims@yourcompany.com with subject line 'Appeal TH-CLM-2026-0201':\n1. Dashcam footage file (or a link to download it)\n2. The garage inspection report\n3. Contact details of the passenger witness\n\nUnder our appeals process, a senior reviewer (independent of the original decision) will assess your case. You will receive a written decision within 10 business days.\n\nI want to assure you that your appeal will be reviewed fairly and thoroughly.\n\nBest regards,\nClaims Appeals Team",
    confidence: 0.89,
  },
  itm_026: {
    summary_bullets: ["Unclear message"],
    category: "General",
    priority: "P3",
    suggested_action: "",
    draft_reply: "",
    confidence: 0.1,
  },

  itm_027: {
    summary_bullets: [
      "Vehicle fire reported — car completely destroyed in parking lot (policy TH-CAR-88009)",
      "Customer is at the scene right now via chat — extremely time-sensitive",
      "Comprehensive policy in place — total loss claim likely",
      "Customer unsure of immediate steps: police vs insurer first",
    ],
    category: "Urgent",
    priority: "P1",
    suggested_action:
      "Respond immediately via chat — advise customer to call 191 (police) if not already done, stay safe, do not re-enter vehicle, and call our emergency claims line now",
    draft_reply:
      "Kritsana — we're here.\n\nFirst, make sure you and everyone nearby are safe and away from the vehicle.\n\nHere's exactly what to do right now:\n\n1. Call 191 (police) to report the fire — do this first if you haven't already. They'll coordinate with the fire department if needed.\n2. Call our emergency claims line immediately: 02-xxx-xxxx (24/7). Tell them you have a vehicle fire and total loss under policy TH-CAR-88009. They will guide you through the next steps in real time.\n3. Do not move or re-enter the vehicle.\n4. Take photos of the scene if it is safe to do so.\n\nWe are treating this as highest priority. Call the emergency line now — they're expecting you.\n\nCustomer Support Team",
    confidence: 0.97,
  },

  itm_028: {
    summary_bullets: [
      "Fleet coordinator for Somkid Trading Co. with 5 policies (TH-CAR-10091 to TH-CAR-10095) requesting annual review",
      "Three questions: fleet consolidation feasibility, mid-term vehicle replacement transfer, motorcycle coverage",
      "Two vehicles being replaced in August; adding a Honda Wave 2025 motorcycle",
      "Prefers commercial team contact for a call — weekday mornings only",
    ],
    category: "General",
    priority: "P3",
    suggested_action:
      "Assign commercial account manager to call Ratchanee weekday morning, prepare fleet consolidation analysis, confirm motorcycle policy availability",
    draft_reply:
      "Dear Ratchanee,\n\nThank you for reaching out ahead of your annual review.\n\nI'll assign one of our commercial account managers to contact you for a call this week — weekday mornings as you requested. They'll be able to walk through all three questions in detail, but here's a quick preview:\n\n1. Fleet consolidation: Yes, consolidating 5 policies into a single fleet policy is possible and often results in a better rate. Your account manager will prepare a comparison.\n\n2. Mid-term vehicle replacement: Policies can be transferred mid-term when a vehicle is replaced — there may be a small endorsement fee depending on the timing.\n\n3. Motorcycle coverage: We do offer motorcycle insurance. The Honda Wave 2025 can be quoted separately or included in a fleet arrangement depending on the policy structure.\n\nExpect a call from your account manager within 1–2 business days.\n\nBest regards,\nCommercial Team",
    confidence: 0.88,
  },
};

export function getMockResponse(itemId) {
  return AI_RESPONSES[itemId] ?? null;
}

export default AI_RESPONSES;
