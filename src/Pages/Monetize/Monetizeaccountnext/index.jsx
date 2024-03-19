import React from "react";
import Header from "../../../Componenets/Header";
import '../Monetizeaccountnext/Monetizeaccountnext.css';

const Monetizeaccountnext = () => {
    return (
        <>
        <Header/>
        <div className="container-fluid">
  <div className="row">
    {/* sidebar column starts */}
    <div className="col-4 left-sidebar-main ">
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
            <a className="dropdown-item" href="../visitors-profile.html">
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
              href="../channels-pages/channels-main.html"
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
              href="../channels-pages/group-channels-pages/group-channel-main.html"
            >
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
              href="../channels-pages/channels-main.html"
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
              href="../channels-pages/channels-main.html"
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
              href="../channels-pages/channels-main.html"
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
    <div className="col-8 center-main p-0">
      <div className="d-flex mt-2  credit-wallet">
        <button className="d-flex mt-2  credit">
          <img
            src="../images/icons/account_balance_wallet (1).png"
            className="img-wallet"
            alt=""
          />
          <h6 className="ms-2 credit">Wallet &amp; Credits</h6>
        </button>
        <button className="d-flex mt-1 wallet text-center">
          <img
            src="../images/icons/savings.png"
            className="img-wallet ms-2 mt-1"
            alt=""
          />
          <h6 className="ms-2 mt-2 withdraw">Withdrawal</h6>
        </button>
      </div>
      <div className="d-flex add-save">
        <h4 className="price ms-3 mt-4">$12.00</h4>
        <div className="d-flex mt-5 send-add ">
          <button className="money   d-flex ">
            <img
              src="../images/icons/send_money (1).png"
              className="ms-3 mt-2"
              alt=""
            />
            <p className="send mt-2 ms-2">Send Money</p>
          </button>
          <button className="add  d-flex ">
            <img
              src="../images/icons/add_circle (1).png"
              className="img-wallet ms-3 mt-2"
              alt=""
            />
            <p className="send mt-2 ms-2">Add Money</p>
          </button>
        </div>
      </div>
      <div className="information ">
        <div className="profile-info">
          <div className="profile ms-5">
            <ul>
              <li>profile must have completed all levels of registeration</li>
              <li className="dots mt-2">
                Active subscribers
                <p className="amount ">250</p>
                <img
                  src="../images/icons/check_box.png"
                  className="img-box"
                  alt=""
                />
              </li>
              <li className="dot mt-2">
                Been active days
                <p className="amount ">60+</p>
                <img
                  src="../images/icons/check_box.png"
                  className="img-box"
                  alt=""
                />
              </li>
            </ul>
          </div>
          <a href="" className="cheel">
            <h5 className="ms-5 mt-5">Make money on cheelbase</h5>
          </a>
          <ul className="places mt-5 ms-4">
            <li className="place-ad col-12">
              Let cheelbase place ads in your private chats and earn up to
              ($0.02) for every advertsisement click you get on in your chats
            </li>
            <button className="setup rounded-5">Setup now</button>
          </ul>
          <div className="affiliate ms-2">
            <h5 className="affiliated ms-4">Affiliates</h5>
            <ul className="">
              <li className="">
                Earn up to 65% for each user your refer to us !
              </li>
              <li className="col-16 mt-2">
                Earn up to 40% for every user your refer to us and will
                subscribe to any of our pro packages.
              </li>
              <li className="col-16 mt-2">
                Earn up to 20% for each user your refer to to our website &amp;
                will subscribe to any paid channel.
              </li>
              <li className="col-16 mt-2">
                Earn up to 15% for each user your refer to our website &amp;
                will purchase or rent a video/movie.
              </li>
              <li className="col-16 mt-2">
                Earn up to 15% for each user your refer to our website &amp;
                will purchase or rent a photo/video.
              </li>
              <button className="setups rounded-5">Setup now</button>
            </ul>
          </div>
        </div>
      </div>
      <div className="earning-info">
        <ul className="info ">
          <li className="col-11">
            Earn (0.002 USD) for each advertisement click you get from your
            videos!
          </li>
          <li className="col-11 mt-2">
            Earn (0.002 USD) for each advertisement click you get from your
            channels!
          </li>
          <li className="col-11 mt-2">
            Earn (0.002 USD) for each advertisement click you get from your
            groups!
          </li>
          <li className="col-11 mt-2">
            Earn (0.002 USD) for each advertisement click you get from your
            individas chats!
          </li>
          <li className="col-11 mt-2">
            Earn (0.001 USD) for each new subscriber you get on your account!
          </li>
          <li className="mt-2">
            Earn (0.001 USD) for each love you get on your post!
          </li>
        </ul>
        <button className="setupping rounded-5">Setup now</button>
      </div>
      <div className="earn">
        <ul>
          <li className="col-11 mt-2">
            Earn (0.001 USD) for each new subscriber you get on your account!
          </li>
          <li className="mt-2">
            Earn (0.001 USD) for each love you get on your post!
          </li>
        </ul>
        <button className="setupping rounded-5">Setup now</button>
      </div>
      <div className="products">
        <ul>
          <li className="sell">Sell products on cheelbase marketplace</li>
          <li className="mt-2">List properties </li>
          <li className="mt-2">List food items</li>
          <li className="mt-2">Sell photos/art</li>
          <li className="mt-2">Sell videos</li>
        </ul>
        <button className="setupping rounded-5">Setup now</button>
      </div>
      <button className="d-flex mt-1  text-center monetize">Back</button>
      <div className="btn-next text-center">
        <a href="/Monetizechats">
          <button className="btn btn-primary">Continue to Next</button>
        </a>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Monetizeaccountnext;