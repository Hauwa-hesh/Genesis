const sourcesEN = [
  { title: "Department of Health Abu Dhabi", url: "https://www.doh.gov.ae" },
  { title: "Ministry of Health and Prevention UAE", url: "https://www.mohap.gov.ae" },
  { title: "Khalifa Fund for Enterprise Development", url: "https://www.khalifafund.ae" }
];

const sourcesAR = [
  { title: "دائرة الصحة — أبوظبي", url: "https://www.doh.gov.ae" },
  { title: "وزارة الصحة ووقاية المجتمع", url: "https://www.mohap.gov.ae" },
  { title: "صندوق خليفة لتطوير المشاريع", url: "https://www.khalifafund.ae" }
];

const disclaimerEN =
  "This roadmap is for guidance only. All licensing, legal, funding, cost, and healthcare requirements must be verified directly with official UAE authorities before taking action.";

const disclaimerAR =
  "هذه خارطة طريق إرشادية فقط. يجب التحقق من جميع متطلبات الترخيص، والقانون، والتمويل، والتكاليف، والرعاية الصحية مباشرة مع الجهات الرسمية في الإمارات قبل اتخاذ أي خطوة.";

function getType(service = "") {
  const s = service.toLowerCase();

  if (s.includes("pharmacy") || s.includes("medicine") || s.includes("medication")) {
    return "pharmacy";
  }

  if (s.includes("first aid") || s.includes("training") || s.includes("cpr")) {
    return "firstAid";
  }

  if (
    s.includes("screen") ||
    s.includes("blood pressure") ||
    s.includes("diabetes") ||
    s.includes("check") ||
    s.includes("health")
  ) {
    return "screening";
  }

  return "general";
}

