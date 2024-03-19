import React from "react";

const RightSideBar = () => {
  return (
    <div class="col-12 col-md-3  right-sidebar-section">
      <div class="continer-fluid">
        <div class="video" id="video">
          <button
            type="button"
            onclick="document.getElementById('video').style.display='none'"
            class="btn"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
          <img src="/images/video1.png" width="100%" alt="img" />
        </div>

        <div class="feature mt-3">
          <div class="h6">Feature</div>
          <div>
            <div class="container-fluid">
              <div class="row feature-child p-0">
                <div class="col-sm-6 p-1 mt-0">
                  <img src="/images/col1.jpg" class="rounded" alt="image" />
                  <div class="mt-3">
                    <div class="p">Lorem ipsum, dolor</div>
                    <p>4k View 2Months ago</p>
                  </div>
                </div>
                <div class="col-sm-6 p-1 mt-0">
                  <img src="/images/col2.jpg" class="rounded" alt="image" />
                  <div class="mt-3">
                    <div class="p">Lorem ipsum, dolor</div>
                    <p>1 millions View</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-5 Sprd" id="Sponsored">
          <div class="d-flex justify-content-between align-items-center sprd-content">
            <div class="h6">Sponsored</div>
            <button
              type="button"
              onclick="document.getElementById('Sponsored').style.display='none'"
              class="btn"
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <img src="/images/g4.jpg" width="100%" alt="img" />
        </div>

        <div class="sub mt-3">
          <img src="/images/col4.jpg" width="100%" />
          <div class="capt">
            <div class="profile d-flex justify-content-around align-items-center">
              <div class="d-flex align-items-center gap-2">
                <img
                  src="/images/profile.jpg"
                  width="30px"
                  class="rounded-circle"
                  alt="img"
                />
                <div class="h6 mt-2 text-md">SADUKS Tuts</div>
              </div>
              <button type="button" class="btn">
                subcribe
              </button>
            </div>
          </div>
        </div>

        <div class="apartment2 mt-5">
          <div class="col">
            <img
              src="/images/apartment.jpg"
              width="300px"
              height="112px"
              alt="image"
            />
            <p class="price">$2500/Mo</p>
            <div class="d-flex justify-content-between align-items-center apart-content">
              <div class="h5 title">Comefortable Appartment</div>
              <a href="">
                <button type="button" class="btn rent-btn">
                  For Rent
                </button>
              </a>
            </div>
            <p class="address">
              <i class="fa-solid fa-location-dot"></i>709 West Drive Chicago,IL
              60606
            </p>
            <div class="d-flex justify-content-between icons">
              <div>
                <p>
                  <i class="fa-solid fa-bed"></i>3 Beds
                </p>
              </div>
              <div>
                <p>
                  <i class="fa-solid fa-bath"></i>2 Baths
                </p>
              </div>
              <div>
                <p>
                  <i class="fa-solid fa-square-parking"></i>1 Parking
                </p>
              </div>
              <div>
                <p>
                  <i class="fa-solid fa-ruler"></i>120sqft
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="food-order">
          <div class="food">
            <img
              src="/images/order food.jpg"
              width="110px"
              class="rounded-circle"
              alt="image"
            />

            <div class="d-flex justify-content-around">
              <p>
                <b>$40.0</b>
              </p>
              <p>
                <i class="fa-solid fa-star"></i>
                <b>5.0</b>
              </p>
            </div>
            <div class="h4">Healty Salad</div>
            <a href="">
              <button type="button" class="btn">
                Order Now <i class="fa-solid fa-arrow-right"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightSideBar;
