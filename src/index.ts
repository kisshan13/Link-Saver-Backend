import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import chalk from "chalk";

import { SERVER_PORT } from "./env";
import { get } from "./middleware";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

interface CutsomeRes extends Response {
  isAuthenticated?: string;
}

app.get("/", (req, res) => {
});

app.listen(SERVER_PORT, () => {
  console.log(
    `\n [index.ts] Server is up ${chalk.bgGreenBright.whiteBright(
      `http://localhost:${SERVER_PORT}`
    )}`
  );
});
