import React from "react";
import Header from "../../../Componenets/Header";
import '../Chattingmessenger/Calling.css';
import '../Chattingmessenger/Sidebarleft.css';
import '../Chattingmessenger/Visitorprofile.css';

const Chattingmessenger = () => {
    return(
        <>
        <Header/>

        <div className="container-fluid">
  <div className="row">
    {/* sidebar column starts */}
    <div className="col-md-3 left-sidebar-main ">
      <div className="searchbar d-flex align-items-center mt-0">
        <li className="dropdown account-dropdown">
          <i
            className="fa-solid fa-bars dropdown"
            id="dropdownId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
          <div
            className="dropdown-menu account-dropdown-menu"
            aria-labelledby="dropdownId"
          >
            <div className="accounts-title d-flex align-items-center justify-content-evenly">
              <h4>Account Manager</h4>
              <img
                src="../images/user-account.png"
                className="c-pointer mt-[-2px]"
                alt="switch account"
                width={25}
              />
            </div>
            <a className="dropdown-item" href="/visitors-profile.html">
              <img
                src="../images/icons/user.png"
                alt=""
                width={25}
                className="mx-3"
              />{" "}
              Profile
            </a>
            <a className="dropdown-item" href="gallery.html">
              <img
                src="../images/icons/shortcut-script-app.png"
                className="mx-3"
                alt=""
                width={25}
              />
              Cheels
            </a>
            <a className="dropdown-item" href="cheels.html">
              <img
                src="../images/icons/tv-monitor.png"
                alt=""
                className="mx-3"
                width={25}
              />
              Full Video
            </a>
            <a className="dropdown-item" href="video.html">
              <img
                src="../images/icons/picture.png"
                alt=""
                className="mx-3"
                width={25}
              />
              Gallery
            </a>
            <a className="dropdown-item" href="resturants.html">
              <img
                src="../images/icons/conveyor-belt.png"
                className="mx-3"
                alt=""
                width={25}
              />
              Resturants{" "}
            </a>
            <a className="dropdown-item" href="property.html">
              <img
                src="../images/icons/user.png"
                alt=""
                className="mx-3"
                width={25}
              />
              Products
            </a>
            <a className="dropdown-item" href="javascript:void(0);">
              <img
                src="../images/icons/house.png"
                alt=""
                className="mx-3"
                width={25}
              />
              Properties
            </a>
            <hr className="dropdown-divider" />
            <a
              className="dropdown-item"
              href="verification-pages/profile-verification/verification-main.html"
            >
              <img
                src="../images/icons/verified.png"
                alt=""
                width={25}
                className="mx-3"
              />
              Verification
            </a>
            <a className="dropdown-item" href="gallery.html">
              <img
                src="../images/icons/money.png"
                className="mx-3"
                alt=""
                width={25}
              />
              Monitization
            </a>
            <hr className="dropdown-divider" />
            <a className="dropdown-item" href="javascript:void(0);">
              <img
                src="../images/icons/convenience-store.png"
                alt=""
                width={25}
                className="mx-3"
              />
              Marketplace
            </a>
            <a className="dropdown-item" href="gallery.html">
              <img
                src="../images/icons/smartphone-call.png"
                className="mx-3"
                alt=""
                width={25}
              />
              Device Setting
            </a>
            <a className="dropdown-item" href="gallery.html">
              <img
                src="../images/icons/hotspot.png"
                className="mx-3"
                alt=""
                width={25}
              />
              Updates
            </a>
            <hr className="dropdown-divider mb-3" />
          </div>
        </li>
        <i className="fa fa-search" />
        {/* <input class="form-control searchbar-input" type="search" placeholder="Search" aria-label="Search"> */}
        <input
          className="text-center"
          type="search"
          placeholder="Search user,groups,channels"
        />
      </div>
      {/* Sidebar */}
      <nav id="sidebar" className="d-md-block sidebar">
        <div className="row mb-3 buttons-group d-flex flex-row justify-content-evenly">
          <button href="javascript:void(0);" className=" rounded-circle p-2">
            <img src="../images/icons/home.png " width={18} alt="" />
          </button>
          <button href="javascript:void(0);" className="rounded-circle p-2">
            All
          </button>
          <button href="javascript:void(0);" className="rounded-5 p-2">
            In-Contacts
            <span>174</span>
          </button>
          <button href="javascript:void(0);" className="rounded-5 p-2">
            Business <span>23</span>
          </button>
        </div>
        <div className="row buttons-group2 mb-4 d-flex flex-row justify-content-start">
          <button href="javascript:void(0);" className="rounded-5 p-2">
            Favourites <span>12</span>
          </button>
          <button href="javascript:void(0);" className="rounded-5 p-2">
            Status <span>174</span>
          </button>
          <button href="javascript:void(0);" className="rounded-5 p-2">
            channels <span>23</span>
          </button>
        </div>
        <div>
          <ul className="nav flex-column">
            <li className="nav-item child">
              <h2 className="d-flex justify-content-between">
                Recent Chats{" "}
                <span>
                  <a href="#">
                    <i className="fab fa-whatsapp" />
                  </a>
                </span>
              </h2>
              {/* Chat items */}
              <div className="parent">
                <div>
                  {" "}
                  <img
                    src="../images/thubnail.jpeg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Metal Exchange</span>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
                <div className="tticon">
                  <span className="time">10 min</span>
                  {/* <i class="fa-solid fa-check-double"></i> */}
                  <span className="number">2</span>
                </div>
              </div>
              <div className="parent">
                <div>
                  {" "}
                  <img
                    src="../images/Ellipse 5.png"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Michael tony</span>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
                <div className="tticon">
                  <span className="time">10 min</span>
                  {/* <i class="fa-solid fa-check-double"></i> */}
                  <span className="number">2</span>
                </div>
              </div>
              <div className="parent">
                <div>
                  {" "}
                  <img
                    src="../images/Ellipse 5 (1).png"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Joseph ray</span>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
                <div className="tticon">
                  <span className="time">10 min</span>
                  {/* <i class="fa-solid fa-check-double"></i> */}
                  <span className="number">2</span>
                </div>
              </div>
              <div className="parent">
                <div>
                  {" "}
                  <img
                    src="../images/thubnail.jpeg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Metal Exchange</span>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
                <div className="tticon">
                  <span className="time">10 min</span>
                  {/* <i class="fa-solid fa-check-double"></i> */}
                  <span className="number">2</span>
                </div>
              </div>
              <div className="parent">
                <div>
                  {" "}
                  <img
                    src="../images/thubnail.jpeg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Metal Exchange</span>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
                <div className="tticon">
                  <span className="time">10 min</span>
                  {/* <i class="fa-solid fa-check-double"></i> */}
                  <span className="number">2</span>
                </div>
              </div>
              <div className="parent">
                <div>
                  {" "}
                  <img
                    src="../images/thubnail.jpeg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Metal Exchange</span>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
                <div className="tticon">
                  <span className="time">10 min</span>
                  {/* <i class="fa-solid fa-check-double"></i> */}
                  <span className="number">2</span>
                </div>
              </div>
              {/* Add more chat items as needed */}
            </li>
          </ul>
        </div>
        <hr color="javascript:void(0);D9D9D9" style={{ height: 3 }} />
        <div className="explore-more">
          <ul>
            <h5>Explore More</h5>
          </ul>
        </div>
      </nav>
      {/* sidebar ends */}
    </div>
    {/* sidebar column ends */}
    {/* center main starts  */}
    <div className=" calling-main-2 ">
      <div className="calling-person-2 d-flex">
        <div className="ellipse-2 ">
          <img src="../images/Ellipse 303.png" alt="" />
        </div>
        <div className="person  ">
          <div className="marina d-flex">
            <h4 className="text-light marinaa">Marina</h4>
            <div className="icons">
              <img
                src="../images/icons/Group 18448.png"
                className="img-first-icon"
                alt=""
              />
            </div>
          </div>
          <p className="last-seen-2">
            Last <span>seen today at 14:28</span>{" "}
          </p>
        </div>
      </div>
      <div className="row width-row my-5">
        <div className="col-lg-2 icons-links">
          <a
            href="visitors-profile-cheels.html"
            className="d-flex flex-column align-items-center"
          >
            <img
              className="img-width"
              src="../images/amp_stories.png"
              alt=""
            />
            <label className="mt-2 " htmlFor="#">
              <b>Cheels</b>
            </label>
          </a>
        </div>
        <div className="col-lg-2  icons-links">
          <a
            href="visitor-video.html"
            className="d-flex flex-column align-items-center"
          >
            <img
              className="img-width"
              src="../images/movie.png"
              alt=""
            />
            <label className="mt-2" htmlFor="#">
              <b>Videos</b>
            </label>
          </a>
        </div>
        <div className="col-lg-2  icons-links">
          <a
            href="visitor-gallery.html"
            className="d-flex flex-column align-items-center"
          >
            <img
              className="img-width"
              src="../images/gallery_thumbnail.png"
              alt=""
            />
            <label className="mt-2" htmlFor="">
              <b>Gallery</b>
            </label>
          </a>
        </div>
        <div className="col-lg-2 icons-links ">
          <a
            href="visitors-profile-cheels.html"
            className="d-flex flex-column align-items-center"
          >
            <img
              className="img-width"
              src="../images/lunch_dining.png"
              alt=""
            />
            <label className="mt-2" htmlFor="">
              <b>Foods</b>
            </label>
          </a>
        </div>
        <div className="col-lg-2  icons-links">
          <a
            href="visitors-profile-cheels.html"
            className="d-flex flex-column align-items-center"
          >
            <img
              className="img-width"
              src="../images/shopping_basket.png"
              alt=""
            />
            <label className="mt-2" htmlFor="">
              <b>Products</b>
            </label>
          </a>
        </div>
        <div className="col-lg-2  icons-links">
          <a
            href="visitors-profile-cheels.html"
            className="d-flex flex-column align-items-center"
          >
            <img
              className="img-width"
              src="../images/real_estate_agent.png"
              alt=""
            />
            <label className="mt-2" htmlFor="">
              <b>Properties</b>
            </label>
          </a>
        </div>
      </div>
      {/* Food */}
      <div className="labeled-text mt-3">
        {" "}
        <label className=" fs-2" htmlFor="">
          <b>Foods</b>
        </label>
      </div>
      <div className="row mt-2">
        <div className="col-lg-2 width-col">
          <img
            className="food-girl-img"
            src="../images/Rectangle 1133.png"
            alt=""
          />
        </div>
        <div className="col-lg-2 width-col">
          <img
            className="food-girl-img"
            src="../images/Rectangle 1133.png"
            alt=""
          />
        </div>
        <div className="col-lg-2 width-col">
          <img
            className="food-girl-img"
            src="../images/Rectangle 1133.png"
            alt=""
          />
        </div>
        <div className="col-lg-2 width-col">
          <img
            className="food-girl-img"
            src="../images/Rectangle 1133.png"
            alt=""
          />
        </div>
        <div className="col-lg-2 width-col">
          <img
            className="food-girl-img"
            src="../images/Rectangle 1133.png"
            alt=""
          />
        </div>
      </div>
      {/* Products */}
      <div className="labeled-text mt-3 ">
        {" "}
        <label className=" fs-5 " htmlFor="">
          <b>Products</b>
        </label>
      </div>
      <div className="row mt-2  ">
        <div className="col-lg-2 ">
          <img
            className="product-img"
            src="../images/Rectangle 1136.png"
            alt=""
          />
        </div>
        <div className="col-lg-2 ">
          <img
            className="product-img"
            src="../images/Rectangle 1137.png"
            alt=""
          />
        </div>
        <div className="col-lg-2 ">
          <img
            className="product-img"
            src="../images/Rectangle 1138.png"
            alt=""
          />
        </div>
        <div className="col-lg-2 ">
          <img
            className="product-img"
            src="../images/Rectangle 1137.png"
            alt=""
          />
        </div>
        <div className="col-lg-2 ">
          <img
            className="product-img"
            src="../images/Rectangle 1138.png"
            alt=""
          />
        </div>
        <div className="col-lg-2 ">
          <img
            className="product-img"
            src="../images/Rectangle 1137.png"
            alt=""
          />
        </div>
      </div>
      {/* property listing */}
      <div className="labeled-text mt-3">
        {" "}
        <label className=" fs-5" htmlFor="">
          <b>Property Listing</b>
        </label>
      </div>
      <div className="row img-sizing justify-content-evenly align-items-center mt-2">
        <div className="col-lg-2 width-col-2">
          <img
            className="listing-product2"
            src="../images/Rectangle 1139 (1).png"
            alt=""
          />
        </div>
        <div className="col-lg-2  width-col-2">
          <img
            className="listing-product2"
            src="../images/Rectangle 1140 (1).png"
            alt=""
          />
        </div>
        <div className="col-lg-2 width-col-2 ">
          <img
            className="listing-product2"
            src="../images/Rectangle 1139 (1).png"
            alt=""
          />
        </div>
        <div className="col-lg-2 width-col-2 ">
          <img
            className="listing-product2"
            src="../images/Rectangle 1139 (1).png"
            alt=""
          />
        </div>
        <div className="col-lg-2 width-col-2 ">
          <img
            className="listing-product2"
            src="../images/Rectangle 1139 (1).png"
            alt=""
          />
        </div>
      </div>
      <div className="continue-next text-center">
        <a href="/Groupcall"><button className="btn btn-primary">Continue to Next</button></a>
      </div>
    </div>
  </div>
</div>

   

        </>
    );
}

export default Chattingmessenger;