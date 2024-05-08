import React from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import homerootBanner from "../assets/homerootBanner.jpg";
import { ArrowForward } from "@mui/icons-material"; // Import an arrow icon for buttons

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/sign-up")
  }
  return (
    <section className="hero relative mb-0">
      <div className="mt-8 pb-10">
        <img
          className="max-h-[705px] w-full object-cover"
          src={homerootBanner}
          alt="homerootBanner"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="container text-center">
          <h1 className="text-5xl text-zinc-800 font-bold mb-4">
            Compare & Buy Insurance Policies Online
          </h1>
          <p className="text-lg mb-8">
            Get the best insurance plans tailored to your needs with Inc Ltd.
          </p>
          <button
            onClick={handleGetStarted}
            className="p-3 px-5 bg-blue-400 rounded-2xl"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
