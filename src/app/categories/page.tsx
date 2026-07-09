import { categories, productsByCategory } from "@/lib/data";
import { CategoryCard } from "@/components/category-card";

export const metadata = {
  title: "Categories — ProductReviewHub",
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent">Browse</p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight">All categories</h1>
      <p className="mt-3 max-w-lg text-sm text-muted">
        Ten categories, one honest rating system across all of them.
      </p>

      <div className="mt-9 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {categories.map((c) => (
          <CategoryCard key={c.slug} category={c} count={productsByCategory(c.slug).length} />
        ))}
      </div>
    </div>
  );
}
