import PropTypes from "prop-types";

export default function Selected({
  selectedPlayer,
  handleDelete,
  handleActiveState,
}) {
  // console.log(selectedPlayer);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 w-10/12 mx-auto">
        <button
          className="btn bg-[#E7FE29] w-2/12"
          onClick={() => handleActiveState("available")}
        >
          Add More Players
        </button>
        {selectedPlayer.map((player) => {
          const { img, player_name, batting_hand } = player;

          return (
            <div
              key={player_name}
              className="h-32 flex items-center border-b-2 mb-4"
            >
              {/* Player Image */}
              <div className="flex-shrink-0">
                <img
                  src={img}
                  alt={player_name}
                  className="w-20 h-20 rounded-md object-cover"
                />
              </div>

              {/* Player Name and Batting Hand */}
              <div className="ml-4 flex-grow">
                <h3 className="font-semibold">{player_name}</h3>
                <p>{batting_hand}</p>
              </div>

              {/* Delete Button */}
              <button
                className="ml-auto w-10 h-10 bg-cover bg-center flex-shrink-0 border-2 rounded-lg"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co.com/7VBX5Vq/delete.webp)",
                }}
                onClick={() => handleDelete(player.id)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

Selected.propTypes = {
  handleActiveState: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  selectedPlayer: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      player_name: PropTypes.string,
      player_salary: PropTypes.number,
    })
  ).isRequired,
};

Selected.defaultProps = {
  selectedPlayer: [],
};
