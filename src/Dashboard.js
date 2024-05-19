import { Badge } from "@mui/material";
import { Button } from "@mui/material";
import YouTubeEmbed from "./assets/YouTubeEmbed";
import Nav from './Hero/Nav'
import Footer from './Hero/Footer'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  const loginData = JSON.parse(localStorage.getItem("login"));
  const userName = loginData.name;

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
  }, []);

  const handleInsuranceClick = (path) => {
    if (localStorage.getItem("auth")) {
      navigate(path);
    }
  };
  return (
    <div>
      <Nav />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-4xl tracking-tight text-gray-900 mt-16 mb-8">
          Welcome <span className="font-extrabold">{userName}</span> Let's find you Best Insurance
        </h3>

        <div className="flex gap-20 justify-around mb-6 pt-8">
          <div className="flex justify-center">
            <ShieldCheckIcon className="h-6 w-6 text-blue-500" />
            <div>
              <h5 className="font-semibold">
                50+ insurers with one of the best prices
              </h5>
            </div>
          </div>

          <div className="flex justify-center">
            <BoltIcon className="h-6 w-6 text-yellow-500" />
            <div>
              <h5 className="font-semibold">Quick, easy & hassle free</h5>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 pt-10 pb-5">
          <div
            className="space-y-1 bg-gray-50 p-3 rounded-xl shadow-lg shadow-slate-300 cursor-pointer"
            onClick={() => handleInsuranceClick("/home")}
          >
            <UmbrellaIcon className="h-6 w-6 text-purple-500" />
            <h3 className="text-sm font-semibold text-gray-900">
              Home Insurance
            </h3>
            <Badge variant="secondary">Upto 10% Discount</Badge>
          </div>
          <div
            className="space-y-1 bg-gray-50 p-3 rounded-xl shadow-lg shadow-slate-300 cursor-pointer"
            onClick={() => handleInsuranceClick("/health")}
          >
            <HeartIcon className="h-6 w-6 text-green-500" />
            <h3 className="text-sm font-semibold text-gray-900">
              Health Insurance
            </h3>
            <Badge variant="secondary">Cashless Anywhere</Badge>
          </div>
          <div
            className="space-y-1 bg-gray-50 p-3 rounded-xl shadow-lg shadow-slate-300 cursor-pointer"
            onClick={() => handleInsuranceClick("/auto")}
          >
            <GitGraphIcon className="h-6 w-6 text-yellow-500" />
            <h3 className="text-sm font-semibold text-gray-900">
              Vehicle Plans
            </h3>
            <Badge variant="secondary">New Fund Launch</Badge>
          </div>
          <div
            className="space-y-1 bg-gray-50 p-3 rounded-xl shadow-lg shadow-slate-300 cursor-pointer"
            onClick={() => handleInsuranceClick("/auto")}
          >
            <CarIcon className="h-6 w-6 text-blue-500" />
            <h3 className="text-sm font-semibold text-gray-900">
              Car Insurance
            </h3>
            <Badge variant="secondary">Upto 85% Discount</Badge>
          </div>
          <div
            className="space-y-1 bg-gray-50 p-3 rounded-xl shadow-lg shadow-slate-300 cursor-pointer"
            onClick={() => handleInsuranceClick("/auto")}
          >
            <BikeIcon className="h-6 w-6 text-green-500" />
            <h3 className="text-sm font-semibold text-gray-900">
              2 Wheeler Insurance
            </h3>
          </div>
          <div
            className="space-y-1 bg-gray-50 p-3 rounded-xl shadow-lg shadow-slate-300 cursor-pointer"
            onClick={() => handleInsuranceClick("/health")}
          >
            <HomeIcon className="h-6 w-6 text-orange-500" />
            <h3 className="text-sm font-semibold text-gray-900">
              Family Health Insurance
            </h3>
            <Badge variant="secondary">Upto 25% Discount</Badge>
          </div>
          <div
            className="space-y-1 bg-gray-50 p-3 rounded-xl shadow-lg shadow-slate-300 cursor-pointer"
            onClick={() => handleInsuranceClick("/home")}
          >
            <PersonStandingIcon className="h-6 w-6 text-blue-500" />
            <h3 className="text-sm font-semibold text-gray-900">
              Home Coverage Insurance
            </h3>
            <Badge variant="secondary">Upto 20% Cheaper</Badge>
          </div>
          <div
            className="space-y-1 bg-gray-50 p-3 rounded-xl shadow-lg shadow-slate-300 cursor-pointer"
            onClick={() => handleInsuranceClick("/travel")}
          >
            <PiggyBankIcon className="h-6 w-6 text-yellow-500" />
            <h3 className="text-sm font-semibold text-gray-900">
              Free of Cost Travel Plan
            </h3>
          </div>
          <div
            className="space-y-1 bg-gray-50 p-3 rounded-xl shadow-lg shadow-slate-300 cursor-pointer"
            onClick={() => handleInsuranceClick("/home")}
          >
            <PiggyBankIcon className="h-6 w-6 text-green-500" />
            <h3 className="text-sm font-semibold text-gray-900">
              Guaranteed Home Return Plans
            </h3>
          </div>
          <div
            className="space-y-1 bg-gray-50 p-3 rounded-xl shadow-lg shadow-slate-300 cursor-pointer"
            onClick={() => handleInsuranceClick("/travel")}
          >
            <BabyIcon className="h-6 w-6 text-pink-500" />
            <h3 className="text-sm font-semibold text-gray-900">
              Travel Savings Plans
            </h3>
            <Badge variant="secondary">Premium Waiver</Badge>
          </div>
          <div
            className="space-y-1 bg-gray-50 p-3 rounded-xl shadow-lg shadow-slate-300 cursor-pointer"
            onClick={() => handleInsuranceClick("/auto")}
          >
            <RockingChairIcon className="h-6 w-6 text-purple-500" />
            <h3 className="text-sm font-semibold text-gray-900">
              Group Auto Insurance Plans
            </h3>
          </div>
          <div
            className="space-y-1 bg-gray-50 p-3 rounded-xl shadow-lg shadow-slate-300 cursor-pointer"
            onClick={() => handleInsuranceClick("/health")}
          >
            <HospitalIcon className="h-6 w-6 text-blue-500" />
            <h3 className="text-sm font-semibold text-gray-900">
              Employee Group Health Insurance
            </h3>
          </div>
          <div className="space-y-1 mt-2 col-span-2 md:col-span-4 lg:col-span-6">
            {/* <button className="w-full bg-slate-100 hover:bg-gray-200 rounded-xl py-2">
            View all products
          </button> */}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-5 mb-10">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                <ShieldCheckIcon className="h-6 w-6" />
              </div>
              <div className="text-purple-600 text-sm uppercase mb-1">
                Upto 10% Discount
              </div>
              <div className="font-medium">Term Life Insurance</div>
              <div className="text-gray-500 text-sm mt-2">
                Protect your loved ones with our comprehensive term life
                insurance plans.
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
                <HeartIcon className="h-6 w-6" />
              </div>
              <div className="text-green-600 text-sm uppercase mb-1">
                Cashless Anywhere
              </div>
              <div className="font-medium">Health Insurance</div>
              <div className="text-gray-500 text-sm mt-2">
                Get access to quality healthcare with our flexible health
                insurance plans.
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                <PiggyBankIcon className="h-6 w-6" />
              </div>
              <div className="text-yellow-600 text-sm uppercase mb-1">
                New Fund Launch
              </div>
              <div className="font-medium">Investment Plans</div>
              <div className="text-gray-500 text-sm mt-2">
                Grow your wealth with our diverse range of investment plans.
              </div>
            </div>
          </div>
          {/* <div className="text-center">
          <button className="bg-blue-600 text-white">View all products</button>
        </div> */}
        </div>
        <div className="relative" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={`https://www.youtube.com/embed/i6tofy9yXkM?autoplay=1`}
            frameBorder="0"
            allowFullScreen
            title="YouTube video player"
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>
      <div className="mt-14">
        <Footer />
      </div>
    </div>
  );
}

