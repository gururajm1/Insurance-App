import React,{ useEffect, useRef, useState } from 'react'
import styles from './Authentication.css'
import bcrypt from 'bcryptjs'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import PasswordChecklist from "react-password-checklist";

function Authentication(){
  const[loggedIn, setLoggedIn] = useState(false);
  const[message, setMessage] = useState("");
  const[password, setPassword] = useState("");
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

    useEffect(() => {
      <PrivateRoute value={loggedIn}/>
    }, [loggedIn]);

    const signUpForm = (e) => {
        e.preventDefault();
        const email = emailInputRef.current.value;
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if(email === ""){
          setMessage("Please enter your email")
        }else if((email !== "" )&& (!regEx.test(email))){
            setMessage("Enter a Valid Email");
        }else{
          setMessage("");
        }
        const password = passwordInputRef.current.value;
        if(password === ""){
          setPassword("Please enter your password");
        }else{
          setPassword("");
        }
        const hashedpassword = bcrypt.hashSync(password, 10);

        window.localStorage.setItem(
          "login",
          JSON.stringify({ email, hashedpassword })
        );
        console.log(hashedpassword);
    }
    
    const logInForm = (e) => {
        e.preventDefault();
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;

        const getHashedPassword = JSON.parse(window.localStorage.getItem("login")).hashedpassword
        const getPrevEmail = JSON.parse(window.localStorage.getItem("login")).email
        
          if(email !== getPrevEmail) {
            console.log("Email dosen't Match!");
          } else {
            bcrypt.compare(
              password,
              getHashedPassword,
              function (err, isMatch) {
                if(err){
                  throw err;
                }else if(!isMatch) {
                  console.log("Password dosen't Match!");
                }else{
                  setLoggedIn(true);
                  console.log("Email & Password Matched :)");
                }
              }
            );
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
              ref={passwordInputRef}
              style={{ padding: "10px", borderRadius: "10px" }}
            />
            <h5 style={{ color: "red" }}>{password}</h5>
            <PasswordChecklist
              rules={[
                "minLength",
                "lowercase",
                "specialChar",
                "number",
                "capital",
              ]}
              minLength={8}
              value={passwordInputRef}
            />
          </span>
          <button
            onClick={signUpForm}
            style={{ padding: "10px", borderRadius: "10px" }}
          >
            Submit
          </button>
          <button
            onClick={logInForm}
            style={{ padding: "10px", borderRadius: "10px" }}
          >
            Login
          </button>
        </div>
      </div>
    );
}

export default Authentication;