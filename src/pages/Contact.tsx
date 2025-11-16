import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-contact.jpg";

const Contact = () => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(t("contact.successMessage"));
    setIsSubmitting(false);
    e.currentTarget.reset();
  };

  return (
    <div className={`min-h-screen pt-16 ${language === "ar" ? "rtl" : ""}`}>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className={`relative z-10 container mx-auto px-4 text-center text-white ${language === "ar" ? "font-arabic" : ""}`}>
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 typing-animation ${language === "ar" ? "font-bold" : ""}`}>
            {t("contact.title")}
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in ${language === "ar" ? "font-arabic" : ""}`} style={{ animationDelay: "0.3s" }}>
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${language === "ar" ? "font-arabic text-right" : ""}`}>{t("contact.formTitle")}</h2>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className={`block text-sm font-medium mb-2 ${language === "ar" ? "text-right" : ""}`}>
                          {t("contact.nameRequired")}
                        </label>
                        <Input id="name" name="name" required className={language === "ar" ? "text-right" : ""} />
                      </div>
                      <div>
                        <label htmlFor="phone" className={`block text-sm font-medium mb-2 ${language === "ar" ? "text-right" : ""}`}>
                          {t("contact.phoneRequired")}
                        </label>
                        <Input id="phone" name="phone" type="tel" required className={language === "ar" ? "text-right" : ""} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium mb-2 ${language === "ar" ? "text-right" : ""}`}>
                        {t("contact.emailRequired")}
                      </label>
                      <Input id="email" name="email" type="email" required className={language === "ar" ? "text-right" : ""} />
                    </div>
                    <div>
                      <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${language === "ar" ? "text-right" : ""}`}>
                        {t("contact.subjectRequired")}
                      </label>
                      <Input id="subject" name="subject" required className={language === "ar" ? "text-right" : ""} />
                    </div>
                    <div>
                      <label htmlFor="message" className={`block text-sm font-medium mb-2 ${language === "ar" ? "text-right" : ""}`}>
                        {t("contact.messageRequired")}
                      </label>
                      <Textarea id="message" name="message" rows={6} required className={language === "ar" ? "text-right" : ""} />
                    </div>
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? t("contact.sending") : t("contact.send")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${language === "ar" ? "font-arabic text-right" : ""}`}>{t("contact.infoTitle")}</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className={`flex items-start gap-4 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className={language === "ar" ? "text-right" : ""}>
                        <h3 className={`font-semibold mb-1 ${language === "ar" ? "font-arabic" : ""}`}>{t("contact.phoneLabel")}</h3>
                        <a href="tel:0790820045" className="text-muted-foreground hover:text-primary transition-colors">
                          0790820045
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              <Card className="card-hover">
                  <CardContent className="pt-6">
                    <div className={`flex items-start gap-4 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div className={language === "ar" ? "text-right" : ""}>
                        <h3 className={`font-semibold mb-1 ${language === "ar" ? "font-arabic" : ""}`}>{t("contact.emailLabel")}</h3>
                        <a
                          href="mailto:info@sawada-contracting.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@sawada-contracting.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              <Card className="card-hover">
                  <CardContent className="pt-6">
                    <div className={`flex items-start gap-4 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className={language === "ar" ? "text-right" : ""}>
                        <h3 className={`font-semibold mb-1 ${language === "ar" ? "font-arabic" : ""}`}>{t("contact.locationLabel")}</h3>
                        <p className="text-muted-foreground">Amman, Jordan</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              <Card className="card-hover">
                  <CardContent className="pt-6">
                    <div className={`flex items-start gap-4 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div className={language === "ar" ? "text-right" : ""}>
                        <h3 className={`font-semibold mb-1 ${language === "ar" ? "font-arabic" : ""}`}>{t("contact.hoursLabel")}</h3>
                        <p className={`text-muted-foreground whitespace-pre-line ${language === "ar" ? "font-arabic" : ""}`}>
                          {t("contact.hours")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-gradient py-20">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-8 text-center ${language === "ar" ? "font-arabic" : ""}`}>{t("contact.mapTitle")}</h2>
          <div className="bg-muted h-96 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Map would be embedded here</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
