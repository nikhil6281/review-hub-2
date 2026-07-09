"use client";

import { useActionState, useState } from "react";
import { Star } from "lucide-react";
import { submitReview } from "@/app/actions/reviews";

export function ReviewForm({
  productSlug,
  existingReview,
}: {
  productSlug: string;
  existingReview?: { rating: number; title: string | null; body: string };
}) {
  const [state, action, pending] = useActionState(submitReview, undefined);
  const [rating, setRating] = useState(existingReview?.rating ?? 0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <form action={action} className="glass-panel rounded-2xl p-6">
      <input type="hidden" name="productSlug" value={productSlug} />
      <input type="hidden" name="rating" value={rating} />

      <div>
        <label className="text-sm font-medium text-muted">Your rating</label>
        <div className="mt-2 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setRating(value)}
              onMouseEnter={() => setHoverRating(value)}
              onMouseLeave={() => setHoverRating(0)}
              aria-label={`${value} star${value > 1 ? "s" : ""}`}
              className="p-0.5"
            >
              <Star
                size={22}
                strokeWidth={1.5}
                className={
                  value <= (hoverRating || rating)
                    ? "text-gold fill-gold"
                    : "text-muted-2"
                }
              />
            </button>
          ))}
        </div>
        {state?.errors?.rating && (
          <p className="mt-1.5 text-xs text-accent-2">{state.errors.rating[0]}</p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="title" className="text-sm font-medium text-muted">
          Title <span className="text-muted-2">(optional)</span>
        </label>
        <input
          id="title"
          name="title"
          defaultValue={existingReview?.title ?? ""}
          placeholder="Sum it up in a few words"
          className="mt-2 w-full rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-2 outline-none focus:border-accent"
        />
        {state?.errors?.title && (
          <p className="mt-1.5 text-xs text-accent-2">{state.errors.title[0]}</p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="body" className="text-sm font-medium text-muted">
          Your review
        </label>
        <textarea
          id="body"
          name="body"
          rows={4}
          defaultValue={existingReview?.body ?? ""}
          placeholder="What did you like or dislike? Would you recommend it?"
          className="mt-2 w-full resize-none rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-2 outline-none focus:border-accent"
        />
        {state?.errors?.body && (
          <p className="mt-1.5 text-xs text-accent-2">{state.errors.body[0]}</p>
        )}
      </div>

      {state?.message && <p className="mt-3 text-sm text-accent-2">{state.message}</p>}
      {state?.success && (
        <p className="mt-3 text-sm text-accent-3">
          {state.wasUpdate ? "Review updated." : "Review posted."} Thanks for sharing.
        </p>
      )}

      <button
        disabled={pending || rating === 0}
        type="submit"
        className="mt-5 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
      >
        {pending ? "Saving…" : existingReview ? "Update review" : "Post review"}
      </button>
    </form>
  );
}
