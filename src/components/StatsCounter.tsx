import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface StatItemProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
}

const StatItem = ({ end, duration = 2000, suffix = "", label }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * end));

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration]);

  return (
    <div ref={elementRef} className="text-center animate-fade-in">
      <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-lg md:text-xl">{label}</p>
    </div>
  );
};

export const StatsCounter = () => {
  const { t } = useLanguage();

  return (
    <section className="section-gradient py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <StatItem 
            end={500} 
            suffix="+" 
            label={t("stats.projectsCompleted")}
          />
          <StatItem 
            end={20} 
            suffix="+" 
            label={t("stats.yearsExperience")}
          />
          <StatItem 
            end={100} 
            suffix="%" 
            label={t("stats.clientSatisfaction")}
          />
        </div>
      </div>
    </section>
  );
};
