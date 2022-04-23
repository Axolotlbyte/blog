import axios from "axios";

export const posts = async (sort) => {
  if (sort) {
    const res = await axios.get("/api/posts", {
      params: {
        sort,
      },
    });
    return res;
  }
  const res = await axios.get("/api/posts");
  return res;
};

export const categories = async () => {
  const res = await axios.get("/api/categories");
  return res;
};
