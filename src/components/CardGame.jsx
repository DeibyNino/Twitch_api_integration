import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CardGame = ({ name, image, id }) => {
  return (
    <Card>
      <CardMedia component="img" image={image} alt={name} />
      <CardContent style={{ height: "5rem" }}>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Game ID: {id}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardGame;
