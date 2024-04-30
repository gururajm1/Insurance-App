import React,{ useEffect, useRef, useState } from 'react'
import styles from './Authentication.css'
import bcrypt from 'bcryptjs'
import { Link, useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard';
import PasswordChecklist from "react-password-checklist";


function Authentication(){
  const navigate = useNavigate();
  
  useEffect(() => {
    if(localStorage.getItem('auth')){
      navigate("/dashboard");
    }
  }, []);
  
  const[error, setError] = useState("");
  const[loggedIn, setLoggedIn] = useState(false);
  const[message, setMessage] = useState("");
  const[password, setPassword] = useState("");
  const[validP, setValidP] = useState(false);
  const[status, setStatus] = useState("");
  const emailInputRef = useRef();
  //const passwordInputRef = useRef();
  const [passwordInputRef, setpasswordInputRef] = useState('');

    const handlePasswordChange = (e) => {
      setpasswordInputRef(e.target.value);
    }

    const signUpForm = (e) => {
       // if(validP === true){
          e.preventDefault();
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

          if(email !== "" && email !== null && password !== ''){
            window.localStorage.setItem(
              "login",
              JSON.stringify({ email, hashedpassword })
            );
            console.log(hashedpassword);
          }
        //  }else{
        //    setStatus("Make sure password matches all requirements !")
        //  }
    }
    
    const logInForm = (e) => {
        e.preventDefault();
        if(localStorage.length !== 0){
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
            console.log("Email dosen't Match!");
          } else {
            bcrypt.compare(
              password,
              getHashedPassword,
              function (err, isMatch) {
                if (err) {
                  throw err;
                } else if (!isMatch) {
                  console.log("Password dosen't Match!");
                } else {
                  setMessage("");
                  console.log("Email & Password Matched :)");
                  setLoggedIn(true);
                  navigate("/dashboard");
                  localStorage.setItem("auth", true);
                }
              }
            );
          }
        }else if(localStorage.length === 0){
          setError("You don't have an account try Sign Up");
        }else{
          setError("");
        }
      }
    return (
      <div>
        <div className="Login-container">
          <span className="login-box">
            <input
              type="text"
              placeholder="Enter Your Email"
              ref={emailInputRef}
              style={{ padding: "10px", borderRadius: "10px" }}
            />
            <h5 style={{ color: "red" }}>{message}</h5>
          </span>
          <span className="login-box">
            <input
              type="password"
              placeholder="Enter Your password"
              value={passwordInputRef}
              style={{ padding: "10px", borderRadius: "10px" }}
              onChange={handlePasswordChange}
            />
            <h5 style={{ color: "red" }}>{password}</h5>
            {passwordInputRef !== "" ? <PasswordChecklist
              value={passwordInputRef}
              rules={[
                "minLength",
                "lowercase",
                "specialChar",
                "number",
                "capital",
              ]}
              minLength={8}
            />: ""}
            <h5 style={{ color: "red" }}>{status}</h5>
          </span>
          <button
            onClick={signUpForm}
            style={{ padding: "10px", borderRadius: "10px" }}
          >
            Sign-up
          </button>
          <button
            onClick={logInForm}
            style={{ padding: "10px", borderRadius: "10px" }}
          >
            Login
          </button>
          <h5 style={{ color: "red" }}>{error}</h5>
        </div>
      </div>
    );
}

export default Authentication;