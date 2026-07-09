import { SignupForm } from "@/components/signup-form";

export const metadata = {
  title: "Create account — ProductReviewHub",
};

export default function SignupPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center px-6 py-16">
      <div className="glass-panel w-full rounded-3xl p-8 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Join ProductReviewHub
        </p>
        <h1 className="mt-2 font-display text-3xl font-medium tracking-tight">
          Create your account
        </h1>
        <p className="mt-2 text-sm text-muted">
          Save your favorite products and track ratings over time.
        </p>
        <SignupForm />
      </div>
    </div>
  );
}
