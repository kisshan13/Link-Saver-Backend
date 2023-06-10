import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import chalk from "chalk";
import userRouter from "./routes/users";

import { SERVER_PORT } from "./env";

import { auth } from "./middleware/auth";
import { logger } from "./middleware/logger";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(auth as any);
app.use(logger as any);

app.use("/users", userRouter);

app.listen(SERVER_PORT, () => {
  console.log('\n')
  console.log(
    chalk.bold(
      `[index.ts] Server is up ${chalk.bgGreenBright.whiteBright(
        `http://localhost:${SERVER_PORT}`
      )}`
    )
  );
});
