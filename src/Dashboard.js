import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import CarIcon from "@mui/icons-material/DriveEta";
import HealthIcon from "@mui/icons-material/LocalHospital";
import TravelIcon from "@mui/icons-material/Flight";
import Nav from './Nav';

function Dashboard() {
  const navigate = useNavigate();
  //const [isLogout, setIsLogout] = useState();
  const [isDelete, setIsDelete] = useState();

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
  }, [isDelete]);
  
  // const handleDelete = () => {
  //   localStorage.removeItem("auth");
  //   localStorage.removeItem("login");
  //   setIsDelete(true);
  // };

  const handleHealthClick = () => {
    if (localStorage.getItem("auth")) {
      navigate("/health");
    }
  }

  const handleHomeClick = () => {
    if (localStorage.getItem("auth")) {
      navigate("/home");
    }
  }

  const handleTravelClick = () => {
    if (localStorage.getItem("auth")) {
      navigate("/travel");
    }
  }

  const handleAutoClick = () => {
    if (localStorage.getItem("auth")) {
      navigate("/auto");
    }
  }
  
  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to Our Insurance Company
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            onClick={handleHomeClick}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
          >
            <HomeIcon sx={{ fontSize: 48 }} />
            <h2 className="text-xl font-semibold mt-4">Home Insurance</h2>
            <p className="text-gray-600 mt-2">
              Protect your home and belongings.
            </p>
          </div>
          <div
            onClick={handleAutoClick}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
          >
            <CarIcon sx={{ fontSize: 48 }} />
            <h2 className="text-xl font-semibold mt-4">Auto Insurance</h2>
            <p className="text-gray-600 mt-2">
              Cover your car against accidents.
            </p>
          </div>
          <div
            onClick={handleHealthClick}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
          >
            <HealthIcon sx={{ fontSize: 48 }} />
            <h2 className="text-xl font-semibold mt-4">Health Insurance</h2>
            <p className="text-gray-600 mt-2">
              Stay protected with our health plans.
            </p>
          </div>
          <div
            onClick={handleTravelClick}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
          >
            <TravelIcon sx={{ fontSize: 48 }} />
            <h2 className="text-xl font-semibold mt-4">Travel Insurance</h2>
            <p className="text-gray-600 mt-2">Travel with peace of mind.</p>
          </div>
        </div>
        {/* <h4
          onClick={handleDelete}
          style={{ textDecorationLine: "underline", color: "blueviolet" }}
        >
          Delete My Account
        </h4> */}
      </div>
    </div>
  );
}

export default Dashboard