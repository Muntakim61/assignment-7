import PropTypes from "prop-types";

export default function SingleAvailable({ player, handleSelectedPlayer }) {
  const {
    img,
    player_name,
    country,
    playing_position,
    batting_hand,
    bowling_hand,
    player_salary,
    rating,
  } = player;

  return (
    <div className="card card-compact bg-base-100 w-[400px] lg:w-[500px] shadow-xl mx-auto p-6 border-slate border-2">
      <figure>
        <img
          className="h-[400px] w-full object-cover rounded-2xl"
          src={img}
          alt={player_name}
        />
      </figure>
      {/* player title */}
      <div className="flex items-center mt-6">
        <img
          src="https://i.ibb.co.com/mbCBr65/user-icon.webp"
          alt="user-icon"
          className="h-10 w-10 mr-4"
        />
        <h2 className="font-bold text-lg">{player_name}</h2>
      </div>
      {/* player country + playing_position */}
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          <img
            src="https://i.ibb.co.com/nBp9tnN/100-flag.webp"
            alt=""
            className="h-10 w-10 mr-4"
          />
          <p>{country}</p>
        </div>
        <button className="btn ml-auto">{playing_position}</button>
      </div>
      <hr />
      {/* player rating */}
      <div className="flex items-center mt-4">
        <p className="font-bold text-lg">Rating</p>
        <p className="ml-auto font-bold text-lg">{rating}</p>
      </div>
      {/* player batting+bowling preference */}
      <div className="flex items-center mt-4">
        <p className="text-lg font-semibold">{batting_hand}</p>
        <p className="text-lg font-semibold ml-auto">{bowling_hand}</p>
      </div>
      <div className="card-actions flex items-center mt-3">
        <p className="text-lg font-bold">Price: $ {player_salary}</p>
        <button
          onClick={() => {
            handleSelectedPlayer(player);
          }}
          className="btn ml-auto"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
}


SingleAvailable.propTypes = {
  player: PropTypes.shape({
      img : PropTypes.string.isRequired,
      player_name : PropTypes.string.isRequired,
      country : PropTypes.string.isRequired,
      playing_position : PropTypes.string.isRequired,
      batting_hand : PropTypes.string.isRequired,
      bowling_hand : PropTypes.string.isRequired,
      player_salary : PropTypes.number.isRequired,
      rating : PropTypes.number.isRequired,
  }).isRequired,
  handleSelectedPlayer : PropTypes.func.isRequired,
  
}