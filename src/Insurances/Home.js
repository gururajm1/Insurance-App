import React, { useEffect } from "react";
import Nav from "../Hero/Nav";
import InsuranceList from "./InsuranceList";
import homeinsBanner from "../assets/homeinsBanner.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const InsuranceName = "HOME";
    
    useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Nav />
      <InsuranceList
        apiUrl="https://api.jsonbin.io/v3/b/663a3d38acd3cb34a8444e8c"
        bannerImage={homeinsBanner}
        InsuranceName={InsuranceName}
      />
    </div>
  );
}

export default Home;
