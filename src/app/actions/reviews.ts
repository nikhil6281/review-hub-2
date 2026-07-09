"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { ReviewFormSchema, ReviewFormState } from "@/lib/definitions";
import { deleteReview, upsertReview } from "@/lib/reviews";

export async function submitReview(
  _state: ReviewFormState,
  formData: FormData
): Promise<ReviewFormState> {
  const session = await auth();
  if (!session?.user?.id) {
    return { message: "Sign in to leave a review." };
  }

  const productSlug = String(formData.get("productSlug") ?? "");
  if (!productSlug) {
    return { message: "Something went wrong. Please refresh and try again." };
  }

  const validatedFields = ReviewFormSchema.safeParse({
    rating: formData.get("rating"),
    title: formData.get("title"),
    body: formData.get("body"),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const { rating, title, body } = validatedFields.data;

  let wasUpdate: boolean;
  try {
    ({ wasUpdate } = await upsertReview({
      productSlug,
      userId: Number(session.user.id),
      rating,
      title: title || null,
      body,
    }));
  } catch {
    return { message: "Something went wrong while saving your review." };
  }

  revalidatePath(`/products/${productSlug}`);
  return { success: true, wasUpdate };
}

export async function removeReview(reviewId: number, productSlug: string) {
  const session = await auth();
  if (!session?.user?.id) return;

  await deleteReview(reviewId, Number(session.user.id));
  revalidatePath(`/products/${productSlug}`);
}
