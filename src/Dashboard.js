import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CarIcon from "@mui/icons-material/DriveEta";
import HealthIcon from "@mui/icons-material/LocalHospital";
import TravelIcon from "@mui/icons-material/Flight";
import Nav from "./Hero/Nav";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
  }, []);

  const handleInsuranceClick = (path) => {
    if (localStorage.getItem("auth")) {
      navigate(path);
    }
  };

  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome to Our Insurance Company
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InsuranceCard
            icon={<HomeIcon sx={{ fontSize: 48 }} />}
            title="Home Insurance"
            onClick={() => handleInsuranceClick("/home")}
          />
          <InsuranceCard
            icon={<CarIcon sx={{ fontSize: 48 }} />}
            title="Auto Insurance"
            onClick={() => handleInsuranceClick("/auto")}
          />
          <InsuranceCard
            icon={<HealthIcon sx={{ fontSize: 48 }} />}
            title="Health Insurance"
            onClick={() => handleInsuranceClick("/health")}
          />
          <InsuranceCard
            icon={<TravelIcon sx={{ fontSize: 48 }} />}
            title="Travel Insurance"
            onClick={() => handleInsuranceClick("/travel")}
          />
        </div>
      </div>
    </div>
  );
}

const InsuranceCard = ({ icon, title, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 w-full max-w-sm"
  >
    <div className="mb-4">{icon}</div>
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Explore Plans
    </button>
  </div>
);

export default Dashboard;