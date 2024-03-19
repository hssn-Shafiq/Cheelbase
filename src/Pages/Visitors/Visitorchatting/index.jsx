import React from "react";
import Header from "../../../Componenets/Header";
import '../Visitorchatting/Visitorchatting.css';

const Visitorchatting = () => {
    return (
        <>
        <Header/>
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
            <a className="dropdown-item" href="/visitors-profile.html">
              <img
                src="../images/icons/user.png"
                alt=""
                width={25}
                className="mx-3"
              />
              Profile
            </a>
            <a className="dropdown-item" href="gallery.html">
              <img
                src="../images/icons/shortcut-script-app.png"
                className="mx-3"
                alt=""
                width={25}
              />
              Cheels
            </a>
            <a className="dropdown-item" href="cheels.html">
              <img
                src="../images/icons/tv-monitor.png"
                alt=""
                className="mx-3"
                width={25}
              />
              Full Video
            </a>
            <a className="dropdown-item" href="visitor-gallery.html">
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
            <a className="dropdown-item" href="gallery.html">
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
            <a className="dropdown-item" href="gallery.html">
              <img
                src="../images/icons/smartphone-call.png"
                className="mx-3"
                alt=""
                width={25}
              />
              Device Setting
            </a>
            <a className="dropdown-item" href="gallery.html">
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
    <div className="col-lg-6 margin-side">
      <div className=" height d-flex  align-items-center pb-3  bg-color-below1">
        <div className="col-lg-3  ms-4">
          <img src="../images/Group 3465342.png" alt="" />
        </div>
        <div className="col-lg-9">
          <div className="form">
            <i className="fa fa-search" />
            <input
              type="text"
              className="form-control form-input"
              placeholder="Search anything..."
            />
          </div>
        </div>
      </div>
      <div className="youtube-img">
        <img
          className="widht-youtube-img"
          src="../images/Youtube Video.png"
          alt=""
        />
        <div className="text-below">
          <h6>
            <b>8-Hour Drone Video Over Snowy Mountain Top</b>
          </h6>
        </div>
        <div className="row d-flex">
          <div className="view d-flex">1,094,526 views•May 25, 2018</div>
          <div className="like-share d-flex">
            <img src="../images/Video Engagement.png" alt="" />
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-1 ms-2">
          <img src="../images/Avatar.png" alt="" />
        </div>
        <div className="col-4">
          <h6>
            <b>Nature Soundscapes</b>
          </h6>
          <p>104K subscribers</p>
        </div>
        <div className="col-6 text-end mt-2 ms-4  ">
          <button className="SUBSCRIBE" type="button">
            SUBSCRIBE
          </button>
        </div>
        <p className="SUBSCRIBE-TEXT">
          Find your absolutely beautiful and serene place and listen to nature
          sounds, birds signing and relaxing water sounds with breathtaking
          views of the moutain top. It’s 8-hour 4k video of discovery and peace.
          Download it for your personal use and transform your 4K TV into a
          source of relaxation and restoration.
        </p>
      </div>
      <button className="See-More " type="button">
        SHOE MORE
      </button>
    </div>
    {/* right sidebar starts  */}
    <div className="col-3 right-sidebar-section mt-5">
      {/* section right-side-bar start */}
      <div className="continer-fluid  mt-4">
        {/* video section */}
        <div className="video" id="video">
          <button
            type="button"
            onclick="document.getElementById('video').style.display='none'"
            className="btn"
          >
            <i className="fa-solid fa-xmark" />
          </button>
          <img src="../images/Group 18685.png" width="100%" alt="img" />
        </div>
        {/* feature section */}
        <div className="feature mt-3 ">
          <div>
            <div className="container-fluid">
              <div className="row  p-0">
                <div className="col-sm-12 p-1 mt-0 d-flex iframe-video">
                  <iframe
                    width={100}
                    height={100}
                    src="https://www.youtube.com/embed/ja8pA2B0RR4?si=Wnw1Bp5OHMn975Q5"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen=""
                  />
                  <div className="iframe-text">
                    <div className="p">
                      8 Hours of Water Sounds from the Bay
                    </div>
                    <p>ChannelName</p>
                    <p>6.3M views•4 years ago</p>
                  </div>
                </div>
                <div className="col-sm-12 p-1 mt-0 d-flex ">
                  <iframe
                    width={100}
                    height={100}
                    src="https://www.youtube.com/embed/ja8pA2B0RR4?si=Wnw1Bp5OHMn975Q5"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen=""
                  />
                  <div className="iframe-text">
                    <div className="p">
                      4 Continuous Hours of Birdwatching and Lofi
                    </div>
                    <p>ChannelName</p>
                    <p>6.3M views•4 years ago</p>
                  </div>
                </div>
                <div className="col-sm-12 p-1 mt-0 d-flex ">
                  <iframe
                    width={100}
                    height={100}
                    src="https://www.youtube.com/embed/ja8pA2B0RR4?si=Wnw1Bp5OHMn975Q5"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen=""
                  />
                  <div className="iframe-text">
                    <div className="p">4K HD Video Background</div>
                    <p>ChannelName</p>
                    <p>6.3M views•4 years ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sponsored section */}
        {/* <div class="mt-5 Sprd" id="Sponsored">
                      <div class="d-flex justify-content-between align-items-center  sprd-content">
                          <div class="h6">Sponsored</div>
                          <button type="button"
                              onclick="document.getElementById('Sponsored').style.display='none'" class="btn"><i
                                  class="fa-solid fa-xmark"></i></button>
                      </div>
                      <img src="../images/g4.jpg" width="100%" alt="img">
                  </div> */}
      </div>
    </div>
    <div className="btn-next text-center">
        <a href="/Gallerymultiple">
        <button className="btn btn-primary">
        Continue to Next
      </button>
     </a>
      </div>
  </div>
</div>

        </>
    )
}

export default Visitorchatting;