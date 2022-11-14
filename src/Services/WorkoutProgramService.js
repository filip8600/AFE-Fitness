import { axiosInstance } from "./AxiosSetup";
export async function getWorkouts() {
  const result = await axiosInstance.get("/WorkoutPrograms");
  return result.data;
}

export async function getWorkout(id) {
  const result = await axiosInstance.get("/WorkoutPrograms/" + id);
  return result.data;
}

export async function postWorkout(workout) {
  return axiosInstance.post("/WorkoutPrograms/", workout);
}
export async function postExercise(e, id) {
  return axiosInstance.post("/Exercises/Program/" + id, e);
}

export async function getWorkoutForUser(id) {
  const result = axiosInstance.get("/WorkoutPrograms/client/" + id);
  return (await result).data;
}
