import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <nav>
<NavLink to="login"> Login</NavLink> <NavLink>Create User</NavLink> <NavLink>Workout Programs</NavLink></nav>

    );
  }
  
  export default Navbar;