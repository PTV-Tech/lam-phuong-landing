import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const isServer = typeof window === "undefined";

const instance: AxiosInstance = axios.create({
  ...(isServer
    ? {
        baseURL: process.env.AIRTABLE_BASE_URL || "https://api.airtable.com/v0",
      }
    : {}),
  timeout: 10e3,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers.Authorization = `Bearer ${process.env.AIRTABLE_API_KEY}`;
    return config;
  },
  (error: any) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: any) => {
    return Promise.reject(error);
  },
);

export default instance;
