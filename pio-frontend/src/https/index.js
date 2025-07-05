import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:3000",
  withCredentials: true, // Enable cookies and other credentials
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// API ENDPOINTS
export const login = (data) => api.post("/api/user/login", data);
export const register = (data) => api.post("/api/user/register", data);
export const getUser = () => api.get("/api/user");
export const logout = () => api.post("/api/user/logout");
