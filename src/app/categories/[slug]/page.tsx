import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { categories, getCategory, productsByCategory } from "@/lib/data";
import { ProductCard } from "@/components/product-card";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return { title: `${category.name} — ProductReviewHub` };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const list = productsByCategory(category.slug);

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <div className="flex items-center gap-1.5 text-xs text-muted-2">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight size={12} />
        <Link href="/categories" className="hover:text-foreground">Categories</Link>
        <ChevronRight size={12} />
        <span className="text-muted">{category.name}</span>
      </div>

      <h1 className="mt-4 font-display text-4xl font-medium tracking-tight">{category.name}</h1>
      <p className="mt-3 max-w-lg text-sm text-muted">{category.blurb}</p>

      {list.length > 0 ? (
        <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center text-sm text-muted">No products in this category yet.</div>
      )}
    </div>
  );
}
