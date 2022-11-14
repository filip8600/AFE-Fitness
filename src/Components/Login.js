import { useState } from "react";
import login from "../Services/LoginService";
import { setToken } from "../Services/StorageService";

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
    console.log(state);
    const a = await login({ email: state.email, password: state.password });
    console.log(a);
    setToken(a);
    window.location.replace(window.location.origin);
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
