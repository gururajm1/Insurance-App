import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import { useClaimContext } from "./ClaimContext"; // Importing the context

function Myinsurances() {
  const navigate = useNavigate();
  const { setClaim } = useClaimContext(); // Accessing claim context
  const [myPolicies, setMyPolicies] = useState([]);
  const [claim, setClaimMessage] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [btn, setBtn] = useState("Claim");

  const handleClaim = (policy) => {
    setBtn("Claimed");
    setIsClicked(true);
    setClaim(policy); // Setting claim data to context
    setClaimMessage(
      "You have sent a claim request. Check My Claims and wait for confirmation."
    );
  };

  const btnClass = isClicked
    ? "bg-gray-500 cursor-not-allowed"
    : "bg-green-500";

  const location = useLocation();

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
    const storedPolicies = JSON.parse(localStorage.getItem("my-purchases"));
    if (storedPolicies) {
      setMyPolicies([storedPolicies.data]);
    }
  }, [navigate]);

  useEffect(() => {
    const data = location.state?.data;
    if (data) {
      const planName = data.plan_name;
      setMyPolicies([data]);
      window.localStorage.setItem(
        "my-purchases",
        JSON.stringify({ planName, data })
      );
    }
  }, [location.state?.data]);

  return (
    <div>
      {myPolicies.length > 0 ? (
        myPolicies.map((policy) => (
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
            <button
              onClick={() => handleClaim(policy)} // Pass policy to handleClaim
              disabled={isClicked}
              className="p-4 bg-green-500 rounded-2xl"
            >
              {btn}
            </button>
          </div>
        ))
      ) : (
        <p>You haven't Purchased Any</p>
      )}
      <h4 className={`p-4 font-bold rounded-2xl ml-80 text-green-500`}>
        {claim}
      </h4>
    </div>
  );
}

export default Myinsurances;