function BabyIcon(props) {
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
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
      <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
    </svg>
  );
}

function BikeIcon(props) {
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
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  );
}

function CarIcon(props) {
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
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function GitGraphIcon(props) {
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
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  );
}

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function HospitalIcon(props) {
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
      <path d="M12 6v4" />
      <path d="M14 14h-4" />
      <path d="M14 18h-4" />
      <path d="M14 8h-4" />
      <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
    </svg>
  );
}

function PersonStandingIcon(props) {
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
      <circle cx="12" cy="5" r="1" />
      <path d="m9 20 3-6 3 6" />
      <path d="m6 8 6 2 6-2" />
      <path d="M12 10v4" />
    </svg>
  );
}

function PiggyBankIcon(props) {
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
      <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
      <path d="M2 9v1c0 1.1.9 2 2 2h1" />
      <path d="M16 11h0" />
    </svg>
  );
}

function RockingChairIcon(props) {
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
      <polyline points="3.5 2 6.5 12.5 18 12.5" />
      <line x1="9.5" x2="5.5" y1="12.5" y2="20" />
      <line x1="15" x2="18.5" y1="12.5" y2="20" />
      <path d="M2.75 18a13 13 0 0 0 18.5 0" />
    </svg>
  );
}

function UmbrellaIcon(props) {
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
      <path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
      <path d="M12 12v8a2 2 0 0 0 4 0" />
      <path d="M12 2v1" />
    </svg>
  );
}

function BoltIcon(props) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function ShieldCheckIcon(props) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
