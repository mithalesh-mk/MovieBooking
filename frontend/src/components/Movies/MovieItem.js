import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MovieItem = ({ title, releaseDate, posterUrl, id }) => {
  return (
    <Card
      sx={{
        color : "white",
        backgroundColor : "black",
        margin: 2,
        width: 250,
        height: 320,
        borderRadius: 5,
        border:"1px solid white",
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <img height={"50%"} width="100%" src={posterUrl} alt={title} sx={{borderRadius:"5px"}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color : "white"}}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{color : "white"}}>
          {new Date(releaseDate).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          fullWidth
          LinkComponent={Link}
          to={`/booking/${id}`}
          sx={{
            margin: "auto",
            bgcolor: "#2b2d42",
            ":hover": {
              bgcolor: "#121217",
            },
            borderRadius : "30px"
          }}
          size="small"
        >
          Book
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieItem;
