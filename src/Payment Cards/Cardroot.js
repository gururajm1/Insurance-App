import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PaymentCard1 from "./PaymentCard1";
import PaymentCard2 from "./PaymentCard2";
import PaymentCard3 from "./PaymentCard3";

function Cardroot() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.data;
  const premium_annually = data.premium_annually;
  const premium_monthly = data.premium_monthly;
  const premium_quarterly = "₹2500";

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
    <div>
      <div className="flex justify-center gap-16 mt-32">
        <PaymentCard1 premiumMonthly={premium_monthly} />
        <PaymentCard2 premiumQuaterly={premium_quarterly} />
        <PaymentCard3 premiumAnnually={premium_annually} />
      </div>
    </div>
  );
}

export default Cardroot;
