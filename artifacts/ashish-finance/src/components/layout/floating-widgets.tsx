import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

export default function FloatingWidgets() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9999999999"
        target="_blank"
        rel="noreferrer"
        className="relative group flex items-center justify-center h-14 w-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
        <FaWhatsapp size={28} className="relative z-10" />
      </a>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={cn(
          "flex items-center justify-center h-12 w-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all",
          showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}
