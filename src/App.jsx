import "./App.css";
import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import Contents from "./components/Button-Contents.jsx";
import Footer from "./components/footer.jsx";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [active, setActive] = useState({
    available: true,
    status: "active",
  });

  const handleActiveState = (status) => {
    setActive({
      available: status === "available",
      status: "active",
    });
  };

  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [balance, setBalance] = useState(0);

  const handleSelectedPlayer = (player) => {
    const { player_salary } = player;
    const alreadyExists = selectedPlayer.find((p) => p.id === player.id);

    if (alreadyExists) {
      toast.error(`${player.player_name} has already been selected`);
    } else if (selectedPlayer.length >= 6) {
      toast.error("Slot filled up");
    } else if (balance < player_salary) {
      toast.error("Insufficient balance to select this player");
    } else {
      const newBalance = balance - player_salary;
      setBalance(newBalance);
      const newPlayer = [...selectedPlayer, player];
      setSelectedPlayer(newPlayer);
      toast.success(`${player.player_name} has been  added to the squad`);
    }
  };

  const freeBalance = 600000000;

  const handleCoinBalance = () => {
    setBalance((prevBalance) => prevBalance + freeBalance);
    toast.success("Free Credit added");
  };

  const handleDelete = (id) => {
    const removedPlayer = selectedPlayer.find((p) => p.id == id);
    const newPlayers = selectedPlayer.filter((p) => p.id != id);
    setSelectedPlayer(newPlayers);
    toast.error(`${removedPlayer.player_name} has been removed from squad`);
  };

  return (
    <>
      <Header  balance={balance} ></Header>
      <Banner  handleCoinBalance={handleCoinBalance} ></Banner>
      <Contents 
        active={active}
        handleSelectedPlayer={handleSelectedPlayer}
        handleActiveState={handleActiveState}
        selectedPlayer={selectedPlayer}
        handleDelete={handleDelete}
        ></Contents>
      <Footer></Footer>
      <ToastContainer position="top-left" ></ToastContainer>
    </>
  );
}

export default App;
