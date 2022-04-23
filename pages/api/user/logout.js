import cookie from "cookie";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res
      .status(404)
      .json({ status: "fail", message: "Method not allowed here!" });
  try {
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
    return res.status(200).send("Successfully Logged Out");
  } catch (error) {
    console.log(error);
    res.status(500).send("Logout Unsuccessful");
  }
}
