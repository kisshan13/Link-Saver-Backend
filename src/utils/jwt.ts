import jwt, { TokenExpiredError } from "jsonwebtoken";
import { SERVER_JWT_SECRET } from "../env";

export function encodeToken(tokenObj: Object) {
  let accessToken = jwt.sign(tokenObj, SERVER_JWT_SECRET, {
    expiresIn: 60 * 15,
    issuer: "linksaver-backend",
  });

  let refreshToken = jwt.sign(tokenObj, SERVER_JWT_SECRET, {
    expiresIn: 60 * 60 * 24 * 5,
    issuer: "linksaver-backend",
  });

  return {
    accessToken,
    refreshToken,
  };
}

export function decodeToken(jwtToken: string) {
  try {
    let decoded = jwt.verify(jwtToken, SERVER_JWT_SECRET);
    return decoded;
  } catch (e) {
    if (e instanceof TokenExpiredError) {
      return {
        msg: "Token expired",
      };
    } else {
      console.log(e);
    }
  }
}
