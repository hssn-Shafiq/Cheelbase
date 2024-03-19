import React from "react";
import PHeader from "../../Componenets/PHeader";
import PSidebar from "../../Componenets/PSidebar";
import RightSideBar from "../../Componenets/RightSideBar";
import "../Property/property.css";

const Property = () => {
  return (
    <>
      <PHeader />
      <div class="container-fliud container-width">
        
        <div class="row">
            
          <PSidebar />
          

          <div className="col-lg-5 add-width">
            <div className="row">
              <div className="">
                <div
                  className="input-group text-light "
                  style={{
                    margin: "0 auto",
                    width: "51%",
                  }}
                >
                  <input
                    className="form-control search-bar search-bar1 text-dark "
                    placeholder="Search videos, others"
                    type="text"
                  />
                  <div className="input-group-prepend ">
                    <button
                      className="btn btn-outline-light"
                      style={{
                        borderRadius: "53%",
                        fontSize: "14px",
                        right: "40px",
                      }}
                      type="button"
                    >
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </div>
              <h6
                style={{
                  marginLeft: "20px",
                }}
              >
                Featured
              </h6>
              <div className="Featured">
                <div className="property-feature">
                  <a href="property-nextpart.html">
                    <img
                      className="property-img"
                      height="100%"
                      src="../images/Rectangle 7.png"
                      width="90%"
                    />
                  </a>
                </div>
                <div className="property-feature">
                  <a href="property-nextpart.html">
                    <img
                      alt=""
                      className="property-img"
                      height="100%"
                      src="../images/Rectangle 7.png"
                      width="90%"
                    />
                  </a>
                </div>
                <div className="property-feature">
                  <a href="property-nextpart.html">
                    {" "}
                    <img
                      alt=""
                      className="property-img"
                      height="100%"
                      src="../images/Rectangle 7.png"
                      width="90%"
                    />
                  </a>
                </div>
                <div className="property-feature">
                  <a href="property-nextpart.html">
                    <img
                      alt=""
                      className="property-img"
                      height="100%"
                      src="../images/Rectangle 7.png"
                      width="90%"
                    />
                  </a>
                </div>
              </div>
              <div className="row mt-5 property-small-width">
                <div className="col-lg-5 property-small-width1">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="property-small-img">
                        <img
                          alt=""
                          height="100px"
                          src="../images/Rectangle 9.png"
                          width="100px"
                        />
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="property-small-text">
                        <h6 className="property-small-text1">RANCH HOME</h6>
                        <p className="property-small-text2">
                          520 N Btoudry Ave Los Angeles
                        </p>
                        <div className="property-small-img2">
                          <img
                            alt=""
                            className="property-small-img1"
                            src="../images/Group 1.png"
                          />
                          <img
                            alt=""
                            className="property-small-img1"
                            src="../images/Group 2.png"
                          />
                          <img
                            alt=""
                            className="property-small-img1"
                            src="../images/Group 3.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 property-small-width1 ms-5 ">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="property-small-img">
                        <img
                          alt=""
                          height="100px"
                          src="../images/Rectangle 9.png"
                          width="84px"
                        />
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="property-small-text">
                        <h6 className="property-small-text1">RANCH HOME</h6>
                        <p className="property-small-text2">
                          520 N Btoudry Ave Los Angeles
                        </p>
                        <div className="property-small-img2">
                          <img
                            alt=""
                            className="property-small-img1"
                            src="../images/Group 1.png"
                          />
                          <img
                            alt=""
                            className="property-small-img1"
                            src="../images/Group 2.png"
                          />
                          <img
                            alt=""
                            className="property-small-img1"
                            src="../images/Group 3.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-2 property-small-width">
                <div className="col-lg-6 property-small-width1">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="property-small-img">
                        <img
                          alt=""
                          height="100px"
                          src="../images/Rectangle 9.png"
                          width="84px"
                        />
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="property-small-text">
                        <h6 className="property-small-text1">RANCH HOME</h6>
                        <p className="property-small-text2">
                          520 N Btoudry Ave Los Angeles
                        </p>
                        <div className="property-small-img2">
                          <img
                            alt=""
                            className="property-small-img1"
                            src="../images/Group 1.png"
                          />
                          <img
                            alt=""
                            className="property-small-img1"
                            src="../images/Group 2.png"
                          />
                          <img
                            alt=""
                            className="property-small-img1"
                            src="../images/Group 3.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 property-small-width1 ms-5">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="property-small-img">
                        <img
                          alt=""
                          height="100px"
                          src="../images/Rectangle 9.png"
                          width="84px"
                        />
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="property-small-text">
                        <h6 className="property-small-text1">RANCH HOME</h6>
                        <p className="property-small-text2">
                          520 N Btoudry Ave Los Angeles
                        </p>
                        <div className="property-small-img2">
                          <img
                            alt=""
                            className="property-small-img1"
                            src="../images/Group 1.png"
                          />
                          <img
                            alt=""
                            className="property-small-img1"
                            src="../images/Group 2.png"
                          />
                          <img
                            alt=""
                            className="property-small-img1"
                            src="../images/Group 3.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-2 property-small-width">
                <div className="col-lg-6 property-small-width1 ">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="property-small-img">
                        <img
                          alt=""
                          height="100px"
                          src="../images/Rectangle 9.png"
                          width="84px"
                        />
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="property-small-text">
                        <h6 className="property-small-text1">RANCH HOME</h6>
                        <p className="property-small-text2">
                          520 N Btoudry Ave Los Angeles
                        </p>
                        <div className="property-small-img2">
                          <img
                            alt=""
                            className="property-small-img1"
                            src="../images/Group 1.png"
                          />
                          <img
                            alt=""
                            className="property-small-img1"
                            src="../images/Group 2.png"
                          />
                          <img
                            alt=""
                            className="property-small-img1"
                            src="../images/Group 3.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6  property-small-width1 ms-5">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="property-small-img">
                        <img
                          alt=""
                          height="100px"
                          src="../images/Rectangle 9.png"
                          width="84px"
                        />
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="property-small-text">
                        <h6 className="property-small-text1">RANCH HOME</h6>
                        <p className="property-small-text2">
                          520 N Btoudry Ave Los Angeles
                        </p>
                        <div className="property-small-img2">
                          <img
                            alt=""
                            className="property-small-img1"
                            src="../images/Group 1.png"
                          />
                          <img
                            alt=""
                            className="property-small-img1"
                            src="../images/Group 2.png"
                          />
                          <img
                            alt=""
                            className="property-small-img1"
                            src="../images/Group 3.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-4">
                <img
                  alt=""
                  className="img-product"
                  src="../images/product.jpeg"
                  width="100%"
                />
              </div>
              <div className="col-lg-4">
                <img
                  alt=""
                  className="img-product"
                  src="../images/product.jpeg"
                  width="100%"
                />
              </div>
              <div className="col-lg-4">
                <img
                  alt=""
                  className="img-product"
                  src="../images/product.jpeg"
                  width="100%"
                />
              </div>
            </div>
          </div>
          <RightSideBar/>
        </div>
      </div>
    </>
  );
};
export default Property;
