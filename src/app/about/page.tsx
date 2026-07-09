import { Layers, ShieldCheck, TrendingUp } from "lucide-react";
import { products, categories } from "@/lib/data";

export const metadata = {
  title: "About — ProductReviewHub",
};

const stats = [
  { label: "Products rated", value: `${products.length}+` },
  { label: "Categories covered", value: `${categories.length}` },
  { label: "Retailers aggregated", value: "4" },
  { label: "Reviews weighted daily", value: "250k+" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent">Our mission</p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight text-balance sm:text-5xl">
        Buying decisions shouldn&apos;t require twelve open tabs.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        ProductReviewHub was built on a simple idea: every retailer has its own rating,
        and none of them tell the whole story. So we pull the numbers that matter — rating
        and review volume — from every major source, weight them fairly, and hand you
        one honest final verdict.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="glass-panel rounded-2xl p-5 text-center">
            <p className="font-display text-2xl font-semibold gradient-text">{s.value}</p>
            <p className="mt-1 text-xs text-muted-2">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {[
          { icon: Layers, title: "Collect", body: "We gather ratings and review counts from Amazon, Flipkart, Best Buy and Walmart." },
          { icon: ShieldCheck, title: "Weight", body: "Volume-weighted blending means a handful of five-star reviews can't skew a product's true standing." },
          { icon: TrendingUp, title: "Deliver", body: "One clear final rating, with the full source breakdown always one click away." },
        ].map((s) => (
          <div key={s.title}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2">
              <s.icon size={18} className="text-white" />
            </div>
            <h3 className="mt-4 font-display text-lg font-medium">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 glass-panel rounded-3xl p-8 sm:p-10">
        <h2 className="font-display text-xl font-medium">A note on this build</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          This project currently runs on curated sample data to demonstrate the product
          and rating experience end-to-end. The next milestone connects a live Neon
          Postgres database and Google sign-in so ratings and accounts persist for real.
        </p>
      </div>
    </div>
  );
}
