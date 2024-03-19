import React from "react";
import Header from "../../../Componenets/Header";
import '../Compaignplacement/Compaignplacement.css';

const Compaignplacement =() => {
    return(
        <>
        <Header/>
        <>
  <img
    src="../images/icons/arrow_back.png"
    className="ms-3 mt-2"
    alt=""
  />
  <div className="placed ms-4 mt-4 d-flex">
    <h6 className="place">Placement</h6>
    <div className="dropdown text-center category mb-5 ms-4">
      <button
        className="btn  dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Entire Site
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a className="dropdown-item" href="#">
            Channels
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Groups
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Chats
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Status
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Cheels
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Video
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Gallery
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="burger ">
    <div className="icons-option">
      <div className="icon justify-content-center  d-flex">
        <img
          src="../images/icons/Ellipse 346 (1).png"
          className="img-ellipse mt-3 ms-2"
          alt=""
        />
        <h5 className="ms-2 mt-3">Cheelbase</h5>
        <img
          src="../images/icons/Group 18448.png"
          className="img-group mt-3 ms-2"
          alt=""
        />
        <p className="ms-5 mt-3">@cheelbas.......</p>
        <div className="ads mt-3">
          <button
            className="dropdown added text-center ms-5"
            id="dropdownId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            ad{" "}
          </button>
          <div
            className="dropdown-menu account-dropdown-menu"
            aria-labelledby="dropdownId"
          >
            <a className="dropdown-item" href="javascript:void(0);">
              About this account
            </a>
            <a
              className="dropdown-item"
              href="../channels-pages/channels-main.html"
            >
              About cheelbase ads
            </a>
            <a
              className="dropdown-item"
              href="../channels-pages/channels-main.html"
            >
              Why am I seeing this ad
            </a>
            <a
              className="dropdown-item"
              href="../channels-pages/channels-main.html"
            >
              Not intrested
            </a>
            <a
              className="dropdown-item"
              href="../channels-pages/channels-main.html"
            >
              Report this ad
            </a>
          </div>
        </div>
      </div>
    </div>
    <p className="col-8 ms-4 mt-5 bag">
      Nice bagggggg for breakfast , lanuckkkkk anrd mornjddhhd eats forever
      testlfig hfhfh click on the link below to downlaod #dad
    </p>
    <img
      className="burger1 ms-5"
      src="../images/Rectangle 5028.png"
      alt=""
    />
    <div className="second-icons justify-content-evenly   d-flex">
      <img
        src="../images/icons/thumbs-up.png"
        className="img-second mb-2"
        alt=""
      />
      <img
        src="../images/icons/heart.png"
        className="img-second mb-2 "
        alt=""
      />
      <p className="ms-5">541</p>
      <p className="share">87 Shares</p>
      <p className="shop">shop now</p>
    </div>
  </div>
  <button className="btn text-light  btn-submit">Submit</button>
  <div className="btn-continue text-center ">
    <a href="/Compaignlast">
      <button className="btn btn-primary">Continue to Next</button>
    </a>
  </div>
</>

        </>
    )
}

export default Compaignplacement;