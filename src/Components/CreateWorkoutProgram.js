import { useState } from "react";
import { postWorkout } from "../Services/WorkoutProgramService";
import { getUserId } from "../Services/StorageService";
import { useNavigate } from "react-router-dom";
import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

export default function CreateWorkoutProgram() {
  const { search } = useLocation();
  const parameters = new URLSearchParams(search);
  let client = parameters.get("client");
  if (!client) client = 0;
  const initialState = {
    name: "",
    description: "",
    exercises: [],
    personalTrainerId: getUserId(),
    clientId: Number.parseInt(client),
  };
  const [state, setState] = useState(() => initialState);
  let navigate = useNavigate();

  function handleChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const stateCopy = state;
    stateCopy.clientId = Number.parseInt(state.clientId);
    //console.log(stateCopy);
    postWorkout(state);
    navigate("/");
  }
  return (
    <>
      <Typography
        variant="h4"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        Create Workout Program
      </Typography>
      <form onSubmit={handleSubmit} className="App">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginX: "25%",
            marginTop: "10px",
          }}
        >
          <TextField
            label="Name"
            name="name"
            value={state.name}
            onChange={handleChange}
          />

          <TextField
            label="Description"
            name="description"
            value={state.description}
            onChange={handleChange}
          />

          <TextField
            type={"number"}
            name="clientId"
            label="Client ID"
            value={state.clientId}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Create
          </Button>
        </Box>
      </form>
    </>
  );
}
