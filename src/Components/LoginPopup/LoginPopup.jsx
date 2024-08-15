import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const LoginPopup = () => {

    const [currState, setCurrState] = useState('login')

  return (
    <div>
      <nav id="desktop-navbar">
        <div className="navbar">
          <Link to="/"><img src={assets.starbucks} alt="" className="navbar-icon" /></Link>
        </div>
      </nav>

      <div className="text"><h2>Sign in or create an account</h2></div>
      <div className='login-popup'>
      <form className="login-popup-container">
      <div className="login-popup-title">
            <h2>{currState}</h2>
        </div>
        <div className="login-popup-inputs">
            {currState==="Login" ? <></>:<input type="text" placeholder='Your Name' required/>}
            <input type="email" placeholder='Username or email address' required/>
            <input type="password" placeholder='Password' required/>
        </div>
        <button>{currState==="Sign Up" ? "Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>Keep me signed in, i agree to the terms of use & Private policy.</p>
        </div>
        {currState==="Login" 
        ? <p>Creat a new account? <span onClick={()=>setCurrState("Sign In")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }

      </form>
    </div>
    <div className="login-footer">
        <h4>Join Starbucks® Rewards</h4>
        <p className='login-footer-text'>
        Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.
        </p>
        <button className='login-button'>Join Now</button>
    </div>
    </div>
  )
}

export default LoginPopup
