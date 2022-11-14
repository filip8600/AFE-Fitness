import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRole } from "../Services/StorageService";
import { getWorkout } from "../Services/WorkoutProgramService";
import CreateExrercise from "./CreateExercise";
import { Box } from "@mui/material";

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
    <Box margin="20px">
      <Typography variant="h3" borderBottom="1px solid gray">
        {state.name}
      </Typography>
      <Typography fontWeight="bold">Description:</Typography>
      <Typography fontSize="16px" borderBottom="1px solid gray">
        {state.description}
      </Typography>
      <Box marginTop="20px">
        {state.exercises.map((ex) => (
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            borderBottom="1px solid black"
            margin="10px"
          >
            <Typography fontWeight="bold">{ex.name}</Typography>
            <Typography>{ex.description}</Typography>
            <Box sx={{ display: "flex", gap: "25px" }}>
              <Typography>Sets: {ex.sets} </Typography>
              <Typography>Reps: {ex.repetitions} </Typography>
              <Typography>Time: {ex.time} </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {role == "PersonalTrainer" && (
        <CreateExrercise workoutId={state.workoutProgramId}></CreateExrercise>
      )}
    </Box>
  );
}

export default Workoutprogram;
