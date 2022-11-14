import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRole } from "../Services/StorageService";
import { getWorkout } from "../Services/WorkoutProgramService";
import CreateExrercise from "./CreateExercise";
import CreateWorkoutProgram from "./CreateWorkoutProgram";

function Workoutprogram() {
  let { id } = useParams();
  const initialState = {
    workoutProgramId: 0,
    name: "",
    description: "string",
    exercises: [
      {
        exerciseId: 0,
        name: "string",
        description: "string",
        sets: 0,
        repetitions: 0,
        time: "string",
        workoutProgramId: 0,
        personalTrainerId: 0,
      },
    ],
    personalTrainerId: 0,
    clientId: 0,
  };
  //const initialState = { email: "", password: "" };
  const [state, setState] = useState(() => initialState);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getWorkout(id);
      setState(result);
      console.log(result);
    };
    fetchData();
  }, [id]);
  //const workouts=await getWorkouts();

  const role = getRole();

  return (
    <>
      <h1>{state.name}</h1>
      <p>{state.description}</p>
      <article>
        <hr />
        {state.exercises.map((ex) => (
          <div key={ex.exerciseId}>
            <p>{JSON.stringify(ex)}</p>
            <hr />
          </div>
        ))}
        {role == "PersonalTrainer" && (
          <CreateExrercise workoutId={state.workoutProgramId}></CreateExrercise>
        )}
      </article>
    </>
  );
}

export default Workoutprogram;
