import React from "react";
import Header from "../../../Componenets/Header";
import '../Compaignmanager/Compaignmanager.css';

const Compaignmanager = () => {
    return(
        <>
        <Header/>

  <div className="comapign-manager justify-content-evenly align-items-center mt-5 d-flex">
    <div className="business">
      <p>Grow your Business</p>
      <div className="boost-business d-flex">
        <img
          src="../images/ads_click (1).png"
          className="mt-4 ms-2 img-click"
          alt=""
        />
        <div className="easy-business mt-4 ms-3">
          <h6 className="boost">Boost your business easily</h6>
          <p className="col-11">
            Reach a wider community with ease and fast-to-create ads that let
            people find and chat with you
          </p>
          <button className="btn rounded-5 text-light start">
            Get started
          </button>
        </div>
      </div>
      <div className="leaderboard mt-5">
        <p className="text-center mt-5 leader">Leaderboard</p>
      </div>
    </div>
    <div className="analytics">
      <h6 className="analytic">Analytics</h6>
      <div className="viwed mt-5">
        <a href="" className="views">
          <p>Profile views</p>
        </a>
        <a href="" className="views">
          <p>Cheel views</p>
        </a>
        <a href="" className="views">
          <p>Gallery views</p>
        </a>
        <a href="" className="views">
          <p>Videos views</p>
        </a>
        <a href="" className="views">
          <p>Products views</p>
        </a>
        <a href="" className="views">
          <p>Food views</p>
        </a>
        <a href="" className="views">
          <p>Properties views</p>
        </a>
      </div>
    </div>
    <a href="" className="days">
      <h6 className="analytidays">Within Last 7 days</h6>
    </a>
    <div className="more-detail">
      <h6 className="analytical ">More details</h6>
      <div className="detail ">
        <p>12,780,071</p>
        <p>1,780,071</p>
        <p>2,780,071</p>
        <p>780,071</p>
        <p>180,071</p>
        <p>12,780</p>
        <p>1,270,071</p>
      </div>
    </div>
  </div>
  <div className="btn-continue text-center">
    <a href="/Compaignmanagernext">
      <button className="btn btn-primary">Next</button>
    </a>
  </div>


        </>
    )
}
export default Compaignmanager;