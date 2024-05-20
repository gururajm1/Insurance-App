import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import { Button } from "@mui/material";

function Myinsurances() {
  const [claimMessage, setClaimMessage] = useState("");
  const [isClicked, setIsClicked] = useState({});
  const [claim, setClaim] = useState("");
  const navigate = useNavigate();
  const [myPolicies, setMyPolicies] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const storedPolicies =
      JSON.parse(localStorage.getItem("my-purchases")) || [];
    setMyPolicies(storedPolicies);

    const storedIsClicked = JSON.parse(localStorage.getItem("isClicked")) || {};
    setIsClicked(storedIsClicked);
  }, [navigate]);

  useEffect(() => {
    localStorage.setItem("isClicked", JSON.stringify(isClicked));
  }, [isClicked]);

  const handleClaim = (policy) => {
    if (policy) {
      setIsClicked((prevState) => ({
        ...prevState,
        [policy.plan_name]: true,
      }));

      const updatedPolicies = myPolicies.map((p) => {
        if (p.plan_name === policy.plan_name) {
          return { ...p, isClaimed: true };
        }
        return p;
      });
      localStorage.setItem("my-purchases", JSON.stringify(updatedPolicies));

      setClaim(
        "You have sent a claim request. Check My Claims and wait for confirmation."
      );
    }
  };

  return (
    <div>
      {myPolicies.length > 0 ? (
        <h1 className="text-green-500 text-2xl font-bold flex justify-center mt-5">
          Your Current Policies
        </h1>
      ) : (
        <h1 className="text-red-500 text-2xl font-bold flex justify-center mt-5">
          You haven't Purchased Any Policies to See
        </h1>
      )}
      <h4
        className={`text-sm md:p-4 font-bold md:text-2xl flex justify-center text-green-500`}
      >
        {claim}
      </h4>
      {myPolicies.length > 0
        ? myPolicies.map((policy) => (
            <div key={policy?.id} className="my-4 flex justify-center">
              {policy && (  
                <div className="w-full rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:border-gray-300 cursor-pointer mx-8">
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold">
                      {policy?.plan_name}
                    </h3>
                    <div className="mt-4 flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Provider</span>
                        <span className="font-medium">{policy?.provider}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Cover Amount
                        </span>
                        <span className="font-medium">
                          {policy?.cover_amount}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Cashless Garages
                        </span>
                        <span className="font-medium">
                          {policy?.cashless_garages}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Claim Percentage
                        </span>
                        <span className="font-medium">
                          {policy?.claim_percentage}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 bg-gray-100 p-4 flex justify-center text-green-400">
                    {isClicked[policy.plan_name] || policy.isClaimed ? (
                      <button disabled className="text-gray-400">CLAIMED</button>
                    ) : (
                      <button className="font-bold" onClick={() => handleClaim(policy)}>CLAIM</button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))
        : ""}
    </div>
  );
}

export default Myinsurances;
