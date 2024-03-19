import React from "react";

const ChannelSidebar =()=>{
    return(
        <>
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
                    href="/ChannelMain"
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
                  <a className="dropdown-item" href="javascript:void(0);">
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
              <div className="row bg-light p-2   text-center chnl-mng-title">
                <strong>Channels Management</strong>
              </div>
            </nav>
            {/* sidebar ends */}
          </div>
        </>
    );
}
export default ChannelSidebar;