import { TextField } from "@mui/material";
import { useState } from "react";
import login from "../Services/LoginService";
import { setToken } from "../Services/StorageService";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

export default function Login() {
  const initialState = { email: "", password: "" };
  const [state, setState] = useState(() => initialState);

  function handleChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const a = await login({ email: state.email, password: state.password });
    setToken(a);
    window.location.replace(window.location.origin);
  }
  return (
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
        <TextField
          label="Email"
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />

        <Button variant="contained" type="submit">
          Login
        </Button>
      </Box>
    </form>
  );
}
