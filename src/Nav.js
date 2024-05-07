import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Nav() {
      const navigate = useNavigate();
      const[isLogout, setIsLogout] = useState();
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
    }
  return (
    <div>
      <div className="fixed top-0 left-0 w-full flex flex-row justify-around bg-white pt-3 pb-3">
        <span onClick={handleDash} className="underline cursor-pointer">
          Dashboard
        </span>
        <span className="underline cursor-pointer text-purple-700">
          My Policies
        </span>
        <span className="underline cursor-pointer text-purple-700">
          My Claims
        </span>
        <span
          onClick={handleLogout}
          className="underline cursor-pointer text-purple-700"
        >
          Logout
        </span>
      </div>
    </div>
  );
}

export default Nav