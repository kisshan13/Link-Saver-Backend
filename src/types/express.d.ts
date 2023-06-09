import { Response } from "express";

type UserRole = "public" | "verified" | "owner" | "master";

interface Server {
  isAuthenticated?: string;
  role?: UserRole;
}

declare global {
  namespace Express {
    interface Response {
      server: Server;
    }
  }
}
