import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function OtpForm({ length = 4 }) {
  const inputrefs = useRef([]);
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    if (inputrefs.current[0]) {
      inputrefs.current[0].focus();
    }
  }, []);

  const handleChange = (i, e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      const newOtp = [...otp];
      newOtp[i] = value;
      setOtp(newOtp);

      // Focus to the next input
      if (value && i < length - 1 && inputrefs.current[i + 1]) {
        inputrefs.current[i + 1].focus();
      }
    }
  };

  let correctOtp = "1234"; // Assuming Correct OTP

  const handleSubmit = (e) => {
    e.preventDefault();
    const combinedOtp = otp.join("");
    console.log(typeof combinedOtp);
    if (combinedOtp === correctOtp) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) {
      inputrefs.current[i - 1].focus();
    }
  };

  return (
    <div className="max-w-md mx-auto text-center bg-[#F9F7F7] px-4 sm:px-8 py-10 rounded-xl shadow">
      <div className="flex flex-col items-center">
        <header className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Mobile Phone Verification</h1>
          <p className="text-[15px] text-[#BFBFBF]">
            Enter the 4-digit verification code that was sent to your phone
            number.
          </p>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center gap-3">
            {otp.map((val, i) => (
              <input
                type="text"
                key={i}
                ref={(el) => (inputrefs.current[i] = el)} // This will asign ref to all the inputs
                value={val}
                onKeyDown={(e) => handleKeyDown(i, e)}
                onChange={(e) => handleChange(i, e)}
                className={`w-14 h-[60px] text-center text-2xl font-extrabold text-black bg-[#DBE2EF] ${
                  isValid === null
                    ? "border-transparent focus:border-indigo-400 hover:border-indigo-400"
                    : isValid
                    ? "border-green-500"
                    : "border-red-500"
                } border transition-all duration-300 
                   rounded-lg p-4 outline-none focus:ring-2 focus:ring-indigo-100`}
                pattern="\d*"
                maxLength="1"
              />
            ))}
          </div>
          <div className="mx-auto mt-4">
            <Button children="Verify Account" isValid={isValid} />
            <div className="flex gap-1 justify-center">
              <p className="text-[12px] mt-3 font-medium text-[#BFBFBF]">
                Didn’t receive code?
              </p>
              <Link
                to="/"
                className="text-[12px] mt-3 font-medium text-[#112D4E] "
              >
                Resend
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OtpForm;
