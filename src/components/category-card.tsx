import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/lib/data";

export function CategoryCard({ category, count }: { category: Category; count: number }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group glass-panel flex flex-col justify-between rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong"
    >
      <div className="flex items-start justify-between">
        <h3 className="font-display text-base font-medium text-foreground">{category.name}</h3>
        <ArrowUpRight
          size={16}
          className="text-muted-2 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>
      <p className="mt-2 text-xs leading-relaxed text-muted">{category.blurb}</p>
      <span className="mt-4 text-xs font-medium text-muted-2">{count} reviewed</span>
    </Link>
  );
}
