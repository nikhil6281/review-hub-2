import Image from "next/image";
import Link from "next/link";
import { finalRating, totalReviewCount, type Product } from "@/lib/data";
import { StarRating } from "@/components/star-rating";
import { RatingBadge } from "@/components/rating-badge";
import { formatCount } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  const rating = finalRating(product.sources);
  const count = totalReviewCount(product.sources);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group glass-panel relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-border-strong"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-2">
        <Image
          src={product.heroImage}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <RatingBadge rating={rating} size="sm" className="absolute right-3 top-3 shadow-lg" />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-2">{product.brand}</span>
        <h3 className="font-display text-lg font-medium leading-snug text-foreground">{product.name}</h3>
        <p className="text-sm leading-relaxed text-muted line-clamp-2">{product.tagline}</p>

        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex items-center gap-2">
            <StarRating rating={rating} size={14} />
            <span className="text-xs text-muted-2">{formatCount(count)}</span>
          </div>
          <span className="font-display text-base font-semibold text-foreground">${product.price}</span>
        </div>
      </div>
    </Link>
  );
}
