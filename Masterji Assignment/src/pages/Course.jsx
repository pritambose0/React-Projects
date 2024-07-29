import React from "react";
import CourseCard from "../components/CourseCard";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Course() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-5 bg-[#D2E3C8]">
      <h1 className="pt-12 pb-5 font-bold text-[#4F6F52] text-4xl">
        Chai aur Code
      </h1>

      <CourseCard />

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

export default Course;
