import bgImage from "../assets/bg-shadow.png";

export default function Footer() {
  return (
    <footer className="bg-black h-[789px] static m-0">
      {/* newsletter div */}
      <div
        className=" w-11/12 mx-auto bg-white bg-opacity-10 border relative bottom-56 h-[450px] flex flex-col justify-center items-center"
        style={{
          borderRadius: "24px",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "white",
            borderRadius: "24px",
          }}
          className="w-11/12 h-5/6 mx-auto shadow-2xl shadow-black flex flex-col justify-center items-center gap-5"
        >
          <p className="font-bold text-3xl">Subscribe to our newsletter</p>
          <p className="font-medium">
            Get the latest updates and news right in your inbox!
          </p>
          <fieldset className="form-control w-80 text-white">
            <div className="join gap-5">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered w-80 text-black"
              />
              <button className="btn btn-primary text-black bg-gradient-to-r from-pink-400 to-yellow-400">
                Subscribe
              </button>
            </div>
          </fieldset>
        </div>
      </div>
      {/* footer div container */}
      <div className="bg-black">
        <div className="footer p-10 w-10/12 mx-auto">
          <nav className="">
            <h6 className="text-white font-semibold">About Us</h6>
            <p className="text-slate-100">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </nav>
          <nav className="text-white">
            <h6 className="font-semibold">Quick Links</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="text-white">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form className="text-white">
            <h6 className="footer-title">Subscribe</h6>
            <fieldset className="form-control w-80 text-white">
              <label className="label">
                <span className="label-text text-white">
                  Subscribe to our newsletter for the latest updates.
                </span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item text-black"
                />
                <button className="btn  bg-join-item text-black bg-gradient-to-r to-pink-400 from-yellow-400">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </footer>
  );
}
