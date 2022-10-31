import { axiosInstance } from "./AxiosSetup"
async function login(credentials){
    const a= await axiosInstance.post("/Users/login",credentials)
    return a.data.jwt
    
}
export async function getWorkoutPrograms(){
    console.log(await axiosInstance.get("/WorkoutPrograms"));
}
export default login