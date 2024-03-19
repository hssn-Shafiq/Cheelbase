import React from "react";
import Header from "../../../Componenets/Header";
import '../Statuslast/Statuslast.css';
const Statuslast = () => {
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
            <a className="dropdown-item" href="javascript:void(0);">
              <img
                src="../images/icons/user.png"
                alt=""
                width={25}
                className="mx-3"
              />{" "}
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
              />{" "}
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
              />{" "}
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
            In-Contacts <span>78k</span>
          </button>
          <button href="javascript:void(0);" className="rounded-5 p-2">
            Business <span>90</span>
          </button>
        </div>
        <div className="row buttons-group2 mb-4 d-flex flex-row justify-content-start">
          <button href="javascript:void(0);" className="rounded-5 p-2">
            Favourites <span>34</span>
          </button>
          <button href="javascript:void(0);" className="rounded-5 p-2">
            Channel <span>81</span>
          </button>
          <button href="javascript:void(0);" className="rounded-5 p-2">
            Groups <span>22</span>
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
    <div className="col-md center-main">
    <div className="col-lg-12">
    <div className="persons  d-flex flex-row m-2">
      <img src="../images/Ellipse 304 (1).png" alt="" />
      <h6 className="text-light ms-3">DeanMashal</h6>
      <div className="border-side-1"></div>
      <div className="border-side-2"></div>
      <div className="border-side-3"></div>
      <p className="add ms-5 text-light">
        <b>AD</b>
      </p>
      <div className="border-side-4"></div>
      <div className="linedd">
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
             
              <a className="dropdown-item" href="javascript:void(0);">
               Share
              </a>
             
              <a className="dropdown-item" href="javascript:void(0);">
            
           Mute
          </a>

          <a className="dropdown-item" href="javascript:void(0);">
            
                Message
              </a>

              <a className="dropdown-item" href="javascript:void(0);">
            
                Voice Call
              </a>

              <a className="dropdown-item" href="javascript:void(0);">
            
                Video Call
              </a>

              <a className="dropdown-item" href="javascript:void(0);">
            
            View Contact
          </a>

          <a className="dropdown-item" href="javascript:void(0);">
            
                Report
              </a>
            </div>
          </li>
        </div>
      </div>
    </div>
    <p className="minutes text-light text-center ">7 minutes ago</p>
  </div>
      <div className="skip text-center ms-5 mt-5">
        <button className="btn btn-secondary rounded-1">Skip ad</button>
      </div>
      <div className="burger ">
        <div className="icons-option">
          <div className="icon  d-flex">
            <img src="../images/icons/Ellipse 360.png" className="img-ellipse mt-3 ms-2" alt="" />
            <h5 className="ms-2 mt-3">Cheelbase</h5>
            <img src="../images/icons/Group 18448.png" className="img-group mt-3 ms-2" alt="" />

            <p className="ms-5 mt-3">@cheelbas.......</p>

            <div className="ads mt-3">
  
    <button
      className="dropdown added text-center ms-5"
      id="dropdownId"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >ad </button>
    <div
      className="dropdown-menu account-dropdown-menu"
      aria-labelledby="dropdownId"
    >
    
  
      <a className="dropdown-item" href="javascript:void(0);">
        About this account
      </a>
      <a className="dropdown-item" href="../channels-pages/channels-main.html">
        About cheelbase ads
      </a>

      <a className="dropdown-item" href="../channels-pages/channels-main.html">
        Why am I seeing this ad
      </a>

      <a className="dropdown-item" href="../channels-pages/channels-main.html">
        Not intrested
      </a>
      <a className="dropdown-item" href="../channels-pages/channels-main.html">
        Report this ad
      </a>


    </div>

</div>

          
          </div>

        </div>
        <p className="col-12 ms-4 mt-5 bag">Nice bagggggg for breakfast , lanuckkkkk anrd mornjddhhd eats forever testlfig hfhfh click on the link below to downlaod #dad</p>
        <img
          className="burger1 ms-5"
          src="../images/Rectangle 5028.png"
          alt=""
        />

        <div className="second-icons justify-content-evenly  d-flex">
          <img src="../images/icons/thumbs-up.png" className="img-second" alt="" />
          <img src="../images/icons/heart.png" className="img-second" alt="" />
          <p>541</p>
          <p>87 Shares</p>
          <p>shop now</p>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Statuslast;