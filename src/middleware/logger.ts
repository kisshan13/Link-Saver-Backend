import { NextFunction, Request } from "express";
import { ServerResponse } from "../types/types";
import chalk from "chalk";

export const logger = (
  req: Request,
  res: ServerResponse,
  next: NextFunction
) => {
  let { path, method, ip } = req;

  let log = chalk.bold(
    `[RECIEVED] ${chalk.bgGreenBright.whiteBright(method)} : ${chalk.bold.white(
      path
    )} [IP: ${chalk.bold.yellowBright(ip)}]`
  );

  console.log(log);
  next();
};
