import { NavLink } from "react-router-dom";
import { getUserName } from "../Services/StorageService";
import "./../App.css";
function Navbar() {
  const UserName = getUserName();
  return (
    <nav>
      <NavLink to="login"> Login</NavLink>
      <NavLink to="">Create User</NavLink>{" "}
      <NavLink to="">Workout Programs</NavLink>
      <NavLink to="login" id="UserName">
        {UserName}🪪
      </NavLink>
    </nav>
  );
}

export default Navbar;
