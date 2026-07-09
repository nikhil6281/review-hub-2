import { pool } from "@/lib/db";

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  password_hash: string;
  created_at: string;
};

export async function getUserByEmail(email: string): Promise<User | null> {
  const { rows } = await pool.query<User>(
    "SELECT * FROM users WHERE email = $1 LIMIT 1",
    [email.toLowerCase()]
  );
  return rows[0] ?? null;
}

export async function createUser(input: {
  name: string;
  email: string;
  phone: string;
  passwordHash: string;
}): Promise<Pick<User, "id" | "name" | "email">> {
  const { rows } = await pool.query<Pick<User, "id" | "name" | "email">>(
    `INSERT INTO users (name, email, phone, password_hash)
     VALUES ($1, $2, $3, $4)
     RETURNING id, name, email`,
    [input.name, input.email.toLowerCase(), input.phone, input.passwordHash]
  );
  return rows[0];
}
