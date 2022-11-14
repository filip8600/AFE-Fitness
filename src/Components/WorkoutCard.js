import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function WorkoutCard({ element }) {
  const navitate = useNavigate();
  return (
    <Card sx={{ minWidth: 275, bgcolor: "lightBlue" }}>
      <CardActionArea
        onClick={() => {
          navitate("/workoutprograms/" + element.workoutProgramId);
        }}
      >
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5">Title: </Typography>
            <Typography fontWeight="bold" variant="h5">
              {element.name}
            </Typography>
          </Box>

          <Typography fontWeight="bold">Description:</Typography>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {element.description}
          </Typography>
          <Typography>ClientID: {element.clientId}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
