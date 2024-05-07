import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./Authentication";
import Dashboard from "./Dashboard"; 
import Auth from './Auth';
import HomePage from "./Homepage";
import Health from "./Insurances/Health";
import Travel from './Insurances/Travel';
import Auto from './Insurances/Auto';
import Home from './Insurances/Home';
import Nav from "./Nav";
import Insdetails from "./Insurances/Insurance Details/Insdetails";
import Cardroot from './Payment Cards/Cardroot';

//import MainCarousel from "./MainCarousel";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/auth" element={<Auth />} />
          {/* <Route path="/home" element={<HomePage />} /> */}
          {/* <Route path="/home" element={<MainCarousel />} /> */}
          <Route path="/health" element={<Health />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/home" element={<Home />} />
          <Route path="/auto" element={<Auto />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/plan-details/:id" element={<Insdetails />} />
          <Route path="/payment-options" element={<Cardroot />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
