import React, { useEffect } from "react";
import Nav from "../Hero/Nav";
import InsuranceList from "./InsuranceList";
import carBanner from "../assets/carBanner.jpg";
import { useNavigate } from "react-router-dom";

function Auto() {
    const navigate = useNavigate();
    const InsuranceName = "AUTO";
    
    useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Nav />
      <InsuranceList
        apiUrl="https://api.jsonbin.io/v3/b/663a56b1acd3cb34a844594f"
        bannerImage={carBanner}
        InsuranceName={InsuranceName}
      />
    </div>
  );
}

export default Auto;
