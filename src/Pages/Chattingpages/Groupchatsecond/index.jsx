import React from "react";
import '../Groupchatsecond/Groupchatsecond.css';
import '../Groupcall/Leftsidebar.css';
import '../Groupcall/Rightsider.css';
const Groupchatsecond = () =>{
    return (
        <>
            <header>
  <nav className="navbar navbar-expand-sm">
    <div className="container-fluid">
      <a className="navbar-brand" href="../index.html">
        <img src="../images/cheelbase-logo.png" alt="" width={25} />
        Cheelbase
      </a>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="javascript:void(0);collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0 gap-3">
          <li className="nav-item dropdown">
            <a
              className="btn dropdown cursor-pointer create-btn"
              href="javascript:void(0);"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Create <i className="fas fa-plus-circle" />
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <a className="dropdown-item" href="video.html">
                Video
              </a>
              <a
                className="dropdown-item"
                href="../channels-pages/group-channels-pages/group-channel-main.html"
              >
                Cheels
              </a>
              <a
                className="dropdown-item"
                href="../channels-pages/channels-main.html"
              >
                Gallery
              </a>
              <a className="dropdown-item" href="productpage.html">
                Products
              </a>
              <a className="dropdown-item" href="javascript:void(0);">
                Food Items
              </a>
              <a className="dropdown-item" href="property.html">
                Properties
              </a>
            </div>
          </li>
          <li className="nav-item chat-link-item">
            <a className="nav-link" href="javascript:void(0);">
              Chats <span>78</span>
            </a>
          </li>
          <li className="nav-item chat-link-item">
            <a className="nav-link" href="javascript:void(0);">
              Calls <span>97</span>
            </a>
          </li>
          <li className="nav-item chat-link-item">
            <a className="nav-link" href="javascript:void(0);">
              Status <span>5</span>
            </a>
          </li>
          <li className="nav-item chat-link-item">
            <a className="nav-link" href="javascript:void(0);">
              Updates <span>34</span>
            </a>
          </li>
        </ul>
        <form className="d-flex  nav-icon">
          {/* <input class="form-control me-sm-2" type="text" placeholder="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
          <div className="notifications d-flex">
            <div className="notifications mt-2">
              <img
                src="../images/icons/notifications.png"
                className="img-icon"
                alt=""
              />
            </div>
            <div className="video_chat mt-2">
              <img
                src="../images/icons/video_chat.png"
                className="img-icon"
                alt=""
              />
            </div>
            <div className="add_call mt-2">
              <img
                src="../images/icons/add_call (1).png"
                className="img-icon"
                alt=""
              />
            </div>
            <div>
              <li
                className="dropdown dropstart"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <h4 className="p-2">Post to</h4>
                  <a className="dropdown-item" href="javascript:void(0);">
                    <img
                      src="../images/icons/camera.png"
                      alt=""
                      width={25}
                      className="mx-3"
                    />
                    Status
                  </a>
                  <a
                    className="dropdown-item"
                    href="../channels-pages/channels-main.html"
                  >
                    <img
                      src="../images/icons/mobile-video.png"
                      className="mx-3"
                      alt=""
                      width={25}
                    />
                    Contact Chats
                  </a>
                  <a
                    className="dropdown-item"
                    href="../channels-pages/group-channels-pages/group-channel-main.html"
                  >
                    <img
                      src="../images/icons/tv-monitor.png"
                      alt=""
                      className="mx-3"
                      width={25}
                    />
                    Channel
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
                </div>
              </li>
            </div>
          </div>
          <div className="user d-flex flex-row ">
            <img
              src="../images/Ellipse 341.png"
              alt="Chat 1"
              className=" rounded-circle"
              width={30}
              height={30}
            />
            <label htmlFor="user" className="mt-1">
              @marinaojak
            </label>
          </div>
          <div className="lines">
            <li className="dropdown dropstart account-dropdown">
              <i
                className="fa-solid fa-ellipsis-vertical dropdown"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              />
              <div className="dropdown-items dropdown-menu ">
                <div className="calling-options d-flex justify-content-center">
                  <div className="options justify-content-between mt-5 align-items-center ">
                    <div className="voume">
                      <img
                        src="../images/icons/volume_up.png"
                        className="voume"
                        alt=""
                      />
                    </div>
                    <div className="camera">
                      <img
                        src="../images/icons/switch-camera-5147.png"
                        className="camera"
                        alt=""
                      />
                    </div>
                    <div className="voice">
                      <img
                        src="../images/icons/Group 18517.png"
                        className="voice"
                        alt=""
                      />
                    </div>
                    <div className="screen_share">
                      <img
                        src="../images/icons/screen_share.png"
                        className="share-screen"
                        alt=""
                      />
                    </div>
                    <div className="decline">
                      <img
                        src="../images/icons/Group 18514.png"
                        className="decline"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </form>
      </div>
    </div>
  </nav>
</header>

<div className="container-fluid">
    <div className="row">

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
                  <a className="dropdown-item" href="../visitors-profile.html">
                    <img
                      src="../images/icons/user.png"
                      alt=""
                      width={25}
                      className="mx-3"
                    />{" "}
                    Profile
                  </a>
                  <a
                    className="dropdown-item"
                    href="../channels-pages/channels-main.html"
                  >
                    <img
                      src="../images/icons/shortcut-script-app.png"
                      className="mx-3"
                      alt=""
                      width={25}
                    />
                    Cheels
                  </a>
                  <a
                    className="dropdown-item"
                    href="../channels-pages/group-channels-pages/group-channel-main.html"
                  >
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
                      src="assets/images/icons/conveyor-belt.png"
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
                  <a
                    className="dropdown-item"
                    href="../channels-pages/channels-main.html"
                  >
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
                  <a
                    className="dropdown-item"
                    href="../channels-pages/channels-main.html"
                  >
                    <img
                      src="../images/icons/smartphone-call.png"
                      className="mx-3"
                      alt=""
                      width={25}
                    />
                    Device Setting
                  </a>
                  <a
                    className="dropdown-item"
                    href="../channels-pages/channels-main.html"
                  >
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
                <button
                  href="javascript:void(0);"
                  className=" rounded-circle p-2"
                >
                  <img
                    src="../images/icons/home.png "
                    width={18}
                    alt=""
                  />
                </button>
                <button
                  href="javascript:void(0);"
                  className="rounded-circle p-2"
                >
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit,
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit,
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit,
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit,
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit,
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit,
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
                  <div className="help">
                    <a href="javascript:void(0);">
                      <i className="fa-regular fa-circle-question" />
                      help{" "}
                    </a>
                  </div>
                </ul>
              </div>
              <hr color="javascript:void(0);D9D9D9" style={{ height: 3 }} />
              <div className="extra-links">
                <ul>
                  <li>
                    <a href="javascript:void(0);">Refund Policy</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Termss OF Use</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Affiliates</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Acceptabel use Policy</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Cookie Policy</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Language</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Monitization</a>
                  </li>
                </ul>
              </div>
            </nav>
            {/* sidebar ends */}
          </div>

          <div className=" margin-side">
  <div className="username-info">
    <p className="col-5  usernamed mt-2 text-center">
      <b>
        {" "}
        Hi{"{"}username{"}"} You requested the follow:
      </b>
      Group Audio calls recorded
    </p>
    <div className="user-data">
      <div className="data d-flex justify-content-start">
        <div className="user text-center">
          <img
            src="../images/icons/mic_double.png"
            className="img-mic  "
            alt=""
          />
        </div>
        <div className="col-8 info">
          You requested to listen later a group audio call of{" "}
          <b className="duration">
            {"{"}duration of audio{"}"}
          </b>
          from{" "}
          <b className="group-name">
            {"{"}Group name{"}"}
          </b>{" "}
          on <span className="minutes"> 10 minutes</span>
        </div>
        <div className="dots mt-4">
          <i
            className="fa-solid fa-ellipsis-vertical dropdown"
            id="dropdownId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
        </div>
      </div>
    </div>
    <div className="user-data mt-3">
      <div className="data d-flex justify-content-start">
        <div className="user text-center">
          <img
            src="../images/icons/mic_double.png"
            className="img-mic  "
            alt=""
          />
        </div>
        <div className="col-8 info">
          You requested to listen later a group audio call of{" "}
          <b className="duration">
            {"{"}duration of audio{"}"}
          </b>
          from{" "}
          <b className="group-name">
            {"{"}Group name{"}"}
          </b>{" "}
          on <span className="minutes"> 3 days ago</span>
        </div>
        <div className="dots mt-4">
          <i
            className="fa-solid fa-ellipsis-vertical dropdown"
            id="dropdownId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
        </div>
      </div>
    </div>
    <div className="user-data mt-3">
      <div className="data d-flex justify-content-start">
        <div className="user text-center">
          <img
            src="../images/icons/mic_double.png"
            className="img-mic  "
            alt=""
          />
        </div>
        <div className="col-8 info ">
          You requested to listen later a group audio call of{" "}
          <b className="duration">
            {"{"}duration of audio{"}"}
          </b>
          from{" "}
          <b className="group-name">
            {"{"}Group name{"}"}
          </b>{" "}
          on <span className="minutes"> 28 days</span>{" "}
          <span className="days-left">-2 days left</span>
        </div>
        <div className="dots mt-4">
          <i
            className="fa-solid fa-ellipsis-vertical dropdown"
            id="dropdownId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
        </div>
      </div>
    </div>
    <p className="recorded-calls text-center mt-2">
      Group video calls recorded
    </p>
    <div className="user-data mt-3">
      <div className="data d-flex justify-content-start">
        <div className="user text-center">
          <img
            src="../images/icons/mic_double.png"
            className="img-mic  "
            alt=""
          />
        </div>
        <div className="col-8 info">
          You requested to listen later a group audio call of{" "}
          <b className="duration">
            {"{"}duration of audio{"}"}
          </b>
          from{" "}
          <b className="group-name">
            {"{"}Group name{"}"}
          </b>{" "}
          on 16/11/2023
        </div>
        <div className="dots mt-4">
          <i
            className="fa-solid fa-ellipsis-vertical dropdown"
            id="dropdownId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
        </div>
      </div>
    </div>
    <div className="user-data mt-3">
      <div className="data d-flex justify-content-start">
        <div className="user text-center">
          <img
            src="../images/icons/mic_double.png"
            className="img-mic  "
            alt=""
          />
        </div>
        <div className="col-8 info">
          You requested to listen later a group audio call of{" "}
          <b className="duration">
            {"{"}duration of audio{"}"}
          </b>
          from{" "}
          <b className="group-name">
            {"{"}Group name{"}"}
          </b>{" "}
          on 16/11/2023
        </div>
        <div className="dots mt-4">
          <i
            className="fa-solid fa-ellipsis-vertical dropdown"
            id="dropdownId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
        </div>
      </div>
    </div>
    <div className="user-data mt-3">
      <div className="data d-flex justify-content-start">
        <div className="user text-center">
          <img
            src="../images/icons/mic_double.png"
            className="img-mic  "
            alt=""
          />
        </div>
        <div className="col-8 info">
          You requested to listen later a group audio call of{" "}
          <b className="duration">
            {"{"}duration of audio{"}"}
          </b>
          from{" "}
          <b className="group-name">
            {"{"}Group name{"}"}
          </b>{" "}
          on 16/11/2023
        </div>
        <div className="dots mt-4">
          <i
            className="fa-solid fa-ellipsis-vertical dropdown"
            id="dropdownId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
        </div>
      </div>
    </div>
    <div className="user-data mt-3">
      <div className="data d-flex justify-content-start">
        <div className="user text-center">
          <img
            src="../images/icons/mic_double.png"
            className="img-mic  "
            alt=""
          />
        </div>
        <div className="col-8 info">
          You requested to listen later a group audio call of{" "}
          <b className="duration">
            {"{"}duration of audio{"}"}
          </b>
          from{" "}
          <b className="group-name">
            {"{"}Group name{"}"}
          </b>{" "}
          on 16/11/2023
        </div>
        <div className="dots mt-4">
          <i
            className="fa-solid fa-ellipsis-vertical dropdown"
            id="dropdownId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
        </div>
      </div>
    </div>
    <div className="recording-info mt-5">
      <p className="col-11">
        Hi {"{"}Username{"}"}, Your recordings will be deleted after a period of
        30 days. You're advised to download all recordings to your device before
        you could loose them.
      </p>
    </div>
  </div>
  <div className="continue text-center">
    <a href="/Groupvideosecond">
      <button className="btn btn-primary">Continue to Next</button>
    </a>
  </div>
</div>




           {/* right sidebar starts  */}
           <div className=" right-sidebar-section  ">
            {/* section right-side-bar start */}
            <div className="continer-fluid  ">
              {/* video section */}
              <div className="truck-info">
                <div className="truck d-flex justify-content-center ">
                  <img
                    src="../images/Rectangle 5166.png"
                    className="img-truck"
                    alt=""
                  />
                  <div className="title-info">
                    <div className="title">
                      <span>
                        Title {"{"}Today let's talk about this new technoloy
                        innovations that come out{"}"} everyday
                      </span>
                    </div>
                    <div className="info">
                      <span>
                        Descriptio {"{"}Today let's talk about this new
                        technoloy innovations that come out{"}"} everyday
                      </span>
                    </div>
                  </div>
                </div>
                <div className="sponsorship mt-4 d-flex">
                  <p className="sponsor">
                    Sponsored by{" "}
                    <span>
                      {"{"}Advertiser's name{"}"}
                    </span>
                  </p>
                  <button className=" btn-sub">Subscribe</button>
                </div>
              </div>
              <div className="burger-info mt-1">
                <img
                  src="../images/Group 18484 (1).png"
                  className="burger-img"
                  alt=""
                />
              </div>
              <p className="label-feature ">Featured</p>
              <div className="feature-main justify-content-start ">
                <div className=" mt-4 d-flex">
                  <img
                    src="../images/col2.jpg"
                    className="img-feature1 "
                    alt=""
                  />
                  <img
                    src="../images/col2.jpg"
                    className="img-feature2 "
                    alt=""
                  />
                </div>
                <div className="lorem-ipsum justify-content-start mt-1 d-flex ">
                  <p className="col-5 lorem-ip1">
                    Lorem ipsum dolor sit amet...
                  </p>
                  <p className="col-5 lorem-ip2">
                    Lorem ipsum dolor sit amet...
                  </p>
                </div>
                <div className="one-million d-flex justify-content-start">
                  <p className="million1">1 million views</p>
                  <p className="million2">1 million views</p>
                </div>
              </div>
              <div className="video-camera mt-1">
                <div className="icons-img">
                  <div className="vector-1 justify-content-between align-items-center">
                    <img
                      src="../images/icons/Vector3.png"
                      className="img-heart justify-content-between text-center"
                      alt=""
                    />
                    <p className="text-five"> 5000</p>
                  </div>
                  <div className="vector-2">
                    <img src="../images/icons/Vector (1).png" alt="" />
                    <p className="text-five"> 6000</p>
                  </div>
                  <div className="vector-3">
                    <img src="../images/icons/Vector (2).png" alt="" />
                    <p className="text-five"> 7000</p>
                  </div>
                  <div className=" img-vector d-flex">
                    <img
                      src="../images/icons/Avatar.png"
                      className="avatar"
                      alt=""
                    />
                    <p className="col-2 username ">user name</p>
                  </div>
                  <button className=" btn btn-visit">Visit shop </button>
                  <h6 className="explore">Explore our product catalog camer</h6>
                </div>
              </div>
              <div className="feature-main justify-content-start ">
                <div className="feature-images text-center">
                  <img
                    src="../images/icons/XMLID_504_.png"
                    className="play text-center "
                    alt=""
                  />
                </div>
                <div className="site">
                  <div className="visit-site  justify-content-between  text-center d-flex">
                    <p className="img-visit  mt-3">VISIT SITE</p>
                    <img
                      src="../images/icons/Visit site icon.png"
                      className="visit-pic mt-3 "
                      alt=""
                    />
                  </div>
                </div>
                <div className="lorem-ipsum justify-content-start mt-1  ">
                  <p className=" web-title">Your website titile</p>
                  <p className="subtitle">
                    Subtitle with amazing features and benefits
                  </p>
                </div>
                <div className="ad-main  d-flex">
                  <p className="ad  pt-1 text-center">Ad</p>
                  <p className="text-center your-product ">Your product name</p>
                </div>
              </div>
            </div>
            {/* <div class="sponsorship mt-3 truck-info d-flex">
                      <p class="sponsor">Sponsored by</p>
                      <button class=" btn-sub">Subscribe</button>
                  </div> */}
          </div>
    </div>
</div>

        </>
    )
}

export default Groupchatsecond;