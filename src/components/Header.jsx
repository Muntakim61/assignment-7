import image from "../assets/logo.png";
import image2 from "../assets/coin-icon.jpg";
import PropTypes from "prop-types";

function Header({ balance }) {
  return (
    <>
      <div className="navbar w-10/12 mx-auto mt-12 fixed top-0 left-1/2 transform -translate-x-1/2 backdrop-blur bg-white/70 p-4 rounded-lg shadow-lg z-50 ">
        <div className="navbar-start">
          <img src={image} className="w-16 h-full" />
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end flex">
          <ul className="gap-12 mr-12 hidden lg:flex">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedule</li>
          </ul>
          <div className="flex gap-2 border-black border-2 rounded-xl p-2">
            <p id="balanceCoin">{balance}</p>
            <p>Coin</p>
            <img src={image2} alt="" className="w-5 h-5 bg-transparent" />
          </div>
        </div>
      </div>
      <div className="h-48"></div>
    </>
  );
}

Header.propTypes = {
  balance : PropTypes.number.isRequired,
}


export default Header;
