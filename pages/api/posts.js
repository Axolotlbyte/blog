import axios from "axios";
import extractToken from "../../middleware/token-extractor";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.sort) {
      const result = await axios.get(`${process.env.API_URL}/api/article`, {
        params: {
          sort: req.query.sort,
        },
      });
      return res.status(200).json(result.data);
    }
    const result = await axios.get(`${process.env.API_URL}/api/article`);

    return res.status(200).json(result.data);
  }
  if (req.method === "POST") {
    const token = extractToken(`${req.headers["cookie"]}`);

    const { title, image, content } = req.body;

    const body = {
      title,
      image,
      content,
    };

    const result = await axios.post(
      `${process.env.API_URL}/api/article`,
      body,
      { headers: { authorization: `Bearer ${token}` } }
    );

    res.status(200).json(result.data);
  }
  if (req.method === "DELETE") {
    const token = extractToken(`${req.headers["cookie"]}`);

    const result = await axios.delete(
      `${process.env.API_URL}/api/article/${req.query.id}`,
      { headers: { authorization: `Bearer ${token}` } }
    );

    res.status(200).json(result.data);
  }
}
