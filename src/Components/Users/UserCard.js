import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { deleteUser } from "../../Services/UserService";
import { useNavigate } from "react-router-dom";

async function DeleteClick(id) {
  await deleteUser(id);
  alert("User deleted. Please Reload");
}

export default function UserCard({ element }) {
  let navigate = useNavigate();
  async function WorkOutClick(id) {
    navigate("/workoutprograms?client=" + id);
  }
  async function CreateClick(id) {
    navigate("/createworkoutprogram?client=" + id);
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent sx={{ bgcolor: "lightBlue" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {element.accountType}
        </Typography>
        <Typography variant="h5" component="div">
          {element.firstName} {element.lastName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {element.email}
        </Typography>
        <Typography variant="body2">UserId: {element.userId}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => DeleteClick(element.userId)}>
          Delete
        </Button>
        <Button size="small" onClick={() => WorkOutClick(element.userId)}>
          Workouts
        </Button>
        <Button size="small" onClick={() => CreateClick(element.userId)}>
          Create
        </Button>
      </CardActions>
    </Card>
  );
}
