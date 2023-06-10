import jwt, {
  JsonWebTokenError,
  JwtPayload,
  TokenExpiredError,
} from "jsonwebtoken";
import { SERVER_JWT_SECRET } from "../env";

export interface DecodedReturnI {
  success: boolean;
  msg: string | JwtPayload;
}

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

export function decodeToken(jwtToken: string): DecodedReturnI | undefined {
  try {
    console.log(SERVER_JWT_SECRET);
    let decoded = jwt.verify(jwtToken, SERVER_JWT_SECRET);

    return {
      success: true,
      msg: decoded,
    };
  } catch (e) {
    if (e instanceof TokenExpiredError) {
      return {
        success: false,
        msg: "Token expired",
      };
    } else if (e instanceof JsonWebTokenError) {
      switch (e.message) {
        case "invalid token" || "invalid signature":
          return {
            success: false,
            msg: "Token is not valid.",
          };
      }
    } else {
      console.log(e);
    }
  }
}
