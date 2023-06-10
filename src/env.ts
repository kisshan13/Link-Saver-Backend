import { config } from "dotenv";
import chalk from "chalk";

config();

const envVariables = ["SERVER_PORT", "SERVER_DATABASE", "SERVER_JWT_SECRET"];

let SERVER_PORT: number;
let SERVER_DATABASE: string;
let SERVER_JWT_SECRET: string;

async function loadEnv() {
  envVariables.map((env) => {
    if (typeof process.env[env] === "string") {
      switch (env) {
        case "SERVER_PORT":
          SERVER_PORT = parseInt(process.env[env] as string, 10);
          logLoad(env);
          break;

        case "SERVER_DATABASE":
          SERVER_DATABASE = process.env[env] as string;
          logLoad(env);
          break;

        case "SERVER_JWT_SECRET":
          SERVER_JWT_SECRET = process.env[env] as string;
          logLoad(env);
          console.log(SERVER_JWT_SECRET)
          break;
      }
    } else {
      console.log(
        `[env.ts]  ⚠️ FAILED TO LOAD ${chalk.bgRedBright.bold.whiteBright(env)}`
      );
    }
  });
}

function logLoad(load: string) {
  console.log(
    `[env.ts] ⚡ LOADED ENV ${chalk.bgGreenBright.bold.whiteBright(load)}`
  );
}

loadEnv();

export { SERVER_PORT, SERVER_DATABASE, SERVER_JWT_SECRET };
