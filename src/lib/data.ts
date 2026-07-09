export type Category = {
  slug: string;
  name: string;
  blurb: string;
};

export type SourceReview = {
  source: string;
  url: string;
  rating: number;
  reviewCount: number;
};

export type Product = {
  slug: string;
  name: string;
  brand: string;
  categorySlug: string;
  tagline: string;
  description: string;
  price: number;
  heroImage: string;
  gallery: string[];
  pros: string[];
  cons: string[];
  sources: SourceReview[];
  featured?: boolean;
};

export const categories: Category[] = [
  { slug: "audio", name: "Audio", blurb: "Headphones, earbuds & speakers" },
  { slug: "wearables", name: "Wearables", blurb: "Smartwatches & fitness tech" },
  { slug: "smartphones", name: "Smartphones", blurb: "Flagships worth your money" },
  { slug: "laptops", name: "Laptops", blurb: "For work, code & creativity" },
  { slug: "footwear", name: "Footwear", blurb: "Performance & lifestyle sneakers" },
  { slug: "cameras", name: "Cameras", blurb: "Mirrorless, DSLR & optics" },
  { slug: "gaming", name: "Gaming", blurb: "Consoles & accessories" },
  { slug: "smart-home", name: "Smart Home", blurb: "Speakers, hubs & automation" },
  { slug: "kitchen", name: "Kitchen", blurb: "Appliances that earn counter space" },
  { slug: "eyewear", name: "Eyewear", blurb: "Sunglasses & smart glasses" },
];

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=1400&auto=format&fit=crop`;

export const products: Product[] = [
  {
    slug: "sony-wh1000xm6",
    name: "WH-1000XM6 Wireless Headphones",
    brand: "Sony",
    categorySlug: "audio",
    tagline: "The noise-cancelling benchmark, refined again.",
    description:
      "Sony's sixth-generation flagship headphones pair class-leading active noise cancellation with a warmer, more detailed soundstage. 30-hour battery life, multipoint Bluetooth, and adaptive ANC that reacts to your environment in real time make this the pair we reach for on every flight.",
    price: 399,
    heroImage: img("1505740420928-5e560c06d30e"),
    gallery: [img("1548036328-c9fa89d128fa"), img("1560343090-f0409e92791a"), img("1611186871348-b1ce696e52c9")],
    pros: ["Best-in-class ANC", "30-hour battery", "Rich, balanced sound", "Comfortable for long sessions"],
    cons: ["Premium price", "Case is bulkier than rivals"],
    sources: [
      { source: "Amazon", url: "https://amazon.com", rating: 4.7, reviewCount: 18420 },
      { source: "Flipkart", url: "https://flipkart.com", rating: 4.6, reviewCount: 9210 },
      { source: "Best Buy", url: "https://bestbuy.com", rating: 4.8, reviewCount: 5310 },
      { source: "Walmart", url: "https://walmart.com", rating: 4.5, reviewCount: 2140 },
    ],
    featured: true,
  },
  {
    slug: "apple-watch-ultra-3",
    name: "Watch Ultra 3",
    brand: "Apple",
    categorySlug: "wearables",
    tagline: "Adventure-ready, satellite-connected, all-day battery.",
    description:
      "The most capable Apple Watch yet adds satellite SOS, a brighter always-on display, and up to 72 hours of battery in low-power mode. Dive, run, or disappear off-grid — it keeps up and reports back.",
    price: 799,
    heroImage: img("1523275335684-37898b6baf30"),
    gallery: [img("1593642702821-c8da6771f0c6")],
    pros: ["Satellite connectivity", "Rugged titanium build", "Excellent battery life"],
    cons: ["Large case size", "Expensive vs. competitors"],
    sources: [
      { source: "Amazon", url: "https://amazon.com", rating: 4.6, reviewCount: 12030 },
      { source: "Best Buy", url: "https://bestbuy.com", rating: 4.7, reviewCount: 6420 },
      { source: "Walmart", url: "https://walmart.com", rating: 4.4, reviewCount: 1870 },
    ],
    featured: true,
  },
  {
    slug: "iphone-17-pro",
    name: "iPhone 17 Pro",
    brand: "Apple",
    categorySlug: "smartphones",
    tagline: "A camera system that finally out-shoots the pros' bag.",
    description:
      "The A19 Pro chip, a redesigned 5x periscope lens, and a titanium-ceramic shell make this the most capable iPhone yet. Battery life is up double digits over last year with no gain in weight.",
    price: 1199,
    heroImage: img("1585386959984-a4155224a1ad"),
    gallery: [img("1583394838336-acd977736f90")],
    pros: ["Outstanding camera system", "Fast, efficient chip", "Great build quality"],
    cons: ["High starting price", "Slow charging vs Android rivals"],
    sources: [
      { source: "Amazon", url: "https://amazon.com", rating: 4.8, reviewCount: 41200 },
      { source: "Flipkart", url: "https://flipkart.com", rating: 4.7, reviewCount: 22800 },
      { source: "Best Buy", url: "https://bestbuy.com", rating: 4.8, reviewCount: 9120 },
      { source: "Walmart", url: "https://walmart.com", rating: 4.6, reviewCount: 5030 },
    ],
    featured: true,
  },
  {
    slug: "macbook-pro-m5",
    name: "MacBook Pro 14\" M5",
    brand: "Apple",
    categorySlug: "laptops",
    tagline: "Desktop-class performance that runs cool and quiet.",
    description:
      "The M5 Pro chip brings a genuine generational leap in sustained performance for video editing and local AI workloads, while the fan stays silent for all but the heaviest renders. Still the laptop to beat for creative professionals.",
    price: 2199,
    heroImage: img("1546868871-7041f2a55e12"),
    gallery: [img("1516035069371-29a1b244cc32")],
    pros: ["Exceptional performance-per-watt", "Gorgeous mini-LED display", "All-day battery"],
    cons: ["Costly upgrades for RAM/storage", "Limited port selection"],
    sources: [
      { source: "Amazon", url: "https://amazon.com", rating: 4.8, reviewCount: 15600 },
      { source: "Best Buy", url: "https://bestbuy.com", rating: 4.9, reviewCount: 7040 },
      { source: "Walmart", url: "https://walmart.com", rating: 4.6, reviewCount: 1980 },
    ],
  },
  {
    slug: "nike-air-zoom-pegasus-41",
    name: "Air Zoom Pegasus 41",
    brand: "Nike",
    categorySlug: "footwear",
    tagline: "The daily trainer that just keeps getting smarter.",
    description:
      "A refined ZoomX foam core delivers noticeably more energy return than the last three generations combined, without sacrificing the tuned stability Pegasus runners love. Our editors' pick for a do-everything daily trainer.",
    price: 139,
    heroImage: img("1542291026-7eec264c27ff"),
    gallery: [img("1526170375885-4d8ecf77b99f"), img("1546435770-a3e426bf472b"), img("1553062407-98eeb64c6a62")],
    pros: ["Responsive, energetic ride", "Durable outsole", "True to size"],
    cons: ["Narrow toe box for wide feet"],
    sources: [
      { source: "Amazon", url: "https://amazon.com", rating: 4.6, reviewCount: 28900 },
      { source: "Flipkart", url: "https://flipkart.com", rating: 4.5, reviewCount: 14200 },
      { source: "Walmart", url: "https://walmart.com", rating: 4.4, reviewCount: 6100 },
    ],
    featured: true,
  },
  {
    slug: "canon-eos-r6-mark-iii",
    name: "EOS R6 Mark III",
    brand: "Canon",
    categorySlug: "cameras",
    tagline: "The hybrid shooter's mirrorless sweet spot.",
    description:
      "Improved animal and vehicle eye-AF, 8K oversampled 4K video, and a stabilization system rated to 8.5 stops make this Canon's most versatile body for stills-video hybrid shooters, without the R5's price tag.",
    price: 2499,
    heroImage: img("1518444065439-e933c06ce9cd"),
    gallery: [img("1518770660439-4636190af475"), img("1522441815192-d9f04eb0615c")],
    pros: ["Excellent autofocus tracking", "Superb in-body stabilization", "Robust weather sealing"],
    cons: ["Buffer clears slowly in RAW burst", "Menu system takes learning"],
    sources: [
      { source: "Amazon", url: "https://amazon.com", rating: 4.7, reviewCount: 4210 },
      { source: "Best Buy", url: "https://bestbuy.com", rating: 4.8, reviewCount: 2340 },
      { source: "Walmart", url: "https://walmart.com", rating: 4.5, reviewCount: 610 },
    ],
  },
  {
    slug: "playstation-5-pro",
    name: "PlayStation 5 Pro",
    brand: "Sony",
    categorySlug: "gaming",
    tagline: "4K/60 ray tracing without the compromises.",
    description:
      "A beefed-up GPU and AI upscaling (PSSR) push ray-traced titles to a stable 4K/60 where the base console had to choose. If you've held off upgrading, this is the console generation's definitive version.",
    price: 699,
    heroImage: img("1556228453-efd6c1ff04f6"),
    gallery: [img("1608043152269-423dbba4e7e1")],
    pros: ["Strong ray-tracing performance", "AI upscaling looks excellent", "Quiet under load"],
    cons: ["Expensive vs base PS5", "Disc drive sold separately"],
    sources: [
      { source: "Amazon", url: "https://amazon.com", rating: 4.7, reviewCount: 9840 },
      { source: "Flipkart", url: "https://flipkart.com", rating: 4.6, reviewCount: 5120 },
      { source: "Best Buy", url: "https://bestbuy.com", rating: 4.7, reviewCount: 3010 },
    ],
    featured: true,
  },
  {
    slug: "echo-studio-2",
    name: "Echo Studio (2nd Gen)",
    brand: "Amazon",
    categorySlug: "smart-home",
    tagline: "Room-filling sound with a genuinely useful assistant.",
    description:
      "Spatial audio tuning that actually adapts to your room, paired with the latest Alexa+ conversational assistant, make this the smart speaker to buy if you want sound quality first and smart-home hub second.",
    price: 219,
    heroImage: img("1615460549969-36fa19521a4f"),
    gallery: [],
    pros: ["Impressive bass for its size", "Room-adaptive EQ", "Strong smart-home integration"],
    cons: ["Alexa+ needs a subscription for full features"],
    sources: [
      { source: "Amazon", url: "https://amazon.com", rating: 4.5, reviewCount: 21300 },
      { source: "Walmart", url: "https://walmart.com", rating: 4.3, reviewCount: 4210 },
      { source: "Best Buy", url: "https://bestbuy.com", rating: 4.4, reviewCount: 1890 },
    ],
  },
  {
    slug: "instant-pot-pro-plus",
    name: "Instant Pot Pro Plus",
    brand: "Instant",
    categorySlug: "kitchen",
    tagline: "One appliance, ten jobs, zero counter regret.",
    description:
      "A redesigned sealing system all but eliminates the sputtering vent of older models, and the WiFi app support means you can actually trust a delayed start. Still the multicooker we recommend to first-time buyers.",
    price: 149,
    heroImage: img("1587825140708-dfaf72ae4b04"),
    gallery: [img("1519389950473-47ba0277781c")],
    pros: ["Reliable pressure sealing", "App-controlled scheduling", "Great value"],
    cons: ["App onboarding is clunky"],
    sources: [
      { source: "Amazon", url: "https://amazon.com", rating: 4.6, reviewCount: 33200 },
      { source: "Walmart", url: "https://walmart.com", rating: 4.5, reviewCount: 12100 },
      { source: "Flipkart", url: "https://flipkart.com", rating: 4.4, reviewCount: 3980 },
    ],
  },
  {
    slug: "rayban-meta-smart-glasses",
    name: "Ray-Ban Meta Smart Glasses",
    brand: "Ray-Ban",
    categorySlug: "eyewear",
    tagline: "AI on your face, styled well enough to forget it's there.",
    description:
      "A sharper 12MP camera and genuinely useful live-AI narration mode make the second generation feel less like a gadget and more like a pair of sunglasses that happens to do more. Battery life is the one thing still holding it back.",
    price: 379,
    heroImage: img("1512499617640-c74ae3a79d37"),
    gallery: [img("1572635196237-14b3f281503f")],
    pros: ["Genuinely stylish", "Solid photo/video quality", "Useful live AI features"],
    cons: ["Battery drains fast with heavy use"],
    sources: [
      { source: "Amazon", url: "https://amazon.com", rating: 4.3, reviewCount: 7620 },
      { source: "Best Buy", url: "https://bestbuy.com", rating: 4.4, reviewCount: 2910 },
      { source: "Walmart", url: "https://walmart.com", rating: 4.1, reviewCount: 940 },
    ],
  },
  {
    slug: "herman-miller-aeron",
    name: "Aeron Chair (Remastered)",
    brand: "Herman Miller",
    categorySlug: "smart-home",
    tagline: "The desk chair that pays for itself in your back.",
    description:
      "Two decades on, the Aeron's 8Z Pellicle mesh and PostureFit SL support remain the standard every ergonomic chair is measured against. It's an investment, but an 12-year warranty says the company believes that too.",
    price: 1595,
    heroImage: img("1600294037681-c80b4cb5b434"),
    gallery: [],
    pros: ["Exceptional long-term support", "Breathable mesh build", "12-year warranty"],
    cons: ["Very expensive", "Firm seat pan takes adjustment"],
    sources: [
      { source: "Amazon", url: "https://amazon.com", rating: 4.7, reviewCount: 5230 },
      { source: "Walmart", url: "https://walmart.com", rating: 4.6, reviewCount: 890 },
    ],
  },
  {
    slug: "samsung-neo-qled-8k",
    name: "Neo QLED 8K QN900",
    brand: "Samsung",
    categorySlug: "smart-home",
    tagline: "The reference TV for a living room that means it.",
    description:
      "Mini-LED backlighting with over 16,000 dimming zones delivers inky blacks previously reserved for OLED, with none of the burn-in worry. The AI upscaler makes even 1080p cable look genuinely watchable.",
    price: 3499,
    heroImage: img("1608889175638-9322300c46e8"),
    gallery: [],
    pros: ["Best-in-class brightness", "Excellent upscaling", "Near-invisible bezel"],
    cons: ["Very expensive", "Smart TV UI has ads"],
    sources: [
      { source: "Amazon", url: "https://amazon.com", rating: 4.6, reviewCount: 3120 },
      { source: "Best Buy", url: "https://bestbuy.com", rating: 4.7, reviewCount: 1980 },
    ],
  },
];

export function finalRating(sources: SourceReview[]): number {
  const totalCount = sources.reduce((sum, s) => sum + s.reviewCount, 0);
  const weighted = sources.reduce((sum, s) => sum + s.rating * s.reviewCount, 0);
  return Math.round((weighted / totalCount) * 10) / 10;
}

export function totalReviewCount(sources: SourceReview[]): number {
  return sources.reduce((sum, s) => sum + s.reviewCount, 0);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsByCategory(slug: string) {
  return products.filter((p) => p.categorySlug === slug);
}

export function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(n);
}
