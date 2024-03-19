import React from "react";
import Header from "../../../Componenets/Header";
import "./Verificationsecond.css";

const Verificationsecond =()=>{
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
        <div className="content">
          <h2>Help us confirm your identity</h2>
          <p>
            The ID you choose must include your name,photo and birthdate.it
            won't be share on your profile.
          </p>
        </div>
      </div>
      <div className="profile-identity mt-3">
        <div className="identity mt-3">
          <div className="national-card d-flex">
            <p className="card">National ID card</p>
            <input
              type="radio"
              className="btn btn-primary   radio-card"
              name="choose"
            />
          </div>
          <div className="passport-person mt-3 d-flex">
            <p className="passport ">Passport</p>
            <input type="radio" className="btn btn-primary radio-passport" />
          </div>
          <div className="drivers-license mt-3 d-flex">
            <p className="license ">Driver's License</p>
            <input type="radio" className="btn btn-primary radio-license" />
          </div>
          <div className="state-id mt-3 d-flex">
            <p className="state ">State ID</p>
            <input type="radio" className="btn btn-primary radio-id" />
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
          <a href="/Verificationthird">
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

export default Verificationsecond;