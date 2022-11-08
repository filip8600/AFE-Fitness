import { useState } from "react";
import { createUser } from "../Services/LoginService";
import { getUserId } from "../Services/StorageService";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const initialState = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    AccountType: "Client",
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
    if (state.accountType === "Client") {
      let state2 = state;
      state2.personalTrainerId = Number.parseInt(getUserId());
      console.log(JSON.stringify(state2));
      createUser(state2);
    } else createUser(state);

    navigate("/");
  }
  return (
    <form onSubmit={handleSubmit} className="App">
      <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        value={state.firstName}
        onChange={handleChange}
      />
      <br></br>
      <label>Last Name:</label>

      <input
        type="text"
        name="lastName"
        value={state.lastName}
        onChange={handleChange}
      />
      <br></br>
      <label>Type:</label>

      <select name="accountType" onChange={handleChange}>
        <option value="Client">Client</option>
        <option value="PersonalTrainer">Trainer</option>
      </select>
      <br></br>
      <label>Email</label>

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
      <input type="submit" value="Create" />
    </form>
  );
}
