import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Tag, ArrowRight, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/data/blogPosts";
import heroImage from "@/assets/hero-blog.jpg";

type LanguageKey = "en" | "ar";

const Blog = () => {
  const { t, language } = useLanguage();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = {
    en: ["Construction", "Finishing", "Epoxy", "Design", "Waterproofing", "Industrial", "Energy", "Insulation", "Maintenance"],
    ar: ["إنشاءات", "تشطيبات", "إيبوكسي", "تصميم", "عزل مائي", "صناعي", "طاقة", "عزل", "صيانة"]
  };

  const filteredPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts;

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
            {t("blog.title")}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {t("blog.subtitle")}
          </p>
        </div>
      </section>

      {/* Tags Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedTag === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(null)}
            >
              {t("blog.allArticles")}
            </Button>
            {allTags[language].map((tag, index) => (
              <Button
                key={tag}
                variant={selectedTag === allTags.en[index] ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(allTags.en[index])}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.slug} 
                className="card-hover overflow-hidden h-full flex flex-col animate-slide-up shadow-lg border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-64 relative overflow-hidden">
                  <img src={post.image} alt={post.title[language]} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center gap-1 text-xs bg-white/20 backdrop-blur-sm border border-white/30 text-white px-3 py-1.5 rounded-full"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <CardContent className="pt-6 flex-1 flex flex-col p-6">
                  <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors line-clamp-2">
                    {post.title[language]}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-1 line-clamp-3 leading-relaxed">
                    {post.excerpt[language]}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date[language]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime[language]}</span>
                    </div>
                  </div>

                  <Button asChild className="w-full group hover:scale-105 transition-transform" size="lg">
                    <Link to={`/blog/${post.slug}`}>
                      {t("blog.readMore")}
                      <ArrowRight className="ml-2 h-4 w-4 rtl:ml-0 rtl:mr-2 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
