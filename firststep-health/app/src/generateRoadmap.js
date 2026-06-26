const sampleResultEN = {
  service: "Home Health Screening",
  summary: "You want to explore offering basic health screening services in Al Qua'a. This roadmap gives a safe starting point and highlights what must be verified with official UAE authorities before taking action.",
  licensePath: "Possible approval pathway: verify the applicable Department of Health Abu Dhabi requirements for this healthcare activity. Exact licensing depends on the service type, qualifications, location, and operating model.",
  requiredDocuments: [
    "Proof of identity",
    "Qualification or training documents",
    "Description of the proposed healthcare service",
    "Proposed operating location details",
    "Questions to confirm with the relevant authority"
  ],
  fundingOptions: [
    "Check official UAE SME support programmes for eligibility",
    "Review Khalifa Fund or other entrepreneurship support options",
    "Verify any funding amount, criteria, and application steps directly from official sources"
  ],
  estimatedCost: "Estimated costs vary based on licensing path, equipment, space, and inspection requirements. Exact costs must be verified with official authorities and suppliers.",
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
  ],
  officialSources: [
    { title: "Department of Health Abu Dhabi", url: "https://www.doh.gov.ae" },
    { title: "Ministry of Health and Prevention UAE", url: "https://www.mohap.gov.ae" },
    { title: "Khalifa Fund for Enterprise Development", url: "https://www.khalifafund.ae" }
  ],
  disclaimer: "This roadmap is for guidance only. All licensing, legal, funding, cost, and healthcare requirements must be verified directly with official UAE authorities before taking action."
};

const sampleResultAR = {
  service: "فحص صحي منزلي",
  summary: "تبي تستكشف تقديم خدمات فحص صحي أساسية في القعا. هذي خارطة الطريق تعطيك نقطة بداية آمنة وتوضح وش اللي لازم تتأكد منه مع الجهات الرسمية في الإمارات قبل ما تبدأ.",
  licensePath: "مسار الموافقة المحتمل: تحقق من متطلبات دائرة الصحة أبوظبي للنشاط الصحي اللي تبي تقدمه. الترخيص الدقيق يعتمد على نوع الخدمة، مؤهلاتك، الموقع، وطريقة التشغيل.",
  requiredDocuments: [
    "إثبات الهوية",
    "وثائق المؤهلات أو التدريب",
    "وصف الخدمة الصحية المقترحة",
    "تفاصيل موقع التشغيل المقترح",
    "أسئلة للتأكيد مع الجهة المختصة"
  ],
  fundingOptions: [
    "تحقق من برامج دعم المشاريع الصغيرة والمتوسطة الرسمية في الإمارات",
    "راجع صندوق خليفة أو خيارات دعم ريادة الأعمال الثانية",
    "تأكد من أي مبالغ تمويل ومعايير وخطوات التقديم مباشرة من المصادر الرسمية"
  ],
  estimatedCost: "التكاليف تختلف حسب مسار الترخيص، المعدات، المكان، ومتطلبات التفتيش. لازم تتحقق من التكاليف الدقيقة مع الجهات الرسمية والموردين.",
  timeline: [
    "الأسبوع الأول — حدد الخدمة بالضبط وتحقق من متطلبات الجهة المختصة",
    "الأسبوع الثاني — اجمع وثائق الهوية والمؤهلات والنشاط التجاري",
    "الأسبوع الثالث — تواصل مع الجهة المختصة لتأكيد المسار الصحيح",
    "الأسبوع الرابع — حضّر الطلب والمواد الداعمة"
  ],
  tomorrowMorning: [
    "اكتب الخدمة الصحية اللي تبي تقدمها بالضبط",
    "سجّل مؤهلاتك، تدريبك، ميزانيتك، والمساحة المتاحة عندك",
    "زر موقع الجهة الرسمية المختصة وحضّر أسئلتك للتحقق"
  ],
  officialSources: [
    { title: "دائرة الصحة — أبوظبي", url: "https://www.doh.gov.ae" },
    { title: "وزارة الصحة ووقاية المجتمع", url: "https://www.mohap.gov.ae" },
    { title: "صندوق خليفة لتطوير المشاريع", url: "https://www.khalifafund.ae" }
  ],
  disclaimer: "هذي خارطة الطريق للإرشاد بس. كل متطلبات الترخيص، القانونية، التمويل، التكاليف، والرعاية الصحية لازم تتحقق منها مباشرة مع الجهات الرسمية في الإمارات قبل ما تاخذ أي خطوة."
};

export async function generateRoadmap(formData, lang = "en") {
  const base = lang === "ar" ? sampleResultAR : sampleResultEN;
  const service = formData.service || base.service;

  return {
    ...base,
    service,
    summary: lang === "ar"
      ? `تبي تستكشف تقديم ${service} في القعا. هذي خارطة الطريق تعطيك نقطة بداية آمنة وتوضح وش اللي لازم تتأكد منه مع الجهات الرسمية في الإمارات قبل ما تبدأ.`
      : `You want to explore starting ${service} in Al Qua'a. This roadmap gives a safe starting point and highlights what must be verified with official UAE authorities before taking action.`
  };
}
