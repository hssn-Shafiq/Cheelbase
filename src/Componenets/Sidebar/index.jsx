import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="col-12 col-md-3 left-sidebar-main ps-3">
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
            src="images/user-account.png"
            className="c-pointer mt-[-2px]"
            alt="switch account"
            width={25}
          />
        </div>
        <Link className="dropdown-item"  to="/VisitorProfile">
          <img
            src="images/icons/user.png"
            alt=""
            width={25}
            className="mx-3"
          />{" "}
          Profile
        </Link>
        <Link className="dropdown-item" to="/ChannelMain">
          <img
            src="images/icons/shortcut-script-app.png"
            className="mx-3"
            alt=""
            width={25}
          />
          Cheels
        </Link>
        <Link className="dropdown-item" to="/FullVideo">
          <img
            src="images/icons/tv-monitor.png"
            alt=""
            className="mx-3"
            width={25}
          />
          Full Video
        </Link>
        <Link className="dropdown-item" to="/Gallery">
          <img
            src="images/icons/picture.png"
            alt=""
            className="mx-3"
            width={25}
          />
          Gallery
        </Link>
        <Link className="dropdown-item" to="/Resturants">
          <img
            src="images/icons/conveyor-belt.png"
            className="mx-3"
            alt=""
            width={25}
          />
          Resturants{" "}
        </Link>
        <Link className="dropdown-item" to="/Products">
          <img
            src="images/icons/user.png"
            alt=""
            className="mx-3"
            width={25}
          />
          Products
        </Link>
        <Link className="dropdown-item" to="/Property">
          <img
            src="images/icons/house.png"
            alt=""
            className="mx-3"
            width={25}
          />
          Properties
        </Link>
        <hr className="dropdown-divider" />
        <Link className="dropdown-item" to="/Verificationmain">
          <img
            src="images/icons/verified.png"
            alt=""
            width={25}
            className="mx-3"
          />{" "}
          Verification
        </Link>
        <Link className="dropdown-item" to="/Monetizeaccount">
          <img
            src="images/icons/money.png"
            className="mx-3"
            alt=""
            width={25}
          />
          Monitization
        </Link>
        <hr className="dropdown-divider" />
        <Link className="dropdown-item" to="/MarketPlace">
          <img
            src="images/icons/convenience-store.png"
            alt=""
            width={25}
            className="mx-3"
          />{" "}
          Marketplace
        </Link>
        <Link className="dropdown-item" to="#">
          <img
            src="images/icons/smartphone-call.png"
            className="mx-3"
            alt=""
            width={25}
          />
          Device Setting
        </Link>
        <Link className="dropdown-item" to="#">
          <img
            src="images/icons/hotspot.png"
            className="mx-3"
            alt=""
            width={25}
          />
          Updates
        </Link>
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
      <button href="#" className=" rounded-circle p-2">
        <img src="images/icons/home.png " width={18} alt="" />
      </button>
      <button href="#" className="rounded-circle p-2">
        All
      </button>
      <button href="#" className="rounded-5 p-2">
        Status <span>174</span>
      </button>
      <button href="#" className="rounded-5 p-2">
        channels <span>23</span>
      </button>
    </div>
    <div className="row buttons-group2 mb-4 d-flex flex-row justify-content-around">
      <button href="#" className="rounded-5 p-2">
        Favourites <span>12</span>
      </button>
      <button href="#" className="rounded-5 p-2">
        Status <span>174</span>
      </button>
      <button href="#" className="rounded-5 p-2">
        channels <span>23</span>
      </button>
    </div>
    <div>
      <ul className="nav flex-column">
        <li className="nav-item child">
          <h2>Recent Chats</h2>
          {/* Chat items */}
          <div className="parent">
            <div>
              {" "}
              <img
                src="images/thubnail.jpeg"
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
                src="images/thubnail.jpeg"
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
                src="images/thubnail.jpeg"
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
                src="images/thubnail.jpeg"
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
                src="images/thubnail.jpeg"
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
                src="images/thubnail.jpeg"
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
    <hr color="#D9D9D9" style={{ height: 3 }} />
    <div className="explore-more">
      <ul>
        <h5>Explore More</h5>
        <div className="help">
          <Link to="#">
            <i className="fa-regular fa-circle-question" />
            help{" "}
          </Link>
        </div>
      </ul>
    </div>
    <hr color="#D9D9D9" style={{ height: 3 }} />
    <div className="extra-links">
      <ul>
        <li>
          <Link to="#">Refund Policy</Link>
        </li>
        <li>
          <Link to="#">Termss OF Use</Link>
        </li>
        <li>
          <Link to="#">Privacy Policy</Link>
        </li>
        <li>
          <Link to="#">Affiliates</Link>
        </li>
        <li>
          <Link to="#">Acceptabel use Policy</Link>
        </li>
        <li>
          <Link to="#">Cookie Policy</Link>
        </li>
        <li>
          <Link to="#">Language</Link>
        </li>
        <li>
          <Link to="#">Monitization</Link>
        </li>
      </ul>
    </div>
  </nav>
  {/* sidebar ends */}
</div>

    </>
  );
};
export default Sidebar;
