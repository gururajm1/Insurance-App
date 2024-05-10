import React, { useEffect } from "react";
import Nav from "../Hero/Nav";
import InsuranceList from "./InsuranceList";
import travelBanner from "../assets/travelBanner.jpg";
import { useNavigate } from "react-router-dom";

function Travel() {
    const navigate = useNavigate();
    const InsuranceName = "TRAVEL";

    useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Nav />
      <InsuranceList
        apiUrl="https://api.jsonbin.io/v3/b/663a5e4bad19ca34f865e36e"
        bannerImage={travelBanner}
        InsuranceName={InsuranceName}
      />
    </div>
  );
}

export default Travel;
