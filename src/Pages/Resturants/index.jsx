import React from "react";
import PHeader from "../../Componenets/PHeader";
import "../../Pages/Resturants/returants-front-page.css"
import PSidebar from "../../Componenets/PSidebar"

const Resturants = () => {
  return (
    <>
     <PHeader/>
      <div className="container-fluid">
        <div className="row">
           
          {/* sidebar column starts */}
          <PSidebar/>
          {/* sidebar column ends */}
          {/* center main starts  */}
          <div className="col-9 ">
            <div className="container-fluid mt-3 p-0">
              <div className="search-input">
                <i className="fa fa-search" />
                <input
                  type="search"
                  defaultValue=""
                  placeholder="search user,food"
                />
              </div>
            </div>
            {/* section order start */}
            <div className="container-fluid mt-5">
              <div className="container d-flex justify-content-between order">
                <div className="h4">Delicious Food Tooday</div>
                <div className="h4">Feautred</div>
              </div>
              <div className="row d-flex flex-row justify-content-between order-columns">
                <div className="col-6 d-flex justify-content-around product-column-main">
                  <div className="product-column p-2">
                    <img
                      src="../images/order food.jpg"
                      width="110px"
                      className="rounded-circle"
                      alt="image"
                    />
                    <div className="d-flex justify-content-between ">
                      <p>
                        <b>$40.0</b>
                      </p>
                      <p>
                        <i className="fa-solid fa-star" />
                        <b>5.0</b>
                      </p>
                    </div>
                    <div className="h4 product-column-content">
                      <h4> Healty Salad</h4>
                      <a href="#" className="btn content-btn">
                        Order Now
                        <i className="fa-solid fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="product-column  p-2">
                    <img
                      src="../images/order food.jpg"
                      width="110px"
                      className="rounded-circle"
                      alt="image"
                    />
                    <div className="d-flex justify-content-between">
                      <p>
                        <b>$40.0</b>
                      </p>
                      <p>
                        <i className="fa-solid fa-star" />
                        <b>5.0</b>
                      </p>
                    </div>
                    <div className="h4 product-column-content">
                      <h4> Healty Salad</h4>
                      <a href="#" className="btn content-btn">
                        Order Now
                        <i className="fa-solid fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 d-flex justify-content-around product-column-main">
                  <div className="product-column  p-2">
                    <img
                      src="../images/order food.jpg"
                      width="110px"
                      className="rounded-circle"
                      alt="image"
                    />
                    <div className="d-flex justify-content-between">
                      <p>
                        <b>$40.0</b>
                      </p>
                      <p>
                        <i className="fa-solid fa-star" />
                        <b>5.0</b>
                      </p>
                    </div>
                    <div className="h4 product-column-content">
                      <h4> Healty Salad</h4>
                      <a href="#" className="btn content-btn">
                        Order Now
                        <i className="fa-solid fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="product-column  p-2">
                    <img
                      src="../images/order food.jpg"
                      width="110px"
                      className="rounded-circle"
                      alt="image"
                    />
                    <div className="d-flex justify-content-between">
                      <p>
                        <b>$40.0</b>
                      </p>
                      <p>
                        <i className="fa-solid fa-star" />
                        <b>5.0</b>
                      </p>
                    </div>
                    <div className="h4 product-column-content">
                      <h4> Healty Salad</h4>
                      <a href="#" className="btn content-btn">
                        Order Now
                        <i className="fa-solid fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* section order end */}
            {/* section cheel starts */}
            <div className="container-fluid ">
              <div className="container d-flex justify-content-between topcheel">
                <div className="h4">Top Cheels</div>
                <a href="">
                  <button type="button" className="btn">
                    View all
                  </button>
                </a>
              </div>
              <div className="row topcheel-columns">
                <div className="col-sm-3">
                  <img
                    src="../images/col1.jpg"
                    className="rounded"
                    alt="image"
                    height="64%"
                  />
                  <div className="p">Lorem ipsum, dolor</div>
                  <p>4k View 2Months ago</p>
                </div>
                <div className="col-sm-3">
                  <img
                    src="../images/col2.jpg"
                    className="rounded"
                    alt="image"
                    height="64%"
                  />
                  <div className="p">Lorem ipsum, dolor</div>
                  <p>1 millions View</p>
                </div>
                <div className="col-sm-3">
                  <img
                    src="../images/col3.jpg"
                    className="rounded"
                    alt="image"
                    height="64%"
                  />
                  <div className="p">Lorem ipsum, dolor</div>
                  <p>1 millions View</p>
                </div>
                <div className=" col-sm-3 Sprd" id="Sponsored">
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
              </div>
            </div>
            {/* section cheel end */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Resturants;
