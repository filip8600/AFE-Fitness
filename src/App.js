import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Workoutprograms from "./Components/WorkoutPrograms";
import Workoutprogram from "./Components/WorkoutProgram";
import CreateUser from "./Components/CreateUser";
import CreateWorkoutProgram from "./Components/CreateWorkoutProgram";
import UserList from "./Components/Users/UserList";
import { getRole } from "./Services/StorageService";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { Home } from "./Components/Home";

function App() {
  const role = getRole();
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route
          path="createUser"
          element={
            <ProtectedRoute
              redirectPath="/"
              userRole={role}
              AllowedRoles={["Manager", "PersonalTrainer"]}
            >
              <CreateUser />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="workoutprograms"
          element={
            <ProtectedRoute
              redirectPath="/"
              userRole={role}
              AllowedRoles={["Client", "PersonalTrainer"]}
            >
              <Workoutprograms />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="createworkoutprogram"
          element={
            <ProtectedRoute
              redirectPath="/"
              userRole={role}
              AllowedRoles={["PersonalTrainer"]}
            >
              <CreateWorkoutProgram />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="users"
          element={
            <ProtectedRoute
              redirectPath="/"
              userRole={role}
              AllowedRoles={["PersonalTrainer"]}
            >
              <UserList />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="workoutprograms/:id"
          element={
            <ProtectedRoute
              redirectPath="/"
              userRole={role}
              AllowedRoles={["Client", "PersonalTrainer"]}
            >
              <Workoutprogram />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/users"
          element={
            <ProtectedRoute
              redirectPath="/"
              userRole={role}
              AllowedRoles={["PersonalTrainer"]}
            >
              <UserList />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
