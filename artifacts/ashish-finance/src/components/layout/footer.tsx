import { Link } from "wouter";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import afcLogo from "@assets/file_000000001d647208947e624e945949d3_-_Ashish_Urkude_1776087586397.png";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-primary/20 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src={afcLogo} alt="Ashish Finance Services" className="h-12 w-auto" />
            </Link>
            <p className="text-muted-foreground mb-6 font-marathi">
              आर्थिक स्वातंत्र्याच्या दिशेने — आमच्यासोबत. Grow Your Wealth with Smart Investment Solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full bg-[#111] border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full bg-[#111] border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-serif font-bold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/license" className="text-muted-foreground hover:text-primary transition-colors">Licenses</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-bold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Stock Market Guidance</li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Mutual Fund Investment</li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">F&O Trading Support</li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Portfolio Management</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-bold text-foreground mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span>Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+91 99999 99999</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="text-primary shrink-0" size={18} />
                <span>contact@ashishfinance.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Ashish Finance Services. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
