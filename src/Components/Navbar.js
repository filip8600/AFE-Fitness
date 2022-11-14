import { NavLink } from "react-router-dom";
import { getRole, getUserName } from "../Services/StorageService";
import "./../App.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function Navbar() {
  const UserName = getUserName();
  const Role = getRole();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: "flex" }}>
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
