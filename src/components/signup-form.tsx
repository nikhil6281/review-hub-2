"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signup } from "@/app/actions/auth";

export function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <form action={action} className="mt-8 space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-muted">
          Full name
        </label>
        <input
          id="name"
          name="name"
          placeholder="Jane Doe"
          autoComplete="name"
          className="mt-2 w-full rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-2 outline-none focus:border-accent"
        />
        {state?.errors?.name && (
          <p className="mt-1.5 text-xs text-accent-2">{state.errors.name[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          className="mt-2 w-full rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-2 outline-none focus:border-accent"
        />
        {state?.errors?.email && (
          <p className="mt-1.5 text-xs text-accent-2">{state.errors.email[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-muted">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 555 123 4567"
          autoComplete="tel"
          className="mt-2 w-full rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-2 outline-none focus:border-accent"
        />
        {state?.errors?.phone && (
          <p className="mt-1.5 text-xs text-accent-2">{state.errors.phone[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="text-sm font-medium text-muted">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          className="mt-2 w-full rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-2 outline-none focus:border-accent"
        />
        {state?.errors?.password && (
          <ul className="mt-1.5 space-y-0.5 text-xs text-accent-2">
            {state.errors.password.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </div>

      {state?.message && <p className="text-sm text-accent-2">{state.message}</p>}

      <button
        disabled={pending}
        type="submit"
        className="w-full rounded-full bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
      >
        {pending ? "Creating account…" : "Create account"}
      </button>

      <p className="text-center text-sm text-muted">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-foreground hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}
