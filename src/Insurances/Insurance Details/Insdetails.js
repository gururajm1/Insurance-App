import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InsBanner from "../Incassets/InsBanner.jpg";

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transform transition-transform ${
        props.expanded ? "rotate-90" : ""
      }`}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Insdetails() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.plan;

  useEffect(() => {
    if(!localStorage.getItem("auth")){
      navigate("/");
    }else{
      window.scrollTo(0, 0);
    }
  }, []);

  const faqs = [
    {
      question: "What does home insurance cover?",
      answer:
        "Home insurance typically covers the structure of your home, your personal belongings, liability for injuries or damage to others, and additional living expenses if your home becomes uninhabitable. The specific coverage may vary based on your policy and provider.",
    },
    {
      question: "How do I file a claim?",
      answer:
        "To file a claim, contact our claims department as soon as possible after the incident. Provide details about the damage or loss, and our team will guide you through the process, including any necessary documentation and assessments.",
    },
    {
      question: "How can I lower my insurance premiums?",
      answer:
        "There are several ways to lower your insurance premiums, including increasing your deductible, bundling policies, installing safety features in your home, and maintaining a good credit score. Contact our team for personalized advice on reducing your insurance costs.",
    },
  ];

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handlePlanClick = () => {
    navigate("/payment-options", {
      state: { data },
      replace: false,
    });
  };

  return (
    <>
      <section className="w-full py-9 md:py-24 lg:py-16">
        <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:mr-16 lg:ml-12 lg:mt-4">
            <h1 className="text-4xl font-bold mb-6">
              {data.plan_name} Insurance
            </h1>
            <p className="mt-4 text-gray-500">
              Protect your most valuable asset with our comprehensive home
              insurance coverage. Our plans offer
              <div></div> protection against a wide range of risks, including
              fire, theft, natural disasters, and more.
            </p>
            <div className="mt-8 text-left">
              <h3 className="text-xl font-semibold mb-3">Provider Details</h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <strong>Provider:</strong> {data.provider}
                </li>
                <li>
                  <strong>Cover Amount:</strong> {data.cover_amount}
                </li>
                <li>
                  <strong>Premium (Monthly):</strong> {data.premium_monthly}
                </li>
                <li>
                  <strong>Premium (Annually):</strong> {data.premium_annually}
                </li>
                <li>
                  <strong>Claim Percentage:</strong> {data.claim_percentage}
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mt-2">
                Plan Coverage Highlights
              </h3>
              <ul className="mt-3 space-y-2 text-gray-500">
                <li className="flex items-center">
                  <ul className="list-disc list-inside mt-2">
                    {data.features.slice(0, 4).map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-md text-gray-500 mb-2"
                      >
                        <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
            <div className="mt-4 text-left">
              <button
                onClick={handlePlanClick}
                className="bg-[#ff6b00] text-white px-4 py-2 rounded hover:bg-[#e65c00]"
              >
                Buy Insurance
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              alt="Home Insurance"
              className="rounded-lg object-cover"
              height={400}
              src={InsBanner}
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
        </div>
      </section>
      <div>
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-24">
          <div className="mt-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-t pt-6">
                  <button
                    className="flex items-center justify-between w-full text-lg font-semibold focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <ChevronRightIcon
                      expanded={expandedIndex === index}
                      className="w-5 h-5 transition-transform transform"
                    />
                  </button>
                  {expandedIndex === index && (
                    <div className="mt-2">
                      <p className="text-gray-500">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

