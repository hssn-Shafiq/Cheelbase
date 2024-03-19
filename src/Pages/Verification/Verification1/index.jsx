import React from "react";
import Header from "../../../Componenets/Header";
import './Verification1.css';

const Verification1=()=>{

  
    return(
        <>
       
            <Header/>
            <div className="container-fluid verification-profile-main">
  <div className="row pt-5  verification-profile ">
    <div className="col-md verification-content ">
      <a href="javascript:void(0);" className="back-arrow" onClick={() => window.history.back()}>
        <i className="fa-solid fa-arrow-left back-arrow" />
      </a>
      <div className="profile-title-box ">
        <div className="content">
          <h2>Confirm Your Profile Information</h2>
          <p>
            Please submit your profile information within 72hrs or your
            subscription may be cancelled
          </p>
        </div>
      </div>
      <div className="profile-information mt-3">
        <div className="information d-flex align-items-center justify-content-evenly">
          <div className="circle  ">
            <i className="fa-regular fa-circle-check" />
          </div>
          <div className="person-information">
            <h5 className="header">Vicent Roy</h5>
            <p>Your profile name must match your ID</p>
          </div>
          <div className="circle-right ">
            <i className="fa-solid fa-circle-chevron-right" />
          </div>
        </div>
        <div className="information d-flex align-items-center justify-content-evenly">
          <div className="circle ">
            <i className="fa-regular fa-circle-check" />
          </div>
          <div className="person-information">
            <h5 className="header">Profile Photo</h5>
            <p className="">
              Your profile photo should be a close up of your full face looking
              forward
            </p>
          </div>
          <div className="circle-right ">
            <i className="fa-solid fa-circle-chevron-right" />
          </div>
        </div>
      </div>
      <div className="id-information">
        <div className="col-lg insturctions">
          <p className="important-information">
            Your ID will be stored securely and deleted within 60 days after we
            finish confirming your identity.We might use trusted service
            provider to help review your information
          </p>
        </div>
        <div className="next">
          <a href="/Verificationsecond">
            <button className="btn next-button">Next</button>
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
};
export default Verification1;