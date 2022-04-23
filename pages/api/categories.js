import axios from "axios";

export default async function handler(req, res) {
  const result = await axios.get(`${process.env.API_URL}/api/category`);

  res.status(200).json(result.data);
}
