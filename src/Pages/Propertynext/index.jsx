import React from "react";
import '../Propertynext/Propertynext.css';
import '../Propertynext/nav.css';
import '../Propertynext/left-sidebar.css';
import '../Propertynext/right-sidebar.css';
const Propertynext = () => {
    return (
        <>
        <header>
  <nav className="navbar navbar-expand-sm">
    <div className="container">
      <a className="navbar-brand" href="../index.html">
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
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item dropdown">
            <a
              className="btn btn-primary dropdown cursor-pointer create-btn"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Create
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <a className="dropdown-item" href="#">
                Video
              </a>
              <a className="dropdown-item" href="#">
                Cheels
              </a>
              <a className="dropdown-item" href="#">
                Gallery
              </a>
              <a className="dropdown-item" href="#">
                Products
              </a>
              <a className="dropdown-item" href="#">
                Food Items
              </a>
              <a className="dropdown-item" href="#">
                Properties
              </a>
            </div>
          </li>
        </ul>
        <form className="d-flex  nav-icon">
          <div className="call">
            <i className="fa-solid fa-camera" />
            <i className="fa-solid fa-phone" />
          </div>
          <div className="notifications">
            <i className="fa-regular fa-message" />
            <i className="fa-solid fa-bell" />
          </div>
          <div className="user d-flex flex-row ">
            <ul className=" me-auto mt-2 mt-lg-0">
              <li className=" dropdown">
                <i
                  className="fa-solid fa-user user-icon dropdown"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-gear" />
                    General Settings
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fa-regular fa-address-book" />
                    Contact
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-phone" />
                    Calls
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fa-regular fa-message" />
                    Save Messeges
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-people-group" />
                    Invite Friends
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fa-regular fa-circle-question" />
                    Cheelbase FAQ
                  </a>
                </div>
              </li>
            </ul>
            <label htmlFor="user" className="mt-1">
              Marina
            </label>
          </div>
        </form>
      </div>
    </div>
  </nav>
</header>
<div className="container-fliud container-width">
  <div className="row ">
    <div className="col-md-3 left-sidebar-main ">
      <div className="searchbar d-flex align-items-center mt-0">
        <li className="dropdown">
          <i
            className="fa-solid fa-bars dropdown"
            id="dropdownId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
          <div className="dropdown-menu" aria-labelledby="dropdownId">
            <a className="dropdown-item" href="#">
              <i className="fa-solid fa-gear" />
              Business Tool
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa-solid fa-photo-film" />
              Gallery
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa-solid fa-mobile" />
              Cheels
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa-solid fa-store" />
              Store
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa-solid fa-utensils" />
              Resturants{" "}
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa-solid fa-hand-holding-dollar" />
              Property Listing
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa-solid fa-wallet" />
              Monitization
            </a>
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
        <div>
          <ul className="nav flex-column">
            <li className="nav-item child">
              <h2>Recent Chats</h2>
              {/* Chat items */}
              <div className="parent">
                <div>
                  {" "}
                  <img
                    src="../images/hug shark  banner.jpeg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              <div className="parent">
                <div>
                  {" "}
                  <img
                    src="../images/open thumb.jpg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              <div className="parent">
                <div>
                  {" "}
                  <img
                    src="../images/life in two bannn.jpeg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              <div className="parent">
                <div>
                  {" "}
                  <img
                    src="../images/lawless thumb.jpg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              <div className="parent">
                <div>
                  {" "}
                  <img
                    src="../images/garage thumb.jpeg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              {/* Add more chat items as needed */}
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <div className="channels-heading ">
            <h3>Channels</h3>
          </div>
          <ul className="nav flex-column">
            <li className="nav-item child">
              <h2>Recent Channels</h2>
              {/* Chat items */}
              <div className="parent">
                <div>
                  {" "}
                  <img
                    src="../images/hug shark  banner.jpeg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              <div className="parent">
                <div>
                  {" "}
                  <img
                    src="../images/open thumb.jpg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              <div className="parent">
                <div>
                  {" "}
                  <img
                    src="../images/life in two bannn.jpeg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              <div className="parent">
                <div>
                  {" "}
                  <img
                    src="../images/lawless thumb.jpg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              <div className="parent">
                <div>
                  {" "}
                  <img
                    src="../images/garage thumb.jpeg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              {/* Add more chat items as needed */}
            </li>
          </ul>
        </div>
      </nav>
      {/* sidebar ends */}
    </div>
    <div className="col-lg-6 ">
      <div className="row">
        <div
          style={{ width: "51%", margin: "0 auto" }}
          className="input-group text-light "
        >
          <input
            type="text"
            className="form-control search-bar search-bar1
                          text-light "
            placeholder="Search videos, others"
          />
          <div className="input-group-prepend ">
            <button
              style={{ right: 40, fontSize: 14, borderRadius: "53%" }}
              className="btn btn-outline-light"
              type="button"
            >
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-3 bgcolor">
        <div className="col-lg-6 property-nextpart-width d-flex">
          <div className="posi">
            <img
              src="../images/naomi-hebert-MP0bgaS_d1c-unsplash.png"
              width="400px"
              alt=""
            />
          </div>
          <div className="posi1">
            <img src="../images/Group 26.png" width="100%" alt="" />
          </div>
        </div>
        <div className="col-lg-6 property-nextpart-width1 d-flex">
          <div className="img-flex">
            {" "}
            <img
              src="../images/Mask Group.png"
              width="30px"
              height="30px"
              alt=""
            />
          </div>
          <div className=" ms-2">
            <p className="Johny-text">Johny Sen</p>
            <img
              style={{ marginLeft: 7 }}
              src="../images/check 1.png"
              alt=""
            />
            <p className="Johny-text1">
              TERVERIFIKASI OLEH LAMUDI ANGGOTA SEJAK 2020
            </p>
            <div className="Deskripsi">
              <p>
                <b>Deskripsi</b>
              </p>
              <p>
                Bangunan MURAH DI BAWA PASAR APARTEMEN l’avenue KAMAR FULL
                FURNISH FULL RENOV SIAP Huni
              </p>
              <h6>Lebih banyak</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <h6>
          <b>Galeri foto apartemen</b>
        </h6>
        <div className="col-lg-8 mt-3">
          <img src="../images/Mask Group.png" width="100px" alt="" />
          <img src="../images/Mask Group.png" width="100px" alt="" />
          <img src="../images/Mask Group.png" width="100px" alt="" />
          <img
            className="ten"
            src="../images/+10.png"
            width="100px"
            alt=""
          />
        </div>
      </div>
      <div className="row mt-3">
        <h6>
          <b>Denah Lokasi</b>
        </h6>
        <div className="col-lg-8 mt-3">
          <iframe
            className="map-border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56146.706231317636!2d70.26280267262679!3d28.414152793651997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39375c713b45db39%3A0x28af23c1672a0170!2sRahim%20Yar%20Khan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1699869709771!5m2!1sen!2s"
            width={600}
            height={250}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="btn-outline-light btn1-sell">For Sell</div>
        </div>
        <div className="col-lg-6">
          <img
            className="btn-whats"
            src="../images/whatsapp (1).png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="col-3  row-width right-sidebar-section">
      {/* section right-side-bar start */}
      <div className="continer-fluid ">
        {/* video section */}
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
        {/* feature section */}
        <div className="feature mt-3 ">
          <div className="h6">Top cheels </div>
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
        <div className="row">
          <h6>Top Channal</h6>
          <div className="col-lg-6" />
          <div className="col-lg-6" />
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Propertynext;