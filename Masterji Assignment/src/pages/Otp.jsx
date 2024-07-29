import React from "react";
import OtpForm from "../components/OtpForm";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
function Otp() {
  return (
    <div className="h-screen flex flex-col items-center bg-[#3F72AF] gap-5">
      <h1 className="pt-12 pb-5 font-bold text-white text-4xl">
        Chai aur Code
      </h1>
      <OtpForm />
      <Link to="https://chaicode.com" target="_blank">
        <img
          src={Logo}
          alt="Chai aur Code"
          className="w-20 absolute bottom-8 right-8"
        />
      </Link>
    </div>
  );
}

export default Otp;
