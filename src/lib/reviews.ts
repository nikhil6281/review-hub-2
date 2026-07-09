import { pool } from "@/lib/db";

export type ReviewWithReviewer = {
  id: number;
  product_slug: string;
  user_id: number;
  rating: number;
  title: string | null;
  body: string;
  created_at: string;
  updated_at: string;
  reviewer_name: string;
};

export async function getReviewsForProduct(
  productSlug: string
): Promise<ReviewWithReviewer[]> {
  const { rows } = await pool.query<ReviewWithReviewer>(
    `SELECT r.*, u.name AS reviewer_name
     FROM reviews r
     JOIN users u ON u.id = r.user_id
     WHERE r.product_slug = $1
     ORDER BY r.created_at DESC`,
    [productSlug]
  );
  return rows;
}

export async function upsertReview(input: {
  productSlug: string;
  userId: number;
  rating: number;
  title: string | null;
  body: string;
}): Promise<{ wasUpdate: boolean }> {
  const { rows } = await pool.query<{ inserted: boolean }>(
    `INSERT INTO reviews (product_slug, user_id, rating, title, body)
     VALUES ($1, $2, $3, $4, $5)
     ON CONFLICT (product_slug, user_id)
     DO UPDATE SET rating = EXCLUDED.rating, title = EXCLUDED.title, body = EXCLUDED.body, updated_at = now()
     RETURNING (xmax = 0) AS inserted`,
    [input.productSlug, input.userId, input.rating, input.title, input.body]
  );
  return { wasUpdate: !rows[0].inserted };
}

export async function deleteReview(reviewId: number, userId: number): Promise<void> {
  await pool.query("DELETE FROM reviews WHERE id = $1 AND user_id = $2", [
    reviewId,
    userId,
  ]);
}
