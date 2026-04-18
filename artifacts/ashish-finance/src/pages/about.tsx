import { Link } from "wouter";
import { CheckCircle2, Target, Eye, Shield, BookOpen, TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/section";
import afcLogo from "@assets/file_000000001d647208947e624e945949d3_-_Ashish_Urkude_1776087586397.png";

export default function About() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Hero */}
      <div className="bg-zinc-950 border-b border-primary/20 py-16">
        <div className="container mx-auto px-4">
          <Section className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              About Us <span className="text-primary mx-2">—</span> <span className="font-marathi font-normal">आमच्याबद्दल</span>
            </h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground font-light">
              Empowering everyday investors with premium, trusted financial guidance.
            </p>
          </Section>
        </div>
      </div>

      {/* Brand Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Section delay={100}>
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-primary/30 p-2 bg-zinc-900 luxury-card">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                <div className="w-full h-full bg-zinc-800 rounded-xl flex flex-col items-center justify-center relative overflow-hidden">
                   <img src={afcLogo} alt="Ashish Finance Logo" className="w-32 h-auto opacity-20 absolute inset-0 m-auto" />
                   <div className="text-center relative z-10 p-8">
                     <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/20">
                       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                     </div>
                     <h3 className="text-2xl font-serif text-primary mb-2">Mr. Ashish Vilas Urkude</h3>
                     <p className="text-muted-foreground uppercase tracking-widest text-sm mb-4">Founder & Lead Advisor</p>
                     <div className="flex gap-2 justify-center">
                        <span className="px-3 py-1 rounded-full bg-zinc-950 border border-primary/20 text-xs text-foreground">6+ Years Exp.</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-950 border border-primary/20 text-xs text-foreground">NISM Certified</span>
                     </div>
                   </div>
                </div>
              </div>
            </Section>
            
            <Section delay={200} className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Our Story</h2>
                <h3 className="text-2xl font-marathi text-primary mb-6">आमची कहाणी</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Ashish Finance Services was founded with a singular goal: to demystify the stock market and make premium wealth management accessible to everyone. We understand that the financial world can seem complex and intimidating.
                  </p>
                  <p className="font-marathi text-foreground border-l-2 border-primary/40 pl-4 py-2 bg-primary/5 rounded-r-lg">
                    शेअर बाजार आणि गुंतवणुकीचे जग बऱ्याचदा क्लिष्ट वाटते. आमचा उद्देश हाच आहे की हे सर्व सोप्या भाषेत तुमच्यापर्यंत पोहोचवणे आणि तुम्हाला आर्थिकदृष्ट्या सक्षम बनवणे.
                  </p>
                  <p>
                    With over 6 years of deep market experience, we have successfully guided hundreds of families and individuals towards financial independence. We don't just offer tips; we provide education, transparency, and a long-term partnership.
                  </p>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-zinc-950 border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Section delay={100}>
              <div className="luxury-card p-10 rounded-2xl h-full flex flex-col">
                <Target className="h-12 w-12 text-primary mb-6" />
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Our mission is to provide simple and trusted financial guidance that empowers individuals to take control of their financial future through disciplined investing.
                </p>
                <div className="pt-6 border-t border-primary/20">
                  <h3 className="text-lg font-marathi text-primary mb-2">आमचे ध्येय</h3>
                  <p className="text-foreground font-marathi text-sm leading-relaxed">
                    सर्वांना सोपे आणि विश्वासार्ह आर्थिक मार्गदर्शन देणे, ज्यामुळे प्रत्येक व्यक्ती आपली आर्थिक उद्दिष्टे साध्य करू शकेल.
                  </p>
                </div>
              </div>
            </Section>
            
            <Section delay={200}>
              <div className="luxury-card p-10 rounded-2xl h-full flex flex-col">
                <Eye className="h-12 w-12 text-primary mb-6" />
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Our vision is to become the most trusted name in wealth management, known for our integrity, transparency, and commitment to client success.
                </p>
                <div className="pt-6 border-t border-primary/20">
                  <h3 className="text-lg font-marathi text-primary mb-2">आमची दृष्टी</h3>
                  <p className="text-foreground font-marathi text-sm leading-relaxed">
                    पारदर्शकता आणि प्रामाणिकपणा यासाठी ओळखले जाणारे सर्वात विश्वासार्ह वेल्थ मॅनेजमेंट फर्म बनणे.
                  </p>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Section className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-xl text-primary font-marathi italic">आम्हाला का निवडावे?</p>
          </Section>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Personalized Guidance", marathi: "वैयक्तिकृत मार्गदर्शन" },
              { icon: TrendingUp, title: "Long-Term Wealth Focus", marathi: "दीर्घकालीन संपत्तीवर लक्ष" },
              { icon: Shield, title: "Trusted & Transparent", marathi: "विश्वासार्ह आणि पारदर्शक" },
              { icon: BookOpen, title: "Simple Strategies", marathi: "सोप्या रणनीती" }
            ].map((feature, i) => (
              <Section key={i} delay={100 * (i + 1)}>
                <div className="luxury-card p-8 rounded-xl text-center h-full group hover:bg-primary/5">
                  <div className="w-16 h-16 rounded-full bg-zinc-900 border border-primary/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-primary font-marathi">{feature.marathi}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Strip */}
      <section className="py-10 bg-primary/10 border-y border-primary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-primary h-6 w-6" />
              <span className="font-bold text-foreground tracking-wide">NISM Certified</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-primary h-6 w-6" />
              <span className="font-bold text-foreground tracking-wide">SEBI Registered</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-primary h-6 w-6" />
              <span className="font-bold text-foreground tracking-wide">Angel One Authorised Person</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
