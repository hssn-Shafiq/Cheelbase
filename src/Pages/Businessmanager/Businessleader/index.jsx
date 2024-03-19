import React from "react";
import '../Businessleader/Businessleader.css';
import '../Supportchat/nav.css';

const Businessleader = () => {
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
<div className="container-fliud max-width">
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
    <div className=" margin-side">
      <h3 className="leader text-center mt-2">CheelBase leaderboard</h3>
      <div className="leadership justify-content-between align-items-center mt-5 d-flex">
        <div className="col-md-4  leaderboard-detail-4 ">
          <div className="leader-detail justify-content-evenly align-items-center d-flex">
            <p className="number2 text-center">1</p>
            <img
              src="../images/Ellipse 346.png"
              className="img-ellipsse"
              alt=""
            />
          </div>
          <div className="cheelbase-info">
            <div className="icons mt-2 ms-5 d-flex">
              <p className="cheelbase ms-3">Cheelbase</p>
              <img
                src="../images/icons/tick.png"
                className="img-tick ms-3"
                alt=""
              />
              <img
                src="../images/icons/Ellipse 40.png"
                className="img-tick ms-2"
                alt=""
              />
            </div>
            <p className="cheelbas text-center ">@cheelbas......</p>
            <div className="group-views mt-5 ms-4  align-items-center text-center d-flex">
              <div className="groupp  d-flex">
                <img
                  src="../images/icons/group.png"
                  className="img-visibility"
                  alt=""
                />
                <p className="million-subscribers ms-2">9m subscribers</p>
              </div>
              <div className="views ms-4 d-flex">
                <img
                  src="../images/icons/visibility.png"
                  className="img-visibility"
                  alt=""
                />
                <p className="million-views ms-2">90m views</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ms-4 leaderboard-detail-5 ">
          <div className="leader-detail justify-content-evenly align-items-center d-flex">
            <p className="number2 text-center">2</p>
            <img
              src="../images/Ellipse 346.png"
              className="img-ellipsse"
              alt=""
            />
          </div>
          <div className="cheelbase-info">
            <div className="icons mt-2 ms-5 d-flex">
              <p className="cheelbase ms-3">vicent</p>
              <img
                src="../images/icons/tick.png"
                className="img-tick ms-3"
                alt=""
              />
              <img
                src="../images/icons/Ellipse 40.png"
                className="img-tick ms-2"
                alt=""
              />
            </div>
            <p className="cheelbas text-center ">@vicent......</p>
            <div className="group-views mt-5 ms-4  align-items-center text-center d-flex">
              <div className="groupp  d-flex">
                <img
                  src="../images/icons/group.png"
                  className="img-visibility"
                  alt=""
                />
                <p className="million-subscribers ms-2">7.2m subscribers</p>
              </div>
              <div className="views ms-4 d-flex">
                <img
                  src="../images/icons/visibility.png"
                  className="img-visibility"
                  alt=""
                />
                <p className="million-views ms-2">7.9m views</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 leaderboard-detail-6 ms-4">
          <div className="leader-detail justify-content-evenly align-items-center d-flex">
            <p className="number2 text-center">3</p>
            <img
              src="../images/Ellipse 346.png"
              className="img-ellipsse"
              alt=""
            />
          </div>
          <div className="cheelbase-info">
            <div className="icons mt-2 ms-5 d-flex">
              <p className="cheelbase ms-3">oklpao</p>
              <img
                src="../images/icons/tick.png"
                className="img-tick ms-3"
                alt=""
              />
              <img
                src="../images/icons/Ellipse 40.png"
                className="img-tick ms-2"
                alt=""
              />
            </div>
            <p className="cheelbas text-center ">@oklpao......</p>
            <div className="group-views mt-5 ms-4  align-items-center text-center d-flex">
              <div className="groupp  d-flex">
                <img
                  src="../images/icons/group.png"
                  className="img-visibility"
                  alt=""
                />
                <p className="million-subscribers ms-2">7.1m subscribers</p>
              </div>
              <div className="views ms-4 d-flex">
                <img
                  src="../images/icons/visibility.png"
                  className="img-visibility"
                  alt=""
                />
                <p className="million-views ms-2">7m views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="leadership-2 mt-5 d-flex">
        <div className="col-md-4  leaderboard-detail-4 ">
          <div className="leader-detail justify-content-evenly align-items-center d-flex">
            <p className="number2 text-center">4</p>
            <img
              src="../images/Ellipse 346.png"
              className="img-ellipsse"
              alt=""
            />
          </div>
          <div className="cheelbase-info">
            <div className="icons mt-2 ms-5 d-flex">
              <p className="cheelbase ms-3">Cheelbase</p>
              <img
                src="../images/icons/tick.png"
                className="img-tick ms-3"
                alt=""
              />
              <img
                src="../images/icons/Ellipse 40.png"
                className="img-tick ms-2"
                alt=""
              />
            </div>
            <p className="cheelbas text-center ">@cheelbas......</p>
            <div className="group-views mt-5 ms-4  align-items-center text-center d-flex">
              <div className="groupp  d-flex">
                <img
                  src="../images/icons/group.png"
                  className="img-visibility"
                  alt=""
                />
                <p className="million-subscribers ms-2">9m subscribers</p>
              </div>
              <div className="views ms-4 d-flex">
                <img
                  src="../images/icons/visibility.png"
                  className="img-visibility"
                  alt=""
                />
                <p className="million-views ms-2">90m views</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ms-4 leaderboard-detail-5 ">
          <div className="leader-detail justify-content-evenly align-items-center d-flex">
            <p className="number2 text-center">5</p>
            <img
              src="../images/Ellipse 346.png"
              className="img-ellipsse"
              alt=""
            />
          </div>
          <div className="cheelbase-info">
            <div className="icons mt-2 ms-5 d-flex">
              <p className="cheelbase ms-3">vicent</p>
              <img
                src="../images/icons/tick.png"
                className="img-tick ms-3"
                alt=""
              />
              <img
                src="../images/icons/Ellipse 40.png"
                className="img-tick ms-2"
                alt=""
              />
            </div>
            <p className="cheelbas text-center ">@vicent......</p>
            <div className="group-views mt-5 ms-4  align-items-center text-center d-flex">
              <div className="groupp  d-flex">
                <img
                  src="../images/icons/group.png"
                  className="img-visibility"
                  alt=""
                />
                <p className="million-subscribers ms-2">7.2m subscribers</p>
              </div>
              <div className="views ms-4 d-flex">
                <img
                  src="../images/icons/visibility.png"
                  className="img-visibility"
                  alt=""
                />
                <p className="million-views ms-2">7.9m views</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 leaderboard-detail-6 ms-4">
          <div className="leader-detail justify-content-evenly align-items-center d-flex">
            <p className="number2 text-center">6</p>
            <img
              src="../images/Ellipse 346.png"
              className="img-ellipsse"
              alt=""
            />
          </div>
          <div className="cheelbase-info">
            <div className="icons mt-2 ms-5 d-flex">
              <p className="cheelbase ms-3">oklpao</p>
              <img
                src="../images/icons/tick.png"
                className="img-tick ms-3"
                alt=""
              />
              <img
                src="../images/icons/Ellipse 40.png"
                className="img-tick ms-2"
                alt=""
              />
            </div>
            <p className="cheelbas text-center ">@oklpao......</p>
            <div className="group-views mt-5 ms-4  align-items-center text-center d-flex">
              <div className="groupp  d-flex">
                <img
                  src="../images/icons/group.png"
                  className="img-visibility"
                  alt=""
                />
                <p className="million-subscribers ms-2">7.1m subscribers</p>
              </div>
              <div className="views ms-4 d-flex">
                <img
                  src="../images/icons/visibility.png"
                  className="img-visibility"
                  alt=""
                />
                <p className="million-views ms-2">7m views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div class="person-two">
              <div class="shield">
                  <img src="../images/icons/shield_person.png" class="img-shield" alt="">
          
              </div>
              <div class="oval">
                 
                  <div class="online-2">
                      <img src="../images/icons/Oval 2.png" class="img-online" alt="">
             
                  </div>
                
              </div>
         
          <div class="voice d-flex">
              <img src="../images/icons/Group 18534.png" class="img-voice" alt="">
              <p class="img-name mt-1">Reese</p>
          </div>
              
          </div>
    
          <div class="person-three">
              <div class="shield">
                  <img src="../images/icons/shield_person.png" class="img-shield" alt="">
          
              </div>
              <div class="oval">
                 
                  <div class="online-3">
                      <img src="../images/icons/Oval 2.png" class="img-online" alt="">
             
                  </div>
                
              </div>
         
          <div class="voice d-flex">
              <img src="../images/icons/Group 18534.png" class="img-voice" alt="">
              <p class="img-name mt-1">Jeffrey</p>
          </div>
              
          </div> */}
    {/* Sponsored section */}
    {/* <div class="mt-5 Sprd" id="Sponsored">
                          <div class="d-flex justify-content-between align-items-center  sprd-content">
                              <div class="h6">Sponsored</div>
                              <button type="button"
                                  onclick="document.getElementById('Sponsored').style.display='none'" class="btn"><i
                                      class="fa-solid fa-xmark"></i></button>
                          </div>
                          <img src="assets/images/g4.jpg" width="100%" alt="img">
                      </div> */}
  </div>
</div>

        </>
    );

}

export default Businessleader;