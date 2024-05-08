import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PaymentCard1 from "./PaymentCard1";
import PaymentCard2 from "./PaymentCard2";
import PaymentCard3 from "./PaymentCard3";

function Cardroot() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.data;

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
  }, []);

  const handleBack = () => {
    if (localStorage.getItem("auth")) {
      navigate("/");
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-8 mt-8 md:mt-32">
        <PaymentCard1 data={data} />
        <PaymentCard2 data={data} />
        <PaymentCard3 data={data} />
      </div>
    </div>
  );
}

export default Cardroot;
