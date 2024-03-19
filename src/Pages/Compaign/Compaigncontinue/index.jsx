import React from "react";
import Header from "../../../Componenets/Header";
import '../Compaigncontinue/Compaigncontinue.css';

const Compaigncontinue = () => {
    return(
        <>
        <Header/>

  <div className="ad-title ">
    <img
      src="../images/icons/arrow_back.png"
      className="img-arrow ms-2 mt-3"
      alt=""
    />
    <div className="form-group mt-4 ms-5 ">
      <input type="text" className="input-text " placeholder="Ad Title" />
    </div>
  </div>
  <h5 className="compaign">New Compaign</h5>
  <div className="options d-flex">
    <div className="upload-file text-center">
      <div className="dropdown">
        <img
          src="../images/perm_media.png"
          className="img-folder  btn dropdown-toggle"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          alt=""
        />
        <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Select
            </a>
          </li>
          <hr className="lined" />
          <div className="gallery  d-flex">
            <img
              src="../images/icons/imagesmode.png"
              type="file"
              className="img-gallery ms-2 mt-1"
              alt=""
            />
            <li>
              <a className="dropdown-item" href="#">
                Images(1-4)
              </a>
            </li>
            <input type="file" className=" hidden-input" />
            <img
              src="../images/icons/upload.png"
              type="file"
              className="img-upload mt-1"
              alt=""
            />
          </div>
          <div className="gallery mt-4 d-flex">
            <img
              src="../images/icons/videocam (3).png"
              className="img-gallery ms-2 mt-1"
              alt=""
            />
            <li>
              <a className="dropdown-item" href="#">
                Images(1-4)
              </a>
            </li>
            <img
              src="../images/icons/upload.png"
              type="file"
              className="img-upload mt-1"
              alt=""
            />
          </div>
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
  </div>
  <div className="description-detail d-flex">
    <div className="detail">
      <textarea
        name=""
        placeholder="Ad Description"
        className="description ms-2"
        id=""
        cols={60}
        rows={10}
        defaultValue={"                    "}
      />
      <div className="date ms-2 d-flex">
        <label htmlFor="date">Start Date</label>
        <input type="date" className="date ms-2" />
      </div>
      <div className="end-continous text-center mt-2 ms-2 d-flex">
        <div className="end-date ms-3 mt-2 d-flex">
          <label htmlFor="date" className="">
            End Date
          </label>
          <input type="date" className=" ms-1 end-date" />
        </div>
        <p className="or ms-2 mt-2">OR</p>
        <div className="continously ms-2 mt-2 d-flex">
          <p>Run Continously</p>
          <input type="radio" className="ms-3 mb-3" />
        </div>
      </div>
      <div className="bidding-detail mt-3 ms-2 d-flex">
        <div className="dropdown d-flex">
          <p className="bid">Bidding</p>
          <button
            className="btn btn-dropdown dropdown-toggle ms-2"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Nothing Selected
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Per click ($0.09)
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Per click ($0.05)
              </a>
            </li>
          </ul>
        </div>
        <p className="or ms-2">OR</p>
        <div className="d-flex custom ms-2">
          <p className="customize">Custom</p>
          <input type="text " className="text ms-2" />
        </div>
      </div>
      <div className="budget mt-3 d-flex">
        <p className="ms-1 compaigns">Compaign Budget</p>
        <div className="amount ms-2">
          <input type="number " className="number" />
          <p className="amount-spend">Enter amount you want to spend</p>
        </div>
      </div>
    </div>
    <div className="website-url">
      <div className="url d-flex ">
        <p>Website URL</p>
        <input type="text" className="url-name ms-2" />
        <div className="dropdown ms-3">
          <button
            className="btn select dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Button
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Shop now
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Visit website
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Learn more
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Subscribe
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Watch
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Play now
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Download
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Donate
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Install
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center">OR</p>
      <div className="channel d-flex">
        <label htmlFor="channel">My Channel</label>
        <div className="dropdown ms-3">
          <button
            className="btn select dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Channel
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="audience mt-3 ms-3 d-flex">
        <label htmlFor="audience">Audience</label>
        <div className="dropdown ms-3">
          <button
            className="btn select dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Audience
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                All countries
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                USA
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Yoganda
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                UK
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="gender mt-3  d-flex">
        <label htmlFor="gender">Gender</label>
        <div className="dropdown ms-3">
          <button
            className="btn select dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Gneder
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                All
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Male
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Female
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="btn-continue mt-5 text-center">
    <a href="/Compaignplacement">
      <button className="btn btn-primary">Continue to Next</button>
    </a>
  </div>

        </>
    )
}

export default Compaigncontinue;