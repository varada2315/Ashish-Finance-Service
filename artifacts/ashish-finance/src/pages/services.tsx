import { Link } from "wouter";
import { ArrowRight, BarChart3, PieChart, LineChart, UserPlus, Briefcase, Calculator, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const services = [
  {
    icon: BarChart3,
    title: "Stock Market Investment Guidance",
    marathi: "शेअर बाजार गुंतवणूक मार्गदर्शन",
    description: "Expert advice on direct equity investments. We analyze market trends to help you build a robust stock portfolio.",
  },
  {
    icon: PieChart,
    title: "Mutual Fund Investment",
    marathi: "म्युच्युअल फंड गुंतवणूक",
    description: "Tailored mutual fund recommendations (SIP/Lumpsum) based on your risk appetite and financial goals.",
  },
  {
    icon: LineChart,
    title: "F&O Trading Support",
    marathi: "F&O ट्रेडिंग सपोर्ट",
    description: "Strategic guidance for Futures and Options trading with proper risk management techniques.",
  },
  {
    icon: UserPlus,
    title: "Demat Account Opening (Angel One)",
    marathi: "डिमॅट खाते उघडणे",
    description: "Hassle-free demat and trading account opening process as an Authorised Person for Angel One.",
  },
  {
    icon: Briefcase,
    title: "Portfolio Management Guidance",
    marathi: "पोर्टफोलिओ व्यवस्थापन",
    description: "Comprehensive review and restructuring of your existing investment portfolio for optimal returns.",
  },
  {
    icon: Calculator,
    title: "Financial Planning",
    marathi: "आर्थिक नियोजन",
    description: "Holistic planning for retirement, child education, and other major life goals.",
  },
  {
    icon: GraduationCap,
    title: "Beginner Investment Training",
    marathi: "नवीन गुंतवणूकदारांसाठी प्रशिक्षण",
    description: "Simple, easy-to-understand training sessions for individuals new to the stock market.",
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-0 min-h-screen">
      {/* Hero */}
      <div className="bg-zinc-950 border-b border-primary/20 py-16">
        <div className="container mx-auto px-4">
          <Section className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Our Services <span className="text-primary mx-2">—</span> <span className="font-marathi font-normal">आमच्या सेवा</span>
            </h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground font-light">
              Comprehensive wealth management solutions tailored to your unique financial goals.
            </p>
          </Section>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Section key={i} delay={100 * (i % 3 + 1)}>
                <div className="luxury-card p-8 rounded-xl h-full flex flex-col group hover:-translate-y-2 transition-all duration-300">
                  <div className="w-14 h-14 rounded-lg bg-zinc-900 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <h4 className="text-lg text-primary font-marathi mb-4">
                    {service.marathi}
                  </h4>
                  
                  <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-primary/10">
                    <Button asChild variant="ghost" className="w-full text-primary hover:text-primary hover:bg-primary/10 justify-between group/btn">
                      <Link href="/contact">
                        Enquire Now
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Section>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Start Your Investment Journey Today
            </h2>
            <p className="text-2xl font-marathi mb-8 italic">
              आजच सुरुवात करा
            </p>
            <Button asChild size="lg" className="bg-zinc-950 text-foreground hover:bg-zinc-900 border border-primary/50 text-lg px-10 h-14 rounded-full shadow-xl">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </Section>
        </div>
      </section>
    </div>
  );
}
