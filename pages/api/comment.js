import axios from "axios";
import extractToken from "../../middleware/token-extractor";

export default async function handler(req, res) {
  const token = extractToken(`${req.headers["cookie"]}`);

  if (req.method === "POST") {
    const { text, id } = req.body;
    const body = { text };

    const result = await axios.post(
      `${process.env.API_URL}/api/article/${id}/comments`,
      body,
      { headers: { authorization: `Bearer ${token}` } }
    );

    res.status(200).json(result.data);
  }
  if (req.method === "DELETE") {
    const { id, commentId } = req.query;
    const result = await axios.delete(
      `${process.env.API_URL}/api/article/${id}/comments/${commentId}`,
      { headers: { authorization: `Bearer ${token}` } }
    );

    res.status(200).json(result.data);
  }
}
