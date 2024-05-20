import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";

function Myclaims() {
  const navigate = useNavigate();
  const [claimedPolicies, setClaimedPolicies] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }

    const storedPolicies =
      JSON.parse(localStorage.getItem("my-purchases")) || [];

    const filteredPolicies = storedPolicies.filter(
      (policy) => policy.isClaimed
    );

    setClaimedPolicies(filteredPolicies);
  }, [navigate]);

  return (
    <section className="w-full py-12 md:pb-24 lg:pb-32 pt-10">
      <div className="container px-4 md:px-6">
        {claimedPolicies.length > 0 ? (
          <h1 className="text-green-500 text-2xl font-bold flex justify-center mt-5">
            Your Claimed Insurances
          </h1>
        ) : (
          <h1 className="text-red-500 text-2xl font-bold flex justify-center mt-5">
            No claim details available.
          </h1>
        )}
        <div className="grid gap-6 py-12">
          {claimedPolicies.map((policy) => (
            <div
              key={policy.id}
              className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:border-gray-300 cursor-pointer"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{policy.plan_name}</h3>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Provider</span>
                    <span className="font-medium">{policy.provider}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Cover Amount</span>
                    <span className="font-medium">{policy.cover_amount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Monthly Amount
                    </span>
                    <span className="font-medium">
                      {policy.premium_monthly}
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 bg-gray-100 p-4 flex items-center justify-between">
                <ul>
                  {policy.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <DoneIcon className="text-green-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Myclaims;
