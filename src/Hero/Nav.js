import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const [isLogout, setIsLogout] = useState();

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
  }, [isLogout]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsLogout(true);
  };

  const handleDash = () => {
    if (localStorage.getItem("auth")) {
      navigate("/dash");
    }
  };

  const handleMyPolicesClick = () => {
    navigate("/my-policies");
  }

  const handleMyClaimsClick = () => {
    navigate("/my-claims");
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full flex flex-col sm:flex-row justify-around bg-white pt-3 pb-3">
        <span
          onClick={handleDash}
          className="block sm:inline-block mt-2 sm:mt-0 underline cursor-pointer text-purple-700 hover:text-purple-900"
        >
          Dashboard
        </span>
        <span 
        onClick={handleMyPolicesClick}
        className="block sm:inline-block mt-2 sm:mt-0 underline cursor-pointer text-purple-700 hover:text-purple-900">
          My Policies
        </span>
        <span 
        onClick={handleMyClaimsClick}
        className="block sm:inline-block mt-2 sm:mt-0 underline cursor-pointer text-purple-700 hover:text-purple-900">
          My Claims
        </span>
        <span
          onClick={handleLogout}
          className="block sm:inline-block mt-2 sm:mt-0 underline cursor-pointer text-purple-700 hover:text-purple-900"
        >
          Logout
        </span>
      </div>
    </div>
  );
}

export default Nav;
