import axios from "axios";

export const login = async (email, password) => {
  try {
    const body = {
      email,
      password,
    };
    const res = await axios.post("/api/user/login", body);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const check = async () => {
  try {
    const res = await axios.post("/api/user/check");

    return res.data;
  } catch (err) {
    return err;
  }
};

export const logout = async () => {
  try {
    const res = await axios.post("/api/user/logout");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const create = async (email, username, password) => {
  try {
    const body = {
      username,
      email,
      password,
    };

    const res = await axios.post("/api/user/signup", body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const comment = async (text, id) => {
  try {
    const body = { text, id };
    const res = await axios.post(`/api/comment`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const post = async (title, image, content) => {
  try {
    const body = { title, image, content };
    const res = await axios.post(`/api/posts`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
