import React, { useState } from "react";

import { TextField, InputAdornment, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ setLoading, games, setGames, setTitle }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchError, setSearchError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchValue === "") {
      setSearchError(true);
      return;
    }

    setLoading(true);
    try {
      const url = `https://api.twitch.tv/helix/search/categories?first=100&query=${searchValue}`;
      const gamesData = await fetch(url, {
        method: "GET",
        headers: {
          "Client-ID": "y1nxu295nfpw2hscbkju4536vlmeqc",
          Authorization: "Bearer hviq4z62zrtbemy4qc7pgjuidcgh57",
        },
      });
      const gamesValue = await gamesData.json();
      gamesValue.data.forEach((game) => {
        const newImage = game.box_art_url
          .replace("52", "260")
          .replace("72", "360");
        game.box_art_url = newImage;
      });

      setGames(gamesValue.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    setSearchError(false);
    setTitle(`Better results from ${searchValue.toUpperCase()}`);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <form onSubmit={handleSearch}>
        <TextField
          fullWidth
          label="Search Game"
          color="secondary"
          id="fullWidth"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton type="submit">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={searchError}
        />
      </form>
    </Box>
  );
};

export default Search;
