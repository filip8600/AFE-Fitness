import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  getWorkoutForUser,
  getWorkouts,
} from "../Services/WorkoutProgramService";
import WorkoutCard from "./WorkoutCard";
import { Box } from "@mui/system";

function Workoutprograms() {
  const { search } = useLocation();
  const parameters = new URLSearchParams(search);
  const client = parameters.get("client");
  const [state, setState] = useState(() => []);
  useEffect(() => {
    const fetchData = async () => {
      let result = null;
      if (client && client >= 0 && client <= 10000) {
        result = await getWorkoutForUser(client);
      } else result = await getWorkouts();
      setState(result);
    };
    fetchData();
  }, []);
  //const workouts=await getWorkouts();

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        margin: "10px",
        justifyContent: "center",
      }}
    >
      {state.map((element) => (
        <WorkoutCard element={element}></WorkoutCard>
      ))}
    </Box>
  );
}

export default Workoutprograms;
