import z from "zod";

export const userSignupSchema = z.object({
  email: z.string(),
  password: z.string(),
  name: z.string(),
});

export const accessTokenSchema = z.object({
  user: z.string(),
  role: z.string(),
});
