import React from "react";
import Header from "../../../Componenets/Header";
import '../Billingplan2/Billingplan2.css';

const Billingplan2  = () => {
    return (

        <>
        <Header/>
        <div className="free-plan text-center ">
  <div className="plan ">
    <p className="current-plan">You're currently on monthly plan</p>
    <p>Pick your Plan</p>
    <div className="btn-group ">
      <button type="button" className="btn rounded-pill btn-month">
        Month
      </button>
      <button type="button" className="btn rounded-pill btn-year">
        Year
      </button>
    </div>
    <p className="for-month mt-4">$25/ Yr</p>
    <div className="next mt-5">
      <button className="btn next-button">Upgrade now</button>
    </div>
    <div className="universe">
      <h6 className="from ">From</h6>
      <h6 className="annex-universe">Annex universe Itd</h6>
    </div>
  </div>
</div>


        </>
    );
}

export default Billingplan2;