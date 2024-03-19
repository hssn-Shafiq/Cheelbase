import React from "react";
import Header from "../../../Componenets/Header";
import './Verificationfourth.css';

const Verificationfourth = () =>{
    return(
        <>
        <Header/>
        <div className="container-fluid verification-identity-main">
  <div className="row pt-5  verification-identity ">
    <div className="col-md verification-content ">
      <a href="javascript:void(0);" className="back-arrow" onClick={() => window.history.back()}>
        <i className="fa-solid fa-arrow-left back-arrow" />
      </a>
      <div className="profile-title-box ">
        <div className=" content">
          <h2 className="selfie">Take a video selfie</h2>
          <p className="col-11">
            We need a short video of you turning in different directions
          </p>
        </div>
      </div>
      <div className="mobile-img ">
        <div className="mobile">
          <img src="../images/Rectangle 5090 (1).png" alt="" />
        </div>
      </div>
      <div className="photo-tips mt-2 ">
        <div className="tips">
          <h6 className="header ">Tips for good selfie</h6>
          <div className="selfie-list">
            <ul>
              <li>Use a well-lit area</li>
              <li>Place your ID on flat surface</li>
              <li>Use a contrasting background</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="id-information">
        <div className=" insturctions">
          <p className="col-12 important-information">
            Your ID will be stored securely and deleted within 60 days after we
            finish confirming your identity.We might use trusted service
            provider to help review your information
          </p>
        </div>
        <div className="next">
          <a href="/Verificationfifth">
            <button className="btn next-button">Start a video selfie</button>
          </a>
        </div>
      </div>
      <div className="universe">
        <h6 className="from ">From</h6>
        <h6 className="annex-universe">Annex universe Itd</h6>
      </div>
    </div>
  </div>
</div>


        </>
    );

}

export default Verificationfourth;