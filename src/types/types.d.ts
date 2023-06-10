import { Response } from "express";

type Roles = "public" | "user" | "master";

export interface ServerResponse extends Response {
  isAuthenticated: boolean;
  role: Roles;
  user: string;
}
