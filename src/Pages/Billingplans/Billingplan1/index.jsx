import React from "react";
import Header from "../../../Componenets/Header";
import '../Billingplan1/Billingplan1.css';

const Billingplan1 = () => {
    return(
        <>
        <Header/>
        <div className="free-plan text-center ">
  <div className="plan ">
    <p className="current-plan">You're currently on free plan</p>
    <p>Pick your Plan</p>
    <div className="btn-group ">
      <a href="/Billingplan2">
        <button type="button" className="btn rounded-pill btn-month">
          Month
        </button>
      </a>
      <button type="button" className="btn rounded-pill btn-year">
        Year
      </button>
    </div>
    <p className="for-month mt-4">$4/mo</p>
    <div className="next mt-5">
        <a href="/Billingplan2">
        <button className="btn next-button">Upgrade now</button>
    
        </a>
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

export default Billingplan1;