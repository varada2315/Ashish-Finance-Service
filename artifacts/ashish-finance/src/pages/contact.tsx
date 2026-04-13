import { useState } from "react";
import { Phone, Mail, MessageCircle, Clock, Send, MapPin } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "धन्यवाद! (Thank You!)",
        description: "आम्ही लवकरच संपर्क करू. We will get back to you shortly.",
        className: "bg-zinc-900 border-primary text-foreground",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Hero */}
      <div className="bg-zinc-950 border-b border-primary/20 py-16">
        <div className="container mx-auto px-4">
          <Section className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Contact Us <span className="text-primary mx-2">—</span> <span className="font-marathi font-normal">आमच्याशी संपर्क करा</span>
            </h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground font-light">
              Ready to start your investment journey? We're here to help.
            </p>
          </Section>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <Section delay={100}>
                <div className="luxury-card p-6 rounded-xl flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Call Us <span className="font-marathi font-normal text-sm ml-2 text-muted-foreground">फोन करा</span></h3>
                    <p className="text-2xl font-serif text-primary mb-3">+91 99999 99999</p>
                    <Button asChild variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                      <a href="tel:+919999999999">Call Now</a>
                    </Button>
                  </div>
                </div>
              </Section>
              
              <Section delay={200}>
                <div className="luxury-card p-6 rounded-xl flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">WhatsApp <span className="font-marathi font-normal text-sm ml-2 text-muted-foreground">व्हॉट्सॲप</span></h3>
                    <p className="text-xl font-serif text-[#25D366] mb-3">+91 99999 99999</p>
                    <Button asChild variant="outline" size="sm" className="border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366]">
                      <a href="https://wa.me/9999999999" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
                    </Button>
                  </div>
                </div>
              </Section>
              
              <Section delay={300}>
                <div className="luxury-card p-6 rounded-xl flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Email Us <span className="font-marathi font-normal text-sm ml-2 text-muted-foreground">ईमेल करा</span></h3>
                    <p className="text-base text-primary mb-3 break-all">contact@ashishfinance.com</p>
                    <Button asChild variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                      <a href="mailto:contact@ashishfinance.com">Send Email</a>
                    </Button>
                  </div>
                </div>
              </Section>
              
              <Section delay={400}>
                <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">Working Hours</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex justify-between border-b border-white/5 pb-2">
                      <span>Mon–Sat</span>
                      <span className="text-foreground">9:00 AM – 7:00 PM</span>
                    </li>
                    <li className="flex justify-between pt-2">
                      <span>Sunday</span>
                      <span className="text-primary">By Appointment</span>
                    </li>
                  </ul>
                  <p className="mt-4 font-marathi text-sm text-primary/80 border-l-2 border-primary pl-3 py-1">
                    सोमवार ते शनिवार: सकाळी ९ ते संध्याकाळी ७
                  </p>
                </div>
              </Section>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Section delay={300}>
                <div className="luxury-card p-8 md:p-10 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>
                  
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Send us a message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Full Name</label>
                        <Input required placeholder="John Doe" className="bg-zinc-950 border-white/10 focus-visible:ring-primary h-12" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Phone Number</label>
                        <Input required type="tel" placeholder="+91" className="bg-zinc-950 border-white/10 focus-visible:ring-primary h-12" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address (Optional)</label>
                      <Input type="email" placeholder="john@example.com" className="bg-zinc-950 border-white/10 focus-visible:ring-primary h-12" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Interested Service</label>
                      <Select required>
                        <SelectTrigger className="bg-zinc-950 border-white/10 focus:ring-primary h-12">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-900 border-white/10">
                          <SelectItem value="stock">Stock Market Investment</SelectItem>
                          <SelectItem value="mf">Mutual Fund Investment</SelectItem>
                          <SelectItem value="fno">F&O Trading Support</SelectItem>
                          <SelectItem value="demat">Demat Account Opening</SelectItem>
                          <SelectItem value="portfolio">Portfolio Management</SelectItem>
                          <SelectItem value="planning">Financial Planning</SelectItem>
                          <SelectItem value="training">Beginner Training</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Message / Query</label>
                      <Textarea required placeholder="How can we help you?" className="bg-zinc-950 border-white/10 focus-visible:ring-primary min-h-[120px] resize-none" />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-lg font-bold shadow-[0_0_20px_rgba(201,168,76,0.2)]"
                    >
                      {isSubmitting ? "Sending..." : "Submit / पाठवा"}
                      {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                    </Button>
                  </form>
                </div>
              </Section>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
