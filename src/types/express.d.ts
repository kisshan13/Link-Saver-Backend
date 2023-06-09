import { Response } from "express";

type UserRole = "public" | "verified" | "owner" | "master";

interface Server {
  isAuthenticated?: string;
  role?: UserRole;
}

interface Body {
  email?: string;
  password?: string;
  name?: string;
}

declare global {
  namespace Express {
    interface Response {
      server: Server;
    }
  }
}
