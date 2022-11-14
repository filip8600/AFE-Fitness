import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  getWorkoutForUser,
  getWorkouts,
} from "../Services/WorkoutProgramService";

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
