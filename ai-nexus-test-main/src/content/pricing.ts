export interface Plan {
  id: string;
  name: string;
  badge?: string;
  setup: string;
  standardSetup?: string;
  price: string;
  period: string;
  standardMonthly?: string;
  tagline: string;
  stripeUrl: string;
  featured: boolean;
  features: string[];
  cta: string;
  standardPricingNote?: string;
}

export interface CustomPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  cta: string;
  href: string;
}

export interface IndividualService {
  name: string;
  price: string;
  href: string;
}

export const foundingBannerText =
  "Founding client pricing: first 5 clients. Standard pricing applies after.";

export const pricingSubtitle =
  "Every plan includes a professionally engineered website. Founding clients get $279 setup on any plan.";

export const standardPricingPrefix = "Standard pricing after founding period:";

export const plans: Plan[] = [
  {
    id: "essential",
    name: "Essential",
    setup: "$279 setup",
    price: "$79",
    period: "/mo",
    tagline: "Your site, live and protected.",
    stripeUrl: "https://buy.stripe.com/cNicMY3q5aep0mD8cmco000",
    featured: false,
    cta: "Get Started",
    standardPricingNote: "$279 setup + $79/mo",
    features: [
      "Professional business website",
      "Managed hosting & SSL certificate",
      "Security monitoring & uptime alerts",
      "1 content edit per month",
      "Mobile-responsive design",
      "24-hr support response time",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    badge: "Best Value",
    setup: "$279 setup",
    standardSetup: "$499",
    price: "$149",
    period: "/mo",
    standardMonthly: "$199/mo",
    tagline: "Everything you need to scale online.",
    stripeUrl: "https://buy.stripe.com/cNicMYf8N9al2uL78ico001",
    featured: true,
    cta: "Start Growing",
    features: [
      "Everything in Essential",
      "Up to 5 edit requests per month (48-hr turnaround)",
      "Basic SEO optimization",
      "Google Business Profile management",
      "Monthly performance report",
      "Priority 12-hr support response",
    ],
  },
  {
    id: "ultimate",
    name: "Ultimate",
    setup: "$279 setup",
    standardSetup: "$799",
    price: "$299",
    period: "/mo",
    standardMonthly: "$399/mo",
    tagline: "Maximum velocity. Maximum leads.",
    stripeUrl: "https://buy.stripe.com/00w5kwf8N0DP5GXdwGco002",
    featured: false,
    cta: "Go Ultimate",
    features: [
      "Everything in Growth",
      "2 monthly blog posts (SEO-targeted)",
      "Advanced keyword tracking",
      "Landing page optimization & conversion tracking",
      "Lead capture funnel setup",
      "Priority 4-hr support response",
    ],
  },
];

export const customSystemsPlan: CustomPlan = {
  id: "custom-systems",
  name: "Custom Systems",
  price: "from $3,000",
  description:
    "Automation, booking, AI chat, and internal tools built for your business.",
  cta: "Book a call",
  href: "/schedule",
};

export const individualServices: IndividualService[] = [
  {
    name: "Landing page",
    price: "from $400",
    href: "/schedule",
  },
  {
    name: "5-page business site",
    price: "from $900",
    href: "/schedule",
  },
  {
    name: "Local SEO setup",
    price: "from $400",
    href: "/schedule",
  },
  {
    name: "Lead capture + booking + follow-up",
    price: "from $1,200",
    href: "/schedule",
  },
  {
    name: "Missed-call text-back / AI chat",
    price: "from $1,500",
    href: "/schedule",
  },
];
