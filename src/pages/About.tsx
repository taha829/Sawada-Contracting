import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-about.jpg";

const About = () => {
  const { t, language } = useLanguage();
  
  const values = [
    {
      icon: Award,
      title: t("about.excellence"),
      description: t("about.excellenceDesc"),
    },
    {
      icon: Users,
      title: t("about.teamwork"),
      description: t("about.teamworkDesc"),
    },
    {
      icon: Target,
      title: t("about.integrity"),
      description: t("about.integrityDesc"),
    },
    {
      icon: TrendingUp,
      title: t("about.innovation"),
      description: t("about.innovationDesc"),
    },
  ];

  return (
    <div className={`min-h-screen pt-16 ${language === "ar" ? "rtl font-sans" : ""}`}>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 typing-animation">
            {t("about.title") || (language === "ar" ? "من نحن" : "About Us")}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {t("about.subtitle") || (language === "ar" ? "شركة رائدة في مجال البناء والتشطيب في الأردن" : "A leading company in construction and finishing in Jordan")}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">{t("about.ourStory") || (language === "ar" ? "قصة شركتنا" : "Our Story")}</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p className="animate-fade-in">
                {t("about.story1") || (language === "ar" ? "تأسست شركتنا عام 2010 على يد المهندس طه سوادا، الذي كان لديه رؤية واضحة لتقديم خدمات بناء وتشطيب عالية الجودة في الأردن." : "Our company was founded in 2010 by Engineer Taha Swaida, who had a clear vision to provide high-quality construction and finishing services in Jordan.")}
              </p>
              <p className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                {t("about.story2") || (language === "ar" ? "بعد أكثر من عقد من العمل، أصبحنا من الشركات الرائدة في مجال البناء والتشطيب، حيث أكملنا مئات المشاريع السكنية والتجارية في جميع أنحاء المملكة." : "After more than a decade of work, we have become one of the leading companies in the construction and finishing sector, having completed hundreds of residential and commercial projects across the kingdom.")}
              </p>
              <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {t("about.story3") || (language === "ar" ? "نحن نؤمن بأهمية الجودة والدقة في كل تفصيلة، ونسعى دائماً لتقديم أفضل الخدمات التي تلبي توقعات عملائنا." : "We believe in the importance of quality and precision in every detail, and we always strive to provide the best services that meet our clients' expectations.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t("about.ourValues") || (language === "ar" ? "قيمنا" : "Our Values")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("about.valuesSubtitle") || (language === "ar" ? "الأسس التي بنت عليها شركتنا سمعتها" : "The foundations on which our company built its reputation")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-8 pb-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
                  <h3 className="font-semibold text-xl mb-2">{value.title || (language === "ar" ? (value.icon === Award ? "التميز" : value.icon === Users ? "العمل الجماعي" : value.icon === Target ? "النزاهة" : "الابتكار") : (value.icon === Award ? "Excellence" : value.icon === Users ? "Teamwork" : value.icon === Target ? "Integrity" : "Innovation"))}</h3>
                  <p className="text-muted-foreground">{value.description || (language === "ar" ? (value.icon === Award ? "نلتزم بتقديم أعلى مستويات الجودة في جميع مشاريعنا" : value.icon === Users ? "نحن فريق متكامل يعمل بتناغم لتحقيق أفضل النتائج" : value.icon === Target ? "نحن نؤمن بالشفافية والأخلاق في التعامل مع عملائنا" : "نستخدم أحدث التقنيات والأساليب في أعمالنا") : (value.icon === Award ? "We are committed to providing the highest levels of quality in all our projects" : value.icon === Users ? "We are a cohesive team working in harmony to achieve the best results" : value.icon === Target ? "We believe in transparency and ethics in dealing with our clients" : "We use the latest technologies and methods in our work"))}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">{t("about.ourExpertise") || (language === "ar" ? "خبراتنا" : "Our Expertise")}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-2xl font-semibold mb-4 text-primary">{t("about.engineeringExcellence") || (language === "ar" ? "التميز الهندسي" : "Engineering Excellence")}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• {t("about.expertise1") || (language === "ar" ? "تصميم هيكلي متطور" : "Advanced structural design")}</li>
                  <li>• {t("about.expertise2") || (language === "ar" ? "إدارة المشاريع بكفاءة" : "Efficient project management")}</li>
                  <li>• {t("about.expertise3") || (language === "ar" ? "استخدام مواد عالية الجودة" : "Use of high-quality materials")}</li>
                  <li>• {t("about.expertise4") || (language === "ar" ? "التزام بالمواعيد النهائية" : "Commitment to deadlines")}</li>
                </ul>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-2xl font-semibold mb-4 text-secondary">{t("about.projectDelivery") || (language === "ar" ? "تسليم المشاريع" : "Project Delivery")}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• {t("about.delivery1") || (language === "ar" ? "التخطيط الدقيق" : "Detailed planning")}</li>
                  <li>• {t("about.delivery2") || (language === "ar" ? "مراقبة الجودة" : "Quality monitoring")}</li>
                  <li>• {t("about.delivery3") || (language === "ar" ? "إشراف فني" : "Technical supervision")}</li>
                  <li>• {t("about.delivery4") || (language === "ar" ? "خدمة ما بعد البيع" : "After-sales service")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {t("about.whyChooseUs") || (language === "ar" ? "لماذا تختارنا" : "Why Choose Us")} */}
      <section className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">{t("about.whyChooseUs") || (language === "ar" ? "لماذا تختارنا" : "Why Choose Us")}</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-5xl font-bold mb-2">500+</div>
                <p className="text-xl">{t("about.projectsCompleted")}</p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-5xl font-bold mb-2">20+</div>
                <p className="text-xl">{t("about.yearsExperience")}</p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="text-5xl font-bold mb-2">100%</div>
                <p className="text-xl">{t("about.clientSatisfaction")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t("about.team") || (language === "ar" ? "فريقنا" : "Our Team")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("about.teamSubtitle") || (language === "ar" ? "الخبرة والابتكار في خدمتكم" : "Experience and innovation at your service")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">50+</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">{t("about.experts") || (language === "ar" ? "خبير" : "Expert")}</h3>
              <p className="text-muted-foreground">{t("about.expertsDesc") || (language === "ar" ? "خبراء متخصصين في مجال البناء والتشطيب" : "Specialized experts in construction and finishing")}</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">15+</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">{t("about.years") || (language === "ar" ? "عام من الخبرة" : "Years of Experience")}</h3>
              <p className="text-muted-foreground">{t("about.yearsDesc") || (language === "ar" ? "سنوات من الخبرة في سوق البناء الأردني" : "Years of experience in the Jordanian construction market")}</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">500+</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">{t("about.projects") || (language === "ar" ? "مشروع مكتمل" : "Completed Projects")}</h3>
              <p className="text-muted-foreground">{t("about.projectsDesc") || (language === "ar" ? "مشروع مكتمل بنجاح في جميع أنحاء الأردن" : "Successfully completed projects across Jordan")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
