import { axiosInstance } from "./AxiosSetup";
async function login(credentials) {
  const a = await axiosInstance.post("/Users/login", credentials);
  return a.data.jwt;
}
export async function createUser(credentials) {
  return axiosInstance.post("/Users", credentials);
}

export default login;
