import React from "react";
import Header from "../../../Componenets/Header";
import '../Compaignlast/Compaignlast.css';

const Compaignlast =() => {
    return(
        <>
        <Header/>
        <div className="container-fluid verification-identity-main ">
  <div className="row   verification-identity ">
    <div className="col-md verification-content text-center ">
      <div className="tick-mark  text-center">
        <img src="../../images/Group 18462.png" alt="" />
      </div>
      <div className="profile-title-box ">
        <div className=" content">
          <h2 className=" selfie ms-5 mt-2 col-9 text-center">
            Thank you for great work done Your ad is now under review
          </h2>
          <div className="id-confirm">
            <p className="col-lg-20">
              Once your ad is reviewed sucessfully, it should start runing as
              expected
            </p>
          </div>
          <div className="id-verification ms-5">
            <p className="col-6">
              Reviewing process usually take up to 24hrs, We shall inform you
              when reviewing is done is on cheelbase
            </p>
          </div>
        </div>
      </div>
      <div className="id-information">
        <div className="next">
          <a href="verification-business-manager.html">
            <button className="btn next-button">ok</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Compaignlast;