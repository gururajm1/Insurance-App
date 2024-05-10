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
    <div>
      {claimedPolicies.length > 0 ? (
        <h1 className="text-green-500 text-2xl font-bold flex justify-center mt-5">
          Your Claimed Insurances
        </h1>
      ) : (
        <h1 className="text-red-500 text-2xl font-bold flex justify-center mt-5">
          No claim details available.
        </h1>
      )}
      {claimedPolicies.length > 0 ? (
        claimedPolicies.map((policy) => (
          <div key={policy.id} className="my-4 flex justify-center">
            <div className="cursor-pointer items-start justify-between bg-white p-6 rounded-lg shadow-md pb-2 w-full lg:max-w-[1000px] flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col w-full lg:w-auto">
                <h3>{policy.plan_name}</h3>
                <p>Provider: {policy.provider}</p>
                <p>Cover Amount: {policy.cover_amount}</p>
                <p>Cashless Garages: {policy.cashless_garages}</p>
                <p>Premium Monthly: {policy.premium_monthly}</p>
                <p>Premium Annually: {policy.premium_annually}</p>
                <p>Claim Percentage: {policy.claim_percentage}</p>
              </div>
              <div className="items-end flex flex-col pl-36">
                <ul>
                  {policy.features.map((feature, index) => (
                    <li key={index}>
                      <DoneIcon className="text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))
      ) : (
        ""
      )}
    </div>
  );
}

export default Myclaims;
