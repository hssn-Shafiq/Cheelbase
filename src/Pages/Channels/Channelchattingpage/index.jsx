import React from "react";
import "../Channelchattingpage/nav.css";
import "../Channelchattingpage/Channelchattingpage.css";

const Channelchattingpage = () => {
  return (
    <>
      {/* navbar starts */}
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
                    <a className="dropdown-item" href="cheels.html">
                      Cheels
                    </a>
                    <a className="dropdown-item" href="javascript-void(0);">
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
                  <a
                    className="nav-link"
                    href="/channels-pages/channel-chating-page.html"
                    target="_blank"
                  >
                    Chats <span>174</span>
                  </a>
                </li>
                <li className="nav-item chat-link-item">
                  <a className="nav-link" href="javascript:void(0);">
                    Calls <span>4</span>
                  </a>
                </li>
                <li className="nav-item chat-link-item">
                  <a className="nav-link" href="/status-pages/status.html">
                    Status <span>14</span>
                  </a>
                </li>
                <li className="nav-item chat-link-item">
                  <a className="nav-link" href="javascript:void(0);">
                    Updates <span>7</span>
                  </a>
                </li>
              </ul>
              <form className="d-flex  nav-icon">
                {/* <input class="form-control me-sm-2" type="text" placeholder="Search">
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                <div className="notifications d-flex">
                  <div className="camera-div">
                    <li
                      className="dropdown dropstart"
                      id="dropdownId"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-circle-plus" />
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownId"
                      >
                        <a
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          href="#exampleModalToggle"
                          role="button"
                        >
                          Go Live
                        </a>
                        <a
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          href="#exampleModalToggle6"
                          role="button"
                        >
                            CB-Room
                        </a>
                      </div>
                    </li>
                  </div>
                  <div>
                    <i className="fa-solid fa-phone" />
                  </div>
                  <div>
                    <i className="fa-regular fa-message" />
                  </div>
                  <div>
                    <i className="fa-solid fa-bell" />
                  </div>
                  <div className="camera-div">
                    <li
                      className="dropdown dropstart"
                      id="dropdownId"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-camera" />
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownId"
                      >
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
                          href="/channels-pages/channels-main.html"
                        >
                          <img
                            src="../images/icons/mobile-video.png"
                            className="mx-3"
                            alt=""
                            width={25}
                          />
                          Contact Chats
                        </a>
                        <a className="dropdown-item" href="cheels.html">
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
                    src="../images/thubnail.jpeg"
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
                    <div
                      className="dropdown-menu account-dropdown-menu"
                      aria-labelledby="dropdownId"
                    >
                      <div className="accounts-title d-flex align-items-center justify-content-evenly">
                        <div className="user d-flex flex-row ">
                          <img
                            src="../images/thubnail.jpeg"
                            alt="Chat 1"
                            className=" rounded-circle"
                            width={30}
                            height={30}
                          />
                          <label htmlFor="user" className="mt-1">
                            @marinaojak
                          </label>
                        </div>
                      </div>
                      <a
                        className="dropdown-item wallet-items"
                        href="javascript:void(0);"
                      >
                        <img
                          src="../images/icons/wallet.png"
                          alt=""
                          width={20}
                          className="mx-3"
                        />
                        Wallet:
                        <span>$800,09</span>
                      </a>
                      <a
                        className="dropdown-item wallet-items"
                        href="gallery.html"
                      >
                        <img
                          src="../images/icons/point.png"
                          className="mx-3"
                          alt=""
                          width={20}
                        />
                        Points:
                        <span>14,701</span>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item text-end cheelbase-pro-btn"
                      >
                        <button className="btn ">Cheelbase pro</button>
                      </a>
                      <hr className="dropdown-divider" />
                      <a className="dropdown-item" href="javascript:void(0);">
                        <img
                          src="../images/icons/setting.png"
                          alt=""
                          width={25}
                          className="mx-3"
                        />
                        Settings
                      </a>
                      <a
                        className="dropdown-item"
                        href="/channels-pages/channels-main.html"
                      >
                        <img
                          src="../images/icons/connection.png"
                          className="mx-3"
                          alt=""
                          width={25}
                        />
                        Channels
                      </a>
                      <a
                        className="dropdown-item"
                        href="group-channels-pages/group-channel-main.html"
                      >
                        <img
                          src="../images/icons/group.png"
                          alt=""
                          className="mx-3"
                          width={25}
                        />
                        Full Groups
                      </a>
                      <a className="dropdown-item" href="video.html">
                        <img
                          src="../images/icons/contact-book.png"
                          alt=""
                          className="mx-3"
                          width={25}
                        />
                        Contact
                      </a>
                      <a className="dropdown-item" href="resturants.html">
                        <img
                          src="../images/icons/phone-call.png"
                          className="mx-3"
                          alt=""
                          width={25}
                        />
                        Calls{" "}
                      </a>
                      <a className="dropdown-item" href="property.html">
                        <img
                          src="../images/icons/link.png"
                          alt=""
                          className="mx-3"
                          width={25}
                        />
                        Link Devices
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <img
                          src="../images/icons/agenda.png"
                          alt=""
                          className="mx-3"
                          width={25}
                        />
                        Save Messeges
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <img
                          src="../images/icons/crowd.png"
                          alt=""
                          className="mx-3"
                          width={25}
                        />
                        Invite Friends
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <img
                          src="../images/icons/customer-service.png"
                          alt=""
                          className="mx-3"
                          width={25}
                        />
                        Cheelbase FAQ's
                      </a>
                    </div>
                  </li>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </header>
      {/* navbar ends  */}

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
                  <a
                    className="dropdown-item"
                    href="/channels-pages/channels-main.html"
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
                    href="group-channels-pages/group-channel-main.html"
                  >
                    <img
                      src="../images/icons/tv-monitor.png"
                      alt=""
                      className="mx-3"
                      width={25}
                    />
                    Video
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
                  <a
                    className="dropdown-item"
                    href="/channels-pages/channels-main.html"
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
                    href="/channels-pages/channels-main.html"
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
                    href="/channels-pages/channels-main.html"
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
                  <img src="../images/icons/home.png " width={18} alt="" />
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
          {/* sidebar column ends */}
          <div className="col-6 center-main p-0">
            <div className="container-fluid p-0 chatting-profile">
              <div className="row p-0 ps-4">
                <div className="col-md d-flex align-items-center gap-3">
                  <div className="image">
                    <img src="../images/Group 14(1).png" width={50} alt="" />
                  </div>
                  <div className="content">
                    <h3 className="title">
                      Dev's Channel{" "}
                      <img src="../images/icons/editor_choice.png" alt="" />
                    </h3>
                    <span>739k Subscriber</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid chatting-main">
              <div className="date text-center">
                <span>14/11/2023</span>
              </div>
              <div className="row announcement d-flex align-items-center my-2">
                <div className="col-md-2 image">
                  <img
                    src="../images/icons/messege.png"
                    width={60}
                    height={60}
                    alt=""
                  />
                </div>
                <div className="col-md announcement-content">
                  Today lets talk about this new technoloy innovations that come
                  out everyday
                </div>
              </div>
              <div className="chat-box-1 d-flex">
                <div className="image">
                  <img src="../images/Group 14.png" width={50} alt="" />
                </div>
                <div className="chat-content-box">
                  <div className="chat-profile-about chat-header d-flex align-items-center justify-content-between p-2 pe-3">
                    <h4 className="chat-profile-name">@cheelbase</h4>
                    <div className="chat-profile-number">
                      <div className="icons d-flex">
                        <img src="../images/icons/tick.png" alt="" />
                        <img src="../images/icons/crown.png" alt="" />
                        <span className="phone">12********</span>
                      </div>
                    </div>
                    <div className="chat-profile-lock">
                      <img src="../images/icons/visibility_lock.png" alt="" />
                      <span className="time">16:19</span>
                    </div>
                  </div>
                  <div className="chat-image pt-2">
                    <img src="../images/burger-off.png" alt="" />
                  </div>
                  <div className=" chat-footer p-3">
                    <p>
                      I want to bring this burger to your house tonight if that
                      is ok with your roomates?
                    </p>
                    <div className="viewers text-end">
                      <span>15 view</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-box-2 ">
                <div className="msg-1 p-2">
                  <p>Yes please no problem bring</p>
                  <div className="time text-end">
                    <span>16:19</span>
                  </div>
                  <span className="viewed">15 viewed</span>
                </div>
                <div className="msg-1 msg-2 p-2 mt-1">
                  <p>Yes please no problem bring</p>
                  <div className="time text-end">
                    <span>16:19</span>
                  </div>
                  <span className="viewed">15 viewed</span>
                </div>
              </div>
              <div className="chat-box-1 chat-box-3 d-flex ">
                <div className="image">
                  <img src="../images/Group 14.png" width={50} alt="" />
                </div>
                <div className="chat-content-box">
                  <div className="chat-profile-about chat-header d-flex align-items-center justify-content-between p-2 pe-3">
                    <h4 className="chat-profile-name">@cheelbase</h4>
                    <div className="chat-profile-number">
                      <div className="icons d-flex">
                        <img src="../images/icons/tick.png" alt="" />
                        <img src="../images/icons/crown.png" alt="" />
                        <span className="phone">12********</span>
                      </div>
                    </div>
                    <div className="chat-profile-lock">
                      <img src="../images/icons/visibility_lock.png" alt="" />
                      <span className="time">16:19</span>
                    </div>
                  </div>
                  <div className=" chat-footer p-3">
                    <p>
                      I want to bring this burger to your house tonight if that
                      is ok with your roomates?
                    </p>
                    <div className="viewers text-end">
                      <span>15 view</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-box-2 ">
                <div className="msg-1 p-2">
                  <p>Yes please no problem bring</p>
                  <div className="time text-end">
                    <span>16:19</span>
                  </div>
                  <span className="viewed">15 viewed</span>
                </div>
                <div className="msg-1 msg-2 p-2 mt-1">
                  <p>Yes please no problem bring</p>
                  <div className="time text-end">
                    <span>16:19</span>
                  </div>
                  <span className="viewed">15 viewed</span>
                </div>
              </div>
              <div className="chat-box-1 chat-box-3 ">
                <div className="inner d-flex">
                  <div className="image">
                    <img src="../images/Group 14.png" width={50} alt="" />
                  </div>
                  <div className="chat-content-box">
                    <div className="chat-profile-about chat-header d-flex align-items-center justify-content-between p-2 pe-3">
                      <h4 className="chat-profile-name">@cheelbase</h4>
                      <div className="chat-profile-number">
                        <div className="icons d-flex">
                          <img src="../images/icons/tick.png" alt="" />
                          <img src="../images/icons/crown.png" alt="" />
                          <span className="phone">12********</span>
                        </div>
                      </div>
                      <div className="chat-profile-lock">
                        <img src="../images/icons/visibility_lock.png" alt="" />
                        <span className="time">16:19</span>
                      </div>
                    </div>
                    <div className=" chat-footer p-3">
                      <p>
                        I want to bring this burger to your house tonight if
                        that is ok with your roomates?
                      </p>
                      <div className="viewers text-end">
                        <span>15 view</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inner d-flex mt-4">
                  <div className="image">
                    <img src="../images/Group 14.png" width={50} alt="" />
                  </div>
                  <div className="chat-content-box">
                    <div className="chat-profile-about chat-header d-flex align-items-center justify-content-between p-2 pe-3">
                      <h4 className="chat-profile-name">@cheelbase</h4>
                      <div className="chat-profile-number">
                        <div className="icons d-flex">
                          <img src="../images/icons/tick.png" alt="" />
                          <img src="../images/icons/crown.png" alt="" />
                          <span className="phone">12********</span>
                        </div>
                      </div>
                      <div className="chat-profile-lock">
                        <img src="../images/icons/visibility_lock.png" alt="" />
                        <span className="time">16:19</span>
                      </div>
                    </div>
                    <div className=" chat-footer p-3">
                      <p>
                        I want to bring this burger to your house tonight if
                        that is ok with your roomates?
                      </p>
                      <div className="viewers text-end">
                        <span>15 view</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* products section start */}
              <div
                className="container-fluid products section product-ad-1"
                id="product-ad-1"
              >
                <div className="container d-flex justify-content-end align-items-center ">
                  <i
                    className="fa-solid fa-xmark close-icon"
                    onclick="document.getElementById('product-ad-1').style.display= 'none';"
                  />
                </div>
                <div className="row products-cards-columns px-5 gap-4">
                  <div className="col-md product1 ">
                    <div className="card  product-card">
                      <img
                        src="../images/product.jpeg "
                        className="card-img-top"
                        alt="Product 1"
                      />
                      <div className="card-icons">
                        <i className="fab fa-whatsapp" />
                        <i className="fas fa-shopping-cart" />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Product 1</h5>
                        <div className="d-flex justify-content-between">
                          <p className="card-text">$20.00</p>
                          <a href="javascript:void(0);" className="view-more">
                            more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md product1">
                    <div className="card  product-card">
                      <img
                        src="../images/product.jpeg"
                        className="card-img-top"
                        alt="Product 2"
                      />
                      <div className="card-icons">
                        <i className="fab fa-whatsapp" />
                        <i className="fas fa-shopping-cart" />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Product 1</h5>
                        <div className="d-flex justify-content-between">
                          <p className="card-text">$20.00</p>
                          <a href="javascript:void(0);" className="view-more">
                            more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* product section end  */}
              <div className="chat-box-1  mt-0">
                <div className="inner d-flex">
                  <div className="image">
                    <img src="../images/Group 14.png" width={50} alt="" />
                  </div>
                  <div className="chat-content-box">
                    <div className="chat-profile-about chat-header d-flex align-items-center justify-content-between p-2 pe-3">
                      <h4 className="chat-profile-name">@cheelbase</h4>
                      <div className="chat-profile-number">
                        <div className="icons d-flex">
                          <img src="../images/icons/tick.png" alt="" />
                          <img src="../images/icons/crown.png" alt="" />
                          <span className="phone">12********</span>
                        </div>
                      </div>
                      <div className="chat-profile-lock">
                        <img src="../images/icons/visibility_lock.png" alt="" />
                        <span className="time">16:19</span>
                      </div>
                    </div>
                    <div className=" chat-footer p-3">
                      <p>
                        I want to bring this burger to your house tonight if
                        that is ok with your roomates?
                      </p>
                      <div className="viewers text-end">
                        <span>15 view</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inner d-flex mt-4">
                  <div className="image">
                    <img src="../images/Group 14.png" width={50} alt="" />
                  </div>
                  <div className="chat-content-box">
                    <div className="chat-profile-about chat-header d-flex align-items-center justify-content-between p-2 pe-3">
                      <h4 className="chat-profile-name">@cheelbase</h4>
                      <div className="chat-profile-number">
                        <div className="icons d-flex">
                          <img src="../images/icons/tick.png" alt="" />
                          <img src="../images/icons/crown.png" alt="" />
                          <span className="phone">12********</span>
                        </div>
                      </div>
                      <div className="chat-profile-lock">
                        <img src="../images/icons/visibility_lock.png" alt="" />
                        <span className="time">16:19</span>
                      </div>
                    </div>
                    <div className=" chat-footer p-3">
                      <p>
                        I want to bring this burger to your house tonight if
                        that is ok with your roomates?
                      </p>
                      <div className="viewers text-end">
                        <span>15 view</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right sidebar starts  */}
          <div className="col-3 right-sidebar-section">
            {/* section right-side-bar start */}
            <div className="continer-fluid ">
              {/* video section */}
              <div className="video" id="video">
                <button
                  type="button"
                  onclick="document.getElementById('video').style.display='none'"
                  className="btn"
                >
                  <i className="fa-solid fa-xmark" />
                </button>
                <img src="../images/video1.png" width="100%" alt="img" />
              </div>
              {/* feature section */}
              <div className="feature mt-3 ">
                <div className="h6">Feature </div>
                <div>
                  <div className="container-fluid">
                    <div className="row feature-child p-0">
                      <div className="col-sm-6 p-1 mt-0 ">
                        <img
                          src="../images/col1.jpg"
                          className="rounded"
                          alt="image"
                        />
                        <div className="mt-3">
                          <div className="p">Lorem ipsum, dolor</div>
                          <p>4k View 2Months ago</p>
                        </div>
                      </div>
                      <div className="col-sm-6 p-1 mt-0 ">
                        <img
                          src="../images/col2.jpg"
                          className="rounded"
                          alt="image"
                        />
                        <div className="mt-3">
                          <div className="p">Lorem ipsum, dolor</div>
                          <p>1 millions View</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sponsored section */}
              <div className="mt-5 Sprd" id="Sponsored">
                <div className="d-flex justify-content-between align-items-center  sprd-content">
                  <div className="h6">Sponsored</div>
                  <button
                    type="button"
                    onclick="document.getElementById('Sponsored').style.display='none'"
                    className="btn"
                  >
                    <i className="fa-solid fa-xmark" />
                  </button>
                </div>
                <img src="../images/g4.jpg" width="100%" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered align-items-start">
          <div className="modal-content">
            <div className="loader text-center mb-4">
              <img src="../images/icons/stream.png" width={100} alt="" />
            </div>
            <div className="modal-header justify-content-center">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                Subscribers of this channel will be notified once you live
              </h5>
            </div>
            <div className="modal-body">
              <span className="intro">You will be displayed on.</span>
              <div className="channels-name mt-4">
                <div className="channel d-flex align-items-center gap-3">
                  <img src="../images/Group 14.png" width={50} alt="" />
                  <div className="content">
                    <h4>
                      <b>Dev's Channel</b>
                    </h4>
                    <span>70m Subcriber</span>
                  </div>
                </div>
                <div className="channel d-flex align-items-center gap-3 mt-4">
                  <img src="../images/Group 14.png" width={50} alt="" />
                  <div className="content">
                    <h4>
                      <b>vicent</b>
                    </h4>
                    <span>personal account</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer bg-none justify-content-center flex-column mt-4">
              <button
                className="btn "
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Start live stream
              </button>
              <button
                className="btn  mt-4"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Schedule live stream
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal modal-2 fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered align-items-start">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel2">
                You’re about to go live on this channel?
              </h5>
            </div>
            <div className="modal-body">
              <div className="channel d-flex align-items-center gap-3">
                <img
                  src="../images/icons/fact_check.png"
                  className="mb-3"
                  width={50}
                  alt=""
                />
                <div className="content">
                  <b>You’re responsible for your livestream</b>
                  <p>
                    Your live stream need to follow our guidelines and is
                    reviewed against theme
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <a className="btn " href="/Videocall">
                Yes
              </a>
              <a
                className="btn "
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                No
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal modal-6 fade"
        id="exampleModalToggle6"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel6"
        tabIndex={-1}
      >
        <div className="modal-dialog  modal-content-6 ">
          <p
            className="modal-title6 ms-5 text-light "
            id="exampleModalToggleLabel6"
          >
            You want to make group audio call?
          </p>
          <div className="modal-body-6 ms-2 ">
            <div className="channel d-flex  align-items-center ms-5 gap-3">
              <img
                src="../images/icons/fact_check.png"
                className=""
                width={50}
                alt=""
              />
              <div className="content mt-5">
                <b>You’re responsible for your group call</b>
                <p>
                  Your group call need to follow our guidelines and is reviewed
                  against theme
                </p>
              </div>
            </div>
          </div>
          <div className="footer d-flex justify-content-evenly mt-5 ">
            <a href="/Videocall" className="btn text-light">Yes</a>
            <button className="btn text-danger" data-bs-dismiss="modal">
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Channelchattingpage;
