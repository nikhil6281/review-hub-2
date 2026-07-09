import { cn } from "@/lib/utils";

export function RatingBadge({
  rating,
  size = "md",
  className,
}: {
  rating: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "h-10 w-10 text-sm",
    md: "h-14 w-14 text-lg",
    lg: "h-20 w-20 text-2xl",
  };

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center rounded-full font-display font-semibold text-foreground",
        sizes[size],
        className
      )}
      style={{
        background:
          "conic-gradient(from 180deg, #8b6bff, #ff5ca8, #f6c453, #37e2c4, #8b6bff)",
      }}
    >
      <div className="absolute inset-[2px] rounded-full bg-[#0b0c10]" />
      <span className="relative">{rating.toFixed(1)}</span>
    </div>
  );
}
