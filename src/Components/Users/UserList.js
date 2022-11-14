import { useEffect, useState } from "react";
import { getTrainerUsers } from "../../Services/UserService";
import * as React from "react";
import Grid from "@mui/material/Grid";
import UserCard from "./UserCard";

function UserList() {
  const [state, setState] = useState(() => []);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getTrainerUsers();
      setState(result);
    };
    fetchData();
  }, []);

  return (
    <Grid container spacing={4} paddingX="200px" paddingTop="30px">
      {state.map((element) => (
        <Grid key={element.userId} item xs={4}>
          <UserCard element={element} sx={{ minWidth: 275 }}></UserCard>
        </Grid>
      ))}
    </Grid>
  );
}

export default UserList;
