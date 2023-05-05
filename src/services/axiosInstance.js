import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = import.meta.env.VITE_API_TOKEN;
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

axiosInstance.interceptors.response.use((response) => response);

export default axiosInstance;
