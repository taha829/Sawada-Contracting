import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/swada.png";
import { useState, useEffect } from "react";

const Footer = () => {
  const { t, language } = useLanguage();
  const [arrowPosition, setArrowPosition] = useState(0);
  const [balloonPosition, setBalloonPosition] = useState(0);

  // Translation keys for footer
  const footerTranslations = {
    quickLinks: language === "ar" ? "روابط سريعة" : "Quick Links",
    ourServices: language === "ar" ? "خدماتنا" : "Our Services",
    contactUs: language === "ar" ? "تواصل معنا" : "Contact Us",
    followUs: language === "ar" ? "تابعنا" : "Follow Us",
    address: language === "ar" ? "العنوان" : "Address",
    phone: language === "ar" ? "هاتف" : "Phone",
    email: language === "ar" ? "بريد إلكتروني" : "Email",
    generalContracting: language === "ar" ? "العقود العامة" : "General Contracting",
    interiorFinishes: language === "ar" ? "التشطيبات الداخلية" : "Interior Finishes",
    decorativePainting: language === "ar" ? "الطلاء الزخرفي" : "Decorative Painting",
    waterproofing: language === "ar" ? "العزل المائي" : "Waterproofing",
    epoxyFlooring: language === "ar" ? "أسقف الإيبوكسي" : "Epoxy Flooring",
    architecturalDesign: language === "ar" ? "التصميم المعماري" : "Architectural Design",
    developedBy: language === "ar" ? "تم تطوير بواسطة" : "Developed by",
    khatibForSoftware: language === "ar" ? "خطيب للبرمجيات" : "Khatib for Software",
    visitWebsite: language === "ar" ? "زر موقعنا الإلكتروني" : "Visit our website",
    allRightsReserved: language === "ar" ? " جميع الحقوق محفوظة © 2023" : " All Rights Reserved © 2023"
  };

  useEffect(() => {
    const animateArrow = () => {
      setArrowPosition(prev => (prev >= 10 ? 0 : prev + 1));
    };

    const animateBalloon = () => {
      setBalloonPosition(prev => (prev >= 20 ? 0 : prev + 1));
    };

    const arrowInterval = setInterval(animateArrow, 100);
    const balloonInterval = setInterval(animateBalloon, 200);

    return () => {
      clearInterval(arrowInterval);
      clearInterval(balloonInterval);
    };
  }, []);

  return (
    <>
      {/* ---------------------- MAIN FOOTER ---------------------- */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Company Info */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
                <img src={logo} alt="Sawada Logo" className="h-16 w-auto" />
              </Link>
              <p className="text-muted-foreground text-sm">
                {language === "ar" ? "رواد حلول البناء والتشطيبات والتصميم في عمّان، الأردن. من الأساسات إلى اللمسات النهائية، موثوق، في الموعد، ومبني ليدوم." : "Pioneers of construction, finishing, and design solutions in Amman, Jordan. From foundations to final touches, reliable, on time, and built to last."}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">{footerTranslations.quickLinks}</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">{language === "ar" ? "من نحن" : "About Us"}</Link></li>
                <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">{language === "ar" ? "خدماتنا" : "Services"}</Link></li>
                <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">{language === "ar" ? "مشاريعنا" : "Projects"}</Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">{language === "ar" ? "مدونة" : "Blog"}</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">{language === "ar" ? "اتصل بنا" : "Contact"}</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">{footerTranslations.ourServices}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>{footerTranslations.generalContracting}</li>
                <li>{footerTranslations.interiorFinishes}</li>
                <li>{footerTranslations.decorativePainting}</li>
                <li>{footerTranslations.waterproofing}</li>
                <li>{footerTranslations.epoxyFlooring}</li>
                <li>{footerTranslations.architecturalDesign}</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">{footerTranslations.contactUs}</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{language === "ar" ? "عمّان، الأردن" : "Amman, Jordan"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="tel:0782633162" className="text-muted-foreground hover:text-primary transition-colors">
                    0782633162
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="mailto:info@sawada-contracting.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@sawada-contracting.com
                  </a>
                </li>
              </ul>

              <div className="flex gap-3 mt-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Sawada Contracting. {footerTranslations.allRightsReserved}</p>

            <p className="mt-2 text-primary font-semibold">{footerTranslations.developedBy} {footerTranslations.khatibForSoftware}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;