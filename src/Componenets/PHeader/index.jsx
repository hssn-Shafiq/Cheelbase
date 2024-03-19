import React from "react";
import "../../cheels-page-css/cheels.css"

const PHeader = () => {
  return (
    <>
    <div className="row">
  <header>
    <nav className="navbar navbar-expand-sm">
      <div className="container">
        <a className="navbar-brand" href="/Home">
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
                <a className="dropdown-item" href="/Fullvideo">
                  Video
                </a>
                <a className="dropdown-item" href="/Cheels">
                  Cheels
                </a>
                <a className="dropdown-item" href="/Gallery">
                  Gallery
                </a>
                <a className="dropdown-item" href="/Products">
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
            {/* <input class="form-control me-sm-2" type="text" placeholder="Search">
                          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
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
            {/* <div class="lines">
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                        </div> */}
          </form>
        </div>
      </div>
    </nav>
  </header>
</div>

    </>
  );
};
export default PHeader;
