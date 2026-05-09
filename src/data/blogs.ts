import rejection from "@/assets/blog-rejection.jpg";
import delay from "@/assets/blog-delay.jpg";
import motor from "@/assets/blog-motor.jpg";
import policy from "@/assets/blog-policy.jpg";
import shortsettle from "@/assets/blog-shortsettle.jpg";
import health from "@/assets/blog-health.jpg";
import ombudsman from "@/assets/blog-ombudsman.jpg";

export type BlogBlock = { type: "h2" | "p" | "ul" | "quote"; text?: string; items?: string[] };

export type BlogLocale = {
  title: string;
  category: string;
  preview: string;
  content: BlogBlock[];
};

export type Blog = {
  id: string;
  readTime: string;
  date: string;
  image: string;
  en: BlogLocale;
  hi: BlogLocale;
  // Back-compat top-level fields (English) so any legacy reads still work
  title: string;
  category: string;
  preview: string;
  content: BlogBlock[];
};

type RawBlog = Omit<Blog, "title" | "category" | "preview" | "content">;

const raw: RawBlog[] = [
  {
    id: "why-health-claims-rejected",
    readTime: "6 min",
    date: "Mar 18, 2025",
    image: rejection,
    en: {
      title: "Top 7 Reasons Health Insurance Claims Get Rejected in India",
      category: "Claim Rejection",
      preview: "From non-disclosure to waiting period traps — understand why insurers reject claims and how to prevent it before you file.",
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
    hi: {
      title: "भारत में हेल्थ इंश्योरेंस क्लेम रिजेक्ट होने के 7 प्रमुख कारण",
      category: "क्लेम अस्वीकरण",
      preview: "नॉन-डिस्क्लोज़र से लेकर वेटिंग पीरियड ट्रैप तक — समझें कि बीमाकर्ता क्लेम क्यों रिजेक्ट करते हैं और फाइल करने से पहले इसे कैसे रोकें।",
      content: [
        { type: "p", text: "हेल्थ इंश्योरेंस का रिजेक्शन लेटर परिवार के लिए सबसे तनावपूर्ण दस्तावेज़ों में से एक होता है — और आमतौर पर तभी आता है जब आप पहले से ही अस्पताल के बिलों से जूझ रहे होते हैं। अच्छी खबर यह है कि भारत में अधिकांश रिजेक्शन कुछ ही पूर्वानुमेय श्रेणियों में आते हैं, और कई को अपील पर पलटा जा सकता है।" },
        { type: "h2", text: "1. पूर्व-मौजूद रोगों का नॉन-डिस्क्लोज़र" },
        { type: "p", text: "IRDAI नियमों के तहत, पॉलिसी खरीदने से पहले 48 महीनों में आप जिन भी रोगों के बारे में जानते थे (या जिनका इलाज हुआ) उनकी घोषणा अनिवार्य है। डायबिटीज़, हाइपरटेंशन, थायरॉइड, अस्थमा — नियंत्रित होने पर भी — बताए जाने चाहिए। बीमाकर्ता पुराने अस्पताल के डिस्चार्ज सारांश निकालते हैं, और छूटी हुई जानकारी क्लेम अस्वीकरण का सबसे आसान आधार बन जाती है।" },
        { type: "h2", text: "2. वेटिंग पीरियड का उल्लंघन" },
        { type: "p", text: "अधिकांश पॉलिसियों में 30-दिन का प्रारंभिक वेटिंग पीरियड, 2-वर्षीय विशिष्ट रोग वेटिंग पीरियड (मोतियाबिंद, हर्निया, घुटने के प्रतिस्थापन आदि) और 2–4 वर्षीय पूर्व-मौजूद रोग वेटिंग पीरियड होता है। इस अवधि में एक दिन भी पहले फाइल हुआ क्लेम सीधे रिजेक्ट हो जाता है।" },
        { type: "h2", text: "3. नॉन-नेटवर्क या अपंजीकृत अस्पताल में इलाज" },
        { type: "p", text: "कैशलेस के लिए नेटवर्क अस्पताल चाहिए। रीइंबर्समेंट के लिए ऐसा अस्पताल चाहिए जो पॉलिसी की परिभाषा पर खरा उतरे — आमतौर पर 10–15 इनपेशेंट बेड, 24/7 योग्य नर्सिंग और पंजीकरण संख्या। डे-केयर सेंटर और छोटे क्लीनिक अक्सर इस कसौटी पर खरे नहीं उतरते।" },
        { type: "h2", text: "4. पॉलिसी की शर्तों में छुपी एक्सक्लूज़न" },
        { type: "ul", items: [
          "कॉस्मेटिक और बैरिएट्रिक प्रक्रियाएँ",
          "स्व-प्रेरित चोटें और नशीले पदार्थों का सेवन",
          "प्रयोगात्मक या अप्रमाणित उपचार",
          "OPD जब विशेष रूप से कवर न हो",
          "मैटरनिटी राइडर के बाहर मैटरनिटी",
        ]},
        { type: "h2", text: "5. देर से सूचना" },
        { type: "p", text: "नियोजित भर्ती की सूचना 48–72 घंटे पहले देनी होती है; आपात स्थिति में 24 घंटे के भीतर। देर से सूचना TPA को जाँच का आधार देती है और अक्सर रिजेक्शन हो जाता है — भले ही इलाज कवर हो।" },
        { type: "h2", text: "6. अधूरे या असंगत दस्तावेज़" },
        { type: "p", text: "डिस्चार्ज सारांश में निदान न होना, डॉक्टर के नोट्स बिना ICP, या इलाज से मेल न खाती जाँच रिपोर्ट — किसी भी असंगति को चिह्नित किया जाता है।" },
        { type: "h2", text: "7. Reasonable & customary क्लॉज़" },
        { type: "p", text: "बीमाकर्ता आपके शहर और पॉलिसी के लिए 'उचित' सीमा पर रूम रेंट, डॉक्टर फीस और कंज़्यूमेबल्स की कैपिंग करते हैं। रूम-रेंट सीमा पार करने पर पूरे बिल पर आनुपातिक कटौती लगती है।" },
        { type: "quote", text: "यदि आपका क्लेम रिजेक्ट हो जाता है, तो आपके पास आंतरिक अपील के लिए 30 दिन और बीमा लोकपाल तक पहुँचने के लिए 1 वर्ष तक का समय है। अच्छी तरह तैयार अधिकांश अपीलें सफल होती हैं।" },
      ],
    },
  },
  {
    id: "claim-delay-action-plan",
    readTime: "5 min",
    date: "Mar 12, 2025",
    image: delay,
    en: {
      title: "Your Claim Is Delayed Beyond 30 Days — Here's What to Do",
      category: "Claim Delays",
      preview: "IRDAI mandates claim settlement in 30 days. If your insurer is sitting on your file, you have legal remedies — and interest is owed.",
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
    hi: {
      title: "आपका क्लेम 30 दिन से ज़्यादा अटका है — अब क्या करें",
      category: "क्लेम में देरी",
      preview: "IRDAI 30 दिन में क्लेम निपटान अनिवार्य करता है। अगर बीमाकर्ता आपकी फ़ाइल पर बैठा है, तो आपके पास कानूनी उपाय हैं — और ब्याज भी देय है।",
      content: [
        { type: "p", text: "IRDAI के पॉलिसीधारक हित संरक्षण विनियम, 2017 स्पष्ट हैं: बीमाकर्ता को अंतिम आवश्यक दस्तावेज़ मिलने के 30 दिनों के भीतर क्लेम का निपटान या अस्वीकरण करना होगा। जाँच आवश्यक होने पर यह अवधि 45 दिन तक बढ़ती है — किसी भी अतिरिक्त देरी पर बैंक रेट + 2% ब्याज देय हो जाता है।" },
        { type: "h2", text: "चरण 1: अपनी समयरेखा तैयार करें" },
        { type: "p", text: "हर दिनांकित दस्तावेज़ इकट्ठा करें — अस्पताल भर्ती पत्र, सूचना पावती, दस्तावेज़ जमा पावती, TPA से हर ईमेल और WhatsApp। देरी तभी मायने रखती है जब आप उसे साबित कर सकें।" },
        { type: "h2", text: "चरण 2: लिखित शिकायत दर्ज करें" },
        { type: "p", text: "बीमाकर्ता के शिकायत निवारण अधिकारी (GRO) को ईमेल करें — हर बीमाकर्ता को इसे अपनी वेबसाइट पर प्रकाशित करना अनिवार्य है। 2017 नियमों के विनियमन 9 का हवाला दें और निपटान, देरी का लिखित कारण और विनियमानुसार ब्याज माँगें।" },
        { type: "h2", text: "चरण 3: IRDAI बीमा भरोसा पोर्टल का उपयोग करें" },
        { type: "p", text: "15 दिनों में समाधान न होने पर bimabharosa.irdai.gov.in पर पंजीकरण करें। बीमाकर्ता पोर्टल शिकायतों को बहुत गंभीरता से लेते हैं क्योंकि IRDAI टर्नअराउंड समय को नियामक मीट्रिक के रूप में ट्रैक करता है।" },
        { type: "h2", text: "चरण 4: बीमा लोकपाल" },
        { type: "p", text: "मुफ्त, ₹50 लाख तक बीमाकर्ता पर बाध्यकारी। लिखित शिकायत के 30 दिन बाद, या बीमाकर्ता द्वारा शिकायत अस्वीकार करने पर तुरंत दाखिल कर सकते हैं।" },
        { type: "h2", text: "आपको कितना ब्याज देय है?" },
        { type: "p", text: "यदि SBI का बैंक रेट 6.75% है, तो क्लेम राशि पर 8.75% प्रति वर्ष ब्याज देय है, जो 30-दिन की समय-सीमा बंद होने के अगले दिन से वास्तविक भुगतान तिथि तक गणना होगी। 90 दिन देरी से ₹4 लाख क्लेम पर लगभग ₹8,600 — और बीमाकर्ताओं को यह बिना माँगे चुकाना होगा।" },
      ],
    },
  },
  {
    id: "policy-buying-mistakes",
    readTime: "7 min",
    date: "Mar 05, 2025",
    image: policy,
    en: {
      title: "5 Policy-Buying Mistakes That Cost Indians Their Claims",
      category: "Policy Mistakes",
      preview: "The seeds of most claim rejections are planted on the day the policy is bought. Here's what goes wrong — and how to fix it.",
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
    hi: {
      title: "5 पॉलिसी खरीदते समय की गलतियाँ जो भारतीयों को उनके क्लेम से वंचित कर देती हैं",
      category: "पॉलिसी गलतियाँ",
      preview: "अधिकांश क्लेम अस्वीकरणों के बीज पॉलिसी खरीदने के दिन ही बो दिए जाते हैं। जानें क्या ग़लत होता है — और इसे कैसे ठीक करें।",
      content: [
        { type: "p", text: "हज़ारों अस्वीकृत क्लेम का ऑडिट करने के बाद, खरीदारी के समय की वही पाँच गलतियाँ बार-बार सामने आती हैं। कोई भी पॉलिसी से जुड़ी नहीं है — सब इस बात की हैं कि वह कैसे खरीदी गई।" },
        { type: "h2", text: "गलती 1: एजेंट पर प्रपोज़ल फॉर्म भरने का भरोसा" },
        { type: "p", text: "जब एजेंट प्रीमियम कम रखने के लिए हर हेल्थ प्रश्न पर 'नहीं' टिक करता है, तो आप एक धोखाधड़ी वाली घोषणा पर हस्ताक्षर कर रहे होते हैं। फॉर्म हमेशा खुद भरें, या कम से कम हस्ताक्षर से पहले हर उत्तर पढ़ें।" },
        { type: "h2", text: "गलती 2: केवल प्रीमियम के आधार पर खरीदना" },
        { type: "p", text: "₹2,000 सस्ती पॉलिसी जो रूम रेंट को बीमित राशि के 1% पर सीमित करती है, क्लेम के समय लाखों काट लेगी। केवल प्रीमियम नहीं — सब-लिमिट, को-पे और रोग-वार कैपिंग की तुलना करें।" },
        { type: "h2", text: "गलती 3: फ़्री-लुक पीरियड को नज़रअंदाज़ करना" },
        { type: "p", text: "आपके पास पॉलिसी पढ़ने और पूर्ण रिफंड के लिए रद्द करने हेतु 15 दिन (ऑनलाइन के लिए 30) हैं। इसका उपयोग करें। शब्दावली ही अनुबंध है — ब्रोशर नहीं।" },
        { type: "h2", text: "गलती 4: परिवार का कम बीमा" },
        { type: "p", text: "मेट्रो में चार लोगों के परिवार के लिए ₹3 लाख फ्लोटर अब वास्तविक नहीं है। कार्डियक सर्जरी, ऑन्कोलॉजी और ICU अक्सर ₹8–15 लाख पार करते हैं। ₹10 लाख बेस + सुपर टॉप-अप का लक्ष्य रखें।" },
        { type: "h2", text: "गलती 5: नॉमिनी या KYC अपडेट न करना" },
        { type: "p", text: "पते में अंतर और पुराने नॉमिनी क्लेम के समय हफ्तों की भागदौड़ बनाते हैं। हर बदलाव पर इन्हें अपडेट करें।" },
      ],
    },
  },
  {
    id: "motor-claim-process",
    readTime: "8 min",
    date: "Feb 26, 2025",
    image: motor,
    en: {
      title: "The Motor Insurance Claim Process: A Step-by-Step Guide",
      category: "Motor Claims",
      preview: "From accident scene to garage payout — exactly what to do, in what order, to keep your motor claim from being short-settled or denied.",
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
    hi: {
      title: "मोटर इंश्योरेंस क्लेम प्रक्रिया: चरण-दर-चरण मार्गदर्शिका",
      category: "मोटर क्लेम",
      preview: "दुर्घटना स्थल से गैरेज भुगतान तक — किस क्रम में क्या करें ताकि आपका मोटर क्लेम कम भुगतान या अस्वीकार न हो।",
      content: [
        { type: "p", text: "मोटर क्लेम अराजक लगते हैं क्योंकि वे सबसे बुरे क्षण में होते हैं। सबसे तेज़ भुगतान करने वाले बीमाकर्ता सबसे उदार नहीं — वे हैं जिनकी प्रक्रिया आपने सटीक रूप से पालन की।" },
        { type: "h2", text: "घटनास्थल पर" },
        { type: "ul", items: [
          "वाहन को ट्रैफिक से तभी हटाएँ जब सुरक्षित हो और आपने स्थिति की फोटो ले ली हो",
          "सभी क्षति, हर शामिल वाहन की रजिस्ट्रेशन प्लेट और आसपास की फोटो लें",
          "पॉलिसी और लाइसेंस विवरण साझा करें — मौके पर कभी नक़द निपटान न करें",
          "चोट, थर्ड-पार्टी क्षति या चोरी होने पर FIR के लिए 112 कॉल करें",
        ]},
        { type: "h2", text: "24 घंटे के भीतर" },
        { type: "p", text: "अपने बीमाकर्ता को ऐप या टोल-फ्री नंबर से सूचित करें। आपको क्लेम नंबर मिलेगा — इसके बाद हर दस्तावेज़ पर लिखें। कैशलेस के लिए नेटवर्क गैरेज चुनें; रीइंबर्समेंट के लिए कोई भी गैरेज ठीक है पर आप पहले भुगतान करते हैं।" },
        { type: "h2", text: "सर्वेयर निरीक्षण" },
        { type: "p", text: "₹50,000 से ऊपर के क्लेम पर IRDAI लाइसेंस्ड सर्वेयर अनिवार्य करता है। वे 48 घंटे में निरीक्षण और 15 दिन में रिपोर्ट देते हैं। आप कॉपी के हक़दार हैं — मांगें।" },
        { type: "h2", text: "कम भुगतान क्यों होता है" },
        { type: "p", text: "प्लास्टिक और रबर पार्ट्स पर डेप्रिसिएशन (50%), मेटल पार्ट्स (उम्र-आधारित स्लैब), और 'निल-डेप्रिसिएशन' राइडर जो आपने कभी नहीं ख़रीदा। टोटल लॉस पर सैल्वेज वैल्यू। अनिवार्य कटौती। सर्वेयर रिपोर्ट और मूल पार्ट्स इनवॉइस के साथ हर चीज़ पर बातचीत हो सकती है।" },
        { type: "h2", text: "यदि क्लेम अस्वीकार हो" },
        { type: "p", text: "सामान्य आधार: नशे में ड्राइविंग, समाप्त लाइसेंस, निजी पॉलिसी पर वाणिज्यिक उपयोग, अघोषित संशोधन। यदि आप सबूतों से आधार का खंडन कर सकते हैं, तो रिजेक्शन आमतौर पर पलटा जा सकता है।" },
      ],
    },
  },
  {
    id: "short-settlement-fight-back",
    readTime: "6 min",
    date: "Feb 18, 2025",
    image: shortsettle,
    en: {
      title: "Short-Settled Claim? How to Get the Balance You're Owed",
      category: "Short Settlement",
      preview: "Insurers paid you ₹1.2 lakh against a ₹3 lakh claim. Before you accept it, understand what's deductible — and what isn't.",
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
    hi: {
      title: "क्लेम कम भुगतान? बकाया राशि कैसे प्राप्त करें",
      category: "कम भुगतान",
      preview: "बीमाकर्ता ने ₹3 लाख क्लेम के विरुद्ध ₹1.2 लाख दिए। स्वीकार करने से पहले समझें क्या कटौती योग्य है — और क्या नहीं।",
      content: [
        { type: "p", text: "कम भुगतान बीमाकर्ताओं द्वारा अपने लॉस रेशियो की रक्षा का सबसे शांत तरीका है। चेक आता है, राहत असली है, और अधिकांश पॉलिसीधारक कटौती शीट कभी नहीं जाँचते। उन्हें जाँचनी चाहिए।" },
        { type: "h2", text: "निपटान सारांश पंक्ति-दर-पंक्ति पढ़ें" },
        { type: "p", text: "हर वैध बीमाकर्ता कटौती शीट संलग्न करता है — कभी-कभी 'क्लेम सेटलमेंट सलाह' कहलाती है। हर कटौती को विशिष्ट पॉलिसी क्लॉज़ का हवाला देना चाहिए। यदि कटौती 'पॉलिसी के अनुसार' बिना क्लॉज़ नंबर के सूचीबद्ध है, तो क्लॉज़ माँगें।" },
        { type: "h2", text: "रूम-रेंट जाल" },
        { type: "p", text: "यदि आपकी पॉलिसी रूम रेंट ₹5,000 पर सीमित है और आपने ₹8,000 का कमरा लिया, तो बीमाकर्ता हर सम्बंधित शुल्क पर आनुपातिक कटौती (62.5%) लगाता है — सर्जन फीस, OT शुल्क, ICU, जाँचें। यह एक क्लॉज़ ₹50,000 से ऊपर अधिकांश कम भुगतानों के लिए ज़िम्मेदार है।" },
        { type: "h2", text: "नॉन-मेडिकल 'कंज़्यूमेबल्स'" },
        { type: "p", text: "ग्लव्स, सिरिंज, मास्क, सैनिटाइज़र, भोजन। IRDAI नॉन-पेएबल आइटम्स की मानक सूची प्रकाशित करता है — उस सूची के बाहर आपके बिल से कटी कोई भी चीज़ चुनौती योग्य है।" },
        { type: "h2", text: "Reasonable & customary शुल्क" },
        { type: "p", text: "बीमाकर्ता शहर और अस्पताल टियर के अनुसार आंतरिक रेट कार्ड रखते हैं। यदि आपका बिल उनके कार्ड से अधिक है, वे केवल अपना रेट देते हैं। समकक्ष अस्पतालों के तुलनीय इनवॉइस से जवाब दें।" },
        { type: "h2", text: "प्रतिनिधित्व दाखिल करना" },
        { type: "p", text: "विवाद करने का इरादा हो तो चेक भुनाएँ नहीं — भुनाना 'पूर्ण और अंतिम' स्वीकृति माना जाता है। 15 दिन के भीतर लिखित प्रतिनिधित्व भेजें, मूल बिल संलग्न करें, और हर विवादित कटौती का संदर्भ दें।" },
      ],
    },
  },
  {
    id: "health-insurance-tips-2025",
    readTime: "9 min",
    date: "Feb 09, 2025",
    image: health,
    en: {
      title: "12 Health Insurance Tips Every Indian Family Should Know in 2025",
      category: "Health Insurance",
      preview: "Practical, claim-friendly habits that protect your family before an emergency — and make a huge difference if one comes.",
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
    hi: {
      title: "2025 में हर भारतीय परिवार के लिए 12 हेल्थ इंश्योरेंस टिप्स",
      category: "हेल्थ इंश्योरेंस",
      preview: "व्यावहारिक, क्लेम-अनुकूल आदतें जो आपात स्थिति से पहले परिवार की रक्षा करती हैं — और यदि आए तो बड़ा फ़र्क डालती हैं।",
      content: [
        { type: "p", text: "एक दशक तक परिवारों को अस्पताल के बिलों से निपटने में मदद करने के बाद, कुछ आदतें चुपचाप परिवर्तनकारी साबित होती हैं। कोई नाटकीय नहीं — बस अनुशासित।" },
        { type: "h2", text: "1. कम उम्र में ख़रीदें, प्रतीकात्मक ही सही" },
        { type: "p", text: "28 में ली गई ₹5 लाख पॉलिसी के वेटिंग पीरियड ज़रूरत से पहले ख़त्म हो जाते हैं। 48 में वही पॉलिसी तब घड़ी शुरू करती है जब आप इंतज़ार सबसे कम बर्दाश्त कर सकते हैं।" },
        { type: "h2", text: "2. बेस + सुपर टॉप-अप का ढाँचा अपनाएँ" },
        { type: "p", text: "₹5L बेस + ₹20L सुपर टॉप-अप ₹15L बेस से सस्ता पड़ता है और आपको ₹25L कवर देता है। सुपर टॉप-अप एक वर्ष में डिडक्टिबल पार होने पर लागू होते हैं।" },
        { type: "h2", text: "3. सब कुछ बताएँ — शर्मनाक बातें भी" },
        { type: "p", text: "अतीत का मानसिक स्वास्थ्य इलाज, गर्भपात, फर्टिलिटी प्रक्रियाएँ। डिस्क्लोज़र क्लेम अस्वीकरण का आधार नहीं बन सकता; नॉन-डिस्क्लोज़र बन सकता है।" },
        { type: "h2", text: "4. डिस्चार्ज सारांश हमेशा संभालकर रखें" },
        { type: "p", text: "यह वह एकमात्र दस्तावेज़ है जो उसी स्थिति से जुड़े हर भविष्य के क्लेम का निर्णय करता है।" },
        { type: "h2", text: "5. अपने TPA को जानें" },
        { type: "p", text: "नेटवर्क अस्पताल, प्री-ऑथ टर्नअराउंड और शिकायत संपर्क। ज़रूरत से पहले अपने फ़ोन में सहेजें।" },
        { type: "h2", text: "6–12: अनुशासन सूची" },
        { type: "ul", items: [
          "समय पर रिन्यू करें — एक दिन की चूक वेटिंग पीरियड रीसेट कर देती है",
          "रिप्लेस न करें, पोर्ट करें — पोर्टिंग वेटिंग पीरियड संरक्षित करती है",
          "विवाह या जन्म के 30 दिनों के भीतर नए सदस्य जोड़ें",
          "KYC और नॉमिनी अद्यतन रखें",
          "जहाँ संभव हो कैशलेस का प्रयोग करें — बीमाकर्ता सीधे भुगतान करता है",
          "मुफ्त मिले तो पॉलिसी-पूर्व स्वास्थ्य जाँच कराएँ",
          "हर वर्ष रिन्यूअल एंडोर्समेंट पढ़ें — सब-लिमिट चुपचाप बदलते हैं",
        ]},
      ],
    },
  },
  {
    id: "approach-ombudsman",
    readTime: "5 min",
    date: "Jan 30, 2025",
    image: ombudsman,
    en: {
      title: "How to Approach the Insurance Ombudsman in India (Free Legal Remedy)",
      category: "Claim Rejection",
      preview: "The Insurance Ombudsman can award up to ₹50 lakh, costs nothing to approach, and binds the insurer. Here's how to use it.",
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
    hi: {
      title: "भारत में बीमा लोकपाल से कैसे संपर्क करें (मुफ्त कानूनी उपाय)",
      category: "क्लेम अस्वीकरण",
      preview: "बीमा लोकपाल ₹50 लाख तक का अवॉर्ड दे सकता है, संपर्क करने में कोई शुल्क नहीं, और बीमाकर्ता पर बाध्यकारी है। उपयोग कैसे करें — जानें।",
      content: [
        { type: "p", text: "भारतीय बीमा में बीमा लोकपाल सबसे कम इस्तेमाल किया जाने वाला उपभोक्ता उपाय है। यह मुफ्त है, आश्चर्यजनक रूप से तेज़ (अधिकांश केस 90 दिनों में बंद), और स्वीकार करने पर अवॉर्ड बीमाकर्ता पर बाध्यकारी है।" },
        { type: "h2", text: "कब संपर्क कर सकते हैं" },
        { type: "ul", items: [
          "बीमाकर्ता ने आपकी लिखित शिकायत अस्वीकार की हो, या",
          "बीमाकर्ता ने 30 दिनों में जवाब न दिया हो, या",
          "आप बीमाकर्ता के जवाब से संतुष्ट नहीं हैं",
          "बीमाकर्ता के अंतिम जवाब के 1 वर्ष के भीतर",
          "क्लेम राशि ₹50 लाख तक" ,
        ]},
        { type: "h2", text: "कैसे दाखिल करें" },
        { type: "p", text: "Form P-II का उपयोग करें (cioins.co.in से डाउनलोड)। उस लोकपाल कार्यालय में दाखिल करें जिसका अधिकार क्षेत्र आपकी पॉलिसी जारी करने वाली शाखा पर हो। डाक, ईमेल या पोर्टल से दाखिल करें।" },
        { type: "h2", text: "क्या संलग्न करें" },
        { type: "p", text: "पॉलिसी कॉपी, बीमाकर्ता को आपकी लिखित शिकायत, बीमाकर्ता का जवाब (या जवाब न मिलने का प्रमाण), और सभी क्लेम दस्तावेज़। मूल रखें — प्रमाणित फोटोकॉपी जमा करें।" },
        { type: "h2", text: "आगे क्या होता है" },
        { type: "p", text: "लोकपाल पहले मध्यस्थता का प्रयास करता है — लगभग 60% केस यहीं तय होते हैं। मध्यस्थता विफल होने पर 3 महीने के भीतर लिखित अवॉर्ड आता है। बीमाकर्ता को 30 दिनों में पालन करना होगा; आप अस्वीकार करके अदालत जा सकते हैं।" },
        { type: "quote", text: "लोकपाल शिकायत में रजिस्टर्ड पोस्ट स्टाम्प के अलावा कोई ख़र्च नहीं — फिर भी यह भारत के किसी भी अन्य चैनल से ज़्यादा अस्वीकृत क्लेम वसूल करती है।" },
      ],
    },
  },
  {
    id: "cashless-everywhere-2024",
    readTime: "4 min",
    date: "Jan 22, 2025",
    image: delay,
    en: {
      title: "Cashless Everywhere: What the New IRDAI Rule Means for You",
      category: "Health Insurance",
      preview: "From 2024, you can claim cashless treatment at any hospital — even outside the insurer's network. Here's the fine print.",
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
    hi: {
      title: "Cashless Everywhere: नया IRDAI नियम आपके लिए क्या मायने रखता है",
      category: "हेल्थ इंश्योरेंस",
      preview: "2024 से आप किसी भी अस्पताल में कैशलेस उपचार का दावा कर सकते हैं — बीमाकर्ता के नेटवर्क के बाहर भी। पूरी जानकारी पढ़ें।",
      content: [
        { type: "p", text: "जनवरी 2024 में, जनरल इंश्योरेंस काउंसिल ने 'Cashless Everywhere' लॉन्च किया — सभी सदस्य हेल्थ बीमाकर्ताओं को नेटवर्क हो या न हो, किसी भी अस्पताल में कैशलेस अनुरोधों का सम्मान करने के लिए प्रतिबद्ध किया। यह एक महत्वपूर्ण बदलाव है, पर ज़मीनी हक़ीक़त में बारीकियाँ हैं।" },
        { type: "h2", text: "क्या बदला" },
        { type: "p", text: "पहले, कैशलेस केवल नेटवर्क अस्पतालों में था; नॉन-नेटवर्क का मतलब था पे-एंड-क्लेम। अब, आप किसी भी अस्पताल में कैशलेस अनुरोध कर सकते हैं बशर्ते आप नियोजित भर्ती से 48 घंटे पहले या आपात स्थिति के 48 घंटे के भीतर बीमाकर्ता को सूचित करें।" },
        { type: "h2", text: "यहाँ अब भी बाधा है" },
        { type: "p", text: "TPA साझेदारी के बिना छोटे अस्पताल भुगतान तक डिस्चार्ज से इनकार कर सकते हैं — वे बीमाकर्ता के भुगतान का इंतज़ार करने को अनुबंधित रूप से बाध्य नहीं हैं। भर्ती से पहले हमेशा अस्पताल के बिलिंग डेस्क से पुष्टि करें।" },
        { type: "h2", text: "सर्वोत्तम अभ्यास" },
        { type: "p", text: "Cashless Everywhere के बावजूद, नेटवर्क अस्पताल अधिक सहज रहते हैं। नियम का उपयोग आपात स्थिति और बाहर के इलाज के लिए करें; नियोजित प्रक्रियाओं के लिए डिफ़ॉल्ट नेटवर्क रखें।" },
      ],
    },
  },
];

export const blogs: Blog[] = raw.map((b) => ({
  ...b,
  title: b.en.title,
  category: b.en.category,
  preview: b.en.preview,
  content: b.en.content,
}));

export const getBlog = (id: string) => blogs.find((b) => b.id === id);
