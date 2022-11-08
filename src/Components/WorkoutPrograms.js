import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWorkouts } from "../Services/WorkoutProgramService";

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
    <>
      {state.map((element) => (
        <Link
          key={element.workoutProgramId}
          to={"/workoutprograms/" + element.workoutProgramId}
        >
          <h2>{element.name}</h2>
        </Link>
      ))}
    </>
  );
}

export default Workoutprograms;
