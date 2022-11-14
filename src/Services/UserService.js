import { axiosInstance } from "./AxiosSetup";
export async function getTrainerUsers() {
  const result = await axiosInstance.get("/Users/Clients");
  return result.data;
}

export async function deleteUser(userId) {
  const result = await axiosInstance.delete("/Users/" + userId);
  return result.data;
}
