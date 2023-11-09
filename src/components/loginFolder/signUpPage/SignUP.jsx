import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './signup.module.css'
const SignUP = () => {
  return(
  <div className={classes.wrapper}>
    <form action="" className={classes.signUPForm}>
        <h1>Sign up</h1>
        <div className={classes.signUPinput}>
            <input type="text" placeholder="Full Name" required/>
        </div>
        
        <div className={classes.signUPinput}>
            <input type="text" placeholder="Email or Phone" required/>
        </div>
        <div className={classes.signUPinput}>
            <input type="password" className={classes.firstpass} placeholder="Password" required/>
        </div>
        <div className={classes.signUPinput}>
            <input type="password" className={classes.confirmpass}placeholder="Confirm Password" required/>
        </div>
    <button type="submit" className={classes.signUPbtn}>Sign up</button>
    <p> Already have an account?
    <NavLink to="/login" className={classes.loginlink}>Login</NavLink>
    </p>
    </form>
</div>
  )
}

export default SignUP;
