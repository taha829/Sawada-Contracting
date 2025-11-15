import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StatsCounter } from "@/components/StatsCounter";
import { 
  CheckCircle2, 
  Hammer, 
  Palette, 
  ShieldCheck, 
  Droplets, 
  Layers,
  PenTool,
  ArrowRight,
  Calendar,
  Star,
  Quote
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-construction.jpg";
import projectInterior from "@/assets/project-interior.jpg";
import projectEpoxy from "@/assets/project-epoxy.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";

const Home = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Hammer, title: t("services.contracting") },
    { icon: Palette, title: t("services.finishing") },
    { icon: PenTool, title: t("services.painting") },
    { icon: Droplets, title: t("services.waterproofing") },
    { icon: Layers, title: t("services.epoxy") },
    { icon: ShieldCheck, title: t("services.design") },
  ];

  const features = [
    t("whyUs.feature1"),
    t("whyUs.feature2"),
    t("whyUs.feature3"),
    t("whyUs.feature4"),
  ];

  const projects = [
    { image: projectInterior, title: "Luxury Villa Interior Finishing", category: t("projects.residential") },
    { image: projectEpoxy, title: "Industrial Epoxy Flooring", category: t("projects.commercial") },
    { image: projectCommercial, title: "Commercial Building Insulation", category: t("projects.industrial") },
  ];

  const blogPosts = [
    {
      title: "Epoxy Flooring: The Smart Solution for Industrial Spaces",
      excerpt: "Discover why epoxy flooring is the perfect choice for warehouses, showrooms, and workshops across Jordan.",
      date: "March 15, 2024",
      author: "Eng. Ahmad Sawada",
      tags: ["Epoxy", "Industrial"],
    },
    {
      title: "Modern Finishing Materials for Luxury Villas",
      excerpt: "Explore the latest trends in high-end residential finishes and how to choose the right materials for your project.",
      date: "March 10, 2024",
      author: "Eng. Sarah Mahmoud",
      tags: ["Finishing", "Design"],
    },
    {
      title: "Waterproofing Best Practices for Jordan's Climate",
      excerpt: "Essential waterproofing techniques to protect your building from Jordan's seasonal weather patterns.",
      date: "March 5, 2024",
      author: "Eng. Omar Hassan",
      tags: ["Waterproofing", "Construction"],
    },
  ];

  const testimonials = [
    {
      name: "أحمد المحمود",
      nameEn: "Ahmad Al-Mahmoud",
      role: "صاحب فيلا",
      roleEn: "Villa Owner",
      rating: 5,
      review: "عمل احترافي من الدرجة الأولى. فريق سوادا أنجز مشروع فيلتي في الوقت المحدد وبجودة استثنائية.",
      reviewEn: "First-class professional work. Sawada team completed my villa project on time with exceptional quality.",
    },
    {
      name: "سارة العمري",
      nameEn: "Sarah Al-Omari",
      role: "مديرة مشروع تجاري",
      roleEn: "Commercial Project Manager",
      rating: 5,
      review: "أفضل شركة مقاولات تعاملت معها. الشفافية والجودة والالتزام بالمواعيد كانت ممتازة.",
      reviewEn: "Best contracting company I have worked with. Transparency, quality, and punctuality were excellent.",
    },
    {
      name: "خالد الزعبي",
      nameEn: "Khaled Al-Zoubi",
      role: "مدير مصنع",
      roleEn: "Factory Manager",
      rating: 5,
      review: "أرضيات الإيبوكسي التي قاموا بتركيبها في مصنعنا رائعة. متينة وسهلة التنظيف وبمظهر احترافي.",
      reviewEn: "The epoxy flooring they installed in our factory is amazing. Durable, easy to clean, and professional-looking.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 typing-animation">
            {t("hero.title")}
          </h1>
          <p className="text-2xl md:text-3xl mb-4 animate-fade-in mx-auto max-w-4xl" style={{ animationDelay: "0.3s" }}>
            {t("hero.subtitle")}
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in whitespace-pre-line" style={{ animationDelay: "0.4s" }}>
            {t("hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button size="lg" asChild>
              <Link to="/contact">{t("nav.getQuote")}</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/projects">{t("hero.viewProjects")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t("whyUs.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("whyUs.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
                  <p className="font-semibold">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Counter */}
      <StatsCounter />

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t("services.title")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("services.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                {t("services.viewAll")} <ArrowRight className="ml-2 rtl:mr-2 rtl:ml-0 h-5 w-5 rtl:rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t("projects.title")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("projects.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-4">
                  <span className="text-sm text-primary font-semibold">{project.category}</span>
                  <h3 className="font-semibold text-lg mt-2">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/projects">{t("projects.viewAll")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t("blog.title")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("blog.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-muted px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{t("blog.by")} {post.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">{t("blog.viewAll")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t("testimonials.title")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("testimonials.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <Quote className="h-10 w-10 text-primary mb-4 opacity-20" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{t("nav.home") === "Home" ? testimonial.reviewEn : testimonial.review}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{t("nav.home") === "Home" ? testimonial.nameEn : testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{t("nav.home") === "Home" ? testimonial.roleEn : testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">{t("contact.cta")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t("contact.ctaText")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">{t("common.contactUs")}</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-foreground" asChild>
              <a href="tel:0782633162">{t("contact.callNow")}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
