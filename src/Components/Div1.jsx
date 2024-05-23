import { useState } from 'react'
import '../Css/Div1.css'
const Div1 = () => {
  return (
    <>
<div id="home-main">
  {/* <div class="grid-col1"> */}
  <div id="logo">
    <img src="images/pin copy 3 (1).png" alt="logo" className="homelogo" />
    <img src="images/pin.png" alt="" className="homelogo" id="logo-reverse" />
    <p id="logo-text">DONILA</p>
  </div>
  <div id="row2">
  <div id="navbar">
  <ul className="home">
    <li className="home-li"><a href="#home">HOME</a></li>
    <li className="home-li"><a href="#wed">THE WEDDING</a></li>
    <li className="home-li"><a href="#plan">WEDDING PLANNER</a></li>
    <li className="home-li"><a href="#blog">BLOG</a></li>
    <li className="home-li"><a href="#contact">CONTACT</a></li>
  </ul>
</div>
    <hr className="horizontal-line" />
    <div id="contact">
      <ul className="phone">
        <li className="phone-li">Call +01 1234567890</li>
      </ul>
      <ul className="email">
        <li className="email-li">demo@gmail.com</li>
      </ul>
      <img src="images/facebook.png" alt="" className="facebook" />
      <img src="images/witter.png" alt="" className="twitter" />
      <img src="images/linkedin.png" alt="" className="linkedin" />
    </div>
  </div>
  <div id="main">
    <button id="loginButton" className="login">
      <img src="images/login.png" className="login" id="login-button" alt="" />
    </button>
    <p className="login" id="login-text">
      LOGIN
    </p>
    <button id="search-button">
      <img src="images/search.png" className="search" id="search-logo" alt="" />
    </button>
    <div className="main-overlay" />
    <pre className="main-text">
      {"                "}
      <span id="big-text">
        {"\n"}WEDDING{"\n"}HOUSE
      </span>
      <span id="small-text">
        {"\n"}many variation of passages of lorem Ipsum available but majority
        have sufferd alteration in some{"\n"}form,by injected humour, or
        randomised many variation of passages of lorem Ipsum available but{"\n"}
        majority have sufferd alteration in some form,by injected humour, or
        randomised
      </span>
      {"\n"}
      {"\n"}
      {"\n"}
      <center>
        <button id="contact-us">CONTACT US</button>
      </center>
      {"\n"}
      {"        "}
    </pre>
  </div>
</div>


    </>
  )
}

export default Div1
