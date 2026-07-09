import { LoginForm } from "@/components/login-form";

export const metadata = {
  title: "Sign in — ProductReviewHub",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ registered?: string }>;
}) {
  const { registered } = await searchParams;

  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center px-6 py-16">
      <div className="glass-panel w-full rounded-3xl p-8 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Welcome back
        </p>
        <h1 className="mt-2 font-display text-3xl font-medium tracking-tight">
          Sign in
        </h1>
        <p className="mt-2 text-sm text-muted">
          Sign in with your email and password.
        </p>
        <LoginForm registered={registered === "1"} />
      </div>
    </div>
  );
}
