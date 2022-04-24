import axios from "axios";

export const posts = async (sort) => {
  try {
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
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const categories = async () => {
  try {
    const res = await axios.get("/api/categories");
    return res;
  } catch (error) {
    console.log(error);
    return;
  }
};
