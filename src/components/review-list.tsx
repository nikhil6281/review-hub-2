import { StarRating } from "@/components/star-rating";
import { removeReview } from "@/app/actions/reviews";
import type { ReviewWithReviewer } from "@/lib/reviews";

export function ReviewList({
  reviews,
  productSlug,
  currentUserId,
}: {
  reviews: ReviewWithReviewer[];
  productSlug: string;
  currentUserId?: number;
}) {
  if (reviews.length === 0) {
    return (
      <p className="text-sm text-muted">
        No reviews yet — be the first to share your experience.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((r) => (
        <div key={r.id} className="glass-panel rounded-2xl p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <StarRating rating={r.rating} size={14} />
                <span className="text-xs text-muted-2">
                  {new Date(r.created_at).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              {r.title && (
                <h4 className="mt-2 text-sm font-semibold text-foreground">{r.title}</h4>
              )}
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{r.body}</p>
              <p className="mt-2 text-xs text-muted-2">— {r.reviewer_name}</p>
            </div>

            {currentUserId === r.user_id && (
              <form action={removeReview.bind(null, r.id, productSlug)}>
                <button
                  type="submit"
                  className="shrink-0 text-xs text-muted-2 transition-colors hover:text-accent-2"
                >
                  Delete
                </button>
              </form>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
