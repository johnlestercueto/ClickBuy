import api from "../../api";

export const login = async (credentials) => {
    const res = await api.post("/auth/login", credentials)
    return res.data;
}

export const register = async (userdata) => {
  try {
    console.log("Sending:", userdata);
    const res = await api.post("/auth/register", userdata);
    return res.data;
  } catch (err) {
    console.error("Register error:", err.response?.data || err.message);
    throw err;
  }
}
