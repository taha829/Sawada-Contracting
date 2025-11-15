import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Hammer, 
  Palette, 
  PenTool, 
  Droplets, 
  Layers, 
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  ChevronLeft
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from "@/assets/hero-services.jpg";

const ServiceDetails = () => {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  
  const services = {
    "general-contracting": {
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
      process: [
        {
          step: "1",
          title: { en: "Initial Consultation", ar: "الاستشارة الأولية" },
          description: { en: "We meet with you to understand your vision and requirements", ar: "نلتقي معك لفهم رؤيتك ومتطلباتك" }
        },
        {
          step: "2",
          title: { en: "Planning & Design", ar: "التخطيط والتصميم" },
          description: { en: "Detailed project planning and design development", ar: "تخطيط مفصل للمشروع وتطوير التصميم" }
        },
        {
          step: "3",
          title: { en: "Execution", ar: "التنفيذ" },
          description: { en: "Professional execution with quality control", ar: "تنفيذ احترافي مع مراقبة الجودة" }
        },
        {
          step: "4",
          title: { en: "Completion & Handover", ar: "الإنجاز والتسليم" },
          description: { en: "Final inspection and project handover", ar: "فحص نهائي وتسليم المشروع" }
        }
      ],
      faq: [
        {
          question: { en: "What is the typical project timeline?", ar: "ما هو الجدول الزمني النموذجي للمشروع؟" },
          answer: { en: "Project timelines vary based on scope and complexity. We provide detailed schedules during the planning phase.", ar: "تختلف الجداول الزمنية للمشاريع بناءً على النطاق والتعقيد. نقدم جداول زمنية مفصلة خلال مرحلة التخطيط." }
        },
        {
          question: { en: "Do you handle all permits and licenses?", ar: "هل تتعاملون مع جميع التصاريح والرخص؟" },
          answer: { en: "Yes, we handle all necessary permits and ensure full compliance with local regulations.", ar: "نعم، نتعامل مع جميع التصاريح اللازمة ونضمن الامتثال الكامل للوائح المحلية." }
        },
        {
          question: { en: "What warranty do you provide?", ar: "ما هي الضمانات التي تقدمونها؟" },
          answer: { en: "We provide comprehensive warranties on all our work, with specific terms based on the project type.", ar: "نقدم ضمانات شاملة على جميع أعمالنا، مع شروط محددة بناءً على نوع المشروع." }
        }
      ]
    },
    "interior-exterior": {
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
      process: [
        {
          step: "1",
          title: { en: "Site Assessment", ar: "تقييم الموقع" },
          description: { en: "Comprehensive evaluation of the space", ar: "تقييم شامل للمساحة" }
        },
        {
          step: "2",
          title: { en: "Material Selection", ar: "اختيار المواد" },
          description: { en: "Choose from premium finishing materials", ar: "اختر من مواد التشطيب الفاخرة" }
        },
        {
          step: "3",
          title: { en: "Installation", ar: "التركيب" },
          description: { en: "Expert installation with attention to detail", ar: "تركيب احترافي مع الاهتمام بالتفاصيل" }
        },
        {
          step: "4",
          title: { en: "Final Touches", ar: "اللمسات النهائية" },
          description: { en: "Quality inspection and final adjustments", ar: "فحص الجودة والتعديلات النهائية" }
        }
      ],
      faq: [
        {
          question: { en: "What materials do you work with?", ar: "ما هي المواد التي تعملون بها؟" },
          answer: { en: "We work with a wide range of premium materials including imported tiles, stones, wood, and specialty finishes.", ar: "نعمل مع مجموعة واسعة من المواد الفاخرة بما في ذلك البلاط والحجر والخشب المستورد والتشطيبات الخاصة." }
        },
        {
          question: { en: "How long does finishing work take?", ar: "كم يستغرق عمل التشطيب؟" },
          answer: { en: "Timeline depends on project size. A typical villa takes 2-3 months for complete finishing.", ar: "يعتمد الجدول الزمني على حجم المشروع. تستغرق الفيلا النموذجية 2-3 أشهر للتشطيب الكامل." }
        }
      ]
    },
    "decorative-painting": {
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
      process: [
        {
          step: "1",
          title: { en: "Design Consultation", ar: "استشارة التصميم" },
          description: { en: "Discuss your vision and style preferences", ar: "نناقش رؤيتك وتفضيلات الأسلوب" }
        },
        {
          step: "2",
          title: { en: "Color & Texture Selection", ar: "اختيار اللون والملمس" },
          description: { en: "Choose colors and decorative techniques", ar: "اختر الألوان والتقنيات الديكورية" }
        },
        {
          step: "3",
          title: { en: "Application", ar: "التطبيق" },
          description: { en: "Skilled application of decorative finishes", ar: "تطبيق احترافي للتشطيبات الديكورية" }
        },
        {
          step: "4",
          title: { en: "Final Review", ar: "المراجعة النهائية" },
          description: { en: "Ensure perfect finish and satisfaction", ar: "ضمان التشطيب المثالي والرضا" }
        }
      ],
      faq: [
        {
          question: { en: "What decorative techniques do you offer?", ar: "ما هي التقنيات الديكورية التي تقدمونها؟" },
          answer: { en: "We offer venetian plaster, textured finishes, stenciling, murals, and custom decorative painting.", ar: "نقدم الجص الفينيسي، التشطيبات المحكمة، الستنسل، الجداريات، والدهان الديكوري المخصص." }
        }
      ]
    },
    "waterproofing": {
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
      process: [
        {
          step: "1",
          title: { en: "Inspection", ar: "الفحص" },
          description: { en: "Thorough assessment of waterproofing needs", ar: "تقييم شامل لاحتياجات العزل المائي" }
        },
        {
          step: "2",
          title: { en: "Preparation", ar: "التحضير" },
          description: { en: "Surface preparation and repairs", ar: "تحضير السطح والإصلاحات" }
        },
        {
          step: "3",
          title: { en: "Application", ar: "التطبيق" },
          description: { en: "Professional waterproofing application", ar: "تطبيق العزل المائي الاحترافي" }
        },
        {
          step: "4",
          title: { en: "Testing", ar: "الاختبار" },
          description: { en: "Quality testing and verification", ar: "اختبار الجودة والتحقق" }
        }
      ],
      faq: [
        {
          question: { en: "How long does waterproofing last?", ar: "كم يدوم العزل المائي؟" },
          answer: { en: "With proper application and maintenance, our waterproofing systems last 10-15 years or more.", ar: "مع التطبيق الصحيح والصيانة، تدوم أنظمة العزل المائي لدينا من 10 إلى 15 عاماً أو أكثر." }
        }
      ]
    },
    "epoxy-flooring": {
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
      process: [
        {
          step: "1",
          title: { en: "Surface Evaluation", ar: "تقييم السطح" },
          description: { en: "Assess floor condition and requirements", ar: "تقييم حالة الأرضية والمتطلبات" }
        },
        {
          step: "2",
          title: { en: "Preparation", ar: "التحضير" },
          description: { en: "Grinding, cleaning, and surface prep", ar: "الطحن والتنظيف وتحضير السطح" }
        },
        {
          step: "3",
          title: { en: "Application", ar: "التطبيق" },
          description: { en: "Professional epoxy application", ar: "تطبيق الإيبوكسي الاحترافي" }
        },
        {
          step: "4",
          title: { en: "Curing & Finishing", ar: "المعالجة والتشطيب" },
          description: { en: "Proper curing and final coating", ar: "المعالجة الصحيحة والطبقة النهائية" }
        }
      ],
      faq: [
        {
          question: { en: "How durable is epoxy flooring?", ar: "ما مدى متانة أرضيات الإيبوكسي؟" },
          answer: { en: "Epoxy floors are extremely durable and can last 10-20 years with proper maintenance.", ar: "أرضيات الإيبوكسي متينة للغاية ويمكن أن تدوم من 10 إلى 20 عاماً مع الصيانة المناسبة." }
        }
      ]
    },
    "design": {
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
      process: [
        {
          step: "1",
          title: { en: "Consultation", ar: "الاستشارة" },
          description: { en: "Understand your vision and requirements", ar: "فهم رؤيتك ومتطلباتك" }
        },
        {
          step: "2",
          title: { en: "Concept Development", ar: "تطوير المفهوم" },
          description: { en: "Create initial design concepts", ar: "إنشاء مفاهيم التصميم الأولية" }
        },
        {
          step: "3",
          title: { en: "Design Refinement", ar: "تحسين التصميم" },
          description: { en: "Refine and finalize the design", ar: "تحسين وإتمام التصميم" }
        },
        {
          step: "4",
          title: { en: "Implementation", ar: "التنفيذ" },
          description: { en: "Coordinate design implementation", ar: "تنسيق تنفيذ التصميم" }
        }
      ],
      faq: [
        {
          question: { en: "Do you provide 3D renderings?", ar: "هل تقدمون تصاميم ثلاثية الأبعاد؟" },
          answer: { en: "Yes, we create detailed 3D renderings to help you visualize the final design.", ar: "نعم، ننشئ تصاميم ثلاثية الأبعاد مفصلة لمساعدتك على تصور التصميم النهائي." }
        }
      ]
    }
  };

  const service = services[slug as keyof typeof services];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-fade-in"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 container mx-auto px-4">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-white mb-6 hover:text-primary transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            {t("serviceDetails.backToServices")}
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center icon-border">
              <ServiceIcon className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white typing-animation">
              {service.title[language]}
            </h1>
          </div>
          <p className="text-xl text-white max-w-3xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {service.description[language]}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview">{t("serviceDetails.overview")}</TabsTrigger>
              <TabsTrigger value="process">{t("serviceDetails.process")}</TabsTrigger>
              <TabsTrigger value="faq">{t("serviceDetails.faq")}</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card className="animate-slide-up">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">{t("serviceDetails.features")}</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3 animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <span className="text-lg">{feature[language]}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="process" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.process.map((step, index) => (
                  <Card 
                    key={index} 
                    className="animate-slide-up card-hover"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                        <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-center">{step.title[language]}</h3>
                      <p className="text-muted-foreground text-center">{step.description[language]}</p>
                      {index < service.process.length - 1 && (
                        <ArrowRight className="h-6 w-6 text-primary mx-auto mt-4 hidden lg:block" />
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="faq">
              <Card className="animate-slide-up">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">{t("serviceDetails.faq")}</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {service.faq.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-semibold">
                          {item.question[language]}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base">
                          {item.answer[language]}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">{t("serviceDetails.cta")}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">{t("serviceDetails.contactUs")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
