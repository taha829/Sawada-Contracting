import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.getQuote": "Get a Quote",

    // Hero
    "hero.title": "Sawada Contracting",
    "hero.subtitle": "Building Tomorrow, Today",
    "hero.description": "Leading construction, finishing, and design solutions in Amman, Jordan.\nFrom foundations to final touches — reliable, on-time, and built to last.",
    "hero.viewProjects": "View Projects",

    // Why Choose Us
    "whyUs.title": "Why Choose Sawada Contracting",
    "whyUs.description": "We bring unmatched expertise and dedication to every project",
    "whyUs.feature1": "20+ Years of Engineering Excellence",
    "whyUs.feature2": "Licensed Professional Contractors",
    "whyUs.feature3": "Quality Materials & Certified Products",
    "whyUs.feature4": "On-Time Delivery Guaranteed",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive construction and finishing solutions delivered by experienced engineering professionals",
    "services.viewAll": "View All Services",
    "services.contracting": "General Contracting & Project Management",
    "services.finishing": "Interior & Exterior Finishes",
    "services.painting": "Decorative Painting & Design Works",
    "services.waterproofing": "Waterproofing & Thermal Insulation",
    "services.epoxy": "Epoxy Flooring & Industrial Coatings",
    "services.design": "Architectural & Interior Design",

    // Blog
    "blog.thermalInsulation": "Thermal Insulation",
    "blog.waterproofingGuide": "Waterproofing Guide",
    "blog.constructionTips": "Construction Tips",
    "blog.designTrends": "Design Trends",
    "blog.maintenanceGuide": "Maintenance Guide",
    "blog.energyEfficiency": "Energy Efficiency",
    "blog.insulationMaterials": "Insulation Materials",
    "blog.epoxyApplications": "Epoxy Applications",
    "blog.likeArticle": "Like Article",
    "blog.shareArticle": "Share Article",
    "blog.comments": "Comments",
    "blog.backToBlog": "Back to Blog",
    "blog.leaveComment": "Leave a Comment",
    "blog.name": "Name",
    "blog.comment": "Comment",
    "blog.submitComment": "Submit Comment",
    "blog.commentSuccess": "Comment submitted successfully!",
    "blog.likeSuccess": "You liked this article!",
    "blog.shareSuccess": "Link copied to clipboard!",
    "blog.relatedPosts": "Related Posts",
    "blog.postComment": "Post Comment",
    "blog.readTime": "minute read",
    "blog.author": "Author",
    "blog.maintenanceGuide": "Maintenance Guide",
    "blog.maintenanceConstruction": "Maintenance & Construction",
    "blog.buildingMaintenance": "The Essential Guide to Building Maintenance",
    "blog.seasonalMaintenance": "Seasonal Maintenance Schedule",
    "blog.spring": "Spring",
    "blog.summer": "Summer",
    "blog.autumn": "Autumn",
    "blog.winter": "Winter",
    "blog.preventiveMaintenance": "Preventive Maintenance",
    "blog.criticalSystems": "Critical Systems Maintenance",
    "blog.documentation": "Documentation & Records",

    // About
    "about.title": "About Us",
    "about.subtitle": "A leading company in construction and finishing in Jordan",
    "about.ourStory": "Our Story",
    "about.story1": "Our company was founded in 2010 by Engineer mohamad  AL-nsore, who had a clear vision to provide high-quality construction and finishing services in Jordan.",
    "about.story2": "After more than a decade of work, we have become one of the leading companies in the construction and finishing sector, having completed hundreds of residential and commercial projects across the kingdom.",
    "about.story3": "We believe in the importance of quality and precision in every detail, and we always strive to provide the best services that meet our clients' expectations.",
    "about.ourValues": "Our Values",
    "about.valuesSubtitle": "The foundations on which our company built its reputation",
    "about.excellence": "Excellence",
    "about.excellenceDesc": "We are committed to providing the highest levels of quality in all our projects",
    "about.teamwork": "Teamwork",
    "about.teamworkDesc": "We are a cohesive team working in harmony to achieve the best results",
    "about.innovation": "Innovation",
    "about.innovationDesc": "We use the latest technologies and methods in our work",
    "about.integrity": "Integrity",
    "about.integrityDesc": "We believe in transparency and ethics in dealing with our clients",
    "about.ourExpertise": "Our Expertise",
    "about.engineeringExcellence": "Engineering Excellence",
    "about.expertise1": "Advanced structural design",
    "about.expertise2": "Efficient project management",
    "about.expertise3": "Use of high-quality materials",
    "about.expertise4": "Commitment to deadlines",
    "about.projectDelivery": "Project Delivery",
    "about.delivery1": "Detailed planning",
    "about.delivery2": "Quality monitoring",
    "about.delivery3": "Technical supervision",
    "about.delivery4": "After-sales service",
    "about.whyChooseUs": "Why Choose Us",
    "about.experts": "Expert",
    "about.expertsDesc": "Specialized experts in construction and finishing",
    "about.years": "Years of Experience",
    "about.yearsDesc": "Years of experience in the Jordanian construction market",
    "about.projects": "Completed Projects",
    "about.projectsDesc": "Successfully completed projects across Jordan",
    "about.projectsCompleted": "Projects Completed",
    "about.yearsExperience": "Years of Experience",
    "about.clientSatisfaction": "Client Satisfaction",
    "about.team": "Our Team",
    "about.teamSubtitle": "Experience and innovation at your service",
    "about.ourExpertise": "Our Expertise",
    "about.engineeringExcellence": "Engineering Excellence",
    "about.expertise1": "Advanced structural design",
    "about.expertise2": "Efficient project management",
    "about.expertise3": "Use of high-quality materials",
    "about.expertise4": "Commitment to deadlines",
    "about.team": "Our Team",
    "about.teamSubtitle": "Experience and innovation at your service",
    "blog.freeConsultation": "Need a free consultation?",
    "blog.contactUsToday": "Contact us today for a free site visit and detailed quote for your project",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch with our team for any inquiries or project discussions",
    "contact.formTitle": "Send Us a Message",
    "contact.name": "Full Name",
    "contact.nameRequired": "Full Name *",
    "contact.phone": "Phone Number",
    "contact.phoneRequired": "Phone Number *",
    "contact.email": "Email Address",
    "contact.emailRequired": "Email Address *",
    "contact.subject": "Subject",
    "contact.subjectRequired": "Subject *",
    "contact.message": "Message",
    "contact.messageRequired": "Message *",
    "contact.sending": "Sending...",
    "contact.send": "Send Message",
    "contact.infoTitle": "Contact Information",
    "contact.phoneLabel": "Phone",
    "contact.emailLabel": "Email",
    "contact.locationLabel": "Location",
    "contact.hoursLabel": "Working Hours",
    "contact.hours": "Sunday - Thursday: 8:00 AM - 6:00 PM\nSaturday: 8:00 AM - 2:00 PM\nFriday: Closed",
    "contact.mapTitle": "Visit Our Office",
    "contact.successMessage": "Message sent successfully! We'll get back to you soon.",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.projects": "المشاريع",
    "nav.blog": "المدونة",
    "nav.contact": "اتصل بنا",
    "nav.getQuote": "احصل على عرض سعر",

    // Hero
    "hero.title": "مقاولات سوادا",
    "hero.subtitle": "نبني الغد، اليوم",
    "hero.description": "رواد حلول البناء والتشطيبات والتصميم في عمّان، الأردن.\nمن الأساسات إلى اللمسات النهائية — موثوق، في الموعد، ومبني ليدوم.",
    "hero.viewProjects": "عرض المشاريع",

    // Why Choose Us
    "whyUs.title": "لماذا تختار شركة  سوادا للمقاولات",
    "whyUs.description": "نحن نجلب خبرة لا مثيل لها والتفاني في كل مشروع",
    "whyUs.feature1": "أكثر من 20 عامًا من التميز الهندسي",
    "whyUs.feature2": "مقاولون محترفون مرخصون",
    "whyUs.feature3": "مواد عالية الجودة ومنتجات معتمدة",
    "whyUs.feature4": "التسليم في الوقت المحدد مضمون",

    // Services
    "services.title": "خدماتنا",
    "services.subtitle": "حلول بناء وتشطيبات شاملة يقدمها متخصصون هندسيون ذوو خبرة",
    "services.viewAll": "عرض جميع الخدمات",
    "services.contracting": "المقاولات العامة وإدارة المشاريع",
    "services.finishing": "التشطيبات الداخلية والخارجية",
    "services.painting": "الدهانات الزخرفية وأعمال التصميم",
    "services.waterproofing": "العزل المائي والحراري",
    "services.epoxy": "أرضيات الإيبوكسي والطلاءات الصناعية",
    "services.design": "التصميم المعماري والداخلي",

    // Blog
    "blog.thermalInsulation": "العزل الحراري",
    "blog.waterproofingGuide": "دليل العزل المائي",
    "blog.constructionTips": "نصائح البناء",
    "blog.designTrends": "اتجاهات التصميم",
    "blog.maintenanceGuide": "دليل الصيانة",
    "blog.energyEfficiency": "كفاءة الطاقة",
    "blog.insulationMaterials": "مواد العزل",
    "blog.epoxyApplications": "تطبيقات الإيبوكسي",
    "blog.likeArticle": "أعجبني المقال",
    "blog.shareArticle": "مشاركة المقال",
    "blog.comments": "التعليقات",
    "blog.backToBlog": "العودة للمدونة",
    "blog.leaveComment": "اترك تعليقًا",
    "blog.name": "الاسم",
    "blog.comment": "التعليق",
    "blog.submitComment": "إرسال التعليق",
    "blog.commentSuccess": "تم إرسال التعليق بنجاح!",
    "blog.likeSuccess": "لقد أعجبك هذا المقال!",
    "blog.shareSuccess": "تم نسخ الرابط إلى الحافظة!",
    "blog.relatedPosts": "مقالات متعلقة",
    "blog.postComment": "نشر التعليق",
    "blog.readTime": "دقيقة قراءة",
    "blog.author": "الكاتب",
    "blog.maintenanceGuide": "دليل الصيانة",
    "blog.maintenanceConstruction": "الصيانة والبناء",
    "blog.buildingMaintenance": "الدليل الأساسي لصيانة المباني",
    "blog.seasonalMaintenance": "جدول الصيانة الموسمي",
    "blog.spring": "الربيع",
    "blog.summer": "الصيف",
    "blog.autumn": "الخريف",
    "blog.winter": "الشتاء",
    "blog.preventiveMaintenance": "الصيانة الوقائية",
    "blog.criticalSystems": "صيانة الأنظمة الحرجة",
    "blog.documentation": "التوثيق والسجلات",

    // About
    "about.title": "من نحن",
    "about.subtitle": "شركة رائدة في مجال البناء والتشطيب في الأردن",
    "about.ourStory": "قصة شركتنا",
    "about.story1": "تأسست شركتنا عام 2010 على يد المهندس محمد النسور، الذي كان لديه رؤية واضحة لتقديم خدمات بناء وتشطيب عالية الجودة في الأردن.",
    "about.story2": "بعد أكثر من عقد من العمل، أصبحنا من الشركات الرائدة في مجال البناء والتشطيب، حيث أكملنا مئات المشاريع السكنية والتجارية في جميع أنحاء المملكة.",
    "about.story3": "نحن نؤمن بأهمية الجودة والدقة في كل تفصيلة، ونسعى دائماً لتقديم أفضل الخدمات التي تلبي توقعات عملائنا.",
    "about.ourValues": "قيمنا",
    "about.valuesSubtitle": "الأسس التي بنت عليها شركتنا سمعتها",
    "about.excellence": "التميز",
    "about.excellenceDesc": "نلتزم بتقديم أعلى مستويات الجودة في جميع مشاريعنا",
    "about.teamwork": "العمل الجماعي",
    "about.teamworkDesc": "نحن فريق متكامل يعمل بتناغم لتحقيق أفضل النتائج",
    "about.integrity": "النزاهة",
    "about.integrityDesc": "نحن نؤمن بالشفافية والأخلاق في التعامل مع عملائنا",
    "about.ourExpertise": "خبراتنا",
    "about.engineeringExcellence": "التميز الهندسي",
    "about.expertise1": "تصميم هيكلي متقدم",
    "about.expertise2": "إدارة المشاريع بكفاءة",
    "about.expertise3": "استخدام مواد عالية الجودة",
    "about.expertise4": "التزام بالمواعيد النهائية",
    "about.projectDelivery": "تسليم المشاريع",
    "about.delivery1": "التخطيط الدقيق",
    "about.delivery2": "مراقبة الجودة",
    "about.delivery3": "إشراف فني",
    "about.delivery4": "خدمة ما بعد البيع",
    "about.whyChooseUs": "لماذا تختارنا",
    "about.team": "فريقنا",
    "about.teamSubtitle": "الخبرة والابتكار في خدمتكم",
    "about.experts": "خبير",
    "about.expertsDesc": "خبراء متخصصين في مجال البناء والتشطيب",
    "about.years": "عام من الخبرة",
    "about.yearsDesc": "سنوات من الخبرة في سوق البناء الأردني",
    "about.projects": "مشروع مكتمل",
    "about.projectsDesc": "مشروع مكتمل بنجاح في جميع أنحاء الأردن",
    "about.projectsCompleted": "المشاريع المكتملة",
    "about.yearsExperience": "سنوات الخبرة",
    "about.clientSatisfaction": "رضا العملاء",
    "about.innovation": "الابتكار",
    "about.innovationDesc": "نستخدم أحدث التقنيات والأساليب في أعمالنا",
    "about.integrity": "النزاهة",
    "about.integrityDesc": "نحن نؤمن بالشفافية والأخلاق في التعامل مع عملائنا",
    "about.ourExpertise": "خبراتنا",
    "about.engineeringExcellence": "التميز الهندسي",
    "about.expertise1": "تصميم هيكلي متطور",
    "about.expertise2": "إدارة المشاريع بكفاءة",
    "about.expertise3": "استخدام مواد عالية الجودة",
    "about.expertise4": "التزام بالمواعيد النهائية",
    "about.team": "فريقنا",
    "about.teamSubtitle": "الخبرة والابتكار في خدمتكم",
    "blog.freeConsultation": "هل تحتاج استشارة مجانية؟",
    "blog.contactUsToday": "تواصل معنا اليوم للحصول على زيارة موقع مجانية وعرض سعر مفصل لمشروعك",

    // Contact
    "contact.title": "اتصل بنا",
    "contact.subtitle": "تواصل مع فريقنا لأي استفسارات أو مناقشات المشاريع",
    "contact.formTitle": "أرسل لنا رسالة",
    "contact.name": "الاسم الكامل",
    "contact.nameRequired": "الاسم الكامل *",
    "contact.phone": "رقم الهاتف",
    "contact.phoneRequired": "رقم الهاتف *",
    "contact.email": "البريد الإلكتروني",
    "contact.emailRequired": "البريد الإلكتروني *",
    "contact.subject": "الموضوع",
    "contact.subjectRequired": "الموضوع *",
    "contact.message": "الرسالة",
    "contact.messageRequired": "الرسالة *",
    "contact.sending": "جارٍ الإرسال...",
    "contact.send": "إرسال الرسالة",
    "contact.infoTitle": "معلومات الاتصال",
    "contact.phoneLabel": "الهاتف",
    "contact.emailLabel": "البريد الإلكتروني",
    "contact.locationLabel": "الموقع",
    "contact.hoursLabel": "ساعات العمل",
    "contact.hours": "الأحد - الخميس: 8:00 ص - 6:00 م\nالسبت: 8:00 ص - 2:00 م\nالجمعة: مغلق",
    "contact.mapTitle": "زيارة مكتبنا",
    "contact.successMessage": "تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Load language preference from localStorage
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      setLanguage(savedLanguage);
    } else {
      // Auto-detect browser language
      const browserLanguage = navigator.language.split("-")[0];
      if (browserLanguage === "ar") {
        setLanguage("ar");
      }
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
