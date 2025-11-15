import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { X } from "lucide-react";
import projectInterior from "@/assets/project-interior.jpg";
import projectEpoxy from "@/assets/project-epoxy.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import heroImage from "@/assets/hero-projects.jpg";

const Projects = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = {
    en: ["All", "Residential", "Commercial", "Industrial"],
    ar: ["الكل", "سكني", "تجاري", "صناعي"]
  };

  const projects = [
    {
      image: projectInterior,
      title: {
        en: "Luxury Villa Interior Finishing",
        ar: "تشطيبات داخلية لفيلا فاخرة"
      },
      category: "Residential",
      categoryAr: "سكني",
      description: {
        en: "High-end interior finishes including decorative painting, gypsum work, and premium flooring for a 500m² villa in Abdoun.",
        ar: "تشطيبات داخلية فاخرة تشمل الدهانات الزخرفية وأعمال الجبس وأرضيات مميزة لفيلا مساحتها 500م² في منطقة عبدون."
      },
      year: "2024",
    },
    {
      image: projectEpoxy,
      title: {
        en: "Industrial Warehouse Epoxy Flooring",
        ar: "أرضيات إيبوكسي لمستودع صناعي"
      },
      category: "Industrial",
      categoryAr: "صناعي",
      description: {
        en: "3000m² of industrial-grade epoxy flooring with anti-slip coating for a major logistics facility.",
        ar: "3000م² من أرضيات الإيبوكسي الصناعية مع طلاء مضاد للانزلاق لمرفق لوجستي رئيسي."
      },
      year: "2024",
    },
    {
      image: projectCommercial,
      title: {
        en: "Commercial Building Waterproofing",
        ar: "العزل المائي لمبنى تجاري"
      },
      category: "Commercial",
      categoryAr: "تجاري",
      description: {
        en: "Complete waterproofing and thermal insulation for a 10-story commercial building in Amman.",
        ar: "عزل مائي وحراري كامل لمبنى تجاري مكون من 10 طوابق في عمان."
      },
      year: "2023",
    },
    {
      image: projectInterior,
      title: {
        en: "Residential Complex Finishing",
        ar: "تشطيبات مجمع سكني"
      },
      category: "Residential",
      categoryAr: "سكني",
      description: {
        en: "Interior and exterior finishing for 24 residential units including painting, tiling, and carpentry work.",
        ar: "تشطيبات داخلية وخارجية لـ 24 وحدة سكنية تشمل الدهان والبلاط وأعمال النجارة."
      },
      year: "2023",
    },
    {
      image: projectCommercial,
      title: {
        en: "Office Fit-Out Project",
        ar: "مشروع تجهيز مكتب"
      },
      category: "Commercial",
      categoryAr: "تجاري",
      description: {
        en: "Modern office interior design and finishing for 800m² corporate office space.",
        ar: "تصميم وتشطيبات داخلية حديثة لمساحة مكتبية شركة مساحتها 800م²."
      },
      year: "2024",
    },
    {
      image: projectEpoxy,
      title: {
        en: "Showroom Decorative Epoxy",
        ar: "إيبوكسي زخرفي لصالة عرض"
      },
      category: "Commercial",
      categoryAr: "تجاري",
      description: {
        en: "Designer epoxy flooring with custom colors and patterns for automotive showroom.",
        ar: "أرضيات إيبوكسي مصممة بألوان ونقوش مخصصة لصالة عرض سيارات."
      },
      year: "2023",
    },
  ];

  const filteredProjects = filter === "All" || filter === "الكل"
    ? projects
    : projects.filter(project => 
        language === "en" ? project.category === filter : project.categoryAr === filter
      );

  const galleryImages = [
    { 
      src: projectInterior, 
      alt: language === "en" ? "Luxury Villa Interior" : "داخلية فيلا فاخرة", 
      category: language === "en" ? "Residential" : "سكني" 
    },
    { 
      src: projectEpoxy, 
      alt: language === "en" ? "Industrial Epoxy Flooring" : "أرضيات إيبوكسي صناعية", 
      category: language === "en" ? "Industrial" : "صناعي" 
    },
    { 
      src: projectCommercial, 
      alt: language === "en" ? "Commercial Building" : "مبنى تجاري", 
      category: language === "en" ? "Commercial" : "تجاري" 
    },
    { 
      src: projectInterior, 
      alt: language === "en" ? "Residential Complex" : "مجمع سكني", 
      category: language === "en" ? "Residential" : "سكني" 
    },
    { 
      src: projectCommercial, 
      alt: language === "en" ? "Office Fit-Out" : "تجهيز مكتب", 
      category: language === "en" ? "Commercial" : "تجاري" 
    },
    { 
      src: projectEpoxy, 
      alt: language === "en" ? "Showroom Decorative Epoxy" : "إيبوكسي زخرفي لصالة عرض", 
      category: language === "en" ? "Commercial" : "تجاري" 
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 typing-animation">
            {t("projects.title")}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {t("projects.subtitle")}
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories[language].map((category) => (
              <Button
                key={category}
                variant={filter === category || (language === "ar" && filter === "All" && category === "الكل") || (language === "en" && filter === "الكل" && category === "All") ? "default" : "outline"}
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden card-hover group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title[language]}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {project.year}
                  </div>
                </div>
                <CardContent className="pt-6">
                  <span className="text-sm text-secondary font-semibold">{language === "en" ? project.category : project.categoryAr}</span>
                  <h3 className="font-semibold text-xl mt-2 mb-3">{project.title[language]}</h3>
                  <p className="text-muted-foreground">{project.description[language]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t("projects.gallery")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("projects.gallerySubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            {language === "en" ? "Start Your Project Today" : "ابدأ مشروعك اليوم"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {language === "en" 
              ? "Let us bring your vision to life with the same quality and dedication" 
              : "دعنا نحول رؤيتك إلى واقع بنفس الجودة والتفاني"}
          </p>
          <Button size="lg" asChild>
            <a href="/contact">{language === "en" ? "Contact Us" : "اتصل بنا"}</a>
          </Button>
        </div>
      </section>

      {/* Image Zoom Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-black/95 border-0">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          {selectedImage && (
            <div className="w-full h-full flex items-center justify-center p-4">
              <img
                src={selectedImage}
                alt="Project"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
