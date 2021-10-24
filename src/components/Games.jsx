import React from "react";
import { Grid, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import VideogameAssetOffIcon from "@mui/icons-material/VideogameAssetOff";

import CardGame from "./CardGame";

const Games = ({ games, loading, title }) => {
  return loading ? (
    <Box className="loading">
      <CircularProgress color="secondary" />
    </Box>
  ) : (
    <Grid container spacing={2}>
      {games.length === 0 ? (
        <div className="noResults">
          <div>
            <VideogameAssetOffIcon />
            <h3>No search results</h3>
            <p>try another word!</p>
          </div>
        </div>
      ) : (
        <>
          <Grid item xs={12}>
            <Typography variant="h4" color="secondary" textAlign="center">
              {title}
            </Typography>
          </Grid>
          {games.map((game) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={game.id} height={1}>
              <CardGame
                name={game.name}
                image={game.box_art_url}
                id={game.id}
              />
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
};

export default Games;
