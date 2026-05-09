export type Lang = "en" | "hi";

// Blog UI keys are added at bottom of translations object below.


export const translations = {
  // Navbar
  nav_home: { en: "Home", hi: "होम" },
  nav_about: { en: "About", hi: "हमारे बारे में" },
  nav_services: { en: "Services", hi: "सेवाएं" },
  nav_blog: { en: "Knowledge Hub", hi: "नॉलेज हब" },
  nav_contact: { en: "Contact", hi: "संपर्क" },
  nav_cta: { en: "Free Claim Review", hi: "मुफ्त क्लेम समीक्षा" },

  // Hero (Index)
  hero_title_1: { en: "Your insurer said no.", hi: "आपके बीमाकर्ता ने मना कर दिया।" },
  hero_title_2: { en: "We help you say yes.", hi: "हम आपको ‘हाँ’ दिलाने में मदद करते हैं।" },
  hero_sub: {
    en: "ClaimsMitra fights rejected, delayed and short-settled health and motor insurance claims — with documented appeals, regulator escalations and a recovery you can verify.",
    hi: "ClaimsMitra अस्वीकृत, विलंबित और कम भुगतान वाले हेल्थ और मोटर इंश्योरेंस क्लेम के लिए लड़ता है — दस्तावेज़ी अपील, रेगुलेटर एस्केलेशन और एक ऐसी रिकवरी के साथ जिसे आप जांच सकें।",
  },
  hero_cta_review: { en: "Get a Free Claim Review", hi: "मुफ्त क्लेम समीक्षा पाएं" },
  hero_cta_how: { en: "How we work", hi: "हम कैसे काम करते हैं" },
  hero_chip_1: { en: "No win, no fee", hi: "जीत नहीं तो शुल्क नहीं" },
  hero_chip_2: { en: "100% confidential", hi: "100% गोपनीय" },

  // Eligibility form
  elig_title: { en: "Submit Your Claim Issue", hi: "अपनी क्लेम समस्या बताएं" },
  elig_sub: { en: "Takes less than 60 seconds · No login required", hi: "60 सेकंड से कम · कोई लॉगिन ज़रूरी नहीं" },
  elig_type: { en: "Type of claim", hi: "क्लेम का प्रकार" },
  elig_type_placeholder: { en: "Select claim type…", hi: "क्लेम प्रकार चुनें…" },
  elig_amount: { en: "Disputed amount (₹)", hi: "विवादित राशि (₹)" },
  elig_amount_placeholder: { en: "e.g. 85,000", hi: "जैसे 85,000" },
  elig_check: { en: "Check Eligibility", hi: "पात्रता जांचें" },
  elig_result_title: { en: "Strong case for recovery", hi: "रिकवरी के लिए मज़बूत केस" },
  elig_result_desc: { en: "Based on your inputs, your claim qualifies for a full review.", hi: "आपके दिए विवरण के आधार पर, आपका क्लेम पूरी समीक्षा के योग्य है।" },
  elig_result_cta: { en: "Speak to an expert →", hi: "विशेषज्ञ से बात करें →" },

  opt_general: { en: "General Insurance", hi: "जनरल इंश्योरेंस" },
  opt_health: { en: "Health Insurance", hi: "हेल्थ इंश्योरेंस" },
  opt_travel: { en: "Travel Insurance", hi: "ट्रैवल इंश्योरेंस" },
  opt_motor: { en: "Motor Insurance", hi: "मोटर इंश्योरेंस" },

  // Stats
  stat_claims: { en: "Claims recovered", hi: "सुलझाए गए क्लेम" },
  stat_success: { en: "Success rate", hi: "सफलता दर" },
  stat_recovered: { en: "Recovered for clients", hi: "ग्राहकों के लिए वसूली" },
  stat_resolution: { en: "Avg. resolution time", hi: "औसत समाधान समय" },
  stat_fast: { en: "Fast", hi: "तेज़" },

  // How it works (process feature image)
  how_eyebrow: { en: "How it works", hi: "यह कैसे काम करता है" },
  how_title: { en: "An expert by your side — from rejection to recovery.", hi: "रिजेक्शन से रिकवरी तक — एक विशेषज्ञ आपके साथ।" },
  how_desc: {
    en: "Talk to a real claim specialist. We audit your denial, draft the appeal, escalate to the regulator if needed, and recover your money — with full transparency at every step.",
    hi: "एक असली क्लेम विशेषज्ञ से बात करें। हम आपके रिजेक्शन की जांच करते हैं, अपील तैयार करते हैं, ज़रूरत पड़ने पर रेगुलेटर तक एस्केलेट करते हैं, और हर कदम पर पारदर्शिता के साथ आपका पैसा वापस दिलाते हैं।",
  },
  how_book: { en: "Book a free call", hi: "मुफ्त कॉल बुक करें" },

  // Services overview
  svc_eyebrow: { en: "What we fight for", hi: "हम किस लिए लड़ते हैं" },
  svc_title: { en: "Three claim battles, one expert team", hi: "तीन क्लेम लड़ाइयाँ, एक विशेषज्ञ टीम" },
  svc_desc: {
    en: "Most denied or under-paid claims fall into three patterns. We handle each with a documented, regulator-aware playbook.",
    hi: "अधिकांश अस्वीकृत या कम भुगतान वाले क्लेम तीन पैटर्न में आते हैं। हम हर एक को दस्तावेज़ी, रेगुलेटर-अनुरूप प्रक्रिया से संभालते हैं।",
  },
  svc_card1_t: { en: "Rejected Claims", hi: "अस्वीकृत क्लेम" },
  svc_card1_d: { en: "Non-disclosure, waiting-period or exclusion-based denials reversed via documented appeals and Ombudsman escalation.", hi: "नॉन-डिस्क्लोज़र, वेटिंग पीरियड या एक्सक्लूज़न आधारित रिजेक्शन को दस्तावेज़ी अपील और लोकपाल एस्केलेशन से पलटा जाता है।" },
  svc_card2_t: { en: "Delayed Claims", hi: "विलंबित क्लेम" },
  svc_card2_d: { en: "IRDAI mandates 30-day settlement. We compel insurers to act — with interest at bank rate + 2%.", hi: "IRDAI 30 दिन में निपटान अनिवार्य करता है। हम बीमाकर्ताओं को कार्रवाई के लिए बाध्य करते हैं — बैंक रेट + 2% ब्याज के साथ।" },
  svc_card3_t: { en: "Short Settlement", hi: "कम भुगतान" },
  svc_card3_d: { en: "Room-rent proportionate deductions, non-medical line items and R&C disputes recovered in full.", hi: "रूम-रेंट कटौती, नॉन-मेडिकल आइटम और R&C विवादों की पूरी वसूली कराते हैं।" },
  svc_learn: { en: "Learn more", hi: "और जानें" },

  // Process
  proc_eyebrow: { en: "Our process", hi: "हमारी प्रक्रिया" },
  proc_title: { en: "From rejection letter to recovery — in four steps", hi: "रिजेक्शन लेटर से रिकवरी तक — चार चरणों में" },
  proc_step: { en: "STEP", hi: "चरण" },
  proc_s1_t: { en: "Share your claim", hi: "अपना क्लेम साझा करें" },
  proc_s1_d: { en: "Upload policy, denial letter and bills. 5 minutes.", hi: "पॉलिसी, रिजेक्शन लेटर और बिल अपलोड करें। 5 मिनट।" },
  proc_s2_t: { en: "Expert audit", hi: "विशेषज्ञ ऑडिट" },
  proc_s2_d: { en: "We identify violations of IRDAI regulation & policy clauses.", hi: "हम IRDAI नियम और पॉलिसी क्लॉज़ के उल्लंघन की पहचान करते हैं।" },
  proc_s3_t: { en: "Appeal & escalate", hi: "अपील और एस्केलेशन" },
  proc_s3_d: { en: "Internal appeal, GRO, Bima Bharosa, Ombudsman — as needed.", hi: "आंतरिक अपील, GRO, बीमा भरोसा, लोकपाल — जैसा आवश्यक हो।" },
  proc_s4_t: { en: "Recover funds", hi: "धन वसूली" },
  proc_s4_d: { en: "Settlement directly to your bank, with regulator-mandated interest.", hi: "रेगुलेटर-निर्धारित ब्याज सहित, सीधे आपके बैंक में निपटान।" },

  // Testimonials
  test_eyebrow: { en: "Client outcomes", hi: "ग्राहकों के परिणाम" },
  test_title: { en: "Real recoveries. Real families.", hi: "असली वसूली। असली परिवार।" },

  // Family callout
  fam_eyebrow: { en: "Why it matters", hi: "यह क्यों मायने रखता है" },
  fam_title: { en: "A claim isn't a number. It's your family's safety net.", hi: "क्लेम सिर्फ़ एक संख्या नहीं है। यह आपके परिवार की सुरक्षा है।" },
  fam_desc: {
    en: "When an insurer says no, the bills don't stop. We make sure your policy pays what it promised — quickly, completely, and without the runaround.",
    hi: "जब बीमाकर्ता मना करता है, बिल नहीं रुकते। हम सुनिश्चित करते हैं कि आपकी पॉलिसी वही भुगतान करे जो वादा था — जल्दी, पूरी तरह और बिना भागदौड़ के।",
  },

  // Final CTA
  fcta_title: { en: "Don't let a denial be the final word.", hi: "रिजेक्शन को आख़िरी शब्द न बनने दें।" },
  fcta_desc: { en: "A free, no-obligation review of your claim by an insurance expert. Most cases qualify for recovery.", hi: "बीमा विशेषज्ञ द्वारा आपके क्लेम की मुफ्त, बिना बाध्यता समीक्षा। अधिकांश केस रिकवरी के योग्य होते हैं।" },
  fcta_start: { en: "Start Free Review", hi: "मुफ्त समीक्षा शुरू करें" },
  fcta_guides: { en: "Read claim guides", hi: "क्लेम गाइड पढ़ें" },

  // About
  about_chip: { en: "About ClaimsMitra", hi: "ClaimsMitra के बारे में" },
  about_title_1: { en: "Your reliable partner for", hi: "आपका भरोसेमंद साथी —" },
  about_title_2: { en: "stuck insurance claims", hi: "अटके बीमा क्लेम के लिए" },
  about_sub: {
    en: "ClaimsMitra is a dedicated platform helping individuals navigate difficult or delayed insurance claims. We simplify the process and provide guidance, support and real solutions — so people receive what they rightfully deserve.",
    hi: "ClaimsMitra एक समर्पित प्लेटफ़ॉर्म है जो लोगों को कठिन या विलंबित बीमा क्लेम से निपटने में मदद करता है। हम प्रक्रिया को सरल बनाते हैं और मार्गदर्शन, सहायता और वास्तविक समाधान देते हैं — ताकि लोगों को उनका हक़ मिले।",
  },
  about_wa: { en: "Chat on WhatsApp", hi: "WhatsApp पर चैट करें" },
  about_advisor: { en: "Talk to an advisor", hi: "सलाहकार से बात करें" },
  about_who: { en: "Who we are", hi: "हम कौन हैं" },
  about_who_p1: { en: "We understand how stressful and confusing insurance claims can be. Denial letters, vague clauses, repeated follow-ups — they leave policyholders exhausted at the worst possible time.", hi: "हम समझते हैं कि बीमा क्लेम कितने तनावपूर्ण और भ्रमित करने वाले हो सकते हैं। रिजेक्शन लेटर, अस्पष्ट क्लॉज़ और बार-बार के फॉलो-अप — सबसे बुरे समय में पॉलिसीधारकों को थका देते हैं।" },
  about_who_p2: { en: "That's why ClaimsMitra exists: to act as a reliable partner who assists, guides and resolves claim-related issues efficiently, with transparency at every step.", hi: "इसीलिए ClaimsMitra मौजूद है: एक विश्वसनीय साथी के रूप में जो हर कदम पर पारदर्शिता के साथ क्लेम से जुड़ी समस्याओं को कुशलता से हल करता है।" },
  about_mission: { en: "Our Mission", hi: "हमारा मिशन" },
  about_mission_desc: { en: "To empower people by resolving insurance claim challenges with transparency, speed and trust.", hi: "पारदर्शिता, गति और विश्वास के साथ बीमा क्लेम की चुनौतियों को सुलझाकर लोगों को सशक्त बनाना।" },
  about_lead: { en: "Leadership", hi: "नेतृत्व" },
  about_lead_title: { en: "The team behind ClaimsMitra", hi: "ClaimsMitra के पीछे की टीम" },
  about_lead_sub: { en: "Operators with decades of combined experience across insurance, finance and dispute resolution.", hi: "बीमा, वित्त और विवाद समाधान में दशकों के सम्मिलित अनुभव वाले विशेषज्ञ।" },
  about_why: { en: "Why choose us", hi: "हमें क्यों चुनें" },
  about_why_title: { en: "Built to fight for the policyholder", hi: "पॉलिसीधारक के लिए लड़ने को बनाया गया" },
  about_office: { en: "Our Office", hi: "हमारा कार्यालय" },
  about_stuck: { en: "Have a stuck claim? Talk to us today.", hi: "क्या आपका क्लेम अटका है? आज ही हमसे बात करें।" },
  about_stuck_desc: { en: "Reach out on WhatsApp for the fastest response. Our advisors review every case personally.", hi: "तेज़ जवाब के लिए WhatsApp पर संपर्क करें। हमारे सलाहकार हर केस की व्यक्तिगत समीक्षा करते हैं।" },
  about_free: { en: "Free claim review", hi: "मुफ्त क्लेम समीक्षा" },

  // Services page
  spg_chip: { en: "Services", hi: "सेवाएं" },
  spg_title: { en: "Specialist help for the three ways insurers under-pay you.", hi: "तीन तरीकों के लिए विशेषज्ञ मदद जिनसे बीमाकर्ता कम भुगतान करते हैं।" },
  spg_sub: { en: "Every engagement begins with a free claim audit. You only pay if we recover.", hi: "हर सेवा मुफ्त क्लेम ऑडिट से शुरू होती है। आप तभी भुगतान करते हैं जब हम वसूली कराते हैं।" },
  spg_our: { en: "🛠️ Our Services", hi: "🛠️ हमारी सेवाएं" },
  spg_h2: { en: "We help ensure that people have a voice — and a means of redress.", hi: "हम सुनिश्चित करते हैं कि लोगों के पास एक आवाज़ हो — और निवारण का साधन भी।" },
  spg_h2_sub: { en: "Specialist claim assistance across every line of insurance sold in India.", hi: "भारत में बिकने वाले हर बीमा के लिए विशेषज्ञ क्लेम सहायता।" },
  spg_problems: { en: "Problems We Solve", hi: "हम जो समस्याएँ हल करते हैं" },
  spg_problems_sub: { en: "Four patterns cover almost every dispute we see.", hi: "चार पैटर्न लगभग हर विवाद को कवर करते हैं।" },
  spg_audit_btn: { en: "Start a free audit", hi: "मुफ्त ऑडिट शुरू करें" },
  spg_why: { en: "Why Choose Us", hi: "हमें क्यों चुनें" },
  spg_why_sub: { en: "What sets ClaimsMitra apart from generic claim consultants.", hi: "क्या ClaimsMitra को सामान्य क्लेम सलाहकारों से अलग बनाता है।" },
  spg_fee_chip: { en: "Success-fee model", hi: "सक्सेस-फी मॉडल" },
  spg_fee_title: { en: "Calculate Your Success Fees", hi: "अपनी सक्सेस फीस की गणना करें" },
  spg_fee_desc: { en: "Pay only on what we actually recover for you. No upfront retainer, no audit fee. Estimate your net recovery before you engage.", hi: "केवल उसी पर भुगतान करें जो हम वास्तव में वसूल करते हैं। कोई अग्रिम शुल्क नहीं, कोई ऑडिट शुल्क नहीं। सेवा शुरू करने से पहले अपनी शुद्ध वसूली का अनुमान लगाएँ।" },
  spg_fee_calc: { en: "Calculate Fees", hi: "फीस की गणना करें" },
  spg_fee_consult: { en: "Get Free Consultation", hi: "मुफ्त परामर्श लें" },
  spg_unsure: { en: "Not sure which one fits your case?", hi: "नहीं पता आपके केस पर कौन-सा लागू होता है?" },
  spg_unsure_desc: { en: "Share your denial letter or settlement advice — we'll classify it and tell you the recovery odds. Free.", hi: "अपना रिजेक्शन लेटर या सेटलमेंट सलाह साझा करें — हम वर्गीकृत करेंगे और रिकवरी की संभावनाएँ बताएंगे। मुफ्त।" },
  spg_submit: { en: "Submit Your Case", hi: "अपना केस सबमिट करें" },
  spg_talk: { en: "Talk to an Expert", hi: "विशेषज्ञ से बात करें" },

  // Contact page
  cnt_chip: { en: "Contact", hi: "संपर्क" },
  cnt_title: { en: "Talk to a claim expert today.", hi: "आज ही क्लेम विशेषज्ञ से बात करें।" },
  cnt_sub: { en: "Share your case in 2 minutes. An IRDAI-aligned advisor will review it and call you back — usually within 2 hours.", hi: "2 मिनट में अपना केस साझा करें। एक IRDAI-संरेखित सलाहकार समीक्षा करके आपको कॉल करेगा — आमतौर पर 2 घंटे के भीतर।" },
  cnt_thanks_t: { en: "Thank you — we've got it.", hi: "धन्यवाद — हमें आपका विवरण मिल गया।" },
  cnt_thanks_d: { en: "An advisor will call you within 2 working hours. Meanwhile, you can WhatsApp us for a faster reply.", hi: "एक सलाहकार आपको 2 कार्य घंटे के भीतर कॉल करेगा। तेज़ उत्तर के लिए आप WhatsApp भी कर सकते हैं।" },
  cnt_another: { en: "Submit another claim", hi: "एक और क्लेम सबमिट करें" },
  cnt_name: { en: "Full name", hi: "पूरा नाम" },
  cnt_name_ph: { en: "As on policy", hi: "जैसा पॉलिसी पर है" },
  cnt_mobile: { en: "Mobile", hi: "मोबाइल" },
  cnt_mobile_ph: { en: "10-digit number", hi: "10 अंकों का नंबर" },
  cnt_email: { en: "Email", hi: "ईमेल" },
  cnt_email_ph: { en: "you@example.com", hi: "you@example.com" },
  cnt_type: { en: "Type of claim", hi: "क्लेम का प्रकार" },
  cnt_select: { en: "Select…", hi: "चुनें…" },
  cnt_insurer: { en: "Insurer", hi: "बीमा कंपनी" },
  cnt_insurer_ph: { en: "e.g. Star Health", hi: "जैसे Star Health" },
  cnt_msg: { en: "Tell us about the claim", hi: "क्लेम के बारे में बताएँ" },
  cnt_msg_ph: { en: "What was the reason for rejection / delay / short-settlement?", hi: "रिजेक्शन / देरी / कम भुगतान का कारण क्या था?" },
  cnt_sending: { en: "Sending…", hi: "भेजा जा रहा है…" },
  cnt_request: { en: "Request Free Claim Review", hi: "मुफ्त क्लेम समीक्षा का अनुरोध करें" },
  cnt_consent: { en: "By submitting, you agree to be contacted by ClaimsMitra advisors. We never share your data.", hi: "सबमिट करके, आप ClaimsMitra सलाहकारों से संपर्क के लिए सहमत होते हैं। हम आपका डेटा कभी साझा नहीं करते।" },
  cnt_wa_t: { en: "WhatsApp us instantly", hi: "हमें तुरंत WhatsApp करें" },
  cnt_wa_d: { en: "Fastest way to reach an advisor — typical reply in under 5 minutes.", hi: "सलाहकार तक पहुँचने का सबसे तेज़ तरीका — आमतौर पर 5 मिनट के भीतर जवाब।" },
  cnt_other: { en: "Other ways to reach us", hi: "हमसे संपर्क के अन्य तरीके" },
  cnt_call: { en: "Call us", hi: "हमें कॉल करें" },
  cnt_call_d: { en: "+91 98792 70170 · Mon–Sat, 9am–8pm", hi: "+91 98792 70170 · सोम–शनि, सुबह 9 – रात 8" },
  cnt_email_lbl: { en: "Email", hi: "ईमेल" },
  cnt_offices: { en: "Offices", hi: "कार्यालय" },
  cnt_offices_d: { en: "Bengaluru · Mumbai · Delhi NCR", hi: "बेंगलुरु · मुंबई · दिल्ली NCR" },
  cnt_why: { en: "Why ClaimsMitra?", hi: "ClaimsMitra क्यों?" },
  cnt_why_1: { en: "No win, no fee — risk-free engagement", hi: "जीत नहीं तो शुल्क नहीं — जोखिम-मुक्त" },
  cnt_why_2: { en: "Senior insurance professionals on every file", hi: "हर केस पर वरिष्ठ बीमा विशेषज्ञ" },
  cnt_why_3: { en: "Transparent updates at every step", hi: "हर कदम पर पारदर्शी अपडेट" },

  // Footer
  ftr_desc: { en: "We help Indian families recover what insurers owe them — by appealing rejected claims, chasing delays and disputing short-settlements with documented, IRDAI-aligned process.", hi: "हम भारतीय परिवारों को बीमाकर्ताओं से उनका हक़ दिलाने में मदद करते हैं — रिजेक्ट हुए क्लेम पर अपील, देरी का पीछा और कम भुगतान का विवाद, दस्तावेज़ी और IRDAI-संरेखित प्रक्रिया से।" },
  ftr_company: { en: "Company", hi: "कंपनी" },
  ftr_terms: { en: "Terms & Conditions", hi: "नियम और शर्तें" },
  ftr_privacy: { en: "Privacy Policy", hi: "गोपनीयता नीति" },
  ftr_reach: { en: "Reach Us", hi: "हमसे संपर्क करें" },
  ftr_rights: { en: "All rights reserved.", hi: "सर्वाधिकार सुरक्षित।" },
  ftr_disc: { en: "ClaimsMitra is an independent claim assistance firm and is not an insurer or IRDAI-registered intermediary.", hi: "ClaimsMitra एक स्वतंत्र क्लेम सहायता फर्म है और कोई बीमाकर्ता या IRDAI-पंजीकृत मध्यस्थ नहीं है।" },

  // About — leadership roles
  role_promoter: { en: "Promoter & Partner", hi: "प्रमोटर और पार्टनर" },
  role_partner: { en: "Partner", hi: "पार्टनर" },

  // About — reasons
  about_r1_t: { en: "Expert support for stuck claims", hi: "अटके क्लेम के लिए विशेषज्ञ सहायता" },
  about_r1_d: { en: "Specialists who handle rejected, delayed and short-settled claims every single day.", hi: "विशेषज्ञ जो हर दिन अस्वीकृत, विलंबित और कम भुगतान वाले क्लेम संभालते हैं।" },
  about_r2_t: { en: "Transparent & trustworthy", hi: "पारदर्शी और भरोसेमंद" },
  about_r2_d: { en: "Clear timelines, honest assessments and no false promises — ever.", hi: "स्पष्ट समयसीमा, ईमानदार आकलन और कोई झूठे वादे नहीं — कभी नहीं।" },
  about_r3_t: { en: "Experienced professionals", hi: "अनुभवी विशेषज्ञ" },
  about_r3_d: { en: "A dedicated team with deep knowledge of IRDAI regulations and insurer playbooks.", hi: "IRDAI नियमों और बीमाकर्ता रणनीतियों की गहरी समझ वाली समर्पित टीम।" },
  about_r4_t: { en: "Customer-first approach", hi: "ग्राहक-प्रथम दृष्टिकोण" },
  about_r4_d: { en: "We measure success only when you receive what you rightfully deserve.", hi: "सफलता हमारे लिए तभी है जब आपको आपका हक़ मिले।" },

  // About — office address
  about_addr_company: { en: "AFC Ventures", hi: "AFC Ventures" },
  about_addr_line1: { en: "Office No. 13, Loyalka Compound", hi: "कार्यालय नं. 13, लोयलका कंपाउंड" },
  about_addr_line2: { en: "Opp. Chowpatty, Mumbai", hi: "चौपाटी के सामने, मुंबई" },

  // Services — insurance categories
  cat_life_t: { en: "Life Insurance", hi: "जीवन बीमा" },
  cat_life_d: { en: "Death claim repudiations, non-disclosure disputes and nominee delays — handled end to end.", hi: "मृत्यु क्लेम अस्वीकरण, नॉन-डिस्क्लोज़र विवाद और नामांकित व्यक्ति की देरी — आरंभ से अंत तक संभाले जाते हैं।" },
  cat_health_t: { en: "Health Insurance", hi: "हेल्थ इंश्योरेंस" },
  cat_health_d: { en: "Cashless rejections, reimbursement short-payments and PED-clause denials reversed.", hi: "कैशलेस रिजेक्शन, रीइंबर्समेंट कम भुगतान और PED-क्लॉज़ अस्वीकरण को पलटा जाता है।" },
  cat_general_t: { en: "General Insurance", hi: "जनरल इंश्योरेंस" },
  cat_general_d: { en: "Property, fire, marine and liability claims — surveyor reports challenged on merit.", hi: "प्रॉपर्टी, अग्नि, समुद्री और देयता क्लेम — सर्वेयर रिपोर्ट को मेरिट पर चुनौती।" },
  cat_term_t: { en: "Term Insurance", hi: "टर्म इंश्योरेंस" },
  cat_term_d: { en: "Suicide-clause, lifestyle-disclosure and policy-lapse rejections re-opened.", hi: "आत्महत्या-क्लॉज़, जीवनशैली-डिस्क्लोज़र और पॉलिसी-लैप्स अस्वीकरण फिर से खोले जाते हैं।" },
  cat_travel_t: { en: "Travel Insurance", hi: "ट्रैवल इंश्योरेंस" },
  cat_travel_d: { en: "Trip cancellation, baggage loss and overseas medical claims recovered with documentation.", hi: "ट्रिप कैंसलेशन, बैगेज लॉस और विदेशी मेडिकल क्लेम दस्तावेज़ों के साथ वसूले जाते हैं।" },
  cat_motor_t: { en: "Motor Insurance", hi: "मोटर इंश्योरेंस" },
  cat_motor_d: { en: "Own-damage shortfalls, total-loss disputes and third-party delays — pursued via MACT where needed.", hi: "ओन-डैमेज की कमी, टोटल-लॉस विवाद और थर्ड-पार्टी देरी — आवश्यकता पर MACT के माध्यम से।" },

  // Services — problems
  prob1_t: { en: "Claim Rejection", hi: "क्लेम अस्वीकरण" },
  prob1_d: { en: "Reverse denials with policy-clause forensics.", hi: "पॉलिसी-क्लॉज़ की गहन जांच से अस्वीकरण पलटें।" },
  prob2_t: { en: "Claim Delay", hi: "क्लेम में देरी" },
  prob2_d: { en: "Force settlement plus statutory interest.", hi: "निपटान और वैधानिक ब्याज के लिए बाध्य करें।" },
  prob3_t: { en: "Short Settlement", hi: "कम भुगतान" },
  prob3_d: { en: "Recover the deductions hidden in the CSA.", hi: "CSA में छिपी कटौतियों की वसूली।" },
  prob4_t: { en: "Complete Claim Assistance", hi: "संपूर्ण क्लेम सहायता" },
  prob4_d: { en: "End-to-end handling — audit to recovery.", hi: "ऑडिट से वसूली तक — पूरी प्रक्रिया।" },

  // Services — why us
  why1_t: { en: "Expert Claim Advisors", hi: "विशेषज्ञ क्लेम सलाहकार" },
  why1_d: { en: "Ex-insurance and legal professionals on every file.", hi: "हर केस पर पूर्व-बीमा और कानूनी पेशेवर।" },
  why2_t: { en: "Faster Resolution", hi: "तेज़ समाधान" },
  why2_d: { en: "Median 21-day turnaround on delayed claims.", hi: "विलंबित क्लेम पर औसत 21-दिन की प्रक्रिया।" },
  why3_t: { en: "Transparent Process", hi: "पारदर्शी प्रक्रिया" },
  why3_d: { en: "Written engagement, no hidden costs, no upfront fees.", hi: "लिखित अनुबंध, कोई छिपी लागत नहीं, कोई अग्रिम शुल्क नहीं।" },
  why4_t: { en: "High Success Rate", hi: "उच्च सफलता दर" },
  why4_d: { en: "76% of audited rejections qualify for recovery.", hi: "76% ऑडिट किए गए अस्वीकरण वसूली के योग्य होते हैं।" },

  // Services — detailed blocks
  sd1_badge: { en: "Rejected Claims", hi: "अस्वीकृत क्लेम" },
  sd1_title: { en: "Reverse a denial — even after the insurer's final letter.", hi: "अस्वीकरण पलटें — बीमाकर्ता के अंतिम पत्र के बाद भी।" },
  sd1_intro: { en: "Most rejections in India are based on a small set of grounds: non-disclosure, waiting periods, exclusions, or the 'reasonable & customary' clause. Each ground has a counter-argument when the denial isn't backed by clear policy language.", hi: "भारत में अधिकांश अस्वीकरण कुछ ही आधारों पर होते हैं: नॉन-डिस्क्लोज़र, वेटिंग पीरियड, एक्सक्लूज़न या 'reasonable & customary' क्लॉज़। हर आधार का प्रति-तर्क तब बनता है जब अस्वीकरण स्पष्ट पॉलिसी भाषा से समर्थित न हो।" },
  sd1_b1: { en: "Forensic review of denial letter against your policy wording", hi: "आपकी पॉलिसी के विरुद्ध अस्वीकरण पत्र की गहन समीक्षा" },
  sd1_b2: { en: "Drafted internal appeal with case-law and IRDAI references", hi: "केस-लॉ और IRDAI संदर्भों के साथ आंतरिक अपील का प्रारूप" },
  sd1_b3: { en: "Escalation to Grievance Redressal Officer and Bima Bharosa portal", hi: "शिकायत निवारण अधिकारी और बीमा भरोसा पोर्टल तक एस्केलेशन" },
  sd1_b4: { en: "Insurance Ombudsman representation (claims up to ₹50 lakh)", hi: "बीमा लोकपाल प्रतिनिधित्व (₹50 लाख तक के क्लेम)" },
  sd1_stat_l: { en: "of rejected claims we audit qualify for recovery", hi: "हमारे ऑडिट किए अस्वीकृत क्लेम वसूली के योग्य होते हैं" },

  sd2_badge: { en: "Delayed Claims", hi: "विलंबित क्लेम" },
  sd2_title: { en: "Force a settlement — with interest you're legally owed.", hi: "निपटान के लिए बाध्य करें — कानूनी रूप से देय ब्याज के साथ।" },
  sd2_intro: { en: "Under Regulation 9 of IRDAI's 2017 Policyholders' Interest rules, an insurer must settle within 30 days. Beyond that, interest at bank rate + 2% becomes payable. Most policyholders never claim it.", hi: "IRDAI के 2017 पॉलिसीधारक हित नियमों के विनियमन 9 के तहत, बीमाकर्ता को 30 दिनों के भीतर निपटान करना होगा। उसके बाद बैंक रेट + 2% ब्याज देय हो जाता है। अधिकांश पॉलिसीधारक इसका दावा नहीं करते।" },
  sd2_b1: { en: "Documented timeline of every interaction and missed deadline", hi: "हर बातचीत और चूकी समयसीमा का दस्तावेज़ी रिकॉर्ड" },
  sd2_b2: { en: "Formal grievance citing exact regulatory clauses", hi: "सटीक नियामक क्लॉज़ का हवाला देते हुए औपचारिक शिकायत" },
  sd2_b3: { en: "Bima Bharosa escalation — tracked at the regulator level", hi: "बीमा भरोसा एस्केलेशन — रेगुलेटर स्तर पर ट्रैक" },
  sd2_b4: { en: "Interest calculation and recovery in addition to the claim", hi: "क्लेम के अतिरिक्त ब्याज की गणना और वसूली" },
  sd2_stat_v: { en: "21 days", hi: "21 दिन" },
  sd2_stat_l: { en: "average resolution after we take over a delayed file", hi: "विलंबित फ़ाइल लेने के बाद औसत समाधान" },

  sd3_badge: { en: "Short Settlement", hi: "कम भुगतान" },
  sd3_title: { en: "Recover what was quietly deducted from your payout.", hi: "जो राशि चुपचाप काटी गई थी, उसे वसूलें।" },
  sd3_intro: { en: "When the cheque is smaller than the bill, the deduction sheet usually hides three things: room-rent proportionate deductions, non-medical 'consumables', and reasonable-and-customary capping. Each is challengeable.", hi: "जब चेक बिल से छोटा हो, तो कटौती शीट में आमतौर पर तीन चीज़ें छुपी होती हैं: रूम-रेंट आनुपातिक कटौती, नॉन-मेडिकल 'कंज़्यूमेबल्स' और reasonable-and-customary कैपिंग। हर एक को चुनौती दी जा सकती है।" },
  sd3_b1: { en: "Line-by-line audit of the Claim Settlement Advice", hi: "क्लेम सेटलमेंट सलाह का पंक्ति-दर-पंक्ति ऑडिट" },
  sd3_b2: { en: "Comparison against IRDAI's standard non-payable list", hi: "IRDAI की मानक नॉन-पेएबल सूची से तुलना" },
  sd3_b3: { en: "Peer-hospital benchmarking for R&C disputes", hi: "R&C विवादों के लिए समकक्ष-अस्पताल तुलना" },
  sd3_b4: { en: "Written representation — without forfeiting your existing payment", hi: "लिखित प्रतिनिधित्व — आपके मौजूदा भुगतान को खोए बिना" },
  sd3_stat_l: { en: "median additional recovery per short-settled health claim", hi: "प्रति कम-भुगतान हेल्थ क्लेम औसत अतिरिक्त वसूली" },

  sd_steps_audit: { en: "Audit", hi: "ऑडिट" },
  sd_steps_appeal: { en: "Appeal", hi: "अपील" },
  sd_steps_recover: { en: "Recover", hi: "वसूली" },

  // Blog / Knowledge Hub
  blog_chip: { en: "Knowledge Hub", hi: "नॉलेज हब" },
  blog_title: { en: "Practical guides to keep your claim from being denied.", hi: "व्यावहारिक गाइड जो आपके क्लेम को अस्वीकृत होने से बचाएँ।" },
  blog_sub: { en: "Written by claim specialists who fight insurers every day. No jargon, no ads — just what works.", hi: "क्लेम विशेषज्ञों द्वारा लिखा गया जो रोज़ बीमाकर्ताओं से लड़ते हैं। कोई भारी शब्द नहीं, कोई विज्ञापन नहीं — बस वही जो काम करता है।" },
  blog_all: { en: "All", hi: "सभी" },
  blog_read: { en: "Read", hi: "पढ़ें" },
  blog_back: { en: "All articles", hi: "सभी लेख" },
  blog_not_found: { en: "Article not found", hi: "लेख नहीं मिला" },
  blog_not_found_d: { en: "It may have been moved or removed.", hi: "हो सकता है इसे हटाया या स्थानांतरित किया गया हो।" },
  blog_back_hub: { en: "Back to Knowledge Hub", hi: "नॉलेज हब पर वापस" },
  blog_continue: { en: "Continue reading", hi: "पढ़ना जारी रखें" },
  blog_cta_title: { en: "Have a similar claim issue?", hi: "क्या आपकी भी ऐसी ही क्लेम समस्या है?" },
  blog_cta_desc: { en: "Get a free, expert review — no obligation.", hi: "मुफ्त विशेषज्ञ समीक्षा पाएँ — कोई बाध्यता नहीं।" },
  blog_cta_btn: { en: "Talk to a Claim Expert", hi: "क्लेम विशेषज्ञ से बात करें" },
} as const;

export type TKey = keyof typeof translations;
