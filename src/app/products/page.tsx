import Link from "next/link";
import { Search } from "lucide-react";
import { categories, products, finalRating } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "All Products — ProductReviewHub",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string; sort?: string }>;
}) {
  const { category, q, sort } = await searchParams;

  let list = products;

  if (category) {
    list = list.filter((p) => p.categorySlug === category);
  }

  if (q) {
    const query = q.toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.tagline.toLowerCase().includes(query)
    );
  }

  const sorted = [...list].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return finalRating(b.sources) - finalRating(a.sources);
  });

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent">Catalog</p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight">All products</h1>
      <p className="mt-3 max-w-lg text-sm text-muted">
        Every rating below is a blend of real review data from multiple retailers.
      </p>

      <form className="mt-8 flex max-w-md items-center gap-2 rounded-full border border-border-subtle bg-surface/60 px-4 py-2.5">
        <Search size={16} className="text-muted-2" />
        <input
          type="text"
          name="q"
          defaultValue={q}
          placeholder="Search products, brands..."
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-2 focus:outline-none"
        />
        {category && <input type="hidden" name="category" value={category} />}
      </form>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        <Link
          href={{ pathname: "/products", query: q ? { q } : {} }}
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
            !category
              ? "border-accent bg-accent/15 text-foreground"
              : "border-border-subtle text-muted hover:border-border-strong hover:text-foreground"
          )}
        >
          All
        </Link>
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={{ pathname: "/products", query: q ? { category: c.slug, q } : { category: c.slug } }}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
              category === c.slug
                ? "border-accent bg-accent/15 text-foreground"
                : "border-border-subtle text-muted hover:border-border-strong hover:text-foreground"
            )}
          >
            {c.name}
          </Link>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-muted-2">{sorted.length} products</p>
        <div className="flex gap-1.5 text-xs">
          {[
            { key: "rating", label: "Top rated" },
            { key: "price-asc", label: "Price: low" },
            { key: "price-desc", label: "Price: high" },
          ].map((s) => (
            <Link
              key={s.key}
              href={{
                pathname: "/products",
                query: {
                  ...(category ? { category } : {}),
                  ...(q ? { q } : {}),
                  sort: s.key,
                },
              }}
              className={cn(
                "rounded-full px-3 py-1.5 font-medium transition-colors",
                (sort ?? "rating") === s.key ? "bg-surface-2 text-foreground" : "text-muted-2 hover:text-foreground"
              )}
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>

      {sorted.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sorted.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center text-sm text-muted">No products match your search.</div>
      )}
    </div>
  );
}
