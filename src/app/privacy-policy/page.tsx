import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Helm Tech",
  description:
    "Learn how Helm Tech collects, uses, and protects your personal information across our websites, AI agents, and digital services.",
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-sand/40 text-sm mb-16">
          Last updated: March 30, 2026
        </p>

        <div className="space-y-12 text-sand/70 text-sm leading-relaxed">
          <Section title="1. Introduction">
            <p>
              Helm Tech (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
              operates the website{" "}
              <span className="text-emerald">helmtech.in</span> and provides web
              development, AI agent, and digital automation services. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              services.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p className="mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-sand/90">Personal Information:</strong>{" "}
                Name, email address, phone number, and company name when you
                submit a contact form or inquiry.
              </li>
              <li>
                <strong className="text-sand/90">Usage Data:</strong> IP
                address, browser type, operating system, pages visited, time
                spent on pages, and referring URLs collected automatically
                through analytics tools.
              </li>
              <li>
                <strong className="text-sand/90">
                  Cookies &amp; Tracking Technologies:
                </strong>{" "}
                We use cookies and similar technologies to enhance your
                experience, analyze traffic, and understand usage patterns.
              </li>
              <li>
                <strong className="text-sand/90">
                  AI Agent Interaction Data:
                </strong>{" "}
                If you interact with one of our AI-powered communication agents,
                we may collect conversation logs to improve service quality.
              </li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>To respond to your inquiries and provide requested services</li>
              <li>To improve and optimize our website and services</li>
              <li>To send relevant communications about our services (with your consent)</li>
              <li>To train and improve our AI agents and automation workflows</li>
              <li>To comply with legal obligations</li>
              <li>To detect, prevent, and address technical or security issues</li>
            </ul>
          </Section>

          <Section title="4. Data Sharing &amp; Disclosure">
            <p className="mb-4">
              We do not sell your personal information. We may share your data
              with:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-sand/90">Service Providers:</strong>{" "}
                Trusted third-party vendors who assist us in operating our
                website, conducting business, or serving you (e.g., hosting
                providers, analytics platforms, email services).
              </li>
              <li>
                <strong className="text-sand/90">Legal Requirements:</strong>{" "}
                When required by law, regulation, or legal process.
              </li>
              <li>
                <strong className="text-sand/90">Business Transfers:</strong> In
                the event of a merger, acquisition, or sale of assets.
              </li>
            </ul>
          </Section>

          <Section title="5. Third-Party Services">
            <p>
              Our website and services may integrate with third-party platforms
              including Google Analytics, Gmail API, and AI service providers.
              These services have their own privacy policies, and we encourage
              you to review them. We are not responsible for the privacy
              practices of third-party services.
            </p>
          </Section>

          <Section title="6. Data Security">
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </Section>

          <Section title="7. Data Retention">
            <p>
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this policy, unless a longer
              retention period is required or permitted by law. AI agent
              conversation logs are retained for a maximum of 12 months for
              service improvement purposes.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Object to the processing of your personal data</li>
              <li>Request data portability where applicable</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:info@helmtech.in"
                className="text-emerald hover:underline"
              >
                info@helmtech.in
              </a>
              .
            </p>
          </Section>

          <Section title="9. Children&apos;s Privacy">
            <p>
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              we become aware that we have collected data from a child without
              parental consent, we will take steps to delete it.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated &quot;Last updated&quot;
              date. Your continued use of our website or services after any
              changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <div className="mt-4 space-y-1">
              <p>
                <strong className="text-sand/90">Helm Tech</strong>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@helmtech.in"
                  className="text-emerald hover:underline"
                >
                  info@helmtech.in
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+919993094281"
                  className="text-emerald hover:underline"
                >
                  +91 99930 94281
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://helmtech.in"
                  className="text-emerald hover:underline"
                >
                  helmtech.in
                </a>
              </p>
            </div>
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
