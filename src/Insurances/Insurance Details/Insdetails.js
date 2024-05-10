import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InsDetailsBanner from "../Incassets/InsDetailsBanner.jpg"; 

function Insdetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.plan;

  const handlePlanClick = () => {
    navigate("/payment-options", {
      state: { data },
      replace: false,
    });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${InsDetailsBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mr-24 p-10 md:max-w-md w-full space-y-8 bg-white bg-opacity-90 md:p-6 rounded-lg shadow-md ml-36">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Insurance Plan Details
          </h2>
        </div>
        <div className="rounded-md shadow-sm -space-y-px">
          <div className="py-4 px-4">
            <h3 className="text-lg font-medium text-gray-900">
              {data.plan_name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Provider: {data.provider}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Cover Amount: {data.cover_amount}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Cashless Hospitals: {data.cashless_hospitals}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Premium (Monthly): {data.premium_monthly}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Premium (Annually): {data.premium_annually}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Claim Percentage: {data.claim_percentage}
            </p>
            <div className="mt-4">
              <p className="font-medium text-gray-900">Features:</p>
              <ul className="list-disc list-inside mt-2">
                {data.features.map((feature, index) => (
                  <li key={index} className="text-sm text-gray-500">
                    {feature}
                  </li>
                ))}
              </ul>
              <span className="block sm:inline-block">
                <button
                  className="w-full sm:w-auto p-3 bg-green-500 rounded-xl mt-5"
                  onClick={handlePlanClick}
                >
                  Proceed to Payment
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insdetails;
