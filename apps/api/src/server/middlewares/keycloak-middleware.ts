import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const rawKey =
  process.env.KEYCLOAK_PUBLIC_KEY ||
  "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAumnnqocSsyFtENN1XMB0POC3FDWDhVAoSTW9M4c1lyh8uNkHjaSvVz/AvnitxAlDHp8Ydcjch7T5ZCd88zHX1oN78LiDPgknrU6RS9rjvEtmzgAMSCbDq80VyQ+/Ky+74eWm01OvVxC+JBtI2u8xMEZtvBBYU+QoKO3qiEzZGjk8C5aYA8B8wSKtjRcBIpMm6z0WBAc1t3hyLV+YQuyh3kMowUwRXRlu/V8VOvbs/wNFfXEZl6yEgia+QOugKpPyPeuJkTayToP96UIbdDKj/3Bnqsd0U4aG/vT7L8mU3afh+lTG9NFb0j5MYr2yVmzUJKQK20u9A0SnyMKrQp2iRQIDAQAB";

if (!rawKey) {
  throw new Error("Keycloak public key is missing in environment variables");
}

const keycloakPublicKey = `-----BEGIN PUBLIC KEY-----\n${rawKey}\n-----END PUBLIC KEY-----`;

export const keycloakMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    console.log("token ----- ", token);
    if (!token) {
      res.status(401).json({ message: "Authorization token is required" });
      return;
    }

    jwt.verify(
      token,
      keycloakPublicKey,
      { algorithms: ["RS256"] },
      (err, decoded: any) => {
        if (err) {
          res.status(401).json({ message: "Invalid token" });
          return;
        }

        if (typeof decoded?.sub === "string") {
          req.user = { id: decoded.sub };
          next();
        } else {
          res.status(401).json({ message: "Invalid token payload" });
        }
      }
    );
  } catch (error) {
    console.error("Error validating token:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
