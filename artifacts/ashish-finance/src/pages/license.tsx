import { useState } from "react";
import { Award, ShieldCheck, X } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const licenses = [
  {
    id: 1,
    title: "NISM Series VIII — Equity Derivatives",
    authority: "NISM",
    certNo: "NISM-2023-XXXXX",
    verified: true,
  },
  {
    id: 2,
    title: "NISM Series V-A — Mutual Fund Distributors",
    authority: "NISM",
    certNo: "NISM-MF-XXXXX",
    verified: false,
  },
  {
    id: 3,
    title: "Authorised Person Certificate",
    authority: "Angel One",
    regNo: "AP-ANG-XXXXX",
    verified: true,
  },
  {
    id: 4,
    title: "SEBI Registration",
    authority: "SEBI",
    regNo: "INZ000000000",
    verified: true,
  }
];

export default function License() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Hero */}
      <div className="bg-zinc-950 border-b border-primary/20 py-16">
        <div className="container mx-auto px-4">
          <Section className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Licenses & Certifications
            </h1>
            <h2 className="text-2xl text-primary font-marathi mb-6">परवाने आणि प्रमाणपत्रे</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground font-light">
              We operate with complete transparency and adhere to all regulatory standards.
            </p>
          </Section>
        </div>
      </div>

      {/* Licenses Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {licenses.map((license, i) => (
              <Section key={license.id} delay={100 * (i + 1)}>
                <div className="luxury-card p-8 rounded-xl h-full relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none transform group-hover:scale-110 transition-transform duration-500">
                    <Award className="w-32 h-32 text-primary" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-bold rounded tracking-wider uppercase">
                        {license.authority}
                      </div>
                      {license.verified && (
                        <div className="flex items-center gap-1 text-[#25D366] text-sm font-medium bg-[#25D366]/10 px-2 py-1 rounded">
                          <ShieldCheck size={16} /> Verified
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-4 pr-12">
                      {license.title}
                    </h3>
                    
                    <div className="mt-auto pt-6">
                      <p className="text-muted-foreground font-mono text-sm mb-6">
                        {license.certNo ? `Cert No: ${license.certNo}` : `Reg No: ${license.regNo}`}
                      </p>
                      
                      <Button 
                        variant="outline" 
                        className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={() => setActiveModal(license.id)}
                      >
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </div>
              </Section>
            ))}
          </div>

          <Section delay={500} className="mt-16 text-center max-w-2xl mx-auto p-6 bg-zinc-900 border border-primary/20 rounded-xl">
            <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground leading-relaxed">
              All licenses and certifications are regularly renewed and compliant with SEBI regulations. We believe in 100% transparency with our investors.
            </p>
          </Section>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl aspect-[4/3] bg-zinc-950 border-2 border-primary rounded-xl shadow-[0_0_50px_rgba(201,168,76,0.3)] overflow-hidden flex items-center justify-center">
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors"
            >
              <X size={20} />
            </button>
            <div className="text-center p-8">
              <Award className="w-24 h-24 text-primary/30 mx-auto mb-6" />
              <h3 className="text-2xl font-serif text-foreground mb-4">Certificate Document</h3>
              <p className="text-muted-foreground mb-8">Placeholder for official document scan.</p>
              <p className="text-sm font-mono text-primary/70">
                {licenses.find(l => l.id === activeModal)?.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
