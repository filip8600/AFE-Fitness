import { useState } from "react";
import { postWorkout } from "../Services/WorkoutProgramService";
import { getUserId } from "../Services/StorageService";
import { useNavigate } from "react-router-dom";

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
    console.log(stateCopy);
    postWorkout(state);
    navigate("/");
  }
  return (
    <>
      <h1>Create WorkoutProgram:</h1>
      <form onSubmit={handleSubmit} className="App">
        <label>name</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <br></br>
        <label>description</label>
        <input
          type="text"
          name="description"
          value={state.description}
          onChange={handleChange}
        />
        <br></br>
        <label>Client ID</label>
        <input
          type="text"
          name="clientId"
          value={state.clientId}
          onChange={handleChange}
        />
        <br></br>
        <input type="submit" value="Create" />
      </form>
    </>
  );
}
