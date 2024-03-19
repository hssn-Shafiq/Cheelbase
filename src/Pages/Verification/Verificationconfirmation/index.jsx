import React from "react";
import Header from "../../../Componenets/Header";
import './Verificationconfirmation.css';

const Verificationconfirmation = () => {

    return (
        <>
        <Header/>
        <div className="container-fluid verification-identity-main">
  <div className="row pt-3  verification-identity ">
    <div className="col-md verification-content">
      <a href="javascript:void(0);" className="back-arrow" onClick={() => window.history.back()}>
        <i className="fa-solid fa-arrow-left back-arrow" />
      </a>
      <div className="business-verification ">
        <div className=" content">
          <h2 className=" selfie">Business verification</h2>
        </div>
        <div className="id-information">
          <p className="instructions  col-lg-8">
            Your ID will be stored securely and deleted within 60 days after we
            finish confirming your identity.We might use trusted service
            provider to help review your information
          </p>
          <div className="next text-center">
            <a href="/Verificationfifth">
              <button className="btn next-button">Submit</button>
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
</div>
        
        </>
    );
}

export default Verificationconfirmation;