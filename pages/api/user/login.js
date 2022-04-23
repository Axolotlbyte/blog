import axios from "axios";
import cookie from "cookie";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      res.status(400).send({ message: `${req.method} not allowed` });
      return;
    }
    const body = {
      email: req.body.email,
      password: req.body.password,
    };

    const result = await axios.post(`${process.env.API_URL}/api/login`, body);

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", String(result.data.token), {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: "strict",
        path: "/",
      })
    );

    res.status(200).send("Login Successful");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
