// Signup.jsx
import React, { useState, useRef, useEffect } from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import PasswordChecklist from "react-password-checklist";
import pakka from "../assets/pakka.jpg";

function Signup() {
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("auth")){
      navigate("/dash");
    }else if(localStorage.getItem("login")){
        setError("Already Have an Account Try Login");
    }
  }, []);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [passwordInputRef, setpasswordInputRef] = useState("");
  const emailInputRef = useRef();
  const userName = useRef();
  const userAge = useRef();

  const handlePasswordChange = (e) => {
    setpasswordInputRef(e.target.value);
  };

  const signUpForm = (e) => {
    e.preventDefault();
    setError("");
    const email = emailInputRef.current.value;
    const name = userName.current.value;
    const age = userAge.current.value;
    const password = passwordInputRef;
    const hashedpassword = bcrypt.hashSync(password, 10);
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === null) {
      setMessage("Please enter your email");
    } else if (email !== "" && !regEx.test(email)) {
      setMessage("Enter a Valid Email");
    } else {
      setMessage("");
    }
    if (password === "") {
      setPassword("Please Check your Credentials");
    } else {
      setPassword("");
    }

    if (email !== null && password !== "") {
      window.localStorage.setItem(
        "login",
        JSON.stringify({ email, hashedpassword, name, age })
      );
      setError("Account Created Successfully now try Login");
      navigate("/login");
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-black-200 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w-full h-full" src={pakka} alt="/" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form onSubmit={signUpForm}>
            <h2 className="text-4xl font-bold text-center mb-9 text-gray-600">
              Signup
            </h2>
            <div className="ml-8">
              <input
                className="border p-2 mr-2 mb-4 w-80 ml-2"
                type="text"
                placeholder="Enter Your Name"
                ref={userName}
              />
              <input
                className="border p-2 mr-2 mb-4 w-80 ml-2"
                type="text"
                placeholder="Enter Your Age"
                ref={userAge}
              />
              <input
                className="border p-2 mr-2 mb-4 w-80 ml-2"
                type="text"
                placeholder="Your Email Address"
                ref={emailInputRef}
              />
              <h5 className="text-red-600">{message}</h5>
              <input
                className="border p-2 mb-4 w-80 ml-2"
                type="password"
                placeholder="Enter Password"
                value={passwordInputRef}
                onChange={handlePasswordChange}
              />
              {passwordInputRef !== "" ? (
                <PasswordChecklist
                  value={passwordInputRef}
                  rules={[
                    "minLength",
                    "lowercase",
                    "specialChar",
                    "number",
                    "capital",
                  ]}
                  minLength={8}
                />
              ) : (
                ""
              )}
              <h5 className="text-red-600">{password}</h5>
            </div>
            <button className="w-[350px] ml-6 p-2 my-4 bg-green-600 hover:bg-yellow-500 mt-7">
              Sign Up
            </button>
            <h5 className="text-red-600">{error}</h5>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
