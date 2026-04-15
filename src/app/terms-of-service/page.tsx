import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — Helm Tech",
  description:
    "Terms and conditions governing the use of Helm Tech websites, AI agents, and digital services.",
};

export default function TermsOfServicePage() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-xs text-sand/50 hover:text-emerald transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to Home
        </a>

        <h1
          className="text-4xl md:text-5xl font-bold text-sand mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Terms of Service
        </h1>
        <p className="text-sand/40 text-sm mb-16">
          Last updated: April 15, 2026
        </p>

        <div className="space-y-12 text-sand/70 text-sm leading-relaxed">
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the services provided by Helm Tech
              (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) through the
              website <span className="text-emerald">helmtech.in</span> or any
              of our digital products, you agree to be bound by these Terms of
              Service. If you do not agree to these terms, please do not use our
              services.
            </p>
          </Section>

          <Section title="2. Services">
            <p className="mb-4">Helm Tech provides the following services:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Custom website design and development</li>
              <li>AI-powered communication agents for businesses</li>
              <li>WhatsApp, Instagram, and web chat automation</li>
              <li>Google Maps listing optimisation</li>
              <li>Ongoing website maintenance and support</li>
            </ul>
          </Section>

          <Section title="3. Client Obligations">
            <p className="mb-4">When using our services, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                Provide accurate and complete information required for service
                delivery, including business details, branding assets, and
                content.
              </li>
              <li>
                Not use our services for any unlawful purpose or in violation of
                any applicable laws or regulations.
              </li>
              <li>
                Respond to requests for information and approvals in a timely
                manner to avoid delays in delivery.
              </li>
              <li>
                Not reverse-engineer, copy, or redistribute any AI agent,
                website template, or proprietary technology provided by Helm
                Tech.
              </li>
            </ul>
          </Section>

          <Section title="4. Payment Terms">
            <p>
              All fees for services are due as agreed in the project proposal or
              invoice. Payments are non-refundable once work has commenced unless
              otherwise specified in a written agreement. Late payments may
              result in suspension of services or access to delivered products.
            </p>
          </Section>

          <Section title="5. Intellectual Property">
            <p>
              Upon full payment, the client receives ownership of the final
              website design and content created specifically for them. Helm Tech
              retains ownership of all proprietary tools, frameworks, AI models,
              and reusable components used in service delivery. We reserve the
              right to showcase completed projects in our portfolio unless the
              client requests otherwise in writing.
            </p>
          </Section>

          <Section title="6. AI Agent Services">
            <p>
              AI agents provided by Helm Tech are designed to assist with
              customer communication and are not a substitute for professional
              advice. We do not guarantee that AI-generated responses will be
              100% accurate in all situations. Clients are responsible for
              reviewing and customising AI agent behaviour to suit their specific
              business needs. We continuously improve our AI systems but do not
              guarantee uninterrupted service.
            </p>
          </Section>

          <Section title="7. Service Delivery">
            <p>
              We aim to deliver websites and AI agents within the timelines
              agreed upon in the project proposal. Delivery timelines may vary
              based on project complexity and client responsiveness. A website or
              AI agent is considered delivered once it is deployed and accessible
              at the agreed domain or platform.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, Helm Tech shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including but not limited to loss of profits,
              data, or business opportunities arising from the use of our
              services. Our total liability for any claim shall not exceed the
              amount paid by the client for the specific service giving rise to
              the claim.
            </p>
          </Section>

          <Section title="9. Termination">
            <p>
              Either party may terminate the service agreement with 15 days
              written notice. Upon termination, the client will receive all
              completed deliverables paid for up to the date of termination. Helm
              Tech reserves the right to suspend or terminate services
              immediately if the client violates these terms.
            </p>
          </Section>

          <Section title="10. Governing Law">
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with the laws of India. Any disputes arising from these
              terms shall be subject to the exclusive jurisdiction of the courts
              in Jaipur, Rajasthan.
            </p>
          </Section>

          <Section title="11. Changes to Terms">
            <p>
              We reserve the right to modify these Terms of Service at any time.
              Changes will be posted on this page with an updated revision date.
              Continued use of our services after changes constitutes acceptance
              of the revised terms.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>
              If you have any questions about these Terms of Service, please
              contact us at{" "}
              <a
                href="mailto:kunal@helmtech.in"
                className="text-emerald hover:underline"
              >
                kunal@helmtech.in
              </a>
            </p>
          </Section>
        </div>
      </div>
    </section>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2
        className="text-lg font-bold text-sand mb-4"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
