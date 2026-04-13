import { Section } from "@/components/ui/section";

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <Section className="py-12 border-b border-primary/20 mb-10">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Privacy Policy</h1>
          <h2 className="text-2xl text-primary font-marathi">गोपनीयता धोरण</h2>
        </Section>

        <Section delay={100}>
          <div className="prose prose-invert prose-gold max-w-none">
            <p className="text-muted-foreground lead">
              Last updated: January 2024
            </p>
            
            <h3 className="text-foreground font-serif text-2xl mt-8 mb-4">1. Data Collection</h3>
            <p className="text-muted-foreground">
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us.
            </p>

            <h3 className="text-foreground font-serif text-2xl mt-8 mb-4">2. Usage of Information</h3>
            <p className="text-muted-foreground">
              We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
            <ul className="text-muted-foreground list-disc pl-6 space-y-2 mt-4">
              <li>To facilitate account creation and logon process.</li>
              <li>To send you marketing and promotional communications.</li>
              <li>To respond to user inquiries/offer support to users.</li>
            </ul>

            <h3 className="text-foreground font-serif text-2xl mt-8 mb-4">3. Third Parties</h3>
            <p className="text-muted-foreground">
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the legal basis outlined in this privacy policy.
            </p>

            <h3 className="text-foreground font-serif text-2xl mt-8 mb-4">4. Security</h3>
            <p className="text-muted-foreground">
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>

            <h3 className="text-foreground font-serif text-2xl mt-8 mb-4">5. Contact Us</h3>
            <p className="text-muted-foreground">
              If you have questions or comments about this notice, you may email us at contact@ashishfinance.com or contact us by post at our registered office address.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
