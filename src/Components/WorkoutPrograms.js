import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWorkouts } from "../Services/WorkoutProgramService";
import WorkoutCard from "./WorkoutCard";
import { Box } from "@mui/system";

function Workoutprograms() {
  //const initialState = { email: "", password: "" };
  const [state, setState] = useState(() => []);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getWorkouts();
      setState(result);
      console.log(result);
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
