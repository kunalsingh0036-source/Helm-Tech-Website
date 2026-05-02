// Canonical fonts per HelmTech_BrandIdentity.pdf:
//   - Display: Satoshi (loaded via Fontshare CDN — see globals.css @import)
//   - Body:    Poppins (loaded here via next/font/google)
//
// Satoshi isn't on Google Fonts; it's hosted free by ITF/Fontshare.
// We expose its CSS variable name (--font-heading) here so the
// className spread on <html> in layout.tsx still binds it for
// Tailwind / inline `style` consumers, even though the actual @font-face
// lives in globals.css.
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});
