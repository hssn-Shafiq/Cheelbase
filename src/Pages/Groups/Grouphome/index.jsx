import React from "react";
import Header from "../../../Componenets/Header";
import '../Grouphome/Grouphome.css';

const Grouphome =() =>{
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
        <div className="row bg-light p-2   text-center chnl-mng-title">
          <strong>Dev's Channel</strong>
        </div>
      </nav>
      {/* sidebar ends */}
    </div>
    {/* sidebar column ends */}
    <div className="col-md  channel-main-profile">
      <div className="channel-back-image pt-2 ">
        <img src="../images/Rectangle 5168.png" alt="" width="100%" />
        <div className="channel-profile d-flex align-items-center gap-4">
          <div className="profile-img">
            <img src="../images/Group 14.png" alt="" width={70} />
          </div>
          <div className="profile-content">
            <h3>Dev's Channel</h3>
            <h4>Public Channel</h4>
          </div>
        </div>
      </div>
      <div className="channel-description p-3">
        <h3>Description</h3>
        <p>
          Descriptio {"{"}Today lets talk about this new technoloy innovations
          that come out everyday {"}"}
        </p>
        <hr className="me-5" />
        <a href="channel-chating-page.html">
          cbase.me/devschannel <br />
          Invite link
        </a>
        <hr className="me-5" />
      </div>
      <div className="members p-3">
        <h3>Members</h3>
        <br />
        <div className="subscriber ps-5">
          <img src="../images/icons/groups_2.png" width={60} alt="" />
          <span>70,000</span>
          <span className="sbcr-title ms-5">subscriber</span>
        </div>
        <div className=" subscriber ps-5">
          <img
            src="../images/icons/groups_2 (1).png"
            width={60}
            alt=""
          />
          <span>14</span>
          <span className="sbcr-title admin-title ms-5">Admins</span>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Grouphome;