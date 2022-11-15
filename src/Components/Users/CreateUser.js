import { useState } from "react";
import { createUser } from "../../Services/LoginService";
import { getRole, getUserId } from "../../Services/StorageService";
import { useNavigate } from "react-router-dom";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

export default function CreateUser() {
  const role = getRole();
  const initialState = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    AccountType: role === "Manager" ? "PersonalTrainer" : "Client",
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
    if (state.AccountType === "Client") {
      let state2 = state;
      state2.personalTrainerId = Number.parseInt(getUserId());
      createUser(state2);
    } else createUser(state);

    navigate("/");
  }
  return (
    <>
      <Typography
        variant="h4"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        Create User
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginX: "25%",
            marginTop: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <TextField
              label="First Name"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
              sx={{ width: "50%" }}
            />

            <TextField
              label="Last Name"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
              sx={{ width: "50%" }}
            />
          </Box>

          <TextField
            label="Email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />

          <TextField
            type="password"
            label="Password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Create
          </Button>
        </Box>
      </form>
    </>
  );
}
