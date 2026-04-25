import rejection from "@/assets/blog-rejection.jpg";
import delay from "@/assets/blog-delay.jpg";
import motor from "@/assets/blog-motor.jpg";
import policy from "@/assets/blog-policy.jpg";
import shortsettle from "@/assets/blog-shortsettle.jpg";
import health from "@/assets/blog-health.jpg";
import ombudsman from "@/assets/blog-ombudsman.jpg";

export type Blog = {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  preview: string;
  image: string;
  content: { type: "h2" | "p" | "ul" | "quote"; text?: string; items?: string[] }[];
};

export const blogs: Blog[] = [
  {
    id: "why-health-claims-rejected",
    title: "Top 7 Reasons Health Insurance Claims Get Rejected in India",
    category: "Claim Rejection",
    readTime: "6 min",
    date: "Mar 18, 2025",
    preview:
      "From non-disclosure to waiting period traps — understand why insurers reject claims and how to prevent it before you file.",
    image: rejection,
    content: [
      { type: "p", text: "A rejection letter from your health insurer is one of the most stressful documents a family can receive — usually arriving exactly when you're already dealing with hospital bills. The good news: most rejections in India fall into a small set of predictable buckets, and many can be reversed on appeal." },
      { type: "h2", text: "1. Non-disclosure of pre-existing conditions" },
      { type: "p", text: "Under IRDAI rules, any condition you knew about (or were treated for) in the 48 months before buying the policy must be declared. Diabetes, hypertension, thyroid, asthma — even if controlled — must be mentioned. Insurers routinely pull discharge summaries from past hospitalisations, and a missing disclosure becomes their cleanest ground to deny the claim." },
      { type: "h2", text: "2. Waiting period violations" },
      { type: "p", text: "Most policies have a 30-day initial waiting period, a 2-year specific disease waiting period (for cataract, hernia, knee replacement, etc.) and a 2–4 year pre-existing disease waiting period. A claim filed even one day inside the window is rejected outright." },
      { type: "h2", text: "3. Treatment in a non-network or unregistered hospital" },
      { type: "p", text: "Cashless requires a network hospital. Reimbursement requires a hospital that meets the policy's definition — usually 10–15 inpatient beds, qualified nursing 24/7, and a registration number. Day-care centres and small clinics often fail this test." },
      { type: "h2", text: "4. Exclusions buried in the policy wording" },
      { type: "ul", items: [
        "Cosmetic and bariatric procedures",
        "Self-inflicted injuries and substance abuse",
        "Experimental or unproven treatments",
        "OPD when not specifically covered",
        "Maternity outside the maternity rider",
      ]},
      { type: "h2", text: "5. Late intimation" },
      { type: "p", text: "Planned admissions must be intimated 48–72 hours in advance; emergencies within 24 hours. Late intimation gives the TPA grounds to investigate and often reject — even when the treatment itself is covered." },
      { type: "h2", text: "6. Incomplete or inconsistent documentation" },
      { type: "p", text: "Discharge summary missing the diagnosis, ICP without doctor's notes, or investigation reports that don't match the line of treatment — any inconsistency is flagged." },
      { type: "h2", text: "7. Reasonable & customary clause" },
      { type: "p", text: "Insurers cap room rent, doctor fees and consumables at what's 'reasonable' for your city and policy. Crossing the room-rent limit triggers proportionate deductions on the entire bill." },
      { type: "quote", text: "If your claim is rejected, you have 30 days to appeal internally and up to 1 year to approach the Insurance Ombudsman. Most well-prepared appeals succeed." },
    ],
  },
  {
    id: "claim-delay-action-plan",
    title: "Your Claim Is Delayed Beyond 30 Days — Here's What to Do",
    category: "Claim Delays",
    readTime: "5 min",
    date: "Mar 12, 2025",
    preview:
      "IRDAI mandates claim settlement in 30 days. If your insurer is sitting on your file, you have legal remedies — and interest is owed.",
    image: delay,
    content: [
      { type: "p", text: "IRDAI's Protection of Policyholders' Interest Regulations, 2017 are clear: an insurer must settle or reject a claim within 30 days of receiving the last necessary document. If an investigation is required, that window extends to 45 days — but interest at bank rate + 2% becomes payable for any further delay." },
      { type: "h2", text: "Step 1: Build your timeline" },
      { type: "p", text: "Pull together every document with a date stamp — hospital admission letter, intimation acknowledgement, document submission acknowledgements, every email and WhatsApp from the TPA. Delays only matter when you can prove them." },
      { type: "h2", text: "Step 2: File a written grievance" },
      { type: "p", text: "Email the insurer's Grievance Redressal Officer (GRO) — every insurer must publish this on their website. Quote Regulation 9 of the 2017 rules and ask for: settlement, written reasons for delay, and interest as per regulation." },
      { type: "h2", text: "Step 3: Use the IRDAI Bima Bharosa portal" },
      { type: "p", text: "If there's no resolution in 15 days, register at bimabharosa.irdai.gov.in. Insurers take portal complaints very seriously because IRDAI tracks turnaround time as a regulatory metric." },
      { type: "h2", text: "Step 4: Insurance Ombudsman" },
      { type: "p", text: "Free, binding on the insurer up to ₹50 lakh. You can file once 30 days have passed since your written complaint, or immediately if the insurer rejects your grievance." },
      { type: "h2", text: "How much interest are you owed?" },
      { type: "p", text: "If SBI's bank rate is 6.75%, interest payable is 8.75% per annum on the claim amount, calculated from the day after the 30-day window closed until the actual payout date. On a ₹4 lakh claim delayed 90 days, that's roughly ₹8,600 — and insurers must pay it without you asking." },
    ],
  },
  {
    id: "policy-buying-mistakes",
    title: "5 Policy-Buying Mistakes That Cost Indians Their Claims",
    category: "Policy Mistakes",
    readTime: "7 min",
    date: "Mar 05, 2025",
    preview:
      "The seeds of most claim rejections are planted on the day the policy is bought. Here's what goes wrong — and how to fix it.",
    image: policy,
    content: [
      { type: "p", text: "After auditing thousands of denied claims, the same five buying-stage mistakes show up again and again. None of them are about the policy itself — they're about how it was bought." },
      { type: "h2", text: "Mistake 1: Trusting the agent to fill the proposal form" },
      { type: "p", text: "When the agent ticks 'No' on every health question to keep the premium low, you've signed a fraudulent declaration. Always fill the form yourself, or at minimum read every answer before signing." },
      { type: "h2", text: "Mistake 2: Buying based on premium alone" },
      { type: "p", text: "A policy that's ₹2,000 cheaper but caps room rent at 1% of sum insured will deduct lakhs at claim time. Compare sub-limits, co-pay, and disease-wise capping — not just the premium." },
      { type: "h2", text: "Mistake 3: Ignoring the free-look period" },
      { type: "p", text: "You have 15 days (30 for online) to read the policy wording and cancel for a full refund. Use it. The wording is the contract — the brochure isn't." },
      { type: "h2", text: "Mistake 4: Under-insuring the family" },
      { type: "p", text: "A ₹3 lakh floater for a family of four in a metro is no longer realistic. Cardiac surgery, oncology and ICU stays routinely cross ₹8–15 lakh. Aim for ₹10 lakh base + a super top-up." },
      { type: "h2", text: "Mistake 5: Not updating the nominee or KYC" },
      { type: "p", text: "Address mismatches and outdated nominees create weeks of back-and-forth at claim time. Update them every time something changes." },
    ],
  },
  {
    id: "motor-claim-process",
    title: "The Motor Insurance Claim Process: A Step-by-Step Guide",
    category: "Motor Claims",
    readTime: "8 min",
    date: "Feb 26, 2025",
    preview:
      "From accident scene to garage payout — exactly what to do, in what order, to keep your motor claim from being short-settled or denied.",
    image: motor,
    content: [
      { type: "p", text: "Motor claims feel chaotic because they happen at the worst possible moment. The insurers who pay fastest are not the most generous — they're the ones whose process you followed precisely." },
      { type: "h2", text: "At the scene" },
      { type: "ul", items: [
        "Move the vehicle out of traffic only if it's safe and you've photographed the position",
        "Photograph all damage, the registration plates of every vehicle involved, and the surroundings",
        "Exchange policy and licence details — never cash settlements at the scene",
        "Call 112 for an FIR if there's injury, third-party damage, or theft",
      ]},
      { type: "h2", text: "Within 24 hours" },
      { type: "p", text: "Intimate your insurer through their app or toll-free number. You'll get a claim number — write it on every document from this point on. For cashless repair, choose a network garage; for reimbursement, any garage works but you pay first." },
      { type: "h2", text: "Surveyor inspection" },
      { type: "p", text: "For claims above ₹50,000, IRDAI mandates a licensed surveyor. They'll inspect within 48 hours and submit a report in 15 days. You're entitled to a copy — ask for it." },
      { type: "h2", text: "Why short-settlement happens" },
      { type: "p", text: "Depreciation on plastic and rubber parts (50%), metal parts (age-based slabs), and a 'nil-depreciation' rider you never bought. Salvage value on totalled vehicles. Compulsory deductibles. Each is negotiable when you have the surveyor's report and original parts invoices." },
      { type: "h2", text: "If the claim is denied" },
      { type: "p", text: "Common grounds: drunk driving, expired licence, vehicle used commercially on a private policy, modifications not declared. If you can refute the ground with evidence, the rejection is usually reversible." },
    ],
  },
  {
    id: "short-settlement-fight-back",
    title: "Short-Settled Claim? How to Get the Balance You're Owed",
    category: "Short Settlement",
    readTime: "6 min",
    date: "Feb 18, 2025",
    preview:
      "Insurers paid you ₹1.2 lakh against a ₹3 lakh claim. Before you accept it, understand what's deductible — and what isn't.",
    image: shortsettle,
    content: [
      { type: "p", text: "Short-settlement is the quietest way insurers protect their loss ratios. The cheque arrives, the relief is real, and most policyholders never check the deduction sheet. They should." },
      { type: "h2", text: "Read the settlement summary line by line" },
      { type: "p", text: "Every legitimate insurer attaches a deduction sheet — sometimes called the 'Claim Settlement Advice'. Each deduction must cite a specific policy clause. If a deduction is listed as 'as per policy' with no clause number, demand the clause." },
      { type: "h2", text: "The room-rent trap" },
      { type: "p", text: "If your policy caps room rent at ₹5,000 and you took a ₹8,000 room, the insurer applies proportionate deduction (62.5%) on every associated charge — surgeon's fee, OT charges, ICU, investigations. This single clause is responsible for the majority of short-settlements above ₹50,000." },
      { type: "h2", text: "Non-medical 'consumables'" },
      { type: "p", text: "Gloves, syringes, masks, sanitiser, food. IRDAI publishes a standard list of non-payable items — anything outside that list deducted from your bill is challengeable." },
      { type: "h2", text: "Reasonable & customary charges" },
      { type: "p", text: "Insurers maintain internal rate cards by city and hospital tier. If your bill is above their card, they pay only their rate. Counter with comparable invoices from peer hospitals." },
      { type: "h2", text: "Filing a representation" },
      { type: "p", text: "Don't encash the cheque if you intend to dispute — encashment is treated as 'full and final' acceptance. Send a written representation within 15 days, attach the original bills, and reference each disputed deduction." },
    ],
  },
  {
    id: "health-insurance-tips-2025",
    title: "12 Health Insurance Tips Every Indian Family Should Know in 2025",
    category: "Health Insurance",
    readTime: "9 min",
    date: "Feb 09, 2025",
    preview:
      "Practical, claim-friendly habits that protect your family before an emergency — and make a huge difference if one comes.",
    image: health,
    content: [
      { type: "p", text: "After a decade of helping families navigate hospital bills, certain habits stand out as quietly transformative. None of them are dramatic — they're just disciplined." },
      { type: "h2", text: "1. Buy young, even if symbolic" },
      { type: "p", text: "A ₹5 lakh policy at 28 has waiting periods that finish before you'll likely need them. The same policy at 48 starts the clock when you can least afford to wait." },
      { type: "h2", text: "2. Use a base + super top-up architecture" },
      { type: "p", text: "₹5L base + ₹20L super top-up costs less than ₹15L base, and gives you ₹25L of cover. Super top-ups kick in after a deductible is crossed in a single year." },
      { type: "h2", text: "3. Disclose everything — even the embarrassing things" },
      { type: "p", text: "Past mental health treatment, terminations, fertility procedures. Disclosure cannot be used to deny a claim; non-disclosure can." },
      { type: "h2", text: "4. Save your discharge summary forever" },
      { type: "p", text: "It's the single document that decides every future claim involving the same condition." },
      { type: "h2", text: "5. Know your TPA" },
      { type: "p", text: "Network hospitals, pre-auth turnaround, and grievance contact. Save them in your phone before you need them." },
      { type: "h2", text: "6–12: The discipline list" },
      { type: "ul", items: [
        "Renew on time — a single day's lapse resets waiting periods",
        "Port, don't replace — porting preserves waiting periods",
        "Add new family members within 30 days of a marriage or birth",
        "Keep KYC and nominee current",
        "Use cashless wherever possible — the insurer pays directly",
        "Get a pre-policy health check-up if offered for free",
        "Read the renewal endorsement every year — sub-limits change quietly",
      ]},
    ],
  },
  {
    id: "approach-ombudsman",
    title: "How to Approach the Insurance Ombudsman in India (Free Legal Remedy)",
    category: "Claim Rejection",
    readTime: "5 min",
    date: "Jan 30, 2025",
    preview:
      "The Insurance Ombudsman can award up to ₹50 lakh, costs nothing to approach, and binds the insurer. Here's how to use it.",
    image: ombudsman,
    content: [
      { type: "p", text: "The Insurance Ombudsman is the most under-used consumer remedy in Indian insurance. It's free, surprisingly fast (most cases close in 90 days), and the award is binding on the insurer if you accept it." },
      { type: "h2", text: "When you can approach" },
      { type: "ul", items: [
        "Insurer has rejected your written complaint, OR",
        "Insurer hasn't replied within 30 days of your complaint, OR",
        "You're not satisfied with the insurer's response",
        "Within 1 year of the insurer's final reply",
        "Claim amount up to ₹50 lakh",
      ]},
      { type: "h2", text: "How to file" },
      { type: "p", text: "Use Form P-II (downloadable from cioins.co.in). File at the Ombudsman office that has jurisdiction over the branch where your policy was issued. Submit by post, by email, or online via the portal." },
      { type: "h2", text: "What to attach" },
      { type: "p", text: "Policy copy, your written complaint to the insurer, the insurer's reply (or proof of no reply), and all claim documents. Keep originals — submit certified photocopies." },
      { type: "h2", text: "What happens next" },
      { type: "p", text: "The Ombudsman first attempts mediation — about 60% of cases settle here. If mediation fails, a written award follows within 3 months. The insurer must comply within 30 days; you're free to reject and approach a court instead." },
      { type: "quote", text: "An Ombudsman complaint costs nothing but a registered post stamp — yet it recovers more denied claims than any other channel in India." },
    ],
  },
  {
    id: "cashless-everywhere-2024",
    title: "Cashless Everywhere: What the New IRDAI Rule Means for You",
    category: "Health Insurance",
    readTime: "4 min",
    date: "Jan 22, 2025",
    preview:
      "From 2024, you can claim cashless treatment at any hospital — even outside the insurer's network. Here's the fine print.",
    image: delay,
    content: [
      { type: "p", text: "In January 2024, the General Insurance Council launched 'Cashless Everywhere' — committing all member health insurers to honour cashless requests at any hospital, network or not. It's a meaningful shift, but the operational reality has nuances." },
      { type: "h2", text: "What changed" },
      { type: "p", text: "Earlier, cashless was only at network hospitals; non-network meant pay-and-claim. Now, you can request cashless at any hospital provided you intimate the insurer 48 hours before a planned admission, or within 48 hours of an emergency." },
      { type: "h2", text: "Where it still breaks down" },
      { type: "p", text: "Smaller hospitals without TPA tie-ups may refuse to discharge until you pay — they're not contractually bound to wait for the insurer's payment. Always confirm with the hospital's billing desk before admission." },
      { type: "h2", text: "Best practice" },
      { type: "p", text: "Even with Cashless Everywhere, network hospitals remain smoother. Use the rule for emergencies and out-of-station treatment; default to network for planned procedures." },
    ],
  },
];

export const getBlog = (id: string) => blogs.find((b) => b.id === id);
