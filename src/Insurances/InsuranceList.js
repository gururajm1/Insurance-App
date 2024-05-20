import React, { useState, useEffect } from "react";
import { Button, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";

export default function InsuranceList({ apiUrl, bannerImage, InsuranceName }) {
  const [insurancePlans, setInsurancePlans] = useState([]);
  const [data, setData] = useState("");
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [sortOrder, setSortOrder] = useState("high-to-low");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const sortedPlans = [...insurancePlans].sort((a, b) => {
      if (sortOrder === "high-to-low") {
        return b.cover_amount - a.cover_amount;
      }
      return a.cover_amount - b.cover_amount;
    });
    setFilteredPlans(
      sortedPlans.filter((plan) =>
        plan.plan_name.toLowerCase().includes(data.toLowerCase())
      )
    );
  }, [data, insurancePlans, sortOrder]);

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
    <section className="w-full py-12 md:pb-24 lg:pb-32 pt-10">
      <div className="mt-2 pb-10">
        <h1 className="mt-6 font-bold text-xl md:text-4xl text-center text-black">
          {InsuranceName} INSURANCE
        </h1>
        <img className="max-h-[705px] w-full" src={bannerImage} alt="banner" />
      </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-between mb-4 w-full max-w-md">
            <Input
              className="w-full border-gray-300"
              value={data}
              onChange={handleChange}
              startAdornment={<SearchIcon />}
              placeholder="Search insurance plans..."
              type="search"
            />
          </div>
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Insurance Plans
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              Protect what matters most with our comprehensive insurance
              offerings.
            </p>
          </div>
        </div>
        <div className="grid gap-6 py-12">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:border-gray-300 cursor-pointer"
              onClick={() => handlePlanClick(plan)}
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{plan.plan_name}</h3>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Provider</span>
                    <span className="font-medium">{plan.provider}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Cover Amount</span>
                    <span className="font-medium">{plan.cover_amount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Monthly Amount
                    </span>
                    <span className="font-medium">{plan.premium_monthly}</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 bg-gray-100 p-4 flex items-center justify-between">
                <Button size="small" variant="text">
                  Learn More
                </Button>
                <button className="bg-orange-600 text-white hover:bg-orange-700 py-2 px-4 rounded-md text-sm">
                  Starting&nbsp;
                  <span className="font-bold text-[15px]">
                    {plan.premium_monthly}/month
                  </span>
                  &nbsp;View details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}