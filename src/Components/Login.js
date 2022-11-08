import { useState } from "react";
import login from "../Services/LoginService";
import { setToken } from "../Services/StorageService";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const initialState = { email: "", password: "" };
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
    console.log(state);
    const a = await login({ email: state.email, password: state.password });
    console.log(a);
    setToken(a);
    navigate("/");
  }
  return (
    <form onSubmit={handleSubmit} className="App">
      <label>email</label>
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <br></br>
      <label>password</label>
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={handleChange}
      />
      <br></br>
      <input type="submit" value="Login" />
    </form>
  );
}

