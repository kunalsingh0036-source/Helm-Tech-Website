import { NAV_LINKS, BRAND } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-smoke/20 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <img src="/logo.svg" alt="Helm Tech" className="w-7 h-7" />
              <span
                className="text-sm font-extrabold tracking-[0.3em] text-sand"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                HELM TECH
              </span>
            </div>
            <p className="text-sand/30 text-xs">
              Building India&apos;s AI Backbone
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-sand/40 hover:text-emerald transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-center md:text-right">
            <p className="text-sand/40 text-xs mb-1">{BRAND.contact.email}</p>
            <p className="text-sand/30 text-xs">
              &copy; 2026 Helm Tech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
