import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import SearchIcon from "@mui/icons-material/Search";

function InsuranceList({ apiUrl, bannerImage, InsuranceName }) {
  console.log(InsuranceName);
  const [insurancePlans, setInsurancePlans] = useState([]);
  const [data, setData] = useState("");
  const [filteredPlans, setFilteredPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredPlans(
      insurancePlans.filter((plan) =>
        plan.plan_name.toLowerCase().includes(data.toLowerCase())
      )
    );
  }, [data, insurancePlans]);

  const fetchData = async () => {
    try {
      const res = await fetch(apiUrl);
      const json = await res.json();
      if (json.record && json.record.insurance_plans) {
        setInsurancePlans(json.record.insurance_plans);
      } else {
        console.error("Invalid data structure:", json);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handlePlanClick = (plan) => {
    navigate(`/plan-details/${plan.id}`, {
      state: { plan },
      replace: false,
    });
  };

  return (
    <div>
      <div className="mt-8 pb-10">
        <h1 className="mt-60 font-bold text-xl md:font-bold text-black md:text-4xl absolute md:mt-[630px] ml-7">
          {InsuranceName} INSURANCE
        </h1>
        <img className="max-h-[705px] w-full" src={bannerImage} alt="banner" />
      </div>
      <div className="flex justify-center pb-6">
        <span className="pt-2">
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder="  Search by Provider Name"
          className="border border-gray-500 h-10 w-96 rounded-lg"
          value={data}
          onChange={handleChange}
        />
        <span className="pt-2"></span>
      </div>
      {filteredPlans.map((plan) => (
        <div key={plan.id} className="my-4 flex justify-center">
          <div
            onClick={() => handlePlanClick(plan)}
            className="items-start cursor-pointer justify-between bg-white-700 p-6 rounded-lg shadow-md pb-2 w-full lg:max-w-[1000px] flex flex-col lg:flex-row gap-4"
          >
            <div className="flex flex-col w-full lg:w-auto">
              <h3>{plan.plan_name}</h3>
              <p>Provider: {plan.provider}</p>
              <p>Cover Amount: {plan.cover_amount}</p>
              <p>Cashless Hospitals: {plan.cashless_hospitals}</p>
              <p>Premium Monthly: {plan.premium_monthly}</p>
              <p>Premium Annually: {plan.premium_annually}</p>
              <p>Claim Percentage: {plan.claim_percentage}</p>
            </div>
            <div className="items-end flex flex-col pl-36">
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <DoneIcon className="text-green-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InsuranceList;