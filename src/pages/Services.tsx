import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Hammer, 
  Palette, 
  PenTool, 
  Droplets, 
  Layers, 
  ShieldCheck 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-services.jpg";

const Services = () => {
  const { t, language } = useLanguage();
  
  const services = [
    {
      slug: "general-contracting",
      icon: Hammer,
      title: {
        en: "General Contracting & Project Management",
        ar: "المقاولات العامة وإدارة المشاريع"
      },
      description: {
        en: "End-to-end project delivery from planning to completion. We manage all aspects of construction including scheduling, budgeting, quality control, and coordination with subcontractors.",
        ar: "تسليم المشروع من البداية إلى النهاية من التخطيط إلى الإنجاز. ندير جميع جوانب البناء بما في ذلك الجدولة والميزانية ومراقبة الجودة والتنسيق مع المقاولين من الباطن."
      },
      features: [
        {
          en: "Complete project planning and scheduling",
          ar: "تخطيط وجدولة كاملة للمشروع"
        },
        {
          en: "Budget management and cost control",
          ar: "إدارة الميزانية والتحكم بالتكاليف"
        },
        {
          en: "Contractor and subcontractor coordination",
          ar: "تنسيق المقاولين والمقاولين من الباطن"
        },
        {
          en: "Quality assurance and safety compliance",
          ar: "ضمان الجودة والامتثال للسلامة"
        },
        {
          en: "Regular progress reporting",
          ar: "تقارير دورية عن التقدم"
        },
      ],
    },
    {
      slug: "interior-exterior",
      icon: Palette,
      title: {
        en: "Interior & Exterior Finishes",
        ar: "التشطيبات الداخلية والخارجية"
      },
      description: {
        en: "High-quality finishing work that transforms spaces. From residential villas to commercial buildings, we deliver exceptional craftsmanship in all finishing applications.",
        ar: "أعمال تشطيب عالية الجودة تحول المساحات. من الفلل السكنية إلى المباني التجارية، نقدم حرفية استثنائية في جميع تطبيقات التشطيب."
      },
      features: [
        {
          en: "Premium paint applications",
          ar: "تطبيقات دهان فاخرة"
        },
        {
          en: "Gypsum board and false ceiling work",
          ar: "أعمال الجبس بورد والأسقف المستعارة"
        },
        {
          en: "Tile and stone installation",
          ar: "تركيب البلاط والحجر"
        },
        {
          en: "Wooden flooring and carpentry",
          ar: "الأرضيات الخشبية والنجارة"
        },
        {
          en: "Facade finishing and cladding",
          ar: "تشطيب الواجهات والكسوة"
        },
      ],
    },
    {
      slug: "decorative-painting",
      icon: PenTool,
      title: {
        en: "Decorative Painting & Design Works",
        ar: "أعمال الدهانات الديكورية والتصميم"
      },
      description: {
        en: "Creative decorative solutions that add character and elegance to your spaces. Our skilled artisans bring artistic vision to life with expert execution.",
        ar: "حلول ديكورية إبداعية تضيف طابعاً وأناقة لمساحاتك. يحقق حرفيونا المهرة الرؤية الفنية بتنفيذ خبير."
      },
      features: [
        {
          en: "Decorative wall painting techniques",
          ar: "تقنيات الدهان الجداري الديكوري"
        },
        {
          en: "Texture and pattern applications",
          ar: "تطبيقات الملمس والنقوش"
        },
        {
          en: "Color consultation and planning",
          ar: "استشارات وتخطيط الألوان"
        },
        {
          en: "Specialty coatings and finishes",
          ar: "طلاءات وتشطيبات خاصة"
        },
        {
          en: "Custom design implementation",
          ar: "تنفيذ التصاميم المخصصة"
        },
      ],
    },
    {
      slug: "waterproofing",
      icon: Droplets,
      title: {
        en: "Waterproofing & Thermal Insulation",
        ar: "العزل المائي والحراري"
      },
      description: {
        en: "Protect your investment with professional waterproofing and insulation services. We use industry-leading materials and techniques suited for Jordan's climate.",
        ar: "احمِ استثمارك بخدمات العزل المائي والحراري الاحترافية. نستخدم مواد وتقنيات رائدة في الصناعة مناسبة لمناخ الأردن."
      },
      features: [
        {
          en: "Roof and terrace waterproofing",
          ar: "عزل الأسطح والشرفات"
        },
        {
          en: "Basement and foundation sealing",
          ar: "عزل الأقبية والأساسات"
        },
        {
          en: "Bathroom and wet area protection",
          ar: "حماية الحمامات والمناطق الرطبة"
        },
        {
          en: "Thermal insulation installation",
          ar: "تركيب العزل الحراري"
        },
        {
          en: "Moisture barrier systems",
          ar: "أنظمة حواجز الرطوبة"
        },
      ],
    },
    {
      slug: "epoxy-flooring",
      icon: Layers,
      title: {
        en: "Epoxy Flooring & Industrial Coatings",
        ar: "أرضيات الإيبوكسي والطلاءات الصناعية"
      },
      description: {
        en: "Durable, attractive flooring solutions for industrial, commercial, and residential applications. Our epoxy systems provide long-lasting protection and aesthetic appeal.",
        ar: "حلول أرضيات متينة وجذابة للتطبيقات الصناعية والتجارية والسكنية. توفر أنظمة الإيبوكسي لدينا حماية طويلة الأمد وجاذبية جمالية."
      },
      features: [
        {
          en: "Industrial-grade epoxy floors",
          ar: "أرضيات إيبوكسي صناعية"
        },
        {
          en: "Decorative epoxy finishes",
          ar: "تشطيبات إيبوكسي ديكورية"
        },
        {
          en: "Anti-slip coating applications",
          ar: "تطبيقات طلاء مضاد للانزلاق"
        },
        {
          en: "Chemical-resistant surfaces",
          ar: "أسطح مقاومة للمواد الكيميائية"
        },
        {
          en: "Floor preparation and leveling",
          ar: "تحضير وتسوية الأرضيات"
        },
      ],
    },
    {
      slug: "design",
      icon: ShieldCheck,
      title: {
        en: "Architectural & Interior Design",
        ar: "التصميم المعماري والداخلي"
      },
      description: {
        en: "Professional design services that blend functionality with aesthetics. Our experienced designers create spaces that work beautifully for your needs.",
        ar: "خدمات تصميم احترافية تمزج الوظيفة مع الجماليات. يبتكر مصممونا ذوو الخبرة مساحات تعمل بشكل جميل لاحتياجاتك."
      },
      features: [
        {
          en: "Architectural planning and design",
          ar: "التخطيط والتصميم المعماري"
        },
        {
          en: "Interior space planning",
          ar: "تخطيط المساحات الداخلية"
        },
        {
          en: "3D visualization and rendering",
          ar: "التصور ثلاثي الأبعاد والرندرة"
        },
        {
          en: "Material selection guidance",
          ar: "إرشاد اختيار المواد"
        },
        {
          en: "Design-build coordination",
          ar: "تنسيق التصميم والبناء"
        },
      ],
    },
  ];


  return (
    <div className={`min-h-screen pt-16 ${language === "ar" ? "rtl font-arabic" : ""}`}>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 typing-animation">
            {t("services.title")}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Link to={`/services/${service.slug}`} key={index}>
                <Card className="overflow-hidden card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className={index % 2 === 0 ? "bg-muted/50" : ""}>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 icon-border">
                        <service.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{service.title[language]}</CardTitle>
                        <p className="text-muted-foreground">{service.description[language]}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-3">{language === "ar" ? "المميزات الرئيسية:" : "Key Features:"}</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-muted-foreground">{feature[language]}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center gap-2 text-primary font-semibold">
                      {language === "ar" ? "اعرف المزيد" : "Learn More"} <span>{language === "ar" ? "←" : "→"}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">{language === "ar" ? "هل أنت مستعد للبدء؟" : "Ready to Get Started?"}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === "ar" ? "تواصل معنا اليوم لمناقشة متطلبات مشروعك والحصول على عرض سعر مفصل" : "Contact us today to discuss your project requirements and receive a detailed quote"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">{language === "ar" ? "احصل على عرض سعر" : "Get a Quote"}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/projects">{language === "ar" ? "عرض أعمالنا" : "View Our Work"}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