const templatesEN = {
  screening: {
    service: "Home Health Screening",
    summary:
      "You want to explore offering basic health screening services in Al Qua'a. This roadmap focuses on turning that idea into a safe, legal, and verified community service.",
    licensePath:
      "Possible approval pathway: verify with Department of Health Abu Dhabi whether your service requires healthcare facility approval, professional licensing, home healthcare approval, or another permitted activity. Exact requirements depend on the service scope, qualification, equipment, and operating location.",
    requiredDocuments: [
      "Proof of identity",
      "Healthcare qualification or training documents",
      "Clear description of the screening services",
      "Proposed operating location details",
      "List of equipment you plan to use"
    ],
    fundingOptions: [
      "Check Khalifa Fund or other UAE entrepreneurship support programmes for eligibility",
      "Review SME support options for equipment and setup costs",
      "Verify funding criteria directly from official programme websites"
    ],
    estimatedCost:
      "Estimated costs may include basic screening equipment, training verification, licensing or approval fees, insurance, and space preparation. Treat all amounts as estimates until confirmed with official authorities and suppliers.",
    timeline: [
      "Week 1 — Define the exact screening services and confirm what your qualification allows",
      "Week 2 — Collect identity, qualification, location, and equipment information",
      "Week 3 — Contact the relevant authority to verify the correct approval pathway",
      "Week 4 — Prepare the application, cost plan, and launch checklist"
    ],
    tomorrowMorning: [
      "Write the exact services you want to offer, such as blood pressure or glucose checks",
      "List your qualifications and any equipment you already have",
      "Visit the Department of Health Abu Dhabi website and prepare questions for verification"
    ]
  },

  pharmacy: {
    service: "Small Pharmacy",
    summary:
      "You want to explore starting a pharmacy or medicine-related service in Al Qua'a. This roadmap helps you identify what must be verified before investing money or choosing a location.",
    licensePath:
      "Possible approval pathway: pharmacy-related businesses are regulated healthcare activities and must be verified with the relevant UAE health and business authorities. Requirements may involve professional pharmacist licensing, facility approval, medicine handling rules, location approval, and business registration.",
    requiredDocuments: [
      "Proof of identity",
      "Pharmacy or healthcare qualification documents",
      "Business activity description",
      "Proposed shop or facility location details",
      "Questions about medicine storage, supervision, and approval requirements"
    ],
    fundingOptions: [
      "Check official SME and entrepreneurship support programmes",
      "Explore whether healthcare retail or pharmacy setup is eligible for funding",
      "Verify funding eligibility, amounts, and conditions directly from official sources"
    ],
    estimatedCost:
      "A pharmacy may require higher startup costs than a home service because of premises, fit-out, storage, licensing, stock, and professional requirements. Exact costs must be verified before planning.",
    timeline: [
      "Week 1 — Confirm whether your qualification allows you to operate or manage a pharmacy",
      "Week 2 — Identify the authority requirements for pharmacy activity and location approval",
      "Week 3 — Prepare a business cost plan covering rent, stock, equipment, and approvals",
      "Week 4 — Contact official authorities before submitting any application"
    ],
    tomorrowMorning: [
      "Write whether you want a full pharmacy, medicine delivery support, or health product retail",
      "List your pharmacy-related qualifications or required partners",
      "Check official health authority and business registration websites before spending money"
    ]
  },

  firstAid: {
    service: "First Aid Training",
    summary:
      "You want to explore offering first aid training in Al Qua'a. This roadmap focuses on making the service structured, credible, and ready for official verification.",
    licensePath:
      "Possible approval pathway: verify whether first aid training requires approval from health, training, education, or business licensing authorities. Requirements may depend on whether the training is informal awareness, paid certification, workplace training, or community education.",
    requiredDocuments: [
      "Proof of identity",
      "First aid or training certification",
      "Training programme outline",
      "Proposed audience and location",
      "Questions about whether certification or training approval is required"
    ],
    fundingOptions: [
      "Check entrepreneurship support programmes for community training services",
      "Explore partnerships with schools, community groups, or local businesses",
      "Verify funding and partnership eligibility from official sources"
    ],
    estimatedCost:
      "Estimated costs may include training materials, venue, certification, basic first aid kits, marketing, and approval fees if required. Exact costs must be verified.",
    timeline: [
      "Week 1 — Define whether the training is awareness-only or certification-based",
      "Week 2 — Confirm training approval requirements and prepare a course outline",
      "Week 3 — Identify venue, audience, equipment, and safety requirements",
      "Week 4 — Prepare pilot session plan and official verification questions"
    ],
    tomorrowMorning: [
      "Decide whether your training will be awareness-based or certificate-based",
      "Prepare a one-page outline of the first aid topics you want to teach",
      "Check which authority or partner should verify the training requirements"
    ]
  },

  general: {
    service: "Healthcare Microservice",
    summary:
      "You want to explore starting a healthcare-related microservice in Al Qua'a. This roadmap gives a safe starting point and shows what must be verified before taking action.",
    licensePath:
      "Possible approval pathway: verify the applicable healthcare and business requirements with official UAE authorities. Exact requirements depend on the service type, qualification, location, equipment, and whether the service is home-based or commercial.",
    requiredDocuments: [
      "Proof of identity",
      "Qualification or training documents",
      "Description of the proposed service",
      "Operating location details",
      "Questions to confirm with the relevant authority"
    ],
    fundingOptions: [
      "Check official UAE SME support programmes for eligibility",
      "Review entrepreneurship support options",
      "Verify any funding amount, criteria, and application steps directly from official sources"
    ],
    estimatedCost:
      "Estimated costs vary based on licensing path, equipment, space, and inspection requirements. Exact costs must be verified with official authorities and suppliers.",
    timeline: [
      "Week 1 — Define the exact service and verify authority requirements",
      "Week 2 — Gather identity, qualification, and business activity documents",
      "Week 3 — Contact the relevant authority to confirm the correct pathway",
      "Week 4 — Prepare the application and supporting materials"
    ],
    tomorrowMorning: [
      "Write down the exact healthcare service you want to offer",
      "List your qualifications, training, budget, and available space",
      "Visit the relevant official authority website and prepare questions for verification"
    ]
  }
};

