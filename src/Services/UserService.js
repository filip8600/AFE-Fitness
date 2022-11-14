import { axiosInstance } from "./AxiosSetup";
export async function getTrainerUsers() {
  const result = await axiosInstance.get("/Users/Clients");
  return result.data;
}
