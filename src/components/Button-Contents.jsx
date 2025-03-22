import PropTypes from "prop-types";
import Available from "./Available.jsx";
import Selected from "./Selected.jsx";

export default function Contents({
  handleActiveState,
  handleDelete,
  active,
  handleSelectedPlayer,
  selectedPlayer,
}) {
  return (
    <>
      {/* Main content title */}
      <div
        id="btn-available"
        className="w-10/12 mx-auto flex justify-between mb-8"
      >
        {active.available ? (
          <p className="font-bold text-3xl">Available Players</p>
        ) : (
          <p className="font-bold text-3xl">
            Selected Players ( {selectedPlayer.length} / 6 )
          </p>
        )}
        <div>
          <button
            onClick={() => handleActiveState("available")}
            className={`${
              active.available
                ? "btn font-bold text-lg active"
                : "btn join-item font-bold text-lg"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleActiveState("selected")}
            className={`${
              active.available
                ? "btn font-bold text-lg"
                : "btn join-item font-bold text-lg active"
            }`}
          >
            Selected ({selectedPlayer.length})
          </button>
        </div>
      </div>
      {/* Main content section */}
      {active.available ? (
        <Available handleSelectedPlayer={handleSelectedPlayer}></Available>
      ) : (
        <Selected
          selectedPlayer={selectedPlayer}
          handleDelete={handleDelete}
          handleActiveState={handleActiveState}
          active={active}
        ></Selected>
      )}
      <div className="mb-96"></div>
    </>
  );
}

Contents.propTypes = {
  handleActiveState: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  active: PropTypes.shape({
    available: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  handleSelectedPlayer: PropTypes.func.isRequired,
  selectedPlayer: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      player_name: PropTypes.string,
      player_salary: PropTypes.number,
    })
  ).isRequired,
};

Contents.defaultProps = {
  selectedPlayer: [],
};
