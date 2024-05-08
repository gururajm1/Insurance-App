import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Paymentgateway() {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("card");
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState("");
  const data = location.state.data;

  console.log(data);

  const handlePaymentOptionChange = (event) => {
    setSelectedPaymentOption(event.target.value);
  };

  const handlePayment = (plan) => {
    // Save data to local storage
    //localStorage.setItem("paymentData", JSON.stringify(data));
    navigate(`/my-policies`, {
      state: { data },
      replace: false,
    });
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
        onClick={handlePayment}
        className="rounded-md bg-indigo-600 px-4 py-2 mt-6 text-white font-bold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Pay
      </button>
      <span className="text-red-500">{status}</span>
    </div>
  );
}

export default Paymentgateway;