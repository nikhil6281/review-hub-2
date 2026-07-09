import { ExternalLink } from "lucide-react";
import { StarRating } from "@/components/star-rating";
import { formatCount, type SourceReview } from "@/lib/data";

const sourceColors: Record<string, string> = {
  Amazon: "from-[#ff9900] to-[#ff6a00]",
  Flipkart: "from-[#2874f0] to-[#1a56d6]",
  "Best Buy": "from-[#0046be] to-[#00308f]",
  Walmart: "from-[#0071ce] to-[#004f9a]",
};

export function SourceRatingRow({ review }: { review: SourceReview }) {
  const gradient = sourceColors[review.source] ?? "from-accent to-accent-2";

  return (
    <a
      href={review.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 rounded-xl border border-border-subtle bg-surface/60 px-4 py-3.5 transition-colors hover:border-border-strong hover:bg-surface-2"
    >
      <div className="flex items-center gap-3">
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-xs font-bold text-white ${gradient}`}
        >
          {review.source.slice(0, 1)}
        </span>
        <div>
          <p className="text-sm font-medium text-foreground">{review.source}</p>
          <p className="text-xs text-muted-2">{formatCount(review.reviewCount)} reviews</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="font-display text-sm font-semibold text-foreground">{review.rating.toFixed(1)}</p>
          <StarRating rating={review.rating} size={12} />
        </div>
        <ExternalLink
          size={14}
          className="text-muted-2 transition-colors group-hover:text-accent"
        />
      </div>
    </a>
  );
}
