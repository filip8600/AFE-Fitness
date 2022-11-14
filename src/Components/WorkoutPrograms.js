import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  getWorkoutForUser,
  getWorkouts,
} from "../Services/WorkoutProgramService";
import WorkoutCard from "./WorkoutCard";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function Workoutprograms() {
  let navigate = useNavigate();
  async function CreateClick(id) {
    navigate("/createworkoutprogram?client=" + id);
  }
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

  if (state.length < 1 && client) {
    return (
      <>
        <h3>Sorry, could not find any workoutprogram for client {client}</h3>
        <Button size="small" onClick={() => CreateClick(client)}>
          Create new program
        </Button>
      </>
    );
  } else if (state.length < 1) return "Loading...";
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
        <WorkoutCard
          key={element.workoutProgramId}
          element={element}
        ></WorkoutCard>
      ))}
    </Box>
  );
}

export default Workoutprograms;
