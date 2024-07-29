import React from "react";

function Button({ children, className = "", isValid }) {
  return (
    <div>
      <button
        type="submit"
        className={`w-full inline-flex justify-center whitespace-nowrap rounded-lg ${
          isValid === null
            ? "bg-[#112D4E] hover:bg-[#0D223C]"
            : isValid
            ? "bg-green-500 "
            : "bg-red-500"
        } px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 ${className} max-w-[260px]`}
      >
        {isValid === null
          ? children
          : isValid
          ? "Verifed"
          : "Verification failed"}
      </button>
    </div>
  );
}

export default Button;
