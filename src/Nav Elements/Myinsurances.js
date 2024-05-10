import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";

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
      <h4 className={`text-sm md:p-4 font-bold md:text-2xl flex justify-center text-green-500`}>
        {claim}
      </h4>
      {myPolicies.length > 0
        ? myPolicies.map((policy) => (
            <div key={policy?.id} className="my-4 flex justify-center">
              {policy && (
                <div className="cursor-pointer items-start justify-between bg-white p-6 rounded-lg shadow-md pb-2 w-full lg:max-w-[1000px] flex flex-col lg:flex-row gap-4">
                  <div className="flex flex-col w-full lg:w-auto">
                    <h3>{policy?.plan_name}</h3>
                    <p>Provider: {policy?.provider}</p>
                    <p>Cover Amount: {policy?.cover_amount}</p>
                    <p>Cashless Garages: {policy?.cashless_garages}</p>
                    <p>Premium Monthly: {policy?.premium_monthly}</p>
                    <p>Premium Annually: {policy?.premium_annually}</p>
                    <p>Claim Percentage: {policy?.claim_percentage}</p>
                  </div>
                  <div className="items-end flex flex-col pl-36">
                    <ul>
                      {policy?.features.map((feature, index) => (
                        <li key={index}>
                          <DoneIcon className="text-green-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {isClicked[policy.plan_name] || policy.isClaimed ? (
                <button disabled className="p-4 bg-gray-500 rounded-2xl">
                  Claimed
                </button>
              ) : (
                <button
                  onClick={() => handleClaim(policy)}
                  className="p-4 bg-green-500 rounded-2xl"
                >
                  Claim
                </button>
              )}
            </div>
          ))
        : ""}
    </div>
  );
}

export default Myinsurances;
