import image from "../assets/banner-main.png";
import bgImage from "../assets/bg-shadow.png";
import PropTypes from "prop-types";

export default function Banner({ handleCoinBalance }) {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "black",
        borderRadius: "24px",
      }}
      className="w-10/12 mx-auto h-[545px] flex flex-col justify-center items-center gap-6 mb-24"
    >
      <img src={image} alt="Main banner" className="object-center" />
      <p className="font-bold text-4xl text-white">
        Assemble Your Ultimate Dream 11 Cricket Team
      </p>
      <p className="font-medium text-2xl text-white">
        Beyond Boundaries Beyond Limits
      </p>
      <div className="border-[#E7FE29] border w-fit rounded-xl flex justify-center items-center">
        <button
          onClick={handleCoinBalance}
          className="btn rounded-2xl px-5 py-1 border-4 border-black bg-[#E7FE29] text-center font-bold"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
}

Banner.propTypes = {
  handleCoinBalance: PropTypes.func.isRequired,
};
