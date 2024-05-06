import React, { useState, useEffect, useRef } from "react";
import pakka from "./assets/pakka.jpg";
import bcrypt from "bcryptjs";
//import axios from "axios";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import PasswordChecklist from "react-password-checklist";

function Auth() {
    const navigate = useNavigate();

    useEffect(() => {
      if (localStorage.getItem("auth")) {
        navigate("/dashboard");
      }
    }, []);

    const [error, setError] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [validP, setValidP] = useState(false);
    const [status, setStatus] = useState("");
    const emailInputRef = useRef();
    //const passwordInputRef = useRef();
    const [passwordInputRef, setpasswordInputRef] = useState("");

    const handlePasswordChange = (e) => {
      setpasswordInputRef(e.target.value);
    };

    const signUpForm = (e) => {
      // if(validP === true){
      e.preventDefault();
      if(localStorage.getItem("auth") || localStorage.getItem("login")){
        setError("Already Have an Account try Login in");
      }else{
        setError("");
        const email = emailInputRef.current.value;
        const password = passwordInputRef; //.current.value;
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
          setPassword("Please enter your password");
        } else {
          setPassword("");
        }
        
        if (email !== null && password !== "") {
          window.localStorage.setItem(
            "login",
            JSON.stringify({ email, hashedpassword })
          );
          setError("Account Created Successfuylly now try Login")
          //console.log(hashedpassword);
        }
      }

    //   if(localStorage.getItem("login")){
    //     setLoggedIn(true);
    //     navigate("/dashboard");
    //     localStorage.setItem("auth", true);
    //   }
      //  }else{
      //    setStatus("Make sure password matches all requirements !")
      //  }
    };

    const logInForm = (e) => {
      e.preventDefault();
      if (localStorage.length !== 0) {
        const email = emailInputRef.current.value;
        const password = passwordInputRef; //.current.value;
        //const hashedpassword = bcrypt.hashSync(password, 10);
        const getHashedPassword = JSON.parse(
          window.localStorage.getItem("login")
        ).hashedpassword;
        const getPrevEmail = JSON.parse(
          window.localStorage.getItem("login")
        ).email;
        if (email !== getPrevEmail) {
          //console.log("Email dosen't Match!");
          setMessage("Email dosen't Match!");
        }
        else if(password === "") {
            setPassword("Please Enter Your Password");
            return;
        }else{
            bcrypt.compare(
            password,
            getHashedPassword,
            function (err, isMatch) {
              if(err) {
                throw err;
              } else if(!isMatch) {
                //console.log("Password dosen't Match!");
                setPassword("Password dosen't Match!");
              } else {
                setMessage("");
                setPassword("");
                console.log("Email & Password Matched :)");
                setLoggedIn(true);
                navigate("/dashboard");
                localStorage.setItem("auth", true);
              }
            }
        );
        }
      } else if (localStorage.length === 0) {
        setError("You don't have an account try Sign Up");
      } else {
        setError("");
      }
    };
  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-black-200 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w-full h-full" src={pakka} alt="/" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          {/* <form onSubmit={handleEdit}> */}
          <form onSubmit={logInForm}>
            <h2 className="text-4xl font-bold text-center mb-9 text-gray-600">
              INC
            </h2>
            <div>
              <input
                className="border p-2 mr-2 mb-4 w-80 ml-2"
                type="text"
                placeholder="Enter Your Email"
                ref={emailInputRef}
                //id="Train_name"
                //name="Train_name"
                //value={inputs.Train_name || ""}
                // onChange={(event) =>
                //   setInputs({ ...inputs, Train_name: event.target.value })
                // }
              />
              <h5 style={{ color: "red" }}>{message}</h5>
            </div>
            <div>
              <input
                className="border p-2 mb-4 w-80 ml-2"
                type="password"
                placeholder="Password"
                value={passwordInputRef}
                onChange={handlePasswordChange}
                // value={inputs.Description || ""}
                // onChange={(event) =>
                //   setInputs({ ...inputs, Description: event.target.value })
                // }
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
              <h5 style={{ color: "red" }}>{password}</h5>
            </div>
            <button
              //onClick={logInForm}
              className="w-full py-2 my-4 bg-green-600 hover:bg-yellow-500 mt-7"
            >
              Login
            </button>
            <h5 style={{ color: "red" }}>{error}</h5>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;