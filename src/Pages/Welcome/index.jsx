import React from "react";
import "../Welcome/welcomepage.css"
const Welcome =()=>{
   return(
    <>
    <div className="container text-center welcome-main">
  <img
    src="images/cheelbase-logo.png"
    alt="Cheelbase"
    width={250}
    height={250}
  />
  <div className="content ">
    <h2 className="heading-2 welcome-text">Welcome to Cheelbase</h2>
    <p className="lead">connecting with purpose</p>
    <h4>
      Free <span>and</span> Secure
    </h4>
    <div className="get-started-btn mt-4">
      <a href="/QrCode" className="btn " target="_parent">
        Get Started
      </a>
    </div>
  </div>
</div>

    </>
   )
}
export default Welcome;