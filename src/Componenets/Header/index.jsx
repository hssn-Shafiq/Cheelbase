import React, { useState, useEffect } from "react";
import { useAuth } from "../../AuthContext";

// import "../Header/Header.css"

const Header = () => {
  const { user, logout } = useAuth();
  const [localUser, setLocalUser] = useState(null);

  useEffect(() => {
    const localUserData = localStorage.getItem("user");
    if (localUserData) {
      setLocalUser(JSON.parse(localUserData));
    }
  }, []);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid">
            <a className="navbar-brand" href="/Home">
              <img
                src="images/cheelbase-logo.png"
                alt=""
                width={41}
                style={{ width: 30 }}
              />
              Cheelbase
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
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
                    href="#"
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
                    <a className="dropdown-item" href="gallery.html">
                      Gallery
                    </a>
                    <a className="dropdown-item" href="productpage.html">
                      Products
                    </a>
                    <a className="dropdown-item" href="#">
                      Food Items
                    </a>
                    <a className="dropdown-item" href="property.html">
                      Properties
                    </a>
                  </div>
                </li>
                <li className="nav-item chat-link-item">
                  <a className="nav-link" href="#">
                    Chats <span>174</span>
                  </a>
                </li>
                <li className="nav-item chat-link-item">
                  <a className="nav-link" href="#">
                    Calls <span>4</span>
                  </a>
                </li>
                <li className="nav-item chat-link-item">
                  <a className="nav-link" href="#">
                    Status <span>14</span>
                  </a>
                </li>
                <li className="nav-item chat-link-item">
                  <a className="nav-link" href="#">
                    Updates <span>7</span>
                  </a>
                </li>
              </ul>
              <form className="d-flex  nav-icon">
                {/* <input class="form-control me-sm-2" type="text" placeholder="Search">
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                <div className="notifications d-flex">
                  <div>
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
                        <a className="dropdown-item" href="#">
                          <img
                            src="images/icons/camera.png"
                            alt=""
                            width={25}
                            className="mx-3"
                          />
                          Status
                        </a>
                        <a className="dropdown-item" href="gallery.html">
                          <img
                            src="images/icons/mobile-video.png"
                            className="mx-3"
                            alt=""
                            width={25}
                          />
                          Contact Chats
                        </a>
                        <a className="dropdown-item" href="cheels.html">
                          <img
                            src="images/icons/tv-monitor.png"
                            alt=""
                            className="mx-3"
                            width={25}
                          />
                          Channel
                        </a>
                        <a className="dropdown-item" href="video.html">
                          <img
                            src="images/icons/picture.png"
                            alt=""
                            className="mx-3"
                            width={25}
                          />
                          Gallery
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
                </div>
                <div className="user d-flex flex-row">
                  {localUser ? (
                    <>
                      <img
                        src={localUser.image}
                        alt={localUser.fullname}
                        className="rounded-circle"
                        width={30}
                        height={30}
                      />
                      <label htmlFor="user" className="mt-1">
                        {localUser.fullname}
                      </label>
                    </>
                  ) : (
                    <span>No user logged in</span>
                  )}
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
                        {localUser ? (
                    <>
                      <img
                        src={localUser.image}
                        alt={localUser.fullname}
                        className="rounded-circle"
                        width={30}
                        height={30}
                      />
                      <label htmlFor="user" className="mt-1">
                        {localUser.fullname}
                      </label>
                    </>
                  ) : (
                    <span>No user logged in</span>
                  )}
                        
                        </div>
                      </div>
                      <a className="dropdown-item wallet-items" href="#">
                        <img
                          src="images/icons/wallet.png"
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
                          src="images/icons/point.png"
                          className="mx-3"
                          alt=""
                          width={20}
                        />
                        Points:
                        <span>14,701</span>
                      </a>
                      <a
                        href="#"
                        className="dropdown-item text-end cheelbase-pro-btn"
                      >
                        <button className="btn ">Cheelbase pro</button>
                      </a>
                      <hr className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        <img
                          src="images/icons/setting.png"
                          alt=""
                          width={25}
                          className="mx-3"
                        />{" "}
                        Settings
                      </a>
                      <a className="dropdown-item" href="gallery.html">
                        <img
                          src="images/icons/connection.png"
                          className="mx-3"
                          alt=""
                          width={25}
                        />
                        Channels
                      </a>
                      <a className="dropdown-item" href="cheels.html">
                        <img
                          src="images/icons/group.png"
                          alt=""
                          className="mx-3"
                          width={25}
                        />
                        Full Groups
                      </a>
                      <a className="dropdown-item" href="video.html">
                        <img
                          src="images/icons/contact-book.png"
                          alt=""
                          className="mx-3"
                          width={25}
                        />
                        Contact
                      </a>
                      <a className="dropdown-item" href="resturants.html">
                        <img
                          src="images/icons/phone-call.png"
                          className="mx-3"
                          alt=""
                          width={25}
                        />
                        Calls{" "}
                      </a>
                      <a className="dropdown-item" href="property.html">
                        <img
                          src="images/icons/link.png"
                          alt=""
                          className="mx-3"
                          width={25}
                        />
                        Link Devices
                      </a>
                      <a className="dropdown-item" href="#">
                        <img
                          src="images/icons/agenda.png"
                          alt=""
                          className="mx-3"
                          width={25}
                        />
                        Save Messeges
                      </a>
                      <a className="dropdown-item" href="#">
                        <img
                          src="images/icons/crowd.png"
                          alt=""
                          className="mx-3"
                          width={25}
                        />
                        Invite Friends
                      </a>
                      <a className="dropdown-item" href="#">
                        <img
                          src="images/icons/customer-service.png"
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
    </>
  );
};
export default Header;
