import { useState } from 'react'
import '../Css/Footer.css'
const Footer = () => {
  return (
    <>
<div  className="footer">
  <div id='contact' className="logo-footer">
    <img src="images/logo.jpg" />
  </div>
  <div className="footerHeading">DONILA</div>
  <div className="contact">CONTACT US</div>
  <div className="icons">
    <div className="icon">
      <ul className="Location">
        <li className="Location-li">
          <p className="call">Location</p>
        </li>
      </ul>
    </div>
    <div className="icon">
      <ul className="phn-no.">
        <li className="phn-no-li">
          <p className="call">Call +01 1234567890</p>
        </li>
      </ul>
    </div>
    <div className="icon">
      <ul className="email-last">
        <li className="email-last-li">
          <p className="call">demo@gmail.com</p>
        </li>
      </ul>
    </div>
  </div>
  <hr className="horizontal-line2" />
  <div className="copyright">
    <i className="far fa-copyright" />
    2020 All Rights Reserved. Free HTML Templates
  </div>
</div>



    </>
  )
}

export default Footer
