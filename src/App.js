import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Workoutprograms from "./Components/WorkoutPrograms";
import Workoutprogram from "./Components/WorkoutProgram";
import CreateUser from "./Components/CreateUser";
import CreateWorkoutProgram from "./Components/CreateWorkoutProgram";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="createUser" element={<CreateUser />}></Route>
        <Route path="workoutprograms" element={<Workoutprograms />}></Route>
        <Route path="createworkoutprogram" element={<CreateWorkoutProgram />}></Route>
        <Route
          path="workoutprograms/:id"
          element={<Workoutprogram  />}
        ></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
