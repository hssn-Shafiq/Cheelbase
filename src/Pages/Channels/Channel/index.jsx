import React from "react";
import Header from "../../../Componenets/Header";
import '../Channel/Channel.css';

const Channel = () => {

    return (
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
          <strong>Channels Management</strong>
        </div>
      </nav>
      {/* sidebar ends */}
    </div>
    {/* sidebar column ends */}
    <div className="col-md">
      <div className="image p-3 ">
        <img src="../images/Rectangle 5288.png" alt="" width="100%" />
      </div>
      <div className="row p-3">
        <div className="col-md-8 my-channels">
          <h3>My Channels</h3>
          <div className="channels-box d-flex gap-2">
            <img
              src="../images/Ellipse 341.png"
              width={50}
              height={50}
              alt=""
              className="rounded-circle"
            />
            <div className="box bg-light box-header p-2">
              <div className="title d-flex justify-content-between">
                <h2>Cheelbase fan’s channel</h2>
                <span>Public</span>
              </div>
              <div className="content">
                <p>
                  Where fans chating ncncnc cjdjjncnc bsis shwuifheufh
                  ifjeifejfns. jdhsuudsa
                </p>
              </div>
              <hr />
              <div className="members">
                <i className="fa-solid fa-users" />
                <span>7,569,900 members</span>
              </div>
              <div className="box-footer d-flex align-items-center justify-content-between">
                <i className="fa-solid fa-user">
                  <span className="admin-text">4 admins</span>
                </i>
                <span className="boost-text">Boost</span>
              </div>
            </div>
          </div>
          <div className="channels-box d-flex gap-2 my-3">
            <img
              src="../images/Ellipse 341.png"
              width={50}
              height={50}
              alt=""
              className="rounded-circle"
            />
            <div className="box bg-light box-header p-2">
              <div className="title d-flex justify-content-between">
                <h2>Cheelbase fan’s channel</h2>
                <span>Public</span>
              </div>
              <div className="content">
                <p>
                  Where fans chating ncncnc cjdjjncnc bsis shwuifheufh
                  ifjeifejfns. jdhsuudsa
                </p>
              </div>
              <hr />
              <div className="members">
                <i className="fa-solid fa-users" />
                <span>7,569,900 members</span>
              </div>
              <div className="box-footer d-flex align-items-center justify-content-between">
                <i className="fa-solid fa-user">
                  <span className="admin-text">4 admins</span>
                </i>
                <span className="boost-text">Boost</span>
              </div>
            </div>
          </div>
          <div className="channels-box d-flex gap-2 my-3">
            <img
              src="../images/Ellipse 341.png"
              width={50}
              height={50}
              alt=""
              className="rounded-circle"
            />
            <div className="box bg-light box-header p-2">
              <div className="title d-flex justify-content-between">
                <h2>Cheelbase fan’s channel</h2>
                <span>Public</span>
              </div>
              <div className="content">
                <p>
                  Where fans chating ncncnc cjdjjncnc bsis shwuifheufh
                  ifjeifejfns. jdhsuudsa
                </p>
              </div>
              <hr />
              <div className="members">
                <i className="fa-solid fa-users" />
                <span>7,569,900 members</span>
              </div>
              <div className="box-footer d-flex align-items-center justify-content-between">
                <i className="fa-solid fa-user">
                  <span className="admin-text">4 admins</span>
                </i>
                <span className="boost-text">Boost</span>
              </div>
            </div>
          </div>
          <div className="channels-box d-flex gap-2 my-3">
            <img
              src="../images/Ellipse 341.png"
              width={50}
              height={50}
              alt=""
              className="rounded-circle"
            />
            <div className="box bg-light box-header p-2">
              <div className="title d-flex justify-content-between">
                <h2>Cheelbase fan’s channel</h2>
                <span>Public</span>
              </div>
              <div className="content">
                <p>
                  Where fans chating ncncnc cjdjjncnc bsis shwuifheufh
                  ifjeifejfns. jdhsuudsa
                </p>
              </div>
              <hr />
              <div className="members">
                <i className="fa-solid fa-users" />
                <span>7,569,900 members</span>
              </div>
              <div className="box-footer d-flex align-items-center justify-content-between">
                <i className="fa-solid fa-user">
                  <span className="admin-text">4 admins</span>
                </i>
                <span className="boost-text">Boost</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-end create-now-box">
          <div className="dropdown">
            <button
              type="button"
              className="  dropdown-toggle create-now-btn"
              data-bs-toggle="dropdown"
            >
              Create Now
            </button>
            <ul className="dropdown-menu p-5 py-3">
              <li>
                <h5 className="dropdown-header d-flex flex-column align-items-center justify-content-center gap-4">
                  <i className="fa-solid fa-earth-americas" />a channel to reach
                  unlimited followers
                </h5>
              </li>
              <li className="d-flex align-items-center gap-4 icon-items">
                <i className="fa-solid fa-globe" />
                Any can discover your channel once your choose it to be public
              </li>
              <li className="d-flex align-items-center gap-4 icon-items">
                <i className="fa-solid fa-globe" />
                People see your channel , not you
              </li>
              <li className="d-flex align-items-center gap-4 icon-items">
                <i className="fa-solid fa-globe" />
                You’re responsible for your channel
              </li>
              <li className="text-center mt-5 mb-2">
                <a
                  className="btn dropdown-footer footer-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  Continue
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Modal */}
    <div
      className="modal fade"
      id="myModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {/* Full-width image icon at the top */}
            <div id="imagePreviewContainer" className="mb-4 p-2 text-center">
              <img
                id="imagePreview"
                src="../images/icons/photo_camera_back.png"
                alt="Preview"
                className="img-fluid"
                style={{ width: 150 }}
              />
            </div>
            {/* Form inside the modal */}
            <form className="d-flex p-3 mb-5" id="myForm">
              {/* Icon to select a picture */}
              <div className="select-image">
                <div className="file-input-container mb-3">
                  <div
                    className="upload-icon"
                    onclick="document.getElementById('imageInput').click()"
                  >
                    {/* You can use an icon here, for example: */}
                    <img
                      src="../images/icons/photo_camera_back.png"
                      width={50}
                      alt=""
                    />
                  </div>
                  <input
                    type="file"
                    id="imageInput"
                    className="form-control"
                    accept="image/*"
                    onchange="displayImagePreview(this)"
                    required=""
                  />
                </div>
              </div>
              <div className="form">
                {/* Label and dropdown */}
                <div className="mb-3">
                  <label htmlFor="dropdown1" className="form-label">
                    Channel Name
                  </label>
                  <select className="form-select" id="dropdown1" required="">
                    <option value="option1">Select Catagory</option>
                    <option value="option2">Option 1</option>
                    <option value="option3">Option 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                {/* Paragraph */}
                <p>
                  Describe your channel . Including a userful description for
                  your followers
                </p>
                {/* Another dropdown */}
                <div className="mb-3">
                  <select className="form-select" id="dropdown2" required="">
                    <option value="option1">Select privacy</option>
                    <option value="option2">Private</option>
                    <option value="option3">Public</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                {/* Add more form elements as needed */}
                {/* Submit button */}
                <div className="text-center">
                  <button type="submit" className="btn submit-btn">
                    Create Channel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        
        </>
    )
}

export default Channel;