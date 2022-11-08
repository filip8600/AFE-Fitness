import { NavLink } from "react-router-dom";
import { getRole, getUserName } from "../Services/StorageService";
import "./../App.css";
function Navbar() {
  const UserName = getUserName();
  const Role = getRole();
  return (
    <nav>
      <NavLink to="createUser">Create User</NavLink>
      {" | "}
      <NavLink to="workoutprograms">Workout Programs</NavLink>
      {" | "}
      <NavLink to="createworkoutprogram">Create WorkoutProgram</NavLink>
      <NavLink to="login" id="UserName">
        {UserName}: {Role}🪪
      </NavLink>
    </nav>
  );
}

export default Navbar;
