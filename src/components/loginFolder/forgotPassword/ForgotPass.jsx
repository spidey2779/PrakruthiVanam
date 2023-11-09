import React, { useState } from "react";
import "./forgotpass.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const ForgotPass = () => {
    const [password, setPassword] = useState("password");
    const handleSubmit = (e) => {
      e.preventDefault();
    };
    const passwordHandler = () => {
      if (password === "password") {
        setPassword(() => {
          return "text";
        });
      } else {
        setPassword(() => {
          return "password";
        });
      }
    };
  return (
    <div className="mainforgot">
    <div className="forgot-form">
      <h2>Change Password </h2>
      <form onSubmit={handleSubmit}>
        <div className="forgot-form-group">
          <label className={`forgotlabel otplabel`}>OTP</label>
          <input type="text" className="logininput" />
        </div>
        
        <div className="forgot-form-group">
          <label className="forgotlabel">New Password</label>
          <input type={password} className={`logininput newpassword`} />
          {password === "password" && (
            <AiFillEye onClick={passwordHandler} className="eyeIcon" />
          )}
          {password === "text" && (
            <AiFillEyeInvisible
              onClick={passwordHandler}
              className="eyeIcon"
            />
          )}
        </div>
        <div className="forgot-form-group">
          <label className="forgotlabel">Confirm Password</label>
          <input type={password} className={`logininput confirmpassword`} />
          {password === "password" && (<AiFillEye onClick={passwordHandler} className="eyeIcon" />)}
          {password === "text" && (
            <AiFillEyeInvisible onClick={passwordHandler} className="eyeIcon"/>)}
        </div>
        <button type="submit" className="confirmbutton">confirm</button>

        
      </form>
    </div>
  </div>
  )
}

export default ForgotPass
