import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Section({ children, className, delay = 0 }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-10");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 translate-y-10 transition-all duration-700 ease-out",
        className
      )}
    >
      {children}
    </div>
  );
}
