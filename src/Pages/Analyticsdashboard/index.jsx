import React from "react";
import Header from "../../Componenets/Header";
import '../Analyticsdashboard/Sidebar.css';
import '../Analyticsdashboard/Analyticsdashboard.css';

const Analyticsdashboard = () => {
    return(
        <>
        <Header/>
        <div className="container-fliud">
  <div className="row g-0">
    {/* sidebar column starts */}
    <div className="col-lg-4 mt-1 left-sidebar-main">
      {/* Sidebar */}
      <div className="dashboard d-flex justify-content-evenly align-items-center">
        <img
          src="../images/icons/grid_view.png"
          className="img-grid ms-4"
          alt=""
        />
        <p className="name text-light me-5 mt-4">Dashboard</p>
      </div>
      <div className="dashboard-options ms-2">
        <div className="cheel d-flex ms-3 mt-1">
          <img
            src="../images/icons/movie_info.png"
            className="img-cheel ms-2"
            alt=""
          />
          <p className="cheels text-light ms-3">Cheels</p>
        </div>
        <div className="video d-flex ms-3 mt-1">
          <img
            src="../images/icons/movie (2).png"
            className="img-cheel ms-2"
            alt=""
          />
          <p className="cheels text-light ms-3">Videos</p>
        </div>
        <div className="gallery d-flex ms-3 mt-1">
          <img
            src="../images/icons/gallery_thumbnail (1).png"
            className="img-cheel ms-2"
            alt=""
          />
          <p className="cheels text-light ms-3">Gallery</p>
        </div>
      </div>
      <div className="dashboard-options mt-2 ms-2">
        <div className="cheel d-flex ms-3 mt-1">
          <img
            src="../images/icons/shopping_bag.png"
            className="img-cheel ms-2"
            alt=""
          />
          <p className="cheels text-light ms-3">Shop</p>
        </div>
        <div className="video d-flex ms-3 mt-1">
          <img
            src="../images/icons/real_estate_agent.png"
            className="img-cheel ms-2"
            alt=""
          />
          <p className="cheels text-light ms-3">Property listing</p>
        </div>
        <div className="gallery d-flex ms-3 mt-1">
          <img
            src="../images/icons/lunch_dining (2).png"
            className="img-cheel ms-2"
            alt=""
          />
          <p className="cheels text-light ms-3">Restaurants</p>
        </div>
      </div>
      <div className="dashboard-options-2 mt-2 ms-2">
        <div className="cheel d-flex ms-3 mt-1">
          <img
            src="../images/icons/folder_managed.png"
            className="img-cheel ms-2"
            alt=""
          />
          <p className="cheels text-light ms-3">Manage ads</p>
          <div className="dropdown-mark justify-content-center text-center ms-3">
            <div
              className="dropdown text-light dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <ul
                className="dropdown-menu mb-3"
                aria-labelledby="dropdownMenuButton1"
              >
                <li className="d-flex">
                  <img
                    src="../images/icons/storefront.png"
                    className="img-icon mt-2"
                    alt=""
                  />
                  <a className="dropdown-item text-light" href="#">
                    Store
                  </a>
                </li>
                <li className="d-flex">
                  <img
                    src="../images/icons/lunch_dining (1).png"
                    className="img-icon mt-2"
                    alt=""
                  />
                  <a className="dropdown-item text-light" href="#">
                    Food
                  </a>
                </li>
                <li className="d-flex">
                  <img
                    src="../images/icons/water_damage.png"
                    className="img-icon mt-2"
                    alt=""
                  />
                  <a className="dropdown-item text-light" href="#">
                    Properties
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-options mt-2 ms-2">
        <div className="video d-flex ms-3 mt-1">
          <img
            src="../images/icons/ads_click.png"
            className="img-cheel ms-2"
            alt=""
          />
          <p className="cheels text-light ms-3">My affliates</p>
        </div>
        <div className="gallery d-flex ms-3 mt-1">
          <img
            src="../images/icons/badge.png"
            className="img-cheel ms-2"
            alt=""
          />
          <p className="cheels text-light ms-3">Update profile</p>
        </div>
      </div>
    </div>
    {/* sidebar ends */}
    <div className="col-lg-8 analytics-dashboard">
      <div className="analytics mt-2 justify-content-between align-items-center d-flex">
        <div className="d-flex performance">
          <p className="performance">Performance</p>
          <img
            src="../images/icons/error.png"
            className="img-error mt-1 ms-2"
            alt=""
          />
        </div>
        <div className="d-flex select-options">
          <p className="select">Select</p>
          <div className="select-cheel ms-3 d-flex">
            <p className="ms-4">Cheels</p>
            <div
              className="dropdown ms-4 dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <ul
                className="dropdown-menu mb-3"
                aria-labelledby="dropdownMenuButton1"
              >
                <li className="d-flex">
                  <img
                    src="../images/icons/storefront.png"
                    className="img-icon mt-2"
                    alt=""
                  />
                  <a className="dropdown-item text-light" href="#">
                    Store
                  </a>
                </li>
                <li className="d-flex">
                  <img
                    src="../images/icons/lunch_dining (1).png"
                    className="img-icon mt-2"
                    alt=""
                  />
                  <a className="dropdown-item text-light" href="#">
                    Food
                  </a>
                </li>
                <li className="d-flex">
                  <img
                    src="../images/icons/water_damage.png"
                    className="img-icon mt-2"
                    alt=""
                  />
                  <a className="dropdown-item text-light" href="#">
                    Properties
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="7-days d-flex">
          <h4 className="days">Within last 7 days</h4>
          <div
            className="dropdown ms-4 dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <ul
              className="dropdown-menu mb-3"
              aria-labelledby="dropdownMenuButton1"
            >
              <li className="d-flex">
                <img
                  src="../images/icons/storefront.png"
                  className="img-icon mt-2"
                  alt=""
                />
                <a className="dropdown-item text-light" href="#">
                  Store
                </a>
              </li>
              <li className="d-flex">
                <img
                  src="../images/icons/lunch_dining (1).png"
                  className="img-icon mt-2"
                  alt=""
                />
                <a className="dropdown-item text-light" href="#">
                  Food
                </a>
              </li>
              <li className="d-flex">
                <img
                  src="../images/icons/water_damage.png"
                  className="img-icon mt-2"
                  alt=""
                />
                <a className="dropdown-item text-light" href="#">
                  Properties
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex graph-cheel ">
        <div className="info">
          <div className="cheel-info pt-4">
            <h6 className="cheel-color ms-5">Cheels</h6>
            <img
              src="../images/icons/app_shortcut.png"
              className="ms-5"
              alt=""
            />
            <h6 className="cheel-color ms-5 mt-3">191k cheels</h6>
          </div>
          <div className="overview pt-3 mt-2">
            <h6 className="design-overview ms-5">Overview</h6>
          </div>
          <div className="overview pt-3 mt-2">
            <h6 className="design-overview ms-5">Content</h6>
          </div>
          <div className="overview pt-3 mt-2">
            <h6 className="design-overview ms-5">Audience</h6>
          </div>
        </div>
        <div className="graph mt-1 ms-1">
          <div className="graph-information d-flex mt-4 justify-content-evenly align-items-center">
            <div className="col-md-3">
              <p>Views</p>
              <div className="view-detail d-flex">
                <h4>2.3K</h4>
                <i className="fa-regular fa-circle-check ms-3 mt-2" />
              </div>
              <span className="about-info">About the same as usual</span>
            </div>
            <div className="col-md-3">
              <p>Watch time (hours)</p>
              <div className="view-detail d-flex">
                <h4>39.3</h4>
                <i className="fa-solid fa-circle-down ms-3 mt-2" />
              </div>
              <span className="about-info">39% less than previous 28 days</span>
            </div>
            <div className="col-md-3">
              <p>Subscribers</p>
              <div className="view-detail d-flex">
                <h4>+22</h4>
                <i className="fa-solid fa-circle-down ms-3 mt-2" />
              </div>
              <span className="about-info">84% less than previous 28 days</span>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <canvas id="chLine" />
            </div>
          </div>
          <div className="more mt-4">
            <button className="see-more ms-4">SEE MORE</button>
          </div>
        </div>
      </div>
      <div className="graph-video mt-3">
        <div className="d-flex graph-detail">
          <div className="info">
            <div className="cheel-info pt-4">
              <h6 className="cheel-color ms-5">Videos</h6>
              <img
                src="../images/icons/videocam (2).png"
                className="ms-5"
                alt=""
              />
              <h6 className="cheel-color ms-5 mt-3">82k videos</h6>
            </div>
            <div className="overview pt-3 mt-2">
              <h6 className="design-overview ms-5">Overview</h6>
            </div>
            <div className="overview pt-3 mt-2">
              <h6 className="design-overview ms-5">Content</h6>
            </div>
            <div className="overview pt-3 mt-2">
              <h6 className="design-overview ms-5">Audience</h6>
            </div>
          </div>
          <div className="graph mt-1 ms-1">
            <div className="graph-information d-flex mt-4 justify-content-evenly align-items-center">
              <div className="col-md-3">
                <p>Views</p>
                <div className="view-detail d-flex">
                  <h4>2.3K</h4>
                  <i className="fa-regular fa-circle-check ms-3 mt-2" />
                </div>
                <span className="about-info">About the same as usual</span>
              </div>
              <div className="col-md-3">
                <p>Watch time (hours)</p>
                <div className="view-detail d-flex">
                  <h4>39.3</h4>
                  <i className="fa-solid fa-circle-down ms-3 mt-2" />
                </div>
                <span className="about-info">
                  39% less than previous 28 days
                </span>
              </div>
              <div className="col-md-3">
                <p>Subscribers</p>
                <div className="view-detail d-flex">
                  <h4>+22</h4>
                  <i className="fa-solid fa-circle-down ms-3 mt-2" />
                </div>
                <span className="about-info">
                  84% less than previous 28 days
                </span>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <canvas id="chLine2" />
              </div>
            </div>
            <div className="more mt-4">
              <button className="see-more ms-4">SEE MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="graph-gallery mt-3">
        <div className="d-flex graph-detail">
          <div className="info">
            <div className="cheel-info pt-4">
              <h6 className="cheel-color ms-5">Gallery</h6>
              <img
                src="../images/icons/collections_bookmark.png"
                className="ms-5"
                alt=""
              />
              <h6 className="cheel-color ms-5 mt-3">17k images</h6>
            </div>
            <div className="overview pt-3 mt-2">
              <h6 className="design-overview ms-5">Overview</h6>
            </div>
            <div className="overview pt-3 mt-2">
              <h6 className="design-overview ms-5">Content</h6>
            </div>
            <div className="overview pt-3 mt-2">
              <h6 className="design-overview ms-5">Audience</h6>
            </div>
          </div>
          <div className="graph mt-1 ms-1">
            <div className="graph-information d-flex mt-4 justify-content-evenly align-items-center">
              <div className="col-md-3">
                <p>Views</p>
                <div className="view-detail d-flex">
                  <h4>2.3K</h4>
                  <i className="fa-regular fa-circle-check ms-3 mt-2" />
                </div>
                <span className="about-info">About the same as usual</span>
              </div>
              <div className="col-md-3">
                <p>Watch time (hours)</p>
                <div className="view-detail d-flex">
                  <h4>39.3</h4>
                  <i className="fa-solid fa-circle-down ms-3 mt-2" />
                </div>
                <span className="about-info">
                  39% less than previous 28 days
                </span>
              </div>
              <div className="col-md-3">
                <p>Subscribers</p>
                <div className="view-detail d-flex">
                  <h4>+22</h4>
                  <i className="fa-solid fa-circle-down ms-3 mt-2" />
                </div>
                <span className="about-info">
                  84% less than previous 28 days
                </span>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <canvas id="chLine3" />
              </div>
            </div>
            <div className="more mt-4">
              <button className="see-more ms-4">SEE MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="graph-shop mt-3">
        <div className="d-flex graph-detail">
          <div className="info">
            <div className="cheel-info pt-4">
              <h6 className="cheel-color ms-5">Shop</h6>
              <img
                src="../images/icons/local_mall.png"
                className="ms-5"
                alt=""
              />
              <h6 className="cheel-color ms-5 mt-3">150k products</h6>
            </div>
            <div className="overview pt-3 mt-2">
              <h6 className="design-overview ms-5">Overview</h6>
            </div>
            <div className="overview pt-3 mt-2">
              <h6 className="design-overview ms-5">Content</h6>
            </div>
            <div className="overview pt-3 mt-2">
              <h6 className="design-overview ms-5">Audience</h6>
            </div>
          </div>
          <div className="graph mt-1 ms-1">
            <div className="graph-information d-flex mt-4 justify-content-evenly align-items-center">
              <div className="sold">
                <img src="../images/icons/inventory_2.png" alt="" />
                <p className="solding-amount mt-3">127k Sold</p>
              </div>
              <div className="views">
                <img src="../images/icons/disabled_visible.png" alt="" />
                <p className="views-number">2k views</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <canvas id="chLine4" />
              </div>
            </div>
            <div className="more mt-4">
              <button className="see-more ms-4">SEE MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="property-listing mt-3">
        <div className="d-flex graph-detail">
          <div className="info">
            <div className="cheel-info pt-4">
              <h6 className="cheel-color ms-5">Property</h6>
              <img
                src="../images/icons/bungalow.png"
                className="ms-5"
                alt=""
              />
              <h6 className="cheel-color ms-5 mt-3">150k properties</h6>
            </div>
            <div className="overview pt-3 mt-2">
              <h6 className="design-overview ms-5">Overview</h6>
            </div>
            <div className="overview pt-3 mt-2">
              <h6 className="design-overview ms-5">Content</h6>
            </div>
            <div className="overview pt-3 mt-2">
              <h6 className="design-overview ms-5">Audience</h6>
            </div>
          </div>
          <div className="graph mt-1 ms-1">
            <div className="card">
              <div className="card-body">
                <canvas id="chLine5" />
              </div>
            </div>
            <div className="more mt-4">
              <button className="see-more ms-4">SEE MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        </>
    );
}

export default Analyticsdashboard;