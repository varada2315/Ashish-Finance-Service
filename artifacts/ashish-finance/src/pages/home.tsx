import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ChevronRight, Phone, Mail, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Counter } from "@/components/ui/counter";


export default function Home() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden gradient-secondary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Section delay={100} className="order-2 md:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full glass-effect border-primary/30 text-primary font-medium mb-2 animate-pulse-glow text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  SEBI Registered & NISM Certified
                </div>
                
                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                  <span className="block text-foreground">MR. ASHISH VILAS</span>
                  <span className="block text-gradient pb-2 animate-float">URKUDE</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground font-light">
                  Stock Market Authorised Person
                </p>
                <p className="text-base md:text-lg text-primary font-medium">
                  6 Years Experience in Stock Market
                </p>
                
                <p className="text-lg md:text-xl text-foreground font-marathi border-l-4 border-primary pl-3 py-1 italic glass-effect rounded-r-lg">
                  "विश्वासार्ह आर्थिक मार्गदर्शन"
                </p>
                
                <div className="pt-4 flex flex-wrap gap-3">
                  <Button asChild size="sm" className="gradient-primary text-primary-foreground hover:shadow-glow hover-lift text-sm px-6 h-10 rounded-full">
                    <a href="https://wa.me/9999999999" target="_blank" rel="noreferrer">
                      WhatsApp वर संपर्क करा
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 hover:text-primary text-sm px-6 h-10 rounded-full hover-lift">
                    <Link href="/services">
                      Explore Services <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Section>
            
            <Section delay={300} className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl border-2 border-primary/30 p-1 bg-gradient-to-tr from-background via-primary/10 to-background flex items-center justify-center hover-lift overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-2xl"></div>
                <img
                  src="/20-46-27_page-0001.jpg"
                  alt="Ashish Finance Services"
                  className="w-full h-full object-cover relative z-10 rounded-xl"
                />
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* Thin Gold Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"></div>

      {/* Intro Video Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Section>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">माझा परिचय व्हिडिओ</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-marathi">
                Ashish Urkude यांचा थेट परिचय आणि गुंतवणूक क्षेत्रातील त्यांचा अनुभव.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto luxury-card p-2 md:p-4 rounded-xl">
              <div className="aspect-video w-full bg-black rounded-lg overflow-hidden relative">
                {/* YouTube Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 border border-white/5">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </div>
                    <p className="text-muted-foreground font-medium">Video Presentation</p>
                  </div>
                </div>
                {/* <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe> */}
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-20 relative bg-zinc-950 border-y border-primary/20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Section>
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-primary/40 bg-black/50 text-primary font-serif italic mb-8">
              ✦ Invest · Grow · Succeed ✦
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight max-w-4xl mx-auto">
              Grow Your Wealth with <span className="text-primary">Smart</span> Investment Solutions
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-marathi mb-10 max-w-3xl mx-auto">
              तुमचे पैसे वाढवा — सोपे, स्पष्ट आणि विश्वासार्ह मार्गदर्शनाने
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 h-14 rounded-full shadow-[0_0_20px_rgba(201,168,76,0.3)]">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </Section>
        </div>
      </section>

      {/* Trust Counters */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Section delay={100} className="text-center p-8 gradient-card rounded-2xl hover-lift border border-primary/20 shadow-glow/20">
              <div className="text-5xl md:text-6xl font-serif font-bold text-gradient mb-3">
                <Counter end={1000} suffix="+" />
              </div>
              <p className="text-foreground font-semibold text-xl">Customers</p>
              <p className="text-muted-foreground text-sm font-marathi mt-2">ग्राहक</p>
            </Section>
            <Section delay={200} className="text-center p-8 gradient-card rounded-2xl hover-lift border border-primary/20 shadow-glow/20">
              <div className="text-5xl md:text-6xl font-serif font-bold text-gradient mb-3">
                <Counter end={500} suffix="+" />
              </div>
              <p className="text-foreground font-semibold text-xl">SIP Investors</p>
              <p className="text-muted-foreground text-sm font-marathi mt-2">SIP गुंतवणूकदार</p>
            </Section>
            <Section delay={300} className="text-center p-8 gradient-card rounded-2xl hover-lift border border-primary/20 shadow-glow/20">
              <div className="text-5xl md:text-6xl font-serif font-bold text-gradient mb-3">
                <Counter end={6} suffix="+" />
              </div>
              <p className="text-foreground font-semibold text-xl">Years Experience</p>
              <p className="text-muted-foreground text-sm font-marathi mt-2">वर्षांचा अनुभव</p>
            </Section>
            <Section delay={400} className="text-center p-8 gradient-card rounded-2xl hover-lift border border-primary/20 shadow-glow/20 flex flex-col justify-center items-center">
              <Award className="h-14 w-14 text-gradient mb-4" />
              <p className="text-foreground font-semibold text-xl">NISM Certified</p>
              <p className="text-muted-foreground text-sm font-marathi mt-2">प्रमाणित सल्लागार</p>
            </Section>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Section>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Our Happy Clients</h2>
              <p className="text-xl text-primary font-marathi italic">आमचे समाधानी ग्राहक</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-xl luxury-card aspect-square bg-zinc-900 border border-primary/20">
                  <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                    <img 
                      src={`https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} 
                      alt={`Client ${i}`} 
                      className="w-full h-full object-cover mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-primary font-medium flex items-center gap-2">
                      <CheckCircle2 size={16} /> Client Visit 2024
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-950 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <Section>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Client Testimonials</h2>
              <div className="h-1 w-20 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Rahul D.", quote: "The guidance provided by Ashish sir has transformed my portfolio completely. Highly recommended for beginners.", marathi: "Ashish sir मुळे माझी गुंतवणूक योग्य दिशेने गेली." },
                { name: "Sneha M.", quote: "Very professional and transparent service. They explain complex market terms in very simple language.", marathi: "अतिशय पारदर्शक आणि उत्तम मार्गदर्शन." },
                { name: "Vikram P.", quote: "My mutual fund investments are growing steadily thanks to their expert advice and regular portfolio reviews.", marathi: "भविष्यासाठी योग्य गुंतवणूक नियोजन." }
              ].map((testimonial, i) => (
                <div key={i} className="luxury-card p-8 rounded-xl relative">
                  <div className="text-5xl text-primary/20 font-serif absolute top-4 left-4">"</div>
                  <div className="relative z-10">
                    <div className="flex gap-1 text-primary mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 font-light leading-relaxed">"{testimonial.quote}"</p>
                    <p className="text-foreground font-marathi text-sm border-l-2 border-primary/50 pl-3 py-1 mb-6">"{testimonial.marathi}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-foreground font-bold">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">Verified Investor</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
            <div className="flex flex-col items-center justify-center py-4 md:py-0">
              <Phone className="h-6 w-6 mb-2 opacity-80" />
              <h3 className="font-bold text-lg mb-1">Call Us</h3>
              <p className="opacity-90">+91 99999 99999</p>
            </div>
            <div className="flex flex-col items-center justify-center py-4 md:py-0">
              <Mail className="h-6 w-6 mb-2 opacity-80" />
              <h3 className="font-bold text-lg mb-1">Email</h3>
              <p className="opacity-90">contact@ashishfinance.com</p>
            </div>
            <div className="flex flex-col items-center justify-center py-4 md:py-0">
              <Award className="h-6 w-6 mb-2 opacity-80" />
              <h3 className="font-bold text-lg mb-1">License</h3>
              <p className="opacity-90">SEBI Reg: INZ000000000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
