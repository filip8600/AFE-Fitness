import { useState } from "react";
import { useParams } from "react-router-dom";
import { postExercise } from "../Services/WorkoutProgramService";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

export default function CreateExrercise() {
  let { id } = useParams();

  const initialState = {
    name: "",
    description: "",
    sets: 0,
    repetitions: 0,
    time: "",
  };
  const [state, setState] = useState(() => initialState);

  function handleChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const stateCopy = state;
    stateCopy.repetitions = Number.parseInt(state.repetitions);
    stateCopy.sets = Number.parseInt(state.sets);
    postExercise(state, id);
  }
  return (
    <>
      <Typography
        variant="h4"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        Create new exercise:
      </Typography>
      <form onSubmit={handleSubmit}>
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
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />

          <TextField
            label="Description"
            type="text"
            name="description"
            value={state.description}
            onChange={handleChange}
          />

          <TextField
            label="Repetitions"
            type="number"
            name="repetitions"
            value={state.repetitions}
            onChange={handleChange}
          />

          <TextField
            label="Sets"
            type="number"
            name="sets"
            value={state.sets}
            onChange={handleChange}
          />

          <TextField
            label="Time"
            type="text"
            name="time"
            value={state.time}
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
