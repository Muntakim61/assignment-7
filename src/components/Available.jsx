import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import SingleAvailable from "./SingleAvailable";

export default function Available({ handleSelectedPlayer }) {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("/player-data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Fetching error:", error));
  }, []);

  //   console.log(handleSelectedPlayer);

  return (
    <>
      {/* Available Card container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto">
        {players.map((player) => (
          // Individual card called
          <SingleAvailable
            key={player.id}
            handleSelectedPlayer={handleSelectedPlayer}
            player={player}
          ></SingleAvailable>
        ))}
      </div>
    </>
  );
}

Available.propTypes = {
  handleSelectedPlayer: PropTypes.func.isRequired,
};
