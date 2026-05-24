import { Link } from "react-router";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Error = () => {
  return (
    <div className=" text-center lg:mx-27 lg:my-20 rounded-4xl">
      <div className="mb-5">
        <DotLottieReact
          src="https://lottie.host/9aa014a6-1d06-4402-8cfb-1055947a2bd0/hjjhY8uSnk.lottie"
          loop
          autoplay
        />
        <h1 className="text-6xl text-black font-extrabold">Error 404</h1>
      </div>
      <Link to="/">
        <button className="btn bg-[#CAEB66] text-black ">Go Home</button>
      </Link>
    </div>
  );
};

export default Error;
