import React from "react";
import "../ChannelMain/channels-main.css";
import Header from "../../Componenets/Header";
import ChannelSidebar from "../../Componenets/ChannelSidebar";
const ChannelMain = () => {
  return (
    <>
      <Header />
      <div class="container-fluid">
        <div class="row">
          <ChannelSidebar/>
          {/* sidebar column ends */}
          <div className="col-md">
            <div className="image p-3 ">
              <img
                src="../images/Rectangle 5288.png"
                alt=""
                width="100%"
              />
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
                        <i className="fa-solid fa-earth-americas" />a channel to
                        reach unlimited followers
                      </h5>
                    </li>
                    <li className="d-flex align-items-center gap-4 icon-items">
                      <i className="fa-solid fa-globe" />
                      Any can discover your channel once your choose it to be
                      public
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
                  <div
                    id="imagePreviewContainer"
                    className="mb-4 p-2 text-center"
                  >
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
                        <select
                          className="form-select"
                          id="dropdown1"
                          required=""
                        >
                          <option value="option1">Select Catagory</option>
                          <option value="option2">Option 1</option>
                          <option value="option3">Option 2</option>
                          {/* Add more options as needed */}
                        </select>
                      </div>
                      {/* Paragraph */}
                      <p>
                        Describe your channel . Including a userful description
                        for your followers
                      </p>
                      {/* Another dropdown */}
                      <div className="mb-3">
                        <select
                          className="form-select"
                          id="dropdown2"
                          required=""
                        >
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
  );
};
export default ChannelMain;
