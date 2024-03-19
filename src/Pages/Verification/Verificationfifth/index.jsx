import React from "react";
import Header from "../../../Componenets/Header";
import './Verificationfifth.css';

const Verificationfifth = () => {
    return (
        <>
        <Header/>
        <div className="container-fluid verification-identity-main">
  <div className="row pt-5  verification-identity ">
    <div className="col-md verification-content ">
      <div className="icon-img">
        <img src="../images/cancel.png" alt="" />
      </div>
      <div className="tick-mark ">
        <img src="../images/Group 18462.png" alt="" />
      </div>
      <div className="profile-title-box ">
        <div className=" content">
          <h2 className=" selfie">Identity confirmation in progress</h2>
          <div className="id-confirm">
            <p>
              Once your identity is confirmed, you will the access to all
              cheelbase verified account's benefits
            </p>
          </div>
          <div className="id-verification">
            <p>
              Verification process usually take up to 72hrs, We shall inform you
              when confirmation is on cheelbase
            </p>
          </div>
        </div>
      </div>
      <div className="id-information">
        <div className="next">
          <a href="/Verificationbusiness">
            <button className="btn next-button">Finish</button>
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

export default Verificationfifth;