import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./Authentication";
import Dashboard from "./Dashboard"; 
import Auth from './Auth';

//import MainCarousel from "./MainCarousel";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/auth" element={<Auth />} />
          {/* <Route path="/home" element={<MainCarousel />} /> */}
          <Route
            path="/dashboard"
            element={
              <Dashboard />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
