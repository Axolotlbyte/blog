import axios from "axios";
import extractToken from "../../middleware/token-extractor";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      if (req.query.sort) {
        const result = await axios.get(`${process.env.API_URL}/api/post`, {
          params: {
            sort: req.query.sort,
          },
        });
        return res.status(200).json(result.data);
      }
      const result = await axios.get(`${process.env.API_URL}/api/post`);

      return res.status(200).json(result.data);
    }
    if (req.method === "POST") {
      // const token = extractToken(`${req.headers["cookie"]}`);

      const { title, subtitle, image, content, category } = req.body;

      const body = {
        title,
        subtitle,
        image,
        content,
        category,
      };

      const result = await axios.post(
        `${process.env.API_URL}/api/post`,
        body
        // { headers: { authorization: `Bearer ${token}` } }
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
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: [...error] });
  }
}
