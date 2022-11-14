import { NavLink } from "react-router-dom";
import { getRole, getUserName } from "../Services/StorageService";
import "./../App.css";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const UserName = getUserName();
  const Role = getRole();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: "flex" }}>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Group 15
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {Role != "Client" && (
              <Button
                component={NavLink}
                to="createUser"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Create User
              </Button>
            )}
            {Role != "Manager" && (
              <Button
                component={NavLink}
                to="workoutprograms"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Workout Programs
              </Button>
            )}
            {Role == "PersonalTrainer" && (
              <Button
                component={NavLink}
                to="createworkoutprogram"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Create WorkoutProgram
              </Button>
            )}
          </Box>
          <Box>
            <Button
              component={NavLink}
              to="login"
              id="UserName"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {UserName}: {Role}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

// function Navbar() {
//   const UserName = getUserName();
//   const Role = getRole();
//   return (
//     <nav>

//     </nav>
//   );
// }

// export default Navbar;
