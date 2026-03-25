export const BRAND = {
  colors: {
    black: "#111111",
    emerald: "#2ECC71",
    emeraldDark: "#27AE60",
    sand: "#E8DFD6",
    smoke: "#3B3B3B",
  },
  contact: {
    email: "info@helmtech.in",
    phone: "+91 99930 94281",
    website: "helmtech.in",
    instagram: "@helm_tech",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Shotgun", href: "#shotgun" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const STATS = [
  { value: 97, suffix: "%", label: "of consumers search online before buying" },
  { value: 75, suffix: "%", label: "judge credibility by website design" },
  { value: 60, suffix: "%", label: "of small businesses have no website" },
] as const;

export const SERVICES = {
  websites: {
    title: "Custom Websites",
    subtitle: "Industry-leading design that converts visitors into customers",
    features: [
      "Conversion-optimized layouts",
      "Mobile-first responsive design",
      "SEO-built from the ground up",
      "Lightning-fast load times",
    ],
  },
  aiAgents: {
    title: "AI Communication Agents",
    subtitle: "Intelligent systems that handle inquiries 24/7",
    features: [
      "Instant response to every inquiry",
      "Handle 100+ conversations simultaneously",
      "Smart lead qualification",
      "Multilingual support",
    ],
  },
} as const;

export const SHOTGUN_TOOLS = [
  { count: 78, category: "Gmail" },
  { count: 68, category: "Google Drive" },
  { count: 60, category: "Google Sheets" },
  { count: 64, category: "YouTube" },
  { count: 19, category: "ElevenLabs" },
  { count: 16, category: "Linear" },
  { count: 16, category: "GitHub" },
  { count: 11, category: "Airtable" },
  { count: 8, category: "Slack" },
] as const;

export const TERMINAL_LINES = [
  { prefix: "$", text: 'helm deploy --site client-xyz', type: "command" as const },
  { prefix: "✓", text: "Website built and deployed in 23s", type: "success" as const },
  { prefix: "$", text: 'helm train --agent support', type: "command" as const },
  { prefix: "✓", text: "AI Agent trained on 847 data points", type: "success" as const },
  { prefix: "$", text: "helm status", type: "command" as const },
  { prefix: "✓", text: "5 sites live · 3 agents active · 0 issues", type: "success" as const },
];

export const SHOTGUN_WORKFLOW = [
  { step: 1, total: 4, text: "Fetching data from Google Sheets...", status: "Done" },
  { step: 2, total: 4, text: "Generating summary with AI...", status: "Done" },
  { step: 3, total: 4, text: "Creating PDF report...", status: "Done" },
  { step: 4, total: 4, text: "Emailing to team@company.com...", status: "Sent!" },
];

export const PORTFOLIO = [
  {
    name: "The Black & Yellow",
    url: "theblackandyellow.com",
    href: "https://theblackandyellow.com",
    description:
      "A bold, high-impact digital identity built from the ground up — designed to capture attention, communicate brand values, and drive engagement from the very first visit.",
  },
  {
    name: "Apex Human Company",
    url: "theapexhumancompany.com",
    href: "https://theapexhumancompany.com",
    description:
      "A premium wellness and performance brand brought to life online — featuring seamless user journeys, integrated booking systems, and a design language that reflects authority.",
  },
  {
    name: "Shotgun",
    url: "yourshotgun.com",
    href: "https://yourshotgun.com",
    description:
      "The AI execution engine — a desktop application that moves beyond the text box to execute complex workflows across your entire digital workspace with 522+ integrated tools.",
  },
  {
    name: "Top Studios",
    url: "topstudios.design",
    href: "https://topstudios.design",
    description:
      "A creative studio platform built for visual storytelling — featuring immersive layouts, dynamic portfolios, and a design system that elevates creative work to its fullest potential.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "We learn your business goals, audience, and competitive landscape.",
  },
  {
    number: "02",
    title: "Design & Build",
    description: "Our team crafts your website and configures your AI agent to perfection.",
  },
  {
    number: "03",
    title: "Launch & Train",
    description: "We go live, train your AI agent on your business, and test everything.",
  },
  {
    number: "04",
    title: "Grow & Optimize",
    description: "Ongoing analytics, A/B testing, and AI tuning to maximize results.",
  },
] as const;

export const DIFFERENTIATORS = [
  {
    title: "Strategy First. Design Second.",
    description:
      "We don't start with pixels — we start with your business goals, target audience, and revenue model.",
    icon: "Target",
    span: 2,
  },
  {
    title: "AI-Integrated From Day One",
    description:
      "While others bolt on chatbots as an afterthought, we architect AI agents into your system from the ground up.",
    icon: "Bot",
    span: 1,
  },
  {
    title: "Built for Scalability",
    description:
      "Your business will grow — and your digital infrastructure should grow with it. From 10 customers to 10,000.",
    icon: "TrendingUp",
    span: 1,
  },
  {
    title: "Business-Focused, Not Just Aesthetic",
    description:
      "A beautiful website that doesn't convert is just art. We build digital assets that drive real business outcomes.",
    icon: "Briefcase",
    span: 2,
  },
] as const;

export const TEAM = [
  {
    name: "Kunal Singh",
    role: "CEO & Co-Founder",
    initials: "KS",
    background: "Ex-Indian Navy Officer",
    bio: "Former naval officer and elite squash athlete. Founded and scaled businesses in fitness and digital media. Leads vision, commercial execution, and distribution.",
  },
  {
    name: "Chinmay Goyal",
    role: "CTO & Co-Founder",
    initials: "CG",
    background: "Ex-Indian Navy Engineer",
    bio: "Technical architect with a naval background. Developed award-winning engineering systems adopted by the Indian Navy. Architect of the Model Context Protocol and core infrastructure.",
  },
] as const;

export const RESULTS = [
  { value: 3.5, suffix: "x", label: "Average revenue increase", decimal: true },
  { value: 80, suffix: "%", label: "Faster response time" },
  { value: 50, suffix: "%", label: "Lower acquisition cost" },
  { value: 24, suffix: "/7", label: "Always-on availability", isStatic: true },
] as const;

export const CHAT_MESSAGES = [
  { sender: "customer", text: "Hi, I'd like to know about your pricing plans" },
  {
    sender: "agent",
    text: "Of course! We have three plans designed for different business stages. Would you like me to walk you through them?",
  },
  { sender: "customer", text: "Yes please. Can I also schedule a demo?" },
  {
    sender: "agent",
    text: "Absolutely! I've just sent you a calendar invite for tomorrow at 2 PM. Looking forward to showing you what we can build for your business.",
  },
];
