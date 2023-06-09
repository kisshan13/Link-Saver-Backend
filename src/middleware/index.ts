import { NextFunction, Request, Response } from "express";

interface CustomRes extends Response {
  isAuthenticated?: string;
}

interface CustomReq extends Request {}

export const get = (req: CustomReq, res: CustomRes) => {
  res.isAuthenticated = "true";
  res.send(res.isAuthenticated);
};
