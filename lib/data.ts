import productsA from "./products-a.json";
import productsB from "./products-b.json";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  rating: number;
  reviewCount: number;
  badge: string | null;
  related: string[];
  faq: [string, string][];
  specs: Record<string, string>;
  variants: string[];
  [key: string]: unknown;
};

export const brand = {
  slug: "solevault-sneakers",
  name: "Sole Vault",
  tagline: "Rare drops. Daily heat.",
  niche: "Sneaker store",
  description: "A curated sneaker vault for limited drops, classics, and street essentials.",
  cta: "Enter the vault",
  checkoutNote: "Authenticated pairs. Ships in 1–2 business days.",
  heroImage: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=2400&q=80",
  heroVideo: "https://videos.pexels.com/video-files/6190974/6190974-uhd_2560_1440_25fps.mp4",
  categories: ["Lifestyle","Basketball","Running","Collabs","Accessories"] as string[],
  isBooking: false,
  offer: {"code":"VAULT15","label":"Drop weekend — 15% accessories + free lace kit","ends":"While inventory lasts"},
  offerPct: 0.15,
  loyalty: "Vault Pass — early access to numbered collabs",
  stats: [["100%","authenticated"],["1–2","day ship"],["4.8","heat rating"],["Live","size chat"]] as [string, string][],
  marquee: ["Authenticated ·","Deadstock ·","Collab drops ·","Size bot ·","Heat meter ·"] as string[],
  reviews: [["Ty B.",5,"Graffiti Pack was legit numbered. Packaging was vault-level."],["Kim A.",5,"Size finder nailed my Court King Mid. TTS finally."],["Omar F.",4,"Neon Pulse Dunk is loud in the best way."]] as [string, number, string][],
  ai: [["True to size on Vault Runner?","Vault Runner 01 runs TTS. Wide feet: half up. Use size finder on product pages."],["What's dropping?","Neon Pulse Dunk restock Friday 10am ET for Vault Pass members."],["Are pairs authenticated?","Every pair inspected. Certificate in-box. Fake risk: zero."],["Accessory deal?","VAULT15 = 15% off accessories + free Laces Archive Kit over $40."]] as [string, string][],
  blog: [["How we authenticate a midsole","Vault"],["Rotation tips for gum soles","Care"],["Collab calendar","Drops"]] as [string, string][],
  stores: ["Vault NYC","Vault LA appointment desk"] as string[],
  nicheKind: "sneakers" as string,
  fontDisplay: "Archivo Black",
  fontBody: "IBM Plex Mono",
  colors: {"bg":"#f4f4f4","fg":"#0a0a0a","muted":"#5a5a5a","primary":"#0a0a0a","accent":"#ff2d55","surface":"#ffffff","border":"#e0e0e0","hero":"#111111"},
};

export const products: Product[] = [...(productsA as Product[]), ...(productsB as Product[])];

export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function relatedProducts(p: Product) {
  return p.related.map(getProduct).filter(Boolean) as Product[];
}

export const dropDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"] as const;
