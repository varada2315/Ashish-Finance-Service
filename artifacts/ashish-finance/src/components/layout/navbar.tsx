import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import afcLogo from "@assets/file_000000001d647208947e624e945949d3_-_Ashish_Urkude_1776087586397.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/license", label: "License" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 glass-nav",
        isScrolled ? "scrolled py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src={afcLogo}
            alt="Ashish Finance Services"
            className="h-10 w-auto group-hover:scale-105 transition-transform"
          />
          <div className="hidden sm:block">
            <h1 className="text-xl font-serif font-bold text-foreground leading-tight tracking-wide">
              Ashish Finance Services
            </h1>
            <p className="text-xs text-primary font-medium tracking-widest">
              WEALTH MANAGEMENT
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary",
                location === link.href
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 shadow-[0_0_15px_rgba(201,168,76,0.3)] hover:shadow-[0_0_25px_rgba(201,168,76,0.5)] transition-all"
          >
            <a href="https://wa.me/9999999999" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0A0A0A] border-b border-primary/30 py-4 px-4 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block text-lg font-medium py-2 border-b border-white/5",
                location === link.href ? "text-primary" : "text-foreground/80"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="bg-primary text-primary-foreground font-semibold w-full mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <a href="https://wa.me/9999999999" target="_blank" rel="noreferrer">
              WhatsApp वर संपर्क करा
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
