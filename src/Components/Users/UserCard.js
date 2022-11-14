import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function UserCard({ element }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent sx={{ bgcolor: "lightBlue" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {element.accountType}
        </Typography>
        <Typography variant="h5" component="div">
          {element.firstName} {element.lastName}{" "}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {element.email}
        </Typography>
        <Typography variant="body2">UserId: {element.userId}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
