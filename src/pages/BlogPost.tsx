import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Calendar, User, Tag, ThumbsUp, MessageCircle, Share2, ArrowLeft, Clock } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/data/blogPosts";
import heroImage from "@/assets/hero-blogpost.jpg";

const BlogPost = () => {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const [likes, setLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      name: {
        en: "Mohammad Ali",
        ar: "محمد علي"
      },
      date: {
        en: "March 16, 2024",
        ar: "16 مارس 2024"
      },
      comment: {
        en: "Very informative article! We used epoxy flooring in our warehouse and the results have been excellent.",
        ar: "مقال مفيد جداً! استخدمنا أرضيات الإيبوكسي في مستودعنا والنتائج كانت ممتازة."
      },
    },
    {
      id: 2,
      name: {
        en: "Sara Ahmed",
        ar: "سارة أحمد"
      },
      date: {
        en: "March 17, 2024",
        ar: "17 مارس 2024"
      },
      comment: {
        en: "Can you recommend specific brands of epoxy that work well in Jordan's climate?",
        ar: "هل يمكنك التوصية بعلامات تجارية محددة للإيبوكسي تعمل بشكل جيد في مناخ الأردن؟"
      },
    },
  ]);

  // Find the post by slug
  const post = blogPosts.find(p => p.slug === slug);

  // If post not found, redirect to blog page
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts based on shared tags
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug)
    .map(p => ({
      ...p,
      sharedTags: p.tags.filter(tag => post.tags.includes(tag)).length
    }))
    .sort((a, b) => b.sharedTags - a.sharedTags)
    .slice(0, 2);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
      toast.success(t("blog.likeSuccess"));
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title[language],
        text: t("blog.shareArticle"),
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success(t("blog.shareSuccess"));
    }
  };

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const comment = formData.get("comment") as string;

    if (name && comment) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          name: {
            en: name,
            ar: name
          },
          date: {
            en: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
            ar: new Date().toLocaleDateString("ar-JO", { year: "numeric", month: "long", day: "numeric" })
          },
          comment: {
            en: comment,
            ar: comment
          },
        },
      ]);
      e.currentTarget.reset();
      toast.success(t("blog.commentSuccess"));
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-background to-muted/20 ${language === "ar" ? "rtl font-arabic" : ""}`}>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Button 
            variant="ghost" 
            className="absolute top-8 left-4 md:left-8 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20" 
            asChild
          >
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4 rtl:mr-0 rtl:ml-2 rtl:rotate-180" /> {t("blog.backToBlog")}
            </Link>
          </Button>
          
          <div className="max-w-4xl mx-auto pt-20">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 text-sm bg-primary/20 backdrop-blur-sm border border-primary/30 text-white px-4 py-1.5 rounded-full"
                >
                  <Tag className="h-3.5 w-3.5" />
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {post.title[language]}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author[language]}</span>
              </div>
              <Separator orientation="vertical" className="h-5 bg-white/30" />
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{post.date[language]}</span>
              </div>
              <Separator orientation="vertical" className="h-5 bg-white/30" />
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime[language]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Content Card */}
            <Card className="shadow-2xl border-border/50 backdrop-blur-sm bg-card/95 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                {/* Introduction */}
                <div className="mb-12">
                  <p className="text-xl leading-relaxed text-foreground/90 first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
                    {post.content[language].introduction}
                  </p>
                </div>

                <Separator className="my-12" />

                {/* Article Sections */}
                <div className="space-y-12">
                  {post.content[language].sections.map((section, index) => (
                    <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground flex items-center gap-3">
                        <span className="w-2 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
                        {section.title}
                      </h2>
                      
                      <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                        {section.content}
                      </p>

                      {section.list && (
                        <ul className="space-y-4 mt-6">
                          {section.list.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-4 group">
                              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2.5 group-hover:scale-150 transition-transform" />
                              <span className="text-lg text-foreground/80 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interaction Buttons */}
            <div className="flex flex-wrap gap-4 py-8 mt-8 border-y border-border">
              <Button
                variant={hasLiked ? "default" : "outline"}
                onClick={handleLike}
                className="flex items-center gap-2 hover:scale-105 transition-transform"
                size="lg"
              >
                <ThumbsUp className="h-5 w-5" />
                {t("blog.likeArticle")} ({likes})
              </Button>
              <Button 
                variant="outline" 
                onClick={handleShare} 
                className="flex items-center gap-2 hover:scale-105 transition-transform"
                size="lg"
              >
                <Share2 className="h-5 w-5" />
                {t("blog.shareArticle")}
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 hover:scale-105 transition-transform" 
                asChild
                size="lg"
              >
                <a href="#comments">
                  <MessageCircle className="h-5 w-5" />
                  {t("blog.comments")} ({comments.length})
                </a>
              </Button>
            </div>
          </div>

          {/* Comments Section */}
          <div id="comments" className="max-w-4xl mx-auto mt-16">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <MessageCircle className="h-8 w-8 text-primary" />
              {t("blog.comments")} ({comments.length})
            </h3>

            {/* Comment Form */}
            <Card className="mb-10 shadow-lg border-border/50 hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 p-8">
                <h4 className="text-xl font-semibold mb-6">{t("blog.leaveComment")}</h4>
                <form onSubmit={handleCommentSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      name="name" 
                      placeholder={t("blog.name")} 
                      required 
                      className="h-12"
                    />
                    <Input 
                      name="email" 
                      type="email" 
                      placeholder={t("contact.email")} 
                      required 
                      className="h-12"
                    />
                  </div>
                  <Textarea 
                    name="comment" 
                    placeholder={t("blog.comment")} 
                    rows={5} 
                    required 
                    className="resize-none"
                  />
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    {t("blog.postComment")}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <Card key={comment.id} className="shadow-md border-border/50 hover:shadow-lg transition-all hover:translate-x-1">
                  <CardContent className="pt-6 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-white font-bold">
                          {comment.name[language].charAt(0)}
                        </div>
                        <div>
                          <h5 className="font-semibold text-lg">{comment.name[language]}</h5>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {comment.date[language]}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-foreground/80 leading-relaxed text-lg pl-13">
                      {comment.comment[language]}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-10 text-center">{t("blog.relatedPosts")}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.slug} 
                  to={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-2xl transition-all hover:-translate-y-2 border-border/50 overflow-hidden">
                    <div className="h-48 relative overflow-hidden">
                      <img src={relatedPost.image} alt={relatedPost.title[language]} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {relatedPost.tags.slice(0, 2).map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs bg-white/20 backdrop-blur-sm border border-white/30 text-white px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <CardContent className="pt-6 pb-6">
                      <h4 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title[language]}
                      </h4>
                      <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                        {relatedPost.excerpt[language]}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{relatedPost.date[language]}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{relatedPost.readTime[language]}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            {language === "ar" ? "هل تحتاج استشارة مجانية؟" : "Need a Free Consultation?"}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {language === "ar" 
              ? "تواصل معنا اليوم للحصول على زيارة موقع مجانية وعرض سعر مفصل لمشروعك" 
              : "Contact us today for a free site visit and detailed quote for your project"}
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-6 hover:scale-110 transition-transform shadow-2xl animate-fade-in" 
            style={{ animationDelay: "0.2s" }}
            asChild
          >
            <Link to="/contact">{t("common.contactUs")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
