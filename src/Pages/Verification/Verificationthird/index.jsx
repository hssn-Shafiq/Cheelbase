import React from "react";
import Header from "../../../Componenets/Header";
import "./Verificationthird.css";

const Verificationthird =()=>{

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
          <h2 className="col-8">Take photos of both sides of your ID</h2>
          <p>
            Use the camera on your phone to take photos that clearly show your
            ID or document.Don't submit screenshots or previously taken photos.
          </p>
        </div>
      </div>
      <div className="mobile-img mt-2 ">
        <div className="mobile">
          <img src="../images/Rectangle 5090.png" alt="" />
        </div>
      </div>
      <div className="photo-tips mt-3 ">
        <div className="tips">
          <h6 className="header">Tips for good photo</h6>
          <ul>
            <li>Use a well lit area</li>
            <li>Place your ID on flat surface</li>
            <li>Use a contrasting background</li>
          </ul>
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
          <a href="/Verificationfourth">
            <button className="btn next-button">Take Photo</button>
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

export default Verificationthird;