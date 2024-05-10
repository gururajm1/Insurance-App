import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Paymentgateway() {useEffect(() => {
  if (!localStorage.getItem("auth")) {
    navigate("/");
  }
}, []);


  const [selectedPaymentOption, setSelectedPaymentOption] = useState("card");
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState("");
  const data = location.state.data;

  console.log(data);

  const handlePaymentOptionChange = (event) => {
    setSelectedPaymentOption(event.target.value);
  };

const handlePayment = (plan) => {

  if (localStorage.getItem("my-purchases")) {
    const storedPurchases = JSON.parse(localStorage.getItem("my-purchases"));
    for (const storedPlan of storedPurchases) {
      if (storedPlan.plan_name === plan.plan_name) {
        setSuccess("");
        setStatus(
          "You have already purchased this Policy"
        );
        return;
      }else{
        setSuccess(
          "Your Purchase is Successfull !"
        );
      }
    }
  }else{
    setSuccess("Your Purchase is Successfull !");
  }

  if (!plan || Object.keys(plan).length === 0) {
    console.error("Invalid plan data");
    return;
  }

  const {
    id,
    plan_name,
    provider,
    cover_amount,
    cashless_garages,
    premium_monthly,
    premium_annually,
    claim_percentage,
    features,
  } = plan;

  const purchaseData = {
    id,
    plan_name,
    provider,
    cover_amount,
    cashless_garages,
    premium_monthly,
    premium_annually,
    claim_percentage,
    features,
  };

  const existingPurchases =
    JSON.parse(localStorage.getItem("my-purchases")) || [];
  const updatedPurchases = [...existingPurchases, purchaseData];
  localStorage.setItem("my-purchases", JSON.stringify(updatedPurchases));
};

  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-row justify-between mb-4">
        <h1 className="text-xl font-bold">Payment</h1>
        <p></p>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="payment-option" className="font-bold mb-2">
          Payment Method
        </label>
        <select
          id="payment-option"
          value={selectedPaymentOption}
          onChange={handlePaymentOptionChange}
          className={`cursor-pointer rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 ${
            (selectedPaymentOption === "card" ? "bg-gray-100" : "",
            selectedPaymentOption === "MasterCard" ? "bg-gray-100" : "",
            selectedPaymentOption === "Visa" ? "bg-gray-100" : "",
            selectedPaymentOption === "Credit-Card" ? "bg-gray-100" : "")
          }`}
        >
          <option className="cursor pointer" value="card">
            Rupay
          </option>
          <option className="cursor pointer" value="MasterCard">
            MasterCard
          </option>
          <option className="cursor pointer" value="Visa">
            Visa
          </option>
          <option className="cursor pointer" value="Credit-Card">
            Credit-Card
          </option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="card-number" className="font-bold mb-2">
          Card Number
        </label>
        <input
          type="text"
          id="card-number"
          className="rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
        <div className="flex flex-row mt-2">
          <div className="flex flex-col mr-4">
            <label htmlFor="expiration-date" className="font-bold mb-2">
              Expiration Date
            </label>
            <input
              type="text"
              id="expiration-date"
              className="rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="MM/YY"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="security-code" className="font-bold mb-2">
              Security Code
            </label>
            <input
              type="text"
              id="security-code"
              className="rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="CVV"
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => handlePayment(data)}
        className="rounded-md bg-indigo-600 px-4 py-2 mt-6 text-white font-bold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Pay
      </button>
      <h2 className="text-green-400 text-2xl font-semibold flex justify-center mt-3">
        {status}
      </h2>
      <h2 className="text-green-500 text-2xl font-bold flex justify-center mt-3">
        {success}
      </h2>
      <h5 className="flex justify-center mt-1">Please Navigate to My Policies to Check Your policy</h5>
    </div>
  );
}

export default Paymentgateway;