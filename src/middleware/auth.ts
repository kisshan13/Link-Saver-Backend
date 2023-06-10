import { NextFunction, Request, Response } from "express";
import { decodeToken } from "../utils/jwt";
import { accessTokenSchema } from "../utils/schema";
import { Roles, ServerResponse } from "../types/types";
import { ZodError } from "zod";

export const auth = (req: Request, res: ServerResponse, next: NextFunction) => {
  try {
    let authHeader = req.headers.authorization?.split(" ")[1];

    if (typeof authHeader === "undefined") {
      res.status(401).json({
        msg: "Auth header missing.",
      });
      return;
    }

    let decoded = decodeToken(authHeader);

    if (!decoded?.success) {
      switch (decoded?.msg) {
        case "invalid token" || "invalid signature":
          res.status(403).json({
            msg: "Invalid Token",
          });
          break;

        case "token expired":
          res.status(403).json({
            msg: "Token expired",
          });
          break;
      }
    }

    let { user, role } = accessTokenSchema.parse(decoded?.msg);
    res.isAuthenticated = true;
    res.role = role as Roles;
    res.user = user;
    next();
  } catch (e) {
    if (e instanceof ZodError) {
      res.status(403).json({
        msg: "Invalid Token",
      });
      return
    }

    res.status(500).json({
      msg: "Internal Server Error."
    })


  }
};
