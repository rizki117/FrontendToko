// === tokenService.js ===

import axios from "axios";

// Buat instance axios khusus, tanpa interceptor
const plainAxios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

// Refresh token pakai plainAxios, bukan api!
export const refreshToken = async () => {
  try {
    const response = await plainAxios.get("/token");
    return response.data;
  } catch (error) {
    throw error.response?.data?.msg || error.message;
  }
};
