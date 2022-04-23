import extractToken from "../../../middleware/token-extractor";
import { isJwtExpired } from "jwt-check-expiration";
import { decodeToken } from "jsontokens";

export default async function handler(req, res) {
  if (req.method !== "POST")
    res.status(404).json({ message: `${req.method} not allowed` });
  try {
    if (!req.headers["cookie"]) {
      return res.json({ status: false, msg: "Cookie does not exist" });
    }
    const token = extractToken(`${req.headers["cookie"]}`);

    if (token === "") {
      return res.json({
        status: false,
        msg: `token does not exist`,
      });
    }

    if (isJwtExpired(token)) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", "", {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: "strict",
          path: "/",
        })
      );
      return res.json({ status: false, msg: "token expired" });
    }

    const decoded = decodeToken(token);

    return res.json({
      status: true,
      msg: "token is valid",
      role: decoded.payload.user.role,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
}
