import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Data Deletion — Helm Tech",
  description:
    "Instructions for requesting deletion of your personal data from Helm Tech services.",
};

export default function DataDeletionPage() {
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
          Data Deletion
        </h1>
        <p className="text-sand/40 text-sm mb-16">
          Last updated: April 15, 2026
        </p>

        <div className="space-y-12 text-sand/70 text-sm leading-relaxed">
          <Section title="Your Right to Delete Your Data">
            <p>
              At Helm Tech, we respect your right to control your personal data.
              If you have interacted with any of our services, including our
              website, AI agents, WhatsApp Business communications, or any other
              digital product, you may request the deletion of your personal
              data at any time.
            </p>
          </Section>

          <Section title="What Data We May Hold">
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-sand/90">Contact information:</strong>{" "}
                Name, email address, phone number, and business name provided
                through contact forms, inquiries, or service agreements.
              </li>
              <li>
                <strong className="text-sand/90">
                  Communication records:
                </strong>{" "}
                Messages exchanged via WhatsApp Business, email, or our AI
                agents.
              </li>
              <li>
                <strong className="text-sand/90">Usage data:</strong> IP
                address, browser type, and page visit information collected
                through analytics.
              </li>
              <li>
                <strong className="text-sand/90">
                  Project-related data:
                </strong>{" "}
                Content, images, branding assets, and business information
                provided for website development or AI agent configuration.
              </li>
            </ul>
          </Section>

          <Section title="How to Request Data Deletion">
            <p className="mb-4">
              To request the deletion of your personal data, send an email to:
            </p>
            <div className="bg-sand/5 border border-sand/10 rounded-lg p-6 mb-4">
              <p className="text-sand/90 font-bold">
                <a
                  href="mailto:kunal@helmtech.in"
                  className="text-emerald hover:underline"
                >
                  kunal@helmtech.in
                </a>
              </p>
              <p className="text-sand/50 mt-2">
                Subject line: Data Deletion Request
              </p>
            </div>
            <p className="mb-4">
              Please include the following in your request:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Your full name</li>
              <li>
                The email address or phone number associated with your
                interactions
              </li>
              <li>
                A description of which data you would like deleted (or
                &quot;all data&quot;)
              </li>
            </ul>
          </Section>

          <Section title="Processing Timeline">
            <p>
              We will acknowledge your request within 2 business days and
              complete the deletion within 30 days. In some cases, we may need
              to verify your identity before processing the request. If we are
              legally required to retain certain data (such as financial records
              for tax purposes), we will inform you of any data that cannot be
              deleted and the reason for retention.
            </p>
          </Section>

          <Section title="What Happens After Deletion">
            <p className="mb-4">Once your data is deleted:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                Your personal information will be permanently removed from our
                active systems and databases.
              </li>
              <li>
                Any AI agent conversation history associated with your contact
                information will be purged.
              </li>
              <li>
                Backups containing your data will be purged within 90 days of
                the deletion request.
              </li>
              <li>
                If you are an active client, data deletion may result in
                termination of services as we may no longer have the information
                needed to deliver them.
              </li>
            </ul>
          </Section>

          <Section title="Third-Party Data">
            <p>
              If your data was shared with third-party services as part of our
              operations (such as WhatsApp Business API via Meta), we will make
              reasonable efforts to request deletion from those services as
              well. For data held directly by Meta or other platforms, you may
              also need to submit a separate deletion request to those services
              directly.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have any questions about data deletion or your privacy
              rights, please contact us at{" "}
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
