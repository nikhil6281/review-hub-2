import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronRight, X } from "lucide-react";
import {
  finalRating,
  totalReviewCount,
  formatCount,
  getCategory,
  getProduct,
  products,
  productsByCategory,
} from "@/lib/data";
import { StarRating } from "@/components/star-rating";
import { RatingBadge } from "@/components/rating-badge";
import { SourceRatingRow } from "@/components/source-rating-row";
import { ProductCard } from "@/components/product-card";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} Review — ProductReviewHub`,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.categorySlug);
  const rating = finalRating(product.sources);
  const count = totalReviewCount(product.sources);
  const gallery = [product.heroImage, ...product.gallery];
  const related = productsByCategory(product.categorySlug).filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex items-center gap-1.5 text-xs text-muted-2">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight size={12} />
        <Link href="/products" className="hover:text-foreground">Products</Link>
        {category && (
          <>
            <ChevronRight size={12} />
            <Link href={`/categories/${category.slug}`} className="hover:text-foreground">{category.name}</Link>
          </>
        )}
        <ChevronRight size={12} />
        <span className="text-muted">{product.name}</span>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="glass-panel relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <Image
              src={gallery[0]}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          {gallery.length > 1 && (
            <div className="mt-4 grid grid-cols-4 gap-3">
              {gallery.slice(1, 5).map((src, i) => (
                <div key={src + i} className="glass-panel relative aspect-square overflow-hidden rounded-xl">
                  <Image src={src} alt={`${product.name} ${i + 2}`} fill sizes="120px" className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-accent">{product.brand}</span>
          <h1 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">{product.name}</h1>
          <p className="mt-3 text-base leading-relaxed text-muted">{product.tagline}</p>

          <div className="mt-6 flex items-center gap-4">
            <RatingBadge rating={rating} size="lg" />
            <div>
              <StarRating rating={rating} size={18} />
              <p className="mt-1 text-xs text-muted-2">
                Weighted from {formatCount(count)} reviews across {product.sources.length} retailers
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-baseline gap-2">
            <span className="font-display text-3xl font-semibold">${product.price}</span>
            <span className="text-xs text-muted-2">avg. street price</span>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted">{product.description}</p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-accent-3">Pros</h3>
              <ul className="mt-3 space-y-2">
                {product.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-muted">
                    <Check size={14} className="mt-0.5 shrink-0 text-accent-3" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-accent-2">Cons</h3>
              <ul className="mt-3 space-y-2">
                {product.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-muted">
                    <X size={14} className="mt-0.5 shrink-0 text-accent-2" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Source breakdown */}
      <div className="mt-16">
        <h2 className="font-display text-2xl font-medium tracking-tight">Rating breakdown by source</h2>
        <p className="mt-2 text-sm text-muted">
          Here&apos;s exactly where the {rating.toFixed(1)} final score comes from.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {product.sources.map((s) => (
            <SourceRatingRow key={s.source} review={s} />
          ))}
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display text-2xl font-medium tracking-tight">You might also like</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
