import { Section } from "@/components/ui/section";

export default function Terms() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <Section className="py-12 border-b border-primary/20 mb-10">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Terms & Conditions</h1>
          <h2 className="text-2xl text-primary font-marathi">नियम व अटी</h2>
        </Section>

        <Section delay={100}>
          <div className="prose prose-invert prose-gold max-w-none">
            <p className="text-muted-foreground lead">
              Last updated: January 2024
            </p>
            
            <h3 className="text-foreground font-serif text-2xl mt-8 mb-4">1. Agreement to Terms</h3>
            <p className="text-muted-foreground">
              By accessing our website, you agree to be bound by these Terms and Conditions and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.
            </p>

            <h3 className="text-foreground font-serif text-2xl mt-8 mb-4">2. Services Provided</h3>
            <p className="text-muted-foreground">
              Ashish Finance Services provides financial advisory, mutual fund distribution, and demat account opening facilitation services. We act as an Authorised Person for Angel One and are registered with SEBI and NISM. All investments are subject to market risks. Read all scheme related documents carefully.
            </p>

            <h3 className="text-foreground font-serif text-2xl mt-8 mb-4">3. Disclaimer</h3>
            <p className="text-muted-foreground">
              The materials on Ashish Finance Services' website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="text-muted-foreground mt-4 font-marathi border-l-2 border-primary pl-4 py-2 bg-primary/5">
              गुंतवणूक ही बाजार जोखमीच्या अधीन आहे. कृपया गुंतवणूक करण्यापूर्वी सर्व दस्तऐवज काळजीपूर्वक वाचा.
            </p>

            <h3 className="text-foreground font-serif text-2xl mt-8 mb-4">4. Limitations of Liability</h3>
            <p className="text-muted-foreground">
              In no event shall Ashish Finance Services or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Ashish Finance Services' website, even if Ashish Finance Services or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h3 className="text-foreground font-serif text-2xl mt-8 mb-4">5. Revisions and Errata</h3>
            <p className="text-muted-foreground">
              The materials appearing on Ashish Finance Services' website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
