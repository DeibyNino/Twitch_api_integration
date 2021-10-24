import React, { useState, useEffect } from "react";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import Games from "./components/Games";
import Search from "./components/Search";
import "./sass/style.scss";

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setLoading(true);
    getGames();
  }, [setGames, setLoading]);

  const getGames = async () => {
    const url = "https://api.twitch.tv/helix/games/top?first=10";
    const dataGames = await fetch(url, {
      method: "GET",
      headers: {
        "Client-ID": "y1nxu295nfpw2hscbkju4536vlmeqc",
        Authorization: "Bearer hviq4z62zrtbemy4qc7pgjuidcgh57",
      },
    });
    const games = await dataGames.json();
    games.data.forEach((game) => {
      const newImage = game.box_art_url
        .replace("{width}", "260")
        .replace("{height}", "360");
      game.box_art_url = newImage;
    });
    setGames(games.data);
    setLoading(false);
    setTitle(" Our top 10 games on Twitch");
  };

  return (
    <>
      <div className="navbar">
        <div className="logo" onClick={getGames}>
          <AddToQueueIcon />
          <h2>TWITCHAPP</h2>
        </div>
        <div className="search-section">
          <Search
            setLoading={setLoading}
            games={games}
            setGames={setGames}
            setTitle={setTitle}
          />
        </div>
      </div>
      <div className="main-tp">
        <Games games={games} loading={loading} title={title} />
      </div>
    </>
  );
}

export default App;
