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
    
    // About
    "about.title": "About Sawada Contracting",
    "about.subtitle": "Building dreams into reality with decades of engineering expertise and unwavering commitment to excellence",
    "about.ourStory": "Our Story",
    "about.story1": "Sawada Contracting was founded with a simple vision: to transform the construction landscape in Jordan through quality, reliability, and innovation. What started as a small team of passionate engineers has grown into one of Amman's most trusted names in construction and finishing.",
    "about.story2": "With decades of combined experience, our team has successfully delivered hundreds of projects across residential, commercial, and industrial sectors. From luxury villa finishes to large-scale industrial epoxy installations, we bring the same level of dedication and expertise to every job.",
    "about.story3": "We pride ourselves on our comprehensive approach — handling everything from initial design and planning to final execution and handover. Our clients trust us because we deliver on time, within budget, and to the highest standards of craftsmanship.",
    "about.ourValues": "Our Values",
    "about.valuesSubtitle": "The principles that guide everything we do",
    "about.excellence": "Excellence",
    "about.excellenceDesc": "Committed to delivering the highest quality in every project",
    "about.teamwork": "Teamwork",
    "about.teamworkDesc": "Collaborative approach with clients, engineers, and craftsmen",
    "about.precision": "Precision",
    "about.precisionDesc": "Attention to detail in every phase of construction",
    "about.innovation": "Innovation",
    "about.innovationDesc": "Embracing modern techniques and sustainable practices",
    "about.ourExpertise": "Our Expertise",
    "about.engineeringExcellence": "Engineering Excellence",
    "about.expertise1": "Licensed professional engineers",
    "about.expertise2": "Advanced technical knowledge",
    "about.expertise3": "Certified in latest construction methods",
    "about.expertise4": "Continuous professional development",
    "about.projectDelivery": "Project Delivery",
    "about.delivery1": "On-time project completion",
    "about.delivery2": "Transparent communication",
    "about.delivery3": "Quality control at every stage",
    "about.delivery4": "Post-completion support",
    "about.whyChooseUs": "Why Clients Choose Us",
    "about.projectsCompleted": "Projects Completed",
    "about.yearsExperience": "Years Experience",
    "about.clientSatisfaction": "Client Satisfaction",
    
    // Projects
    "projects.title": "Our Projects",
    "projects.subtitle": "Explore our portfolio of successfully completed projects across Jordan",
    "projects.viewAll": "View All Projects",
    "projects.residential": "Residential",
    "projects.commercial": "Commercial",
    "projects.industrial": "Industrial",
    "projects.all": "All",
    "projects.gallery": "Project Gallery",
    "projects.gallerySubtitle": "Browse our completed projects - click any image to view in full size",
    
    // Service Details
    "serviceDetails.overview": "Service Overview",
    "serviceDetails.features": "Key Features",
    "serviceDetails.process": "Work Process",
    "serviceDetails.gallery": "Project Gallery",
    "serviceDetails.faq": "Frequently Asked Questions",
    "serviceDetails.cta": "Ready to get started with this service?",
    "serviceDetails.contactUs": "Contact Us Now",
    "serviceDetails.backToServices": "Back to Services",
    
    // Blog
    "blog.title": "Insights & Updates",
    "blog.subtitle": "Explore our professional blog featuring construction tips, design trends, epoxy and insulation solutions, and behind-the-scenes looks at our latest projects in Jordan. Updated regularly by our engineering team.",
    "blog.viewAll": "View All Articles",
    "blog.readMore": "Read More",
    "blog.by": "By",
    "blog.allArticles": "All Articles",
    "blog.tags": "Tags",
    "blog.relatedArticles": "Related Articles",
    "blog.shareArticle": "Share Article",
    "blog.likeArticle": "Like",
    "blog.comments": "Comments",
    "blog.leaveComment": "Leave a Comment",
    "blog.yourName": "Your Name",
    "blog.yourEmail": "Your Email",
    "blog.yourComment": "Your Comment",
    "blog.postComment": "Post Comment",
    "blog.commentSuccess": "Comment posted successfully!",
    "blog.likeSuccess": "Thanks for liking this article!",
    "blog.shareSuccess": "Link copied to clipboard!",
    "blog.backToBlog": "Back to Blog",
    
    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch with our team to discuss your project requirements",
    "contact.cta": "Ready to Start Your Project?",
    "contact.ctaText": "Get in touch with our expert team today for a free consultation and quote",
    "contact.callNow": "Call Now",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.workingHours": "Working Hours",
    
    // Footer
    "footer.description": "Building Tomorrow, Today. Leading construction and finishing solutions in Jordan.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Our Services",
    "footer.contactUs": "Contact Us",
    "footer.signature": "Eng. mohamad Nsoor",
    
    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Hear from our satisfied customers about their experience working with us",
    
    // Stats
    "stats.projectsCompleted": "Projects Completed",
    "stats.yearsExperience": "Years of Experience",
    "stats.clientSatisfaction": "Client Satisfaction",
    
    // Contact Form
    "form.name": "Full Name",
    "form.phone": "Phone Number",
    "form.email": "Email Address",
    "form.subject": "Subject",
    "form.message": "Message",
    "form.send": "Send Message",
    "form.sending": "Sending...",
    "form.required": "*",
    
    // Common
    "common.readMore": "Read More",
    "common.learnMore": "Learn More",
    "common.contactUs": "Contact Us",
    "common.getStarted": "Get Started",
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
    "whyUs.title": "لماذا تختار سوادا للمقاولات",
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
    
    // About
    "about.title": "عن سوادا للمقاولات",
    "about.subtitle": "نبني الأحلام ونحولها إلى واقع بخبرة هندسية عقود والتزام راسخ بالتميز",
    "about.ourStory": "قصتنا",
    "about.story1": "تأسست شركة سوادا للمقاولات برؤية بسيطة: تحويل مشهد البناء في الأردن من خلال الجودة والموثوقية والابتكار. ما بدأ كفريق صغير من المهندسين المتحمسين نما ليصبح أحد أكثر الأسماء الموثوقة في البناء والتشطيب في عمان.",
    "about.story2": "بخبرة عقود مجتمعة، نجح فريقنا في تسليم مئات المشاريع عبر القطاعات السكنية والتجارية والصناعية. من تشطيبات الفيلات الفاخرة إلى تركيبات الإيبوكسي الصناعية واسعة النطاق، نحن نجلب نفس مستوى التفاني والخبرة لكل مشروع.",
    "about.story3": "نحن نفخر بنهجنا الشامل - التعامل مع كل شيء من التصميم والتخطيط الأولي إلى التنفيذ النهائي والتسليم. يثق عملاؤنا بنا لأننا نسلم في الوقت المحدد، ضمن الميزانية، وبأعلى معايير الحرفية.",
    "about.ourValues": "قيمنا",
    "about.valuesSubtitle": "المبادئ التي توجه كل ما نقوم به",
    "about.excellence": "التميز",
    "about.excellenceDesc": "ملتزمون بتقديم أعلى جودة في كل مشروع",
    "about.teamwork": "العمل الجماعي",
    "about.teamworkDesc": "نهج تعاوني مع العملاء والمهندسين والحرفيين",
    "about.precision": "الدقة",
    "about.precisionDesc": "الاهتمام بالتفاصيل في كل مرحلة من مراحل البناء",
    "about.innovation": "الابتكار",
    "about.innovationDesc": "تبني التقنيات الحديثة والممارسات المستدامة",
    "about.ourExpertise": "خبرتنا",
    "about.engineeringExcellence": "التميز الهندسي",
    "about.expertise1": "مهندسون محترفون مرخصون",
    "about.expertise2": "معرفة تقنية متقدمة",
    "about.expertise3": "معتمدون في أحدث طرق البناء",
    "about.expertise4": "تطوير مهني مستمر",
    "about.projectDelivery": "تسليم المشاريع",
    "about.delivery1": "إنجاز المشاريع في الوقت المحدد",
    "about.delivery2": "تواصل شفاف",
    "about.delivery3": "مراقبة الجودة في كل مرحلة",
    "about.delivery4": "دعم ما بعد الإنجاز",
    "about.whyChooseUs": "لماذا يختارنا العملاء",
    "about.projectsCompleted": "مشروع مكتمل",
    "about.yearsExperience": "سنوات خبرة",
    "about.clientSatisfaction": "رضا العملاء",
    
    // Projects
    "projects.title": "مشاريعنا",
    "projects.subtitle": "استكشف محفظة مشاريعنا المكتملة بنجاح في جميع أنحاء الأردن",
    "projects.viewAll": "عرض جميع المشاريع",
    "projects.residential": "سكني",
    "projects.commercial": "تجاري",
    "projects.industrial": "صناعي",
    "projects.all": "الكل",
    "projects.gallery": "معرض المشاريع",
    "projects.gallerySubtitle": "تصفح مشاريعنا المكتملة - انقر على أي صورة لعرضها بالحجم الكامل",
    
    // Service Details
    "serviceDetails.overview": "نظرة عامة على الخدمة",
    "serviceDetails.features": "المميزات الرئيسية",
    "serviceDetails.process": "خطوات العمل",
    "serviceDetails.gallery": "معرض المشاريع",
    "serviceDetails.faq": "الأسئلة الشائعة",
    "serviceDetails.cta": "هل أنت مستعد للبدء بهذه الخدمة؟",
    "serviceDetails.contactUs": "تواصل معنا الآن",
    "serviceDetails.backToServices": "العودة للخدمات",
    
    // Blog
    "blog.title": "رؤى وتحديثات",
    "blog.subtitle": "استكشف مدونتنا المهنية التي تضم نصائح البناء واتجاهات التصميم وحلول الإيبوكسي والعزل ولمحات من وراء الكواليس لأحدث مشاريعنا في الأردن. يتم تحديثها بانتظام من قبل فريقنا الهندسي.",
    "blog.viewAll": "عرض جميع المقالات",
    "blog.readMore": "اقرأ المزيد",
    "blog.by": "بواسطة",
    "blog.allArticles": "جميع المقالات",
    "blog.tags": "الوسوم",
    "blog.relatedArticles": "مقالات ذات صلة",
    "blog.shareArticle": "مشاركة المقال",
    "blog.likeArticle": "إعجاب",
    "blog.comments": "التعليقات",
    "blog.leaveComment": "اترك تعليق",
    "blog.yourName": "اسمك",
    "blog.yourEmail": "بريدك الإلكتروني",
    "blog.yourComment": "تعليقك",
    "blog.postComment": "نشر التعليق",
    "blog.commentSuccess": "تم نشر التعليق بنجاح!",
    "blog.likeSuccess": "شكراً لإعجابك بهذا المقال!",
    "blog.shareSuccess": "تم نسخ الرابط إلى الحافظة!",
    "blog.backToBlog": "العودة للمدونة",
    
    // Contact
    "contact.title": "اتصل بنا",
    "contact.subtitle": "تواصل مع فريقنا لمناقشة متطلبات مشروعك",
    "contact.cta": "هل أنت مستعد لبدء مشروعك؟",
    "contact.ctaText": "تواصل مع فريق الخبراء لدينا اليوم للحصول على استشارة مجانية وعرض سعر",
    "contact.callNow": "اتصل الآن",
    "contact.phone": "الهاتف",
    "contact.email": "البريد الإلكتروني",
    "contact.location": "الموقع",
    "contact.workingHours": "ساعات العمل",
    
    // Footer
    "footer.description": "نبني الغد، اليوم. رواد حلول البناء والتشطيبات في الأردن.",
    "footer.quickLinks": "روابط سريعة",
    "footer.services": "خدماتنا",
    "footer.contactUs": "اتصل بنا",
    "footer.signature": "المهندس محمد النسور",
    
    // Testimonials
    "testimonials.title": "آراء عملائنا",
    "testimonials.subtitle": "استمع إلى عملائنا الراضين حول تجربتهم في العمل معنا",
    
    // Stats
    "stats.projectsCompleted": "مشروع مكتمل",
    "stats.yearsExperience": "سنوات من الخبرة",
    "stats.clientSatisfaction": "رضا العملاء",
    
    // Contact Form
    "form.name": "الاسم الكامل",
    "form.phone": "رقم الهاتف",
    "form.email": "البريد الإلكتروني",
    "form.subject": "الموضوع",
    "form.message": "الرسالة",
    "form.send": "إرسال الرسالة",
    "form.sending": "جاري الإرسال...",
    "form.required": "*",
    
    // Common
    "common.readMore": "اقرأ المزيد",
    "common.learnMore": "اعرف المزيد",
    "common.contactUs": "اتصل بنا",
    "common.getStarted": "ابدأ الآن",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "ar";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
