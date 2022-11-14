import { useState } from "react";
import { useParams } from "react-router-dom";
import { postExercise } from "../Services/WorkoutProgramService";

export default function CreateExrercise() {
  let { id } = useParams();

  const initialState = {
    name: "",
    description: "",
    sets: "",
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
    console.log(state);
    postExercise(state, id);
  }
  return (
    <>
      <h2>Create new exercise:</h2>
      <form onSubmit={handleSubmit} className="App">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <br></br>
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={state.description}
          onChange={handleChange}
        />
        <br></br>
        <label>Repetitions</label>
        <input
          type="number"
          name="repetitions"
          value={state.repetitions}
          onChange={handleChange}
        />
        <br></br>
        <label>Sets</label>
        <input
          type="text"
          name="sets"
          value={state.sets}
          onChange={handleChange}
        />
        <br></br>
        <label>Time</label>
        <input
          type="text"
          name="time"
          value={state.time}
          onChange={handleChange}
        />
        <br></br>
        <input type="submit" value="Create" />
      </form>
    </>
  );
}
