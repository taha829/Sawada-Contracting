import epoxyImage from "@/assets/blog-epoxy.jpg";
import insulationImage from "@/assets/blog-insulation.jpg";
import waterproofingImage from "@/assets/blog-waterproofing.jpg";
import finishingImage from "@/assets/blog-finishing.jpg";
import designImage from "@/assets/blog-design.jpg";
import maintenanceImage from "@/assets/blog-maintenance.jpg";
import constructionImage from "@/assets/blog-construction.jpg";
import energyImage from "@/assets/blog-energy.jpg";

export interface BlogPost {
  slug: string;
  title: {
    en: string;
    ar: string;
  };
  excerpt: {
    en: string;
    ar: string;
  };
  content: {
    en: {
      introduction: string;
      sections: {
        title: string;
        content: string;
        list?: string[];
      }[];
    };
    ar: {
      introduction: string;
      sections: {
        title: string;
        content: string;
        list?: string[];
      }[];
    };
  };
  date: {
    en: string;
    ar: string;
  };
  author: {
    en: string;
    ar: string;
  };
  tags: string[];
  image: string;
  readTime: {
    en: string;
    ar: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "epoxy-flooring-industrial-spaces",
    title: {
      en: "Epoxy Flooring: The Smart Solution for Industrial Spaces",
      ar: "أرضيات الإيبوكسي: الحل الذكي للمساحات الصناعية"
    },
    excerpt: {
      en: "Discover why epoxy flooring has become the preferred choice for industrial facilities in Jordan and how it can transform your workspace.",
      ar: "اكتشف لماذا أصبحت أرضيات الإيبوكسي الخيار المفضل للمنشآت الصناعية في الأردن وكيف يمكنها تحويل مساحة عملك."
    },
    date: {
      en: "March 15, 2024",
      ar: "15 مارس 2024"
    },
    author: {
      en: "Eng. mohamd Nsoor",
      ar: "المهندس محمد النسور"
    },
    tags: ["Epoxy", "Industrial", "Construction"],
    image: epoxyImage,
    readTime: {
      en: "8 min read",
      ar: "8 دقائق قراءة"
    },
    content: {
      en: {
        introduction: "Epoxy flooring has become increasingly popular in Jordan's industrial sector, and for good reason. This comprehensive guide explores why epoxy flooring is the smart choice for warehouses, showrooms, and workshops.",
        sections: [
          {
            title: "What is Epoxy Flooring?",
            content: "Epoxy flooring is a type of surface coating that is applied over concrete floors. It consists of two main components: resin and hardener. When mixed together, these components undergo a chemical reaction that creates a rigid, plastic-like material that bonds exceptionally well to concrete surfaces."
          },
          {
            title: "Benefits of Epoxy Flooring",
            content: "Epoxy floors offer numerous advantages for industrial and commercial spaces:",
            list: [
              "Exceptional Durability: Epoxy floors can withstand heavy machinery, constant foot traffic, and impact without showing wear.",
              "Chemical Resistance: Perfect for industrial environments where spills of oils, chemicals, and other substances are common.",
              "Easy Maintenance: The seamless surface is easy to clean and doesn't harbor bacteria or dust.",
              "Aesthetic Appeal: Available in various colors and finishes, including decorative options with metallic effects.",
              "Safety Features: Anti-slip additives can be incorporated for enhanced workplace safety.",
              "Cost-Effective: Long lifespan and minimal maintenance requirements provide excellent value over time."
            ]
          },
          {
            title: "Installation Process",
            content: "Professional installation is crucial for achieving optimal results. Our team at Sawada Contracting follows a meticulous process:",
            list: [
              "Surface preparation: grinding and cleaning the concrete",
              "Crack and damage repair",
              "Primer application",
              "Epoxy base coat application",
              "Optional decorative elements or anti-slip additives",
              "Top coat for enhanced protection",
              "Proper curing time (typically 24-48 hours)"
            ]
          },
          {
            title: "Common Challenges and Solutions",
            content: "While epoxy flooring is highly durable, proper installation is essential to avoid common issues:",
            list: [
              "Poor adhesion: We ensure thorough surface preparation and moisture testing before application.",
              "Bubbling: Our controlled application environment and proper mixing techniques prevent air entrapment.",
              "Color inconsistency: We use high-quality materials and precise mixing ratios for uniform results."
            ]
          },
          {
            title: "Our Project Experience",
            content: "Sawada Contracting has completed numerous epoxy flooring projects across Jordan, including:",
            list: [
              "3,000m² warehouse facility with heavy-duty industrial epoxy",
              "Automotive showroom with decorative metallic epoxy finish",
              "Food processing facility with FDA-compliant epoxy coating",
              "Multiple workshops and manufacturing units"
            ]
          }
        ]
      },
      ar: {
        introduction: "أصبحت أرضيات الإيبوكسي شائعة بشكل متزايد في القطاع الصناعي الأردني، ولسبب وجيه. يستكشف هذا الدليل الشامل لماذا تعتبر أرضيات الإيبوكسي الخيار الذكي للمستودعات وصالات العرض والورش.",
        sections: [
          {
            title: "ما هي أرضيات الإيبوكسي؟",
            content: "أرضيات الإيبوكسي هي نوع من طلاء السطح يُطبق فوق الأرضيات الخرسانية. تتكون من مكونين رئيسيين: الراتنج والمصلب. عند خلطها معًا، تخضع هذه المكونات لتفاعل كيميائي ينتج عنه مادة صلبة تشبه البلاستيك ترتبط بشكل استثنائي بالأسطح الخرسانية."
          },
          {
            title: "فوائد أرضيات الإيبوكسي",
            content: "توفر أرضيات الإيبوكسي فوائد عديدة للمساحات الصناعية والتجارية:",
            list: [
              "متانة استثنائية: يمكن لأرضيات الإيبوكسي تحمل الآلات الثقيلة وحركة المرور المستمرة والصدمات دون إظهار البلى.",
              "مقاومة كيميائية: مثالية للبيئات الصناعية حيث تكون انسكابات الزيوت والمواد الكيميائية شائعة.",
              "سهولة الصيانة: السطح السلس سهل التنظيف ولا يؤوي البكتيريا أو الغبار.",
              "جاذبية جمالية: متوفرة بألوان وتشطيبات متنوعة، بما في ذلك خيارات زخرفية بتأثيرات معدنية.",
              "ميزات السلامة: يمكن دمج إضافات مضادة للانزلاق لتعزيز سلامة مكان العمل.",
              "فعالة من حيث التكلفة: عمر طويل ومتطلبات صيانة قليلة توفر قيمة ممتازة مع مرور الوقت."
            ]
          },
          {
            title: "عملية التركيب",
            content: "التركيب الاحترافي أمر بالغ الأهمية لتحقيق النتائج المثلى. يتبع فريقنا في مقاولات سوادا عملية دقيقة:",
            list: [
              "تحضير السطح: طحن وتنظيف الخرسانة",
              "إصلاح الشقوق والأضرار",
              "تطبيق الطبقة التمهيدية",
              "تطبيق الطبقة الأساسية من الإيبوكسي",
              "عناصر زخرفية اختيارية أو إضافات مضادة للانزلاق",
              "طبقة علوية لحماية معززة",
              "وقت معالجة مناسب (عادة 24-48 ساعة)"
            ]
          },
          {
            title: "التحديات الشائعة والحلول",
            content: "على الرغم من أن أرضيات الإيبوكسي متينة للغاية، إلا أن التركيب الصحيح ضروري لتجنب المشاكل الشائعة:",
            list: [
              "التصاق ضعيف: نضمن تحضير السطح بشكل شامل واختبار الرطوبة قبل التطبيق.",
              "التفقع: بيئة التطبيق المحكومة وتقنيات الخلط الصحيحة تمنع حبس الهواء.",
              "عدم اتساق اللون: نستخدم مواد عالية الجودة ونسب خلط دقيقة للحصول على نتائج موحدة."
            ]
          },
          {
            title: "خبرتنا في المشاريع",
            content: "أكملت مقاولات سوادا العديد من مشاريع أرضيات الإيبوكسي في جميع أنحاء الأردن، بما في ذلك:",
            list: [
              "منشأة مستودع بمساحة 3,000 متر مربع مع إيبوكسي صناعي للخدمة الشاقة",
              "صالة عرض سيارات بتشطيب إيبوكسي معدني زخرفي",
              "منشأة معالجة أغذية مع طلاء إيبوكسي متوافق مع معايير FDA",
              "ورش ووحدات تصنيع متعددة"
            ]
          }
        ]
      }
    }
  },
  {
    slug: "thermal-insulation-guide",
    title: {
      en: "Complete Guide to Thermal Insulation",
      ar: "الدليل الشامل للعزل الحراري"
    },
    excerpt: {
      en: "Everything you need to know about thermal insulation materials and installation for Jordan's climate.",
      ar: "كل ما تحتاج لمعرفته حول مواد العزل الحراري والتركيب لمناخ الأردن."
    },
    date: {
      en: "March 10, 2024",
      ar: "10 مارس 2024"
    },
    author: {
      en: "Eng. mohamd nsoor",
      ar: "المهندس محمد النسور"
    },
    tags: ["Insulation", "Energy", "Construction"],
    image: insulationImage,
    readTime: {
      en: "6 min read",
      ar: "6 دقائق قراءة"
    },
    content: {
      en: {
        introduction: "Proper thermal insulation is essential for maintaining comfortable indoor temperatures and reducing energy costs in Jordan's extreme climate.",
        sections: [
          {
            title: "Why Thermal Insulation Matters",
            content: "Jordan experiences both hot summers and cold winters. Effective thermal insulation helps maintain consistent indoor temperatures year-round, reducing reliance on heating and cooling systems."
          },
          {
            title: "Types of Insulation Materials",
            content: "We work with various insulation materials suitable for different applications:",
            list: [
              "Fiberglass: Cost-effective and widely used for walls and ceilings",
              "Foam Board: Excellent R-value and moisture resistance",
              "Spray Foam: Provides superior air sealing and insulation",
              "Reflective Insulation: Ideal for hot climates to reflect radiant heat"
            ]
          },
          {
            title: "Installation Best Practices",
            content: "Professional installation ensures maximum efficiency and longevity of your insulation system.",
            list: [
              "Proper measurement and cutting to avoid gaps",
              "Vapor barrier installation where needed",
              "Sealing all air leaks before insulation",
              "Following manufacturer specifications for compression"
            ]
          }
        ]
      },
      ar: {
        introduction: "العزل الحراري المناسب ضروري للحفاظ على درجات حرارة داخلية مريحة وتقليل تكاليف الطاقة في مناخ الأردن القاسي.",
        sections: [
          {
            title: "لماذا يهم العزل الحراري",
            content: "يشهد الأردن صيفًا حارًا وشتاءً باردًا. يساعد العزل الحراري الفعال في الحفاظ على درجات حرارة داخلية ثابتة على مدار العام، مما يقلل الاعتماد على أنظمة التدفئة والتبريد."
          },
          {
            title: "أنواع مواد العزل",
            content: "نعمل مع مواد عزل مختلفة مناسبة لتطبيقات مختلفة:",
            list: [
              "الألياف الزجاجية: فعالة من حيث التكلفة ومستخدمة على نطاق واسع للجدران والأسقف",
              "لوح الرغوة: قيمة R ممتازة ومقاومة للرطوبة",
              "رغوة الرش: توفر إغلاق هواء وعزل فائق",
              "العزل العاكس: مثالي للمناخات الحارة لعكس الحرارة المشعة"
            ]
          },
          {
            title: "أفضل ممارسات التركيب",
            content: "التركيب الاحترافي يضمن أقصى كفاءة وطول عمر لنظام العزل الخاص بك.",
            list: [
              "القياس والقطع المناسب لتجنب الفجوات",
              "تركيب حاجز البخار حيث تدعو الحاجة",
              "إغلاق جميع تسربات الهواء قبل العزل",
              "اتباع مواصفات الشركة المصنعة للضغط"
            ]
          }
        ]
      }
    }
  },
  {
    slug: "waterproofing-best-practices",
    title: {
      en: "Waterproofing Best Practices",
      ar: "أفضل ممارسات العزل المائي"
    },
    excerpt: {
      en: "Essential waterproofing techniques for Jordan's climate to protect your property from water damage.",
      ar: "تقنيات العزل المائي الأساسية لمناخ الأردن لحماية ممتلكاتك من أضرار المياه."
    },
    date: {
      en: "March 5, 2024",
      ar: "5 مارس 2024"
    },
    author: {
      en: "Eng. Ahmad Sawada",
      ar: "المهندس أحمد سوادا"
    },
    tags: ["Waterproofing", "Maintenance", "Construction"],
    image: waterproofingImage,
    readTime: {
      en: "7 min read",
      ar: "7 دقائق قراءة"
    },
    content: {
      en: {
        introduction: "Effective waterproofing is crucial for protecting buildings from water damage, especially in areas prone to heavy rainfall or moisture issues.",
        sections: [
          {
            title: "Common Waterproofing Applications",
            content: "Different areas require specific waterproofing approaches:",
            list: [
              "Roofs and terraces: Preventing leaks from above",
              "Basements: Protection against groundwater",
              "Bathrooms and wet areas: Daily moisture protection",
              "Foundations: Long-term structural protection"
            ]
          },
          {
            title: "Materials and Methods",
            content: "We use proven waterproofing systems tailored to each application:",
            list: [
              "Bituminous membranes for roofs",
              "Cementitious coatings for basements",
              "Liquid-applied membranes for complex details",
              "Injection systems for crack repair"
            ]
          },
          {
            title: "Maintenance Tips",
            content: "Regular maintenance extends the life of waterproofing systems:",
            list: [
              "Annual inspections of roof membranes",
              "Prompt repair of any cracks or damage",
              "Keeping drainage systems clear",
              "Monitoring for signs of water intrusion"
            ]
          }
        ]
      },
      ar: {
        introduction: "العزل المائي الفعال أمر بالغ الأهمية لحماية المباني من أضرار المياه، خاصة في المناطق المعرضة لهطول أمطار غزيرة أو مشاكل الرطوبة.",
        sections: [
          {
            title: "تطبيقات العزل المائي الشائعة",
            content: "تتطلب المناطق المختلفة أساليب عزل مائي محددة:",
            list: [
              "الأسطح والشرفات: منع التسربات من الأعلى",
              "الأقبية: الحماية من المياه الجوفية",
              "الحمامات والمناطق الرطبة: حماية الرطوبة اليومية",
              "الأساسات: حماية هيكلية طويلة الأمد"
            ]
          },
          {
            title: "المواد والطرق",
            content: "نستخدم أنظمة عزل مائي مثبتة مصممة لكل تطبيق:",
            list: [
              "أغشية البيتومين للأسطح",
              "طلاءات أسمنتية للأقبية",
              "أغشية سائلة للتفاصيل المعقدة",
              "أنظمة الحقن لإصلاح الشقوق"
            ]
          },
          {
            title: "نصائح الصيانة",
            content: "الصيانة المنتظمة تطيل عمر أنظمة العزل المائي:",
            list: [
              "فحوصات سنوية لأغشية الأسطح",
              "إصلاح سريع لأي شقوق أو أضرار",
              "الحفاظ على أنظمة الصرف نظيفة",
              "مراقبة علامات تسرب المياه"
            ]
          }
        ]
      }
    }
  },
  {
    slug: "modern-finishing-materials",
    title: {
      en: "Modern Finishing Materials for Luxury Villas",
      ar: "مواد التشطيب الحديثة للفيلات الفاخرة"
    },
    excerpt: {
      en: "Explore the latest trends in high-end residential finishes and how to choose the right materials for your luxury project.",
      ar: "استكشف أحدث الاتجاهات في التشطيبات السكنية الراقية وكيفية اختيار المواد المناسبة لمشروعك الفاخر."
    },
    date: {
      en: "March 8, 2024",
      ar: "8 مارس 2024"
    },
    author: {
      en: "Eng. mohamd Sawada",
      ar: "المهندس محمد سوادا"
    },
    tags: ["Finishing", "Design", "Construction"],
    image: finishingImage,
    readTime: {
      en: "7 min read",
      ar: "7 دقائق قراءة"
    },
    content: {
      en: {
        introduction: "Modern finishing materials have revolutionized the way we approach luxury residential construction in Jordan. This guide explores premium materials and techniques that elevate any villa project.",
        sections: [
          {
            title: "Premium Wall Finishes",
            content: "Contemporary wall finishing options offer both aesthetic appeal and durability:",
            list: [
              "Venetian Plaster: Creates elegant, marble-like surfaces with depth and texture",
              "Decorative Stone Cladding: Natural stone veneers for sophisticated interiors",
              "Textured Paint Finishes: Modern techniques for unique wall treatments",
              "Wood Paneling: Premium hardwood panels for warmth and luxury"
            ]
          },
          {
            title: "Ceiling Solutions",
            content: "Modern ceiling designs that add character to luxury spaces:",
            list: [
              "Coffered Ceilings: Traditional elegance with modern materials",
              "Gypsum Board Designs: Versatile and creative ceiling solutions",
              "Suspended Lighting Integration: Combining aesthetics with functionality",
              "Acoustic Panels: Sound management without compromising design"
            ]
          },
          {
            title: "Flooring Excellence",
            content: "Premium flooring materials for different areas of your villa:",
            list: [
              "Marble and Granite: Timeless luxury with various patterns",
              "Engineered Hardwood: Durability meets natural beauty",
              "Porcelain Tiles: Large format tiles for seamless appearance",
              "Natural Stone: Unique character for exterior and interior spaces"
            ]
          },
          {
            title: "Material Selection Guide",
            content: "Factors to consider when choosing finishing materials:",
            list: [
              "Climate Compatibility: Materials suited for Jordan's weather",
              "Maintenance Requirements: Long-term care considerations",
              "Budget Allocation: Balancing quality and cost",
              "Design Coherence: Ensuring materials complement each other"
            ]
          }
        ]
      },
      ar: {
        introduction: "غيّرت مواد التشطيب الحديثة طريقة تعاملنا مع البناء السكني الفاخر في الأردن. يستكشف هذا الدليل المواد والتقنيات الممتازة التي ترتقي بأي مشروع فيلا.",
        sections: [
          {
            title: "تشطيبات الجدران الفاخرة",
            content: "توفر خيارات تشطيب الجدران المعاصرة جاذبية جمالية ومتانة:",
            list: [
              "الجص الفينيسي: ينشئ أسطحًا أنيقة تشبه الرخام بعمق وملمس",
              "كسوة الحجر الزخرفية: قشرة الحجر الطبيعي للديكورات الداخلية المتطورة",
              "تشطيبات الطلاء المحكم: تقنيات حديثة لمعالجات جدران فريدة",
              "ألواح الخشب: ألواح خشب صلب فاخرة للدفء والفخامة"
            ]
          },
          {
            title: "حلول الأسقف",
            content: "تصاميم الأسقف الحديثة التي تضيف طابعًا للمساحات الفاخرة:",
            list: [
              "الأسقف المغطاة: أناقة تقليدية بمواد حديثة",
              "تصاميم ألواح الجبس: حلول أسقف متعددة الاستخدامات وإبداعية",
              "دمج الإضاءة المعلقة: الجمع بين الجماليات والوظائف",
              "الألواح الصوتية: إدارة الصوت دون المساس بالتصميم"
            ]
          },
          {
            title: "تميز الأرضيات",
            content: "مواد أرضيات ممتازة لمناطق مختلفة من فيلتك:",
            list: [
              "الرخام والجرانيت: فخامة خالدة بأنماط متنوعة",
              "الخشب الصلب المهندس: المتانة تلتقي بالجمال الطبيعي",
              "بلاط البورسلين: بلاط كبير الحجم لمظهر سلس",
              "الحجر الطبيعي: طابع فريد للمساحات الخارجية والداخلية"
            ]
          },
          {
            title: "دليل اختيار المواد",
            content: "عوامل يجب مراعاتها عند اختيار مواد التشطيب:",
            list: [
              "التوافق المناخي: مواد مناسبة لطقس الأردن",
              "متطلبات الصيانة: اعتبارات الرعاية طويلة الأجل",
              "تخصيص الميزانية: موازنة الجودة والتكلفة",
              "تماسك التصميم: ضمان تكامل المواد مع بعضها"
            ]
          }
        ]
      }
    }
  },
  {
    slug: "architectural-design-trends-2024",
    title: {
      en: "Architectural Design Trends 2024 in Jordan",
      ar: "اتجاهات التصميم المعماري 2024 في الأردن"
    },
    excerpt: {
      en: "Discover the latest architectural design trends shaping modern buildings in Jordan and the Middle East.",
      ar: "اكتشف أحدث اتجاهات التصميم المعماري التي تشكل المباني الحديثة في الأردن والشرق الأوسط."
    },
    date: {
      en: "March 3, 2024",
      ar: "3 مارس 2024"
    },
    author: {
      en: "Eng. mohamd Sawada",
      ar: "المهندس محمد النسور"
    },
    tags: ["Design", "Construction"],
    image: designImage,
    readTime: {
      en: "9 min read",
      ar: "9 دقائق قراءة"
    },
    content: {
      en: {
        introduction: "The architectural landscape in Jordan is evolving rapidly, embracing both traditional elements and cutting-edge modern design principles. This comprehensive overview explores the trends defining 2024.",
        sections: [
          {
            title: "Sustainable Design Integration",
            content: "Environmental consciousness is reshaping architectural priorities:",
            list: [
              "Passive Solar Design: Maximizing natural light and heat management",
              "Green Roofs and Walls: Integrating vegetation for insulation and aesthetics",
              "Rainwater Harvesting Systems: Water conservation through design",
              "Natural Ventilation: Reducing energy consumption with smart airflow"
            ]
          },
          {
            title: "Contemporary Jordanian Architecture",
            content: "Modern designs that honor traditional Jordanian aesthetics:",
            list: [
              "Stone Facade Revival: Modern interpretations of traditional stonework",
              "Indoor-Outdoor Living: Seamless transitions between spaces",
              "Geometric Patterns: Islamic-inspired contemporary designs",
              "Courtyard Integration: Privacy and climate control through design"
            ]
          },
          {
            title: "Smart Building Technology",
            content: "Technology integration in modern architectural design:",
            list: [
              "Automated Climate Control: Energy-efficient HVAC systems",
              "Smart Lighting Systems: Adaptive lighting for comfort and efficiency",
              "Security Integration: Modern access control and monitoring",
              "Energy Management: Real-time consumption tracking and optimization"
            ]
          },
          {
            title: "Minimalist Aesthetics",
            content: "The rise of clean, functional design approaches:",
            list: [
              "Open Floor Plans: Flexible, multipurpose spaces",
              "Natural Materials: Stone, wood, and concrete in harmony",
              "Neutral Color Palettes: Timeless and sophisticated schemes",
              "Statement Lighting: Functional art pieces in design"
            ]
          }
        ]
      },
      ar: {
        introduction: "المشهد المعماري في الأردن يتطور بسرعة، محتضناً العناصر التقليدية ومبادئ التصميم الحديث المتطورة. يستكشف هذا النظرة الشاملة الاتجاهات التي تحدد عام 2024.",
        sections: [
          {
            title: "دمج التصميم المستدام",
            content: "الوعي البيئي يعيد تشكيل الأولويات المعمارية:",
            list: [
              "التصميم الشمسي السلبي: تعظيم الضوء الطبيعي وإدارة الحرارة",
              "الأسطح والجدران الخضراء: دمج النباتات للعزل والجماليات",
              "أنظمة حصاد مياه الأمطار: الحفاظ على المياه من خلال التصميم",
              "التهوية الطبيعية: تقليل استهلاك الطاقة مع تدفق هواء ذكي"
            ]
          },
          {
            title: "العمارة الأردنية المعاصرة",
            content: "تصاميم حديثة تكرم الجماليات الأردنية التقليدية:",
            list: [
              "إحياء واجهة الحجر: تفسيرات حديثة للأعمال الحجرية التقليدية",
              "المعيشة الداخلية-الخارجية: انتقالات سلسة بين المساحات",
              "الأنماط الهندسية: تصاميم معاصرة مستوحاة من الفن الإسلامي",
              "دمج الفناء: الخصوصية والتحكم في المناخ من خلال التصميم"
            ]
          },
          {
            title: "تكنولوجيا المباني الذكية",
            content: "دمج التكنولوجيا في التصميم المعماري الحديث:",
            list: [
              "التحكم الآلي في المناخ: أنظمة HVAC موفرة للطاقة",
              "أنظمة الإضاءة الذكية: إضاءة تكيفية للراحة والكفاءة",
              "دمج الأمن: التحكم في الوصول والمراقبة الحديثة",
              "إدارة الطاقة: تتبع وتحسين الاستهلاك في الوقت الفعلي"
            ]
          },
          {
            title: "الجماليات البسيطة",
            content: "صعود أساليب التصميم النظيفة والوظيفية:",
            list: [
              "المخططات المفتوحة: مساحات مرنة متعددة الأغراض",
              "المواد الطبيعية: الحجر والخشب والخرسانة في انسجام",
              "لوحات الألوان المحايدة: مخططات خالدة ومتطورة",
              "الإضاءة البارزة: قطع فنية وظيفية في التصميم"
            ]
          }
        ]
      }
    }
  },
  {
    slug: "building-maintenance-essentials",
    title: {
      en: "Essential Building Maintenance Guide",
      ar: "الدليل الأساسي لصيانة المباني"
    },
    excerpt: {
      en: "Comprehensive maintenance strategies to protect your property investment and ensure long-term durability.",
      ar: "استراتيجيات صيانة شاملة لحماية استثمارك العقاري وضمان المتانة طويلة الأجل."
    },
    date: {
      en: "February 25, 2024",
      ar: "25 فبراير 2024"
    },
    author: {
      en: "Eng. mohmad Sawada",
      ar: "المهندس محمد سوادا"
    },
    tags: ["Maintenance", "Construction"],
    image: maintenanceImage,
    readTime: {
      en: "6 min read",
      ar: "6 دقائق قراءة"
    },
    content: {
      en: {
        introduction: "Regular building maintenance is crucial for preserving property value and preventing costly repairs. This guide covers essential maintenance practices for residential and commercial buildings in Jordan.",
        sections: [
          {
            title: "Seasonal Maintenance Schedule",
            content: "Key maintenance tasks throughout the year:",
            list: [
              "Spring: Roof inspection after winter rains, gutter cleaning, exterior painting",
              "Summer: AC system servicing, waterproofing checks, outdoor area maintenance",
              "Fall: Window sealing, heating system preparation, drainage verification",
              "Winter: Pipe insulation, humidity control, emergency heating system checks"
            ]
          },
          {
            title: "Preventive Maintenance",
            content: "Proactive measures to avoid major issues:",
            list: [
              "Regular Inspections: Monthly walk-throughs to identify early problems",
              "Plumbing Checks: Leak detection and pipe maintenance",
              "Electrical System: Safety inspections and updates",
              "Structural Assessment: Annual professional evaluations"
            ]
          },
          {
            title: "Critical Systems Maintenance",
            content: "Essential systems requiring regular attention:",
            list: [
              "HVAC Systems: Filter changes, duct cleaning, efficiency checks",
              "Waterproofing: Annual membrane inspections and repairs",
              "Fire Safety: Detector testing, extinguisher servicing",
              "Security Systems: Camera maintenance, access control updates"
            ]
          },
          {
            title: "Documentation and Records",
            content: "Maintaining proper maintenance records:",
            list: [
              "Service History: Track all maintenance and repairs",
              "Warranty Information: Keep all product and service warranties",
              "Inspection Reports: File professional assessment documents",
              "Budget Planning: Use records for future maintenance budgeting"
            ]
          }
        ]
      },
      ar: {
        introduction: "الصيانة المنتظمة للمباني ضرورية للحفاظ على قيمة العقار ومنع الإصلاحات المكلفة. يغطي هذا الدليل ممارسات الصيانة الأساسية للمباني السكنية والتجارية في الأردن.",
        sections: [
          {
            title: "جدول الصيانة الموسمي",
            content: "مهام الصيانة الرئيسية على مدار العام:",
            list: [
              "الربيع: فحص السقف بعد أمطار الشتاء، تنظيف المزاريب، طلاء خارجي",
              "الصيف: صيانة نظام التكييف، فحوصات العزل المائي، صيانة المنطقة الخارجية",
              "الخريف: إغلاق النوافذ، تحضير نظام التدفئة، التحقق من الصرف",
              "الشتاء: عزل الأنابيب، التحكم في الرطوبة، فحوصات نظام التدفئة الطارئة"
            ]
          },
          {
            title: "الصيانة الوقائية",
            content: "تدابير استباقية لتجنب المشاكل الكبرى:",
            list: [
              "الفحوصات المنتظمة: جولات شهرية لتحديد المشاكل المبكرة",
              "فحوصات السباكة: الكشف عن التسرب وصيانة الأنابيب",
              "النظام الكهربائي: فحوصات السلامة والتحديثات",
              "التقييم الهيكلي: تقييمات مهنية سنوية"
            ]
          },
          {
            title: "صيانة الأنظمة الحرجة",
            content: "الأنظمة الأساسية التي تتطلب اهتمامًا منتظمًا:",
            list: [
              "أنظمة التدفئة والتهوية وتكييف الهواء: تغيير الفلاتر، تنظيف القنوات، فحوصات الكفاءة",
              "العزل المائي: فحوصات الأغشية السنوية والإصلاحات",
              "السلامة من الحرائق: اختبار الكاشفات، صيانة طفايات الحريق",
              "أنظمة الأمن: صيانة الكاميرات، تحديثات التحكم في الوصول"
            ]
          },
          {
            title: "التوثيق والسجلات",
            content: "الحفاظ على سجلات الصيانة المناسبة:",
            list: [
              "سجل الخدمة: تتبع جميع أعمال الصيانة والإصلاحات",
              "معلومات الضمان: الاحتفاظ بجميع ضمانات المنتجات والخدمات",
              "تقارير الفحص: حفظ مستندات التقييم المهني",
              "تخطيط الميزانية: استخدام السجلات لوضع ميزانية الصيانة المستقبلية"
            ]
          }
        ]
      }
    }
  },
  {
    slug: "construction-project-management",
    title: {
      en: "5 Essential Tips for Construction Project Management",
      ar: "5 نصائح أساسية لإدارة مشاريع البناء"
    },
    excerpt: {
      en: "Learn proven strategies to keep your construction project on time, within budget, and meeting quality standards.",
      ar: "تعلم استراتيجيات مثبتة للحفاظ على مشروع البناء في الموعد وضمن الميزانية وتلبية معايير الجودة."
    },
    date: {
      en: "February 20, 2024",
      ar: "20 فبراير 2024"
    },
    author: {
      en: "Eng.mohamd alnasour",
      ar: "المهندس محمد النسور"
    },
    tags: ["Construction"],
    image: constructionImage,
    readTime: {
      en: "8 min read",
      ar: "8 دقائق قراءة"
    },
    content: {
      en: {
        introduction: "Successful construction project management requires careful planning, coordination, and execution. Based on our extensive experience in Jordan, here are five essential strategies for project success.",
        sections: [
          {
            title: "Detailed Planning and Scheduling",
            content: "Comprehensive planning is the foundation of successful projects:",
            list: [
              "Create detailed timelines with milestone markers",
              "Identify critical path activities and dependencies",
              "Build in buffer time for unexpected delays",
              "Regular schedule reviews and adjustments",
              "Coordinate with all stakeholders early"
            ]
          },
          {
            title: "Budget Management",
            content: "Effective financial control throughout the project:",
            list: [
              "Detailed cost estimation before project start",
              "Contingency fund allocation (10-15% recommended)",
              "Regular budget tracking and reporting",
              "Value engineering to optimize costs",
              "Clear payment schedules with contractors"
            ]
          },
          {
            title: "Quality Control Systems",
            content: "Maintaining standards throughout construction:",
            list: [
              "Regular site inspections and quality audits",
              "Material testing and verification",
              "Compliance with building codes and standards",
              "Documentation of all quality checks",
              "Immediate correction of identified issues"
            ]
          },
          {
            title: "Communication and Coordination",
            content: "Keeping all parties aligned and informed:",
            list: [
              "Regular progress meetings with all stakeholders",
              "Clear documentation and reporting systems",
              "Prompt resolution of conflicts and issues",
              "Transparent communication channels",
              "Digital tools for real-time updates"
            ]
          },
          {
            title: "Risk Management",
            content: "Identifying and mitigating potential problems:",
            list: [
              "Early risk identification and assessment",
              "Contingency plans for common issues",
              "Weather and seasonal considerations",
              "Supply chain backup options",
              "Insurance and liability management"
            ]
          }
        ]
      },
      ar: {
        introduction: "تتطلب إدارة مشاريع البناء الناجحة تخطيطًا وتنسيقًا وتنفيذًا دقيقًا. بناءً على خبرتنا الواسعة في الأردن، إليك خمس استراتيجيات أساسية لنجاح المشروع.",
        sections: [
          {
            title: "التخطيط والجدولة التفصيلية",
            content: "التخطيط الشامل هو أساس المشاريع الناجحة:",
            list: [
              "إنشاء جداول زمنية مفصلة مع علامات المعالم",
              "تحديد أنشطة المسار الحرج والتبعيات",
              "بناء وقت احتياطي للتأخيرات غير المتوقعة",
              "مراجعات منتظمة للجدول الزمني والتعديلات",
              "التنسيق مع جميع أصحاب المصلحة مبكرًا"
            ]
          },
          {
            title: "إدارة الميزانية",
            content: "الرقابة المالية الفعالة طوال المشروع:",
            list: [
              "تقدير تفصيلي للتكاليف قبل بدء المشروع",
              "تخصيص صندوق طوارئ (يوصى بـ 10-15٪)",
              "تتبع الميزانية والإبلاغ المنتظم",
              "هندسة القيمة لتحسين التكاليف",
              "جداول دفع واضحة مع المقاولين"
            ]
          },
          {
            title: "أنظمة مراقبة الجودة",
            content: "الحفاظ على المعايير طوال فترة البناء:",
            list: [
              "فحوصات الموقع المنتظمة وعمليات تدقيق الجودة",
              "اختبار المواد والتحقق منها",
              "الامتثال لقوانين ومعايير البناء",
              "توثيق جميع فحوصات الجودة",
              "التصحيح الفوري للمشاكل المحددة"
            ]
          },
          {
            title: "التواصل والتنسيق",
            content: "إبقاء جميع الأطراف متوافقة ومطلعة:",
            list: [
              "اجتماعات تقدم منتظمة مع جميع أصحاب المصلحة",
              "أنظمة توثيق وإبلاغ واضحة",
              "حل سريع للنزاعات والقضايا",
              "قنوات اتصال شفافة",
              "أدوات رقمية للتحديثات في الوقت الفعلي"
            ]
          },
          {
            title: "إدارة المخاطر",
            content: "تحديد وتخفيف المشاكل المحتملة:",
            list: [
              "التحديد والتقييم المبكر للمخاطر",
              "خطط طوارئ للقضايا الشائعة",
              "اعتبارات الطقس والموسمية",
              "خيارات احتياطية لسلسلة التوريد",
              "إدارة التأمين والمسؤولية"
            ]
          }
        ]
      }
    }
  },
  {
    slug: "energy-efficient-buildings",
    title: {
      en: "Building Energy Efficiency in Jordan",
      ar: "كفاءة الطاقة في المباني بالأردن"
    },
    excerpt: {
      en: "Strategies and technologies for creating energy-efficient buildings that reduce costs and environmental impact.",
      ar: "استراتيجيات وتقنيات لإنشاء مباني موفرة للطاقة تقلل التكاليف والأثر البيئي."
    },
    date: {
      en: "February 15, 2024",
      ar: "15 فبراير 2024"
    },
    author: {
      en: "Eng.mohamd alnasour",
      ar: "المهندس محمد النسور"
    },
    tags: ["Energy", "Construction", "Design"],
    image: energyImage,
    readTime: {
      en: "7 min read",
      ar: "7 دقائق قراءة"
    },
    content: {
      en: {
        introduction: "Energy efficiency in buildings is becoming increasingly important in Jordan. This guide explores practical solutions for reducing energy consumption while maintaining comfort and functionality.",
        sections: [
          {
            title: "Passive Design Strategies",
            content: "Natural approaches to energy efficiency:",
            list: [
              "Building Orientation: Optimizing solar exposure and natural ventilation",
              "Thermal Mass: Using materials to regulate temperature",
              "Natural Lighting: Maximizing daylight to reduce artificial lighting needs",
              "Shading Systems: External shading to prevent heat gain"
            ]
          },
          {
            title: "Insulation Solutions",
            content: "Effective insulation for Jordan's climate:",
            list: [
              "Wall Insulation: Reducing heat transfer through walls",
              "Roof Insulation: Critical for hot summer months",
              "Window Glazing: Double or triple glazing for thermal performance",
              "Thermal Bridging: Addressing weak points in building envelope"
            ]
          },
          {
            title: "Renewable Energy Integration",
            content: "Incorporating sustainable energy sources:",
            list: [
              "Solar Panels: Photovoltaic systems for electricity generation",
              "Solar Water Heating: Cost-effective water heating solution",
              "Heat Pumps: Efficient heating and cooling technology",
              "Energy Storage: Battery systems for off-peak usage"
            ]
          },
          {
            title: "Smart Building Systems",
            content: "Technology for energy optimization:",
            list: [
              "Smart Thermostats: Automated temperature control",
              "LED Lighting: Energy-efficient lighting solutions",
              "Motion Sensors: Reducing waste in unoccupied spaces",
              "Energy Monitoring: Real-time consumption tracking"
            ]
          },
          {
            title: "Cost-Benefit Analysis",
            content: "Understanding the financial advantages:",
            list: [
              "Initial Investment: Upfront costs for energy-efficient features",
              "Operating Savings: Monthly reduction in utility bills",
              "Payback Period: Time to recover initial investment",
              "Property Value: Increased resale value of efficient buildings"
            ]
          }
        ]
      },
      ar: {
        introduction: "تزداد أهمية كفاءة الطاقة في المباني في الأردن. يستكشف هذا الدليل الحلول العملية لتقليل استهلاك الطاقة مع الحفاظ على الراحة والوظائف.",
        sections: [
          {
            title: "استراتيجيات التصميم السلبي",
            content: "أساليب طبيعية لكفاءة الطاقة:",
            list: [
              "توجيه المبنى: تحسين التعرض للشمس والتهوية الطبيعية",
              "الكتلة الحرارية: استخدام المواد لتنظيم درجة الحرارة",
              "الإضاءة الطبيعية: تعظيم ضوء النهار لتقليل احتياجات الإضاءة الاصطناعية",
              "أنظمة التظليل: التظليل الخارجي لمنع كسب الحرارة"
            ]
          },
          {
            title: "حلول العزل",
            content: "عزل فعال لمناخ الأردن:",
            list: [
              "عزل الجدران: تقليل نقل الحرارة عبر الجدران",
              "عزل السقف: حاسم لأشهر الصيف الحارة",
              "زجاج النوافذ: زجاج مزدوج أو ثلاثي للأداء الحراري",
              "الجسور الحرارية: معالجة نقاط الضعف في غلاف المبنى"
            ]
          },
          {
            title: "دمج الطاقة المتجددة",
            content: "دمج مصادر الطاقة المستدامة:",
            list: [
              "الألواح الشمسية: أنظمة كهروضوئية لتوليد الكهرباء",
              "تسخين المياه بالطاقة الشمسية: حل فعال من حيث التكلفة لتسخين المياه",
              "المضخات الحرارية: تكنولوجيا فعالة للتدفئة والتبريد",
              "تخزين الطاقة: أنظمة البطاريات للاستخدام خارج أوقات الذروة"
            ]
          },
          {
            title: "أنظمة المباني الذكية",
            content: "التكنولوجيا لتحسين الطاقة:",
            list: [
              "منظمات الحرارة الذكية: التحكم الآلي في درجة الحرارة",
              "إضاءة LED: حلول إضاءة موفرة للطاقة",
              "أجهزة استشعار الحركة: تقليل الهدر في المساحات غير المشغولة",
              "مراقبة الطاقة: تتبع الاستهلاك في الوقت الفعلي"
            ]
          },
          {
            title: "تحليل التكلفة والعائد",
            content: "فهم المزايا المالية:",
            list: [
              "الاستثمار الأولي: التكاليف المقدمة للميزات الموفرة للطاقة",
              "توفير التشغيل: تخفيض شهري في فواتير الخدمات",
              "فترة الاسترداد: الوقت اللازم لاسترداد الاستثمار الأولي",
              "قيمة العقار: زيادة قيمة إعادة البيع للمباني الفعالة"
            ]
          }
        ]
      }
    }
  }
];
