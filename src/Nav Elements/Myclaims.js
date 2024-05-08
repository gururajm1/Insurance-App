import React, { useEffect } from "react";
import { useClaimContext } from "./ClaimContext";
import DoneIcon from "@mui/icons-material/Done";
import {useNavigate} from 'react-router-dom'

function Myclaims() {
  const navigate = useNavigate();
  const { claimData } = useClaimContext();

  useEffect(() => {
    if(!localStorage.getItem("auth")){
      navigate("/");
    }
  }, []);

  return (
    <div>
      {claimData ? (
        <div key={claimData.id} className="my-4 flex justify-center">
          <div className="cursor-pointer items-start justify-between bg-white p-6 rounded-lg shadow-md pb-2 w-full lg:max-w-[1000px] flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col w-full lg:w-auto">
              <h3>{claimData.plan_name}</h3>
              <p>Provider: {claimData.provider}</p>
              <p>Cover Amount: {claimData.cover_amount}</p>
              <p>Cashless Garages: {claimData.cashless_garages}</p>
              <p>Premium Monthly: {claimData.premium_monthly}</p>
              <p>Premium Annually: {claimData.premium_annually}</p>
              <p>Claim Percentage: {claimData.claim_percentage}</p>
            </div>
            <div className="items-end flex flex-col pl-36">
              <ul>
                {claimData.features.map((feature, index) => (
                  <li key={index}>
                    <DoneIcon className="text-green-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-red-500 font-bold flex justify-center mt-5">No claim details available.</h1>
      )}
    </div>
  );
}

export default Myclaims;
