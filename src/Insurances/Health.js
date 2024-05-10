import React, { useEffect, useState } from "react";
import Nav from "../Hero/Nav";
import InsuranceList from "./InsuranceList";
import healthBanner from "../assets/healthBanner.jpg";
import { useNavigate } from "react-router-dom";

function Health() {
    const navigate = useNavigate();
    const InsuranceName = "HEALTH";

    useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Nav />
      <InsuranceList
        apiUrl="https://api.jsonbin.io/v3/b/6639ad23e41b4d34e4efece6"
        bannerImage={healthBanner}
        InsuranceName={InsuranceName}
      />
    </div>
  );
}

export default Health;
