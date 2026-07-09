import Link from "next/link";
import { Search, Sparkles } from "lucide-react";
import { auth } from "@/auth";
import { logout } from "@/app/actions/auth";

const links = [
  { href: "/products", label: "Products" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
];

export async function Navbar() {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2">
            <Sparkles size={16} className="text-white" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            ProductReview<span className="gradient-text">Hub</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/products"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-muted transition-colors hover:border-border-strong hover:text-foreground sm:flex"
            aria-label="Search"
          >
            <Search size={16} />
          </Link>
          {session?.user ? (
            <form action={logout} className="flex items-center gap-3">
              <span className="hidden text-sm font-medium text-muted sm:inline">
                {session.user.name ?? session.user.email}
              </span>
              <button
                type="submit"
                className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Sign out
              </button>
            </form>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
