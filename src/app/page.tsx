import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { categories, products, productsByCategory, finalRating } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { CategoryCard } from "@/components/category-card";
import { RatingBadge } from "@/components/rating-badge";
import { StarRating } from "@/components/star-rating";
import { SourceRatingRow } from "@/components/source-rating-row";

const featured = products.filter((p) => p.featured);
const spotlight = products.find((p) => p.slug === "sony-wh1000xm6")!;

const steps = [
  {
    icon: Layers,
    title: "We pull the data",
    body: "Ratings and review volume are collected from Amazon, Flipkart, Best Buy, Walmart and more.",
  },
  {
    icon: ShieldCheck,
    title: "We weight it fairly",
    body: "Each source is blended by review volume, so one flooded listing can't skew the verdict.",
  },
  {
    icon: TrendingUp,
    title: "You get one number",
    body: "A single, honest final rating — plus the full breakdown if you want to dig in.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-muted">
              <Sparkles size={13} className="text-accent" />
              Aggregated from 50+ retailers, updated daily
            </div>

            <h1 className="mt-6 max-w-xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-balance sm:text-6xl">
              One <span className="gradient-text">honest rating</span>, pulled from every review that matters.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              ProductReviewHub reads the room across Amazon, Flipkart, Best Buy and Walmart,
              then blends it all into a single trustworthy verdict — so you can stop
              opening twelve tabs before you buy anything.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Browse products
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/login"
                className="rounded-full border border-border-subtle px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-border-strong hover:bg-surface"
              >
                Sign in with Google
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-wider text-muted-2">
              <span>Trusted signal from</span>
              <span className="text-muted">Amazon</span>
              <span className="text-muted">Flipkart</span>
              <span className="text-muted">Best Buy</span>
              <span className="text-muted">Walmart</span>
            </div>
          </div>

          {/* Spotlight card */}
          <div className="relative">
            <div className="absolute -inset-8 -z-10 animate-float-slow rounded-[2.5rem] bg-gradient-to-br from-accent/20 via-accent-2/10 to-transparent blur-3xl" />
            <div className="glass-panel glow-border overflow-hidden rounded-3xl">
              <div className="relative aspect-[16/11] w-full">
                <Image
                  src={spotlight.heroImage}
                  alt={spotlight.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-white/70">{spotlight.brand}</p>
                    <p className="font-display text-xl font-medium text-white">{spotlight.name}</p>
                  </div>
                  <RatingBadge rating={finalRating(spotlight.sources)} />
                </div>
              </div>

              <div className="space-y-2.5 p-5">
                {spotlight.sources.slice(0, 3).map((s) => (
                  <SourceRatingRow key={s.source} review={s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending products */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Trending this week</p>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">Editors&apos; picks</h2>
          </div>
          <Link
            href="/products"
            className="hidden items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground sm:flex"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">Explore</p>
        <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">Shop by category</h2>

        <div className="mt-9 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} count={productsByCategory(c.slug).length} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="glass-panel rounded-3xl p-10 sm:p-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">How it works</p>
          <h2 className="mt-2 max-w-lg font-display text-3xl font-medium tracking-tight text-balance">
            The final rating you can actually trust.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2">
                  <step.icon size={18} className="text-white" />
                </div>
                <p className="mt-5 text-xs font-semibold text-muted-2">Step 0{i + 1}</p>
                <h3 className="mt-1 font-display text-lg font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {products.slice(0, 3).map((p) => (
            <div key={p.slug} className="glass-panel rounded-2xl p-6">
              <StarRating rating={finalRating(p.sources)} size={14} />
              <p className="mt-3 text-sm leading-relaxed text-muted">
                &ldquo;{p.tagline}&rdquo;
              </p>
              <p className="mt-4 text-xs font-medium text-muted-2">
                Verdict on {p.name} · {finalRating(p.sources).toFixed(1)} / 5
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="glow-border relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface to-surface-2 p-12 text-center sm:p-16">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            Stop guessing which review to trust.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted sm:text-base">
            Create your free account and save products, compare picks, and get the
            verdict before everyone else.
          </p>
          <Link
            href="/login"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Get started free
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
