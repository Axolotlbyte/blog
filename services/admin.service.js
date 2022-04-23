import axios from "axios";

export const deleteComment = async (id, commentId) => {
  const res = await axios.delete(`/api/comment/`, {
    params: {
      id,
      commentId,
    },
  });
  return res.data;
};

export const deleteArticle = async (id) => {
  const res = await axios.delete(`/api/posts/`, {
    params: {
      id,
    },
  });
  return res.data;
};
