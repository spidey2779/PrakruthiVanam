import React , {useState} from "react";
import "./login.css";
import {AiFillEyeInvisible ,AiFillEye} from 'react-icons/ai';
function Login() {
    const [password,setPassword]=useState("password")
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const passwordHandler=()=>{
    if(password ===  "password")
    {
        setPassword(()=>{
            return "text";
        })
    }
    else{
        setPassword(()=>{
            return "password";
        })
    }

  }

  return (
    <div className="login-form">
      <h2>Prakruthi Vanam </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="loginlabel">Email</label>
          <input type="email" className="logininput" />
        </div>
        <div className="form-group">
          <label className="loginlabel">Password</label>
          <input type={password} className="logininput" />
          {password ==="password" && <AiFillEye onClick={passwordHandler} className="eyeicon"/>}
          {password ==="text" && <AiFillEyeInvisible onClick={passwordHandler} className="eyeicon"/>}
        </div>
        <button type="submit" className="loginbutton">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
