import React from "react";
import Header from "../../../../Componenets/Header";
import '../Orderhandler/Orderhandler.css';
import '../Orderhandler/Rightsidebar.css';
const Orderhandler = () => {
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
              <img src="../images/Ellipse 303.png" width={50} alt="" />
            </div>
            <div className="content">
              <h5 className="marinaa">
                Marina{" "}
                <img src="../images/icons/Group 18448.png" class="img-first-icon"  alt=""></img>

              </h5>
              <span>Last seen todat at 14:28</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid chatting-main">
        <div className="date text-center">
          <span>14/11/2023</span>
        </div>
        <div className="row py-3 px-5">
          <div className="col-md invitation px-1">
            You have been invited for role of Order Handler for {"{"}Business
            name{"}"} on CB-Room event organized by {"{"}Channel admin{"}"} on
            16/11/2023 12:30pm. <a href="#">Click here</a> to join
          </div>
        </div>
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
                Title {"{"}Today let's talk about this new technoloy innovations
                that come out{"}"} everyday
              </span>
            </div>
            <div className="info">
              <span>
                Descriptio {"{"}Today let's talk about this new technoloy
                innovations that come out{"}"} everyday
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
          <p className="col-5 lorem-ip1">Lorem ipsum dolor sit amet...</p>
          <p className="col-5 lorem-ip2">Lorem ipsum dolor sit amet...</p>
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
  </div>



  </div>
</div>

        </>
    );
}

export default Orderhandler;