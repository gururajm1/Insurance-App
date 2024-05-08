import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navroot() {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/sign-up");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="pb-2">
      <div className="fixed top-0 left-0 w-full flex flex-col lg:flex-row justify-around bg-white pt-3 pb-3">
        <span className="underline cursor-pointer text-purple-700 mb-2 lg:mb-0">
          About
        </span>
        <span className="underline cursor-pointer text-purple-700 mb-2 lg:mb-0">
          Careers
        </span>
        <span
          onClick={handleSignup}
          className="underline cursor-pointer text-purple-700 mb-2 lg:mb-0"
        >
          Sign-up
        </span>
        <span
          onClick={handleLogin}
          className="underline cursor-pointer text-purple-700 mb-2 lg:mb-0"
        >
          Login
        </span>
      </div>
    </div>
  );
}

export default Navroot;