import React from "react";
import Header from "../../../Componenets/Header";
import './Verificationbusiness.css';

const Verificationbusiness = () => {

    return (
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
          <h2 className=" selfie">Business manager</h2>
          <div className="manager-name d-flex ">
            <div className="username ">
              Hi{" "}
              <span className="user">
                {"{"}username{"}"}
              </span>
            </div>
            <div className="left-border"></div>
            <div className="col-lg-9 ads">
              Runing ads on cheelbase is much important as fueling your car for
              a successful race. With this we would prefer dealing with Lega and
              verified business/company before getting started with ads
            </div>
          </div>
        </div>
      </div>
      <div className="id-information">
        <div className="next">
          <a href="/Verificationsixth">
            <button className="btn next-button rounded-pill ">
              <p>manage</p>
            </button>
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

export default Verificationbusiness;