const templatesAR = {
  screening: {
    service: "فحص صحي منزلي",
    summary:
      "تريد استكشاف تقديم خدمات فحص صحي أساسية في القعا. هذه الخارطة تساعدك على تحويل الفكرة إلى خدمة مجتمعية آمنة وقابلة للتحقق مع الجهات الرسمية.",
    licensePath:
      "مسار الموافقة المحتمل: تحقق مع دائرة الصحة أبوظبي لمعرفة هل تحتاج الخدمة إلى موافقة منشأة صحية، أو ترخيص مهني، أو موافقة رعاية منزلية، أو نشاط آخر مسموح. المتطلبات الدقيقة تعتمد على نطاق الخدمة، المؤهل، المعدات، ومكان التشغيل.",
    requiredDocuments: [
      "إثبات الهوية",
      "وثائق المؤهل أو التدريب الصحي",
      "وصف واضح لخدمات الفحص",
      "تفاصيل موقع التشغيل المقترح",
      "قائمة بالمعدات التي تنوي استخدامها"
    ],
    fundingOptions: [
      "تحقق من صندوق خليفة أو برامج دعم ريادة الأعمال في الإمارات",
      "راجع خيارات دعم المشاريع الصغيرة لتكاليف المعدات والتجهيز",
      "تحقق من شروط التمويل مباشرة من المواقع الرسمية"
    ],
    estimatedCost:
      "قد تشمل التكاليف معدات الفحص الأساسية، التحقق من التدريب، رسوم الترخيص أو الموافقة، التأمين، وتجهيز المكان. تعامل مع كل الأرقام كتقديرات حتى يتم تأكيدها من الجهات الرسمية والموردين.",
    timeline: [
      "الأسبوع 1 — حدد خدمات الفحص بدقة وتأكد مما يسمح به مؤهلك",
      "الأسبوع 2 — اجمع معلومات الهوية، المؤهل، الموقع، والمعدات",
      "الأسبوع 3 — تواصل مع الجهة المختصة لتأكيد مسار الموافقة الصحيح",
      "الأسبوع 4 — جهّز الطلب، خطة التكاليف، وقائمة الإطلاق"
    ],
    tomorrowMorning: [
      "اكتب الخدمات الدقيقة التي تريد تقديمها مثل قياس الضغط أو السكر",
      "سجّل مؤهلاتك وأي معدات متوفرة لديك",
      "زر موقع دائرة الصحة أبوظبي وحضّر أسئلة للتحقق"
    ]
  },

  pharmacy: {
    service: "صيدلية صغيرة",
    summary:
      "تريد استكشاف بدء صيدلية أو خدمة مرتبطة بالأدوية في القعا. هذه الخارطة تساعدك على معرفة ما يجب التحقق منه قبل الاستثمار أو اختيار الموقع.",
    licensePath:
      "مسار الموافقة المحتمل: الأنشطة المتعلقة بالصيدليات والأدوية تعد من الأنشطة الصحية المنظمة ويجب التحقق منها مع الجهات الصحية والتجارية المختصة في الإمارات. قد تشمل المتطلبات ترخيص الصيدلي، موافقة المنشأة، قواعد حفظ الأدوية، موافقة الموقع، والتسجيل التجاري.",
    requiredDocuments: [
      "إثبات الهوية",
      "وثائق المؤهل الصيدلي أو الصحي",
      "وصف النشاط التجاري",
      "تفاصيل موقع المحل أو المنشأة",
      "أسئلة حول تخزين الأدوية والإشراف ومتطلبات الموافقة"
    ],
    fundingOptions: [
      "تحقق من برامج دعم المشاريع الصغيرة وريادة الأعمال الرسمية",
      "استكشف هل نشاط الصيدلية أو بيع المنتجات الصحية مؤهل للدعم",
      "تحقق من الأهلية والمبالغ والشروط من المصادر الرسمية"
    ],
    estimatedCost:
      "قد تحتاج الصيدلية إلى تكاليف أعلى من الخدمة المنزلية بسبب المكان، التجهيز، التخزين، الترخيص، المخزون، والمتطلبات المهنية. يجب التحقق من التكاليف الدقيقة قبل التخطيط.",
    timeline: [
      "الأسبوع 1 — تأكد هل مؤهلك يسمح لك بتشغيل أو إدارة صيدلية",
      "الأسبوع 2 — حدد متطلبات الجهة المختصة للنشاط والموقع",
      "الأسبوع 3 — جهّز خطة تكلفة تشمل الإيجار، المخزون، المعدات، والموافقات",
      "الأسبوع 4 — تواصل مع الجهات الرسمية قبل تقديم أي طلب"
    ],
    tomorrowMorning: [
      "حدد هل تريد صيدلية كاملة، دعم توصيل أدوية، أو بيع منتجات صحية",
      "سجّل مؤهلاتك الصيدلية أو الشركاء المطلوبين",
      "راجع مواقع الجهات الصحية والتجارية الرسمية قبل صرف أي مبلغ"
    ]
  },

  firstAid: {
    service: "تدريب إسعافات أولية",
    summary:
      "تريد استكشاف تقديم تدريب إسعافات أولية في القعا. هذه الخارطة تساعدك على جعل الخدمة منظمة، موثوقة، وجاهزة للتحقق الرسمي.",
    licensePath:
      "مسار الموافقة المحتمل: تحقق هل تدريب الإسعافات الأولية يحتاج موافقة من جهة صحية، تدريبية، تعليمية، أو تجارية. المتطلبات تختلف حسب ما إذا كان التدريب توعويًا، مدفوعًا، بشهادة، أو موجهًا للمؤسسات.",
    requiredDocuments: [
      "إثبات الهوية",
      "شهادة إسعافات أولية أو تدريب",
      "مخطط البرنامج التدريبي",
      "الفئة المستهدفة والموقع المقترح",
      "أسئلة حول متطلبات اعتماد التدريب أو الشهادة"
    ],
    fundingOptions: [
      "تحقق من برامج دعم ريادة الأعمال للخدمات التدريبية المجتمعية",
      "استكشف شراكات مع المدارس أو المجموعات المجتمعية أو الأعمال المحلية",
      "تحقق من أهلية التمويل أو الشراكات من المصادر الرسمية"
    ],
    estimatedCost:
      "قد تشمل التكاليف مواد التدريب، المكان، الشهادات، حقائب الإسعاف الأولي، التسويق، ورسوم الموافقة إذا كانت مطلوبة. يجب التحقق من التكاليف الدقيقة.",
    timeline: [
      "الأسبوع 1 — حدد هل التدريب توعوي فقط أم بشهادة",
      "الأسبوع 2 — تحقق من متطلبات الموافقة وجهّز مخطط الدورة",
      "الأسبوع 3 — حدد المكان، الجمهور، المعدات، ومتطلبات السلامة",
      "الأسبوع 4 — جهّز خطة جلسة تجريبية وأسئلة التحقق الرسمية"
    ],
    tomorrowMorning: [
      "قرر هل سيكون التدريب توعويًا أم بشهادة",
      "حضّر صفحة واحدة تشرح مواضيع الإسعافات الأولية التي ستدرّسها",
      "تحقق من الجهة أو الشريك المناسب لتأكيد متطلبات التدريب"
    ]
  },

  general: {
    service: "خدمة صحية صغيرة",
    summary:
      "تريد استكشاف بدء خدمة صحية صغيرة في القعا. هذه الخارطة تعطيك نقطة بداية آمنة وتوضح ما يجب التحقق منه قبل اتخاذ أي خطوة.",
    licensePath:
      "مسار الموافقة المحتمل: تحقق من المتطلبات الصحية والتجارية المناسبة مع الجهات الرسمية في الإمارات. المتطلبات الدقيقة تعتمد على نوع الخدمة، المؤهل، الموقع، المعدات، وهل الخدمة منزلية أم تجارية.",
    requiredDocuments: [
      "إثبات الهوية",
      "وثائق المؤهل أو التدريب",
      "وصف الخدمة المقترحة",
      "تفاصيل موقع التشغيل",
      "أسئلة للتأكد من الجهة المختصة"
    ],
    fundingOptions: [
      "تحقق من برامج دعم المشاريع الصغيرة والمتوسطة الرسمية في الإمارات",
      "راجع خيارات دعم ريادة الأعمال",
      "تحقق من مبالغ التمويل والشروط وخطوات التقديم من المصادر الرسمية"
    ],
    estimatedCost:
      "التكاليف تختلف حسب مسار الترخيص، المعدات، المكان، ومتطلبات التفتيش. يجب التحقق من التكاليف الدقيقة مع الجهات الرسمية والموردين.",
    timeline: [
      "الأسبوع 1 — حدد الخدمة بدقة وتحقق من متطلبات الجهة المختصة",
      "الأسبوع 2 — اجمع وثائق الهوية والمؤهل والنشاط التجاري",
      "الأسبوع 3 — تواصل مع الجهة المختصة لتأكيد المسار الصحيح",
      "الأسبوع 4 — حضّر الطلب والمواد الداعمة"
    ],
    tomorrowMorning: [
      "اكتب الخدمة الصحية التي تريد تقديمها بدقة",
      "سجّل مؤهلاتك، تدريبك، ميزانيتك، والمساحة المتاحة",
      "زر الموقع الرسمي للجهة المختصة وحضّر أسئلتك للتحقق"
    ]
  }
};

export async function generateRoadmap(formData, lang = "en") {
  const serviceInput = formData.service || "";
  const type = getType(serviceInput);
  const templates = lang === "ar" ? templatesAR : templatesEN;
  const sources = lang === "ar" ? sourcesAR : sourcesEN;
  const disclaimer = lang === "ar" ? disclaimerAR : disclaimerEN;

  const base = templates[type];
  const service = serviceInput || base.service;

  return {
    ...base,
    service,
    officialSources: sources,
    disclaimer
  };
}
