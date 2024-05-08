import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Health from "./Insurances/Health";
import Travel from "./Insurances/Travel";
import Auto from "./Insurances/Auto";
import Home from "./Insurances/Home";
import Nav from "./Hero/Nav";
import Insdetails from "./Insurances/Insurance Details/Insdetails";
import Cardroot from "./Payment Cards/Cardroot";
import Heroroot from "./Hero/Heroroot";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import Paymentgateway from "./Paymentgateway";
import Myinsurances from "./Nav Elements/Myinsurances";
import Myclaims from "./Nav Elements/Myclaims";
import { ClaimProvider } from "./Nav Elements/ClaimContext";

function App() {
  return (
    <Router>
      <ClaimProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Heroroot />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/my-claims" element={<Myclaims />} />
            <Route path="/payment-gateway" element={<Paymentgateway />} />
            <Route path="/my-policies" element={<Myinsurances />} />
            <Route path="/login" element={<Login />} />
            <Route path="/health" element={<Health />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/home" element={<Home />} />
            <Route path="/auto" element={<Auto />} />
            <Route path="/dash" element={<Dashboard />} />
            <Route path="/plan-details/:id" element={<Insdetails />} />
            <Route path="/payment-options" element={<Cardroot />} />
          </Routes>
        </div>
      </ClaimProvider>
    </Router>
  );
}

export default App;
