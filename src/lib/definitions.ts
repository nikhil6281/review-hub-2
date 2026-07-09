import * as z from "zod";

export const SignupFormSchema = z.object({
  name: z.string().trim().min(2, { error: "Name must be at least 2 characters." }),
  email: z.email({ error: "Enter a valid email address." }).trim(),
  phone: z
    .string()
    .trim()
    .min(7, { error: "Enter a valid phone number." })
    .regex(/^[0-9+\-()\s]+$/, { error: "Use digits only, with optional +, -, ( )." }),
  password: z
    .string()
    .min(8, { error: "Be at least 8 characters long." })
    .regex(/[a-zA-Z]/, { error: "Contain at least one letter." })
    .regex(/[0-9]/, { error: "Contain at least one number." }),
});

export type SignupFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        phone?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export const LoginFormSchema = z.object({
  email: z.email({ error: "Enter a valid email address." }).trim(),
  password: z.string().min(1, { error: "Password is required." }),
});

export type LoginFormState =
  | {
      message?: string;
    }
  | undefined;

export const ReviewFormSchema = z.object({
  rating: z.coerce
    .number()
    .int({ error: "Pick a star rating." })
    .min(1, { error: "Pick a star rating." })
    .max(5, { error: "Pick a star rating." }),
  title: z.string().trim().max(120, { error: "Keep the title under 120 characters." }).optional(),
  body: z
    .string()
    .trim()
    .min(10, { error: "Write at least 10 characters." })
    .max(2000, { error: "Keep it under 2000 characters." }),
});

export type ReviewFormState =
  | {
      errors?: {
        rating?: string[];
        title?: string[];
        body?: string[];
      };
      message?: string;
      success?: boolean;
      wasUpdate?: boolean;
    }
  | undefined;
