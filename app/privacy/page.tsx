import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Jasmine Global HI-Lux Export",
  description:
    "Privacy policy for Jasmine Global HI-Lux Export. How we collect, use and protect personal data submitted via our enquiry form, email and WhatsApp.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "1. Who We Are",
    content:
      "This website is operated by Jasmine Global Process Solutions OPC, trading as Jasmine Global HI-Lux Export. Our coordination is based in Singapore. For privacy enquiries, contact us at admin@jasmineglobalexport.com.",
  },
  {
    title: "2. What Data We Collect",
    content:
      "When you submit an enquiry through our quote form, we may collect: full name, company name, email address, WhatsApp number, destination country, destination port, buyer type, vehicle preferences and any additional message you provide. We do not collect payment card details through this website.",
  },
  {
    title: "3. How We Use Your Data",
    content:
      "We use your enquiry data to respond to your export request, prepare a proforma invoice or quotation, communicate shipping options and buyer responsibilities, and follow up on your enquiry where you have not objected. We do not sell your personal data to third parties.",
  },
  {
    title: "4. WhatsApp & Email Communication",
    content:
      "If you contact us via WhatsApp or email, we may retain that communication to process your enquiry and for business record purposes. WhatsApp communications are subject to WhatsApp's own privacy policy. We will not share your WhatsApp number or email address with third parties except where required to process your export shipment.",
  },
  {
    title: "5. Document Handling",
    content:
      "If we share export documents (proforma invoice, commercial invoice, packing list, bill of lading) with you, private buyer names, company names, chassis numbers, bank details and sensitive data will be hidden in any publicly shared or sample versions. Full documents are shared only with the confirmed buyer.",
  },
  {
    title: "6. Data Retention",
    content:
      "We retain enquiry data for the duration needed to respond and follow up on your request. Confirmed transaction records are retained as required for export documentation and business compliance purposes.",
  },
  {
    title: "7. Your Rights",
    content:
      "You may request access to, correction of, or deletion of personal data we hold about you by contacting us at admin@jasmineglobalexport.com. We will respond within a reasonable timeframe.",
  },
  {
    title: "8. Cookies",
    content:
      "This website may use basic cookies for analytics and performance. No marketing tracking cookies are used without your consent. You can disable cookies in your browser settings at any time.",
  },
  {
    title: "9. Changes to This Policy",
    content:
      "We may update this privacy policy from time to time. The current version will always be available at this URL. Continued use of this website after any changes constitutes acceptance of the updated policy.",
  },
  {
    title: "10. Contact",
    content:
      "For any privacy-related questions, contact us at admin@jasmineglobalexport.com or through our WhatsApp channels listed on the Contact page.",
  },
];

export default function PrivacyPage() {
  return (
    <PageLayout>
      <section className="section-title" aria-label="Privacy policy intro">
        <div className="wrap">
          <span className="variant-note-pill">Privacy Policy</span>
          <h1 style={{ marginTop: 12 }}>Privacy Policy</h1>
          <p style={{ maxWidth: 640, lineHeight: 1.7, color: "var(--muted)" }}>
            Last updated: July 2026. This policy explains what personal data we collect, how we use it and your rights in relation to that data.
          </p>
        </div>
      </section>

      <section style={{ padding: "56px 0 80px" }} aria-label="Privacy policy sections">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {sections.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: 16,
                  padding: "28px 32px",
                  boxShadow: "0 4px 14px rgba(7,23,47,0.04)",
                }}
              >
                <h2 style={{ fontSize: 17, fontWeight: 900, color: "var(--navy)", margin: "0 0 12px" }}>{s.title}</h2>
                <p style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>{s.content}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 40,
              background: "var(--soft)",
              border: "1px solid var(--line)",
              borderRadius: 14,
              padding: "20px 24px",
              fontSize: 14,
              color: "var(--muted)",
              lineHeight: 1.6,
            }}
          >
            For export enquiries or document requests, please use our <a href="/quote" style={{ color: "var(--navy)", fontWeight: 700 }}>Quote Form</a> or contact us at{" "}
            <a href="mailto:admin@jasmineglobalexport.com" style={{ color: "var(--navy)", fontWeight: 700 }}>admin@jasmineglobalexport.com</a>.
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
