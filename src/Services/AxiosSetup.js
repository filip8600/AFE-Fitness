import axios from "axios";
import { getToken } from "./StorageService";

export const axiosInstance = axios.create({
  baseURL: "https://fitnessbackend2022.azurewebsites.net/api/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = "bearer " + getToken();

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
