import Link from "next/link";
import { categories } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <span className="font-display text-lg font-semibold tracking-tight">
              ProductReview<span className="gradient-text">Hub</span>
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              We pull ratings from Amazon, Flipkart, Best Buy, Walmart and more, then
              blend them into one honest, weighted score — so you don&apos;t have to
              open twelve tabs to buy one thing.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Categories</h4>
            <ul className="mt-4 space-y-2.5">
              {categories.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/categories/${c.slug}`}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/about" className="text-sm text-muted transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted transition-colors hover:text-foreground">
                  All products
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-sm text-muted transition-colors hover:text-foreground">
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border-subtle pt-6 text-xs text-muted-2 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} ProductReviewHub. All ratings aggregated for demonstration purposes.</p>
          <p>Built with Next.js · Neon · Vercel</p>
        </div>
      </div>
    </footer>
  );
}
