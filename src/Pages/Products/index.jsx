import React from "react";
import VisitorProfile from "../../Componenets/VisitorProfile";
import Header from "../../Componenets/Header";
import "../../Pages/VisitorProfile/visitor-profile.css";
import "../../Pages/Products/product-section.css";
import "../../Pages/Products/productpage.css";
import "../../Pages/VisitorProfile/visitor-profile.css";
import "../../Pages/Products/icon-sec.css";
import "../../Pages/Resturants/returants-front-page.css"
import "../../Pages/Products/visitor-profile-cheel.css"
const Products = () => {
  return (
    <>
      <main class="max-width">
        <div className="row">
          <Header />
          <VisitorProfile />
          <>
            <div className="row width-row my-5">
              <div className="col-lg-2 icons-links  ms-4">
                <a
                  href="visitors-profile-cheels.html"
                  className="d-flex flex-column align-items-center"
                >
                  <img
                    className="img-width"
                    src="../images/amp_stories.png"
                    alt=""
                  />
                  <label className="mt-2 " htmlFor="#">
                    <b>Cheels</b>
                  </label>
                </a>
              </div>
              <div className="col-lg-2 icons-links">
                <a
                  href="visitor-video.html"
                  className="d-flex flex-column align-items-center"
                >
                  <img className="img-width" src="../images/movie.png" alt="" />
                  <label className="mt-2" htmlFor="#">
                    <b>Videos</b>
                  </label>
                </a>
              </div>
              <div className="col-lg-2 icons-links">
                <a
                  href="visitor-gallery.html"
                  className="d-flex flex-column align-items-center"
                >
                  <img
                    className="img-width"
                    src="../images/gallery_thumbnail.png"
                    alt=""
                  />
                  <label className="mt-2" htmlFor="">
                    <b>Gallery</b>
                  </label>
                </a>
              </div>
              <div className="col-lg-2 icons-links">
                <a
                  href="restaurant.html"
                  className="d-flex flex-column align-items-center"
                >
                  <img
                    className="img-width"
                    src="../images/lunch_dining.png"
                    alt=""
                  />
                  <label className="mt-2" htmlFor="">
                    <b>Foods</b>
                  </label>
                </a>
              </div>
              <div className="col-lg-2 icons-links amp-stories">
                <a href="product.html" className="d-flex flex-column align-items-center">
                  <img
                    className="img-width"
                    src="../images/shopping_basket1.png"
                    alt=""
                  />
                  <label className="mt-2 text-light" htmlFor="">
                    <b>Products</b>
                  </label>
                </a>
              </div>
              <div className="col-lg-2 icons-links">
                <a href="property.html" className="d-flex flex-column align-items-center">
                  <img
                    className="img-width"
                    src="../images/real_estate_agent.png"
                    alt=""
                  />
                  <label className="mt-2 " htmlFor="">
                    <b>Properties</b>
                  </label>
                </a>
              </div>
            </div>
            {/* 1st */}
        
            <div className="photos-detail">
  <div className="cat-photos d-flex justify-content-evenly align-items-center ">
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="catbody">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>

    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="catbody">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="catbody">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="catbody">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
    <div className="card-cat" style={{ width: "15.5rem" }}>
      <div className="feature mt-1">
        <p className="text-center">Featured</p>
      </div>
      <div className="icons d-flex gap-3">
        <img src="../images/icons/Group 18687.png" alt="" />
        <img src="../images/icons/Group 18688.png" alt="" />
      </div>
      <div className="catbody">
        <p className="">Toddler's toy</p>
        <div className="usd justify-content-between align-items-center d-flex">
          <span className="amount">$20.36 (USD)</span>
          <button className="btn more">more</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div className="burger-photos d-flex justify-content-evenly align-items-center ">
    <div className="burger-1">
      <div className="burger"></div>
      <div className="burger-detail ">
        <div className="burger-price d-flex  justify-content-between align-items-center">
          <p className="burgerr ms-1 ">Burger</p>
          <p className="price me-1 ">$3.49</p>
        </div>
        <p className="description  text-center">
          This is my whole description for the whole me
        </p>
        <div className="more-detail d-flex justify-content-between align-items-center">
          <div className="more-btn  me-5">
            <button className="btn  btn-more">more</button>
          </div>
          <div className="icons-burger d-flex gap-3 me-3">
            <img src="../images/icons/Group 18687.png" alt="" />
            <img src="../images/icons/Group 18688.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="burger-1 ">
      <div className="burger"></div>
      <div className="burger-detail ">
        <div className="burger-price d-flex  justify-content-between align-items-center">
          <p className="burgerr ms-1 ">Burger</p>
          <p className="price me-1 ">$3.49</p>
        </div>
        <p className="description  text-center">
          This is my whole description for the whole me
        </p>
        <div className="more-detail d-flex justify-content-between align-items-center">
          <div className="more-btn  me-5">
            <button className="btn  btn-more">more</button>
          </div>
          <div className="icons-burger d-flex gap-3 me-3">
            <img src="../images/icons/Group 18687.png" alt="" />
            <img src="../images/icons/Group 18688.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="burger-1 ">
      <div className="burger"></div>
      <div className="burger-detail ">
        <div className="burger-price d-flex  justify-content-between align-items-center">
          <p className="burgerr ms-1 ">Burger</p>
          <p className="price me-1 ">$3.49</p>
        </div>
        <p className="description  text-center">
          This is my whole description for the whole me
        </p>
        <div className="more-detail d-flex justify-content-between align-items-center">
          <div className="more-btn  me-5">
            <button className="btn  btn-more">more</button>
          </div>
          <div className="icons-burger d-flex gap-3 me-3">
            <img src="../images/icons/Group 18687.png" alt="" />
            <img src="../images/icons/Group 18688.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="burger-1 ">
      <div className="burger"></div>
      <div className="burger-detail ">
        <div className="burger-price d-flex  justify-content-between align-items-center">
          <p className="burgerr ms-1 ">Burger</p>
          <p className="price me-1 ">$3.49</p>
        </div>
        <p className="description  text-center">
          This is my whole description for the whole me
        </p>
        <div className="more-detail d-flex justify-content-between align-items-center">
          <div className="more-btn  me-5">
            <button className="btn  btn-more">more</button>
          </div>
          <div className="icons-burger d-flex gap-3 me-3">
            <img src="../images/icons/Group 18687.png" alt="" />
            <img src="../images/icons/Group 18688.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="burger-1">
      <div className="burger"></div>
      <div className="burger-detail ">
        <div className="burger-price d-flex  justify-content-between align-items-center">
          <p className="burgerr ms-1 ">Burger</p>
          <p className="price me-1 ">$3.49</p>
        </div>
        <p className="description  text-center">
          This is my whole description for the whole me
        </p>
        <div className="more-detail d-flex justify-content-between align-items-center">
          <div className="more-btn  me-5">
            <button className="btn  btn-more">more</button>
          </div>
          <div className="icons-burger d-flex gap-3 me-3">
            <img src="../images/icons/Group 18687.png" alt="" />
            <img src="../images/icons/Group 18688.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="house-photos d-flex justify-content-evenly align-items-center">
    <div className="card" style={{ width: "18.8rem" }}>
      <img
        src="../images/icons/Group 18687.png"
        className="img-whatsapp"
        alt="..."
      />
      <div className="catbody justify-content-between align-items-center gap-5">
        <h6 className="price-per-month mt-2 ">$2500/Mo</h6>
        <div className="apartment  d-flex justify-content-between align-items-center">
          <p className="comfort">Comfortable Apartment</p>
          <button className="btn btn-sale mb-3">Sale</button>
        </div>
        <div className="address d-flex gap-1">
          <img
            src="../images/icons/Vector (8).png"
            className="img-location"
          />
          <p className="full-address "> 709 West Drive Chicago, IL 60606</p>
        </div>
        <div className="icons-details d-flex">
          <div className="bed-2 d-flex">
            <img
              src="../images/icons/Vector (7).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border"></div>
            <p className="beds-3 ms-1">3 Beds</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon (2).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">2 Baths</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon.png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">1 Parking</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon (1).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">120 sqft</p>
          </div>
        </div>
      </div>
    </div>
    <div className="card" style={{ width: "18.8rem" }}>
      <img
        src="../images/icons/Group 18687.png"
        className="img-whatsapp"
        alt="..."
      />
      <div className="catbody justify-content-between align-items-center gap-5">
        <h6 className="price-per-month mt-2 ">$2500/Mo</h6>
        <div className="apartment  d-flex justify-content-between align-items-center">
          <p className="comfort">Comfortable Apartment</p>
          <button className="btn btn-sale mb-3">Sale</button>
        </div>
        <div className="address d-flex gap-1">
          <img
            src="../images/icons/Vector (8).png"
            className="img-location"
          />
          <p className="full-address "> 709 West Drive Chicago, IL 60606</p>
        </div>
        <div className="icons-details d-flex">
          <div className="bed-2 d-flex">
            <img
              src="../images/icons/Vector (7).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border"></div>
            <p className="beds-3 ms-1">3 Beds</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon (2).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">2 Baths</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon.png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">1 Parking</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon (1).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">120 sqft</p>
          </div>
        </div>
      </div>
    </div>
    <div className="card" style={{ width: "18.8rem" }}>
      <img
        src="../images/icons/Group 18687.png"
        className="img-whatsapp"
        alt="..."
      />
      <div className="catbody justify-content-between align-items-center gap-5">
        <h6 className="price-per-month mt-2 ">$2500/Mo</h6>
        <div className="apartment  d-flex justify-content-between align-items-center">
          <p className="comfort">Comfortable Apartment</p>
          <button className="btn btn-sale mb-3">Sale</button>
        </div>
        <div className="address d-flex gap-1">
          <img
            src="../images/icons/Vector (8).png"
            className="img-location"
          />
          <p className="full-address "> 709 West Drive Chicago, IL 60606</p>
        </div>
        <div className="icons-details d-flex">
          <div className="bed-2 d-flex">
            <img
              src="../images/icons/Vector (7).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border"></div>
            <p className="beds-3 ms-1">3 Beds</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon (2).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">2 Baths</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon.png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">1 Parking</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon (1).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">120 sqft</p>
          </div>
        </div>
      </div>
    </div>
    <div className="card" style={{ width: "18.8rem" }}>
      <img
        src="../images/icons/Group 18687.png"
        className="img-whatsapp"
        alt="..."
      />
      <div className="catbody justify-content-between align-items-center gap-5">
        <h6 className="price-per-month mt-2 ">$2500/Mo</h6>
        <div className="apartment  d-flex justify-content-between align-items-center">
          <p className="comfort">Comfortable Apartment</p>
          <button className="btn btn-sale mb-3">Sale</button>
        </div>
        <div className="address d-flex gap-1">
          <img
            src="../images/icons/Vector (8).png"
            className="img-location"
          />
          <p className="full-address "> 709 West Drive Chicago, IL 60606</p>
        </div>
        <div className="icons-details d-flex">
          <div className="bed-2 d-flex">
            <img
              src="../images/icons/Vector (7).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border"></div>
            <p className="beds-3 ms-1">3 Beds</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon (2).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">2 Baths</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon.png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">1 Parking</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon (1).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">120 sqft</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="house-photos-2 d-flex  justify-content-evenly align-items-center">
    <div className="card" style={{ width: "18.8rem" }}>
      <img
        src="../images/icons/Group 18687.png"
        className="img-whatsapp"
        alt="..."
      />
      <div className="catbody justify-content-between align-items-center gap-5">
        <h6 className="price-per-month mt-2 ">$2500/Mo</h6>
        <div className="apartment  d-flex justify-content-between align-items-center">
          <p className="comfort">Comfortable Apartment</p>
          <button className="btn btn-sale mb-3">Sale</button>
        </div>
        <div className="address d-flex gap-1">
          <img
            src="../images/icons/Vector (8).png"
            className="img-location"
          />
          <p className="full-address "> 709 West Drive Chicago, IL 60606</p>
        </div>
        <div className="icons-details d-flex">
          <div className="bed-2 d-flex">
            <img
              src="../images/icons/Vector (7).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border"></div>
            <p className="beds-3 ms-1">3 Beds</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon (2).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">2 Baths</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon.png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">1 Parking</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon (1).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">120 sqft</p>
          </div>
        </div>
      </div>
    </div>
    <div className="card" style={{ width: "18.8rem" }}>
      <img
        src="../images/icons/Group 18687.png"
        className="img-whatsapp"
        alt="..."
      />
      <div className="catbody justify-content-between align-items-center gap-5">
        <h6 className="price-per-month mt-2 ">$2500/Mo</h6>
        <div className="apartment  d-flex justify-content-between align-items-center">
          <p className="comfort">Comfortable Apartment</p>
          <button className="btn btn-sale mb-3">Sale</button>
        </div>
        <div className="address d-flex gap-1">
          <img
            src="../images/icons/Vector (8).png"
            className="img-location"
          />
          <p className="full-address "> 709 West Drive Chicago, IL 60606</p>
        </div>
        <div className="icons-details d-flex">
          <div className="bed-2 d-flex">
            <img
              src="../images/icons/Vector (7).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border"></div>
            <p className="beds-3 ms-1">3 Beds</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon (2).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">2 Baths</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon.png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">1 Parking</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon (1).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">120 sqft</p>
          </div>
        </div>
      </div>
    </div>
    <div className="card" style={{ width: "18.8rem" }}>
      <img
        src="../images/icons/Group 18687.png"
        className="img-whatsapp"
        alt="..."
      />
      <div className="catbody justify-content-between align-items-center gap-5">
        <h6 className="price-per-month mt-2 ">$2500/Mo</h6>
        <div className="apartment  d-flex justify-content-between align-items-center">
          <p className="comfort">Comfortable Apartment</p>
          <button className="btn btn-sale mb-3">Sale</button>
        </div>
        <div className="address d-flex gap-1">
          <img
            src="../images/icons/Vector (8).png"
            className="img-location"
          />
          <p className="full-address "> 709 West Drive Chicago, IL 60606</p>
        </div>
        <div className="icons-details d-flex">
          <div className="bed-2 d-flex">
            <img
              src="../images/icons/Vector (7).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border"></div>
            <p className="beds-3 ms-1">3 Beds</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon (2).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">2 Baths</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon.png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">1 Parking</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon (1).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">120 sqft</p>
          </div>
        </div>
      </div>
    </div>
    <div className="card" style={{ width: "18.8rem" }}>
      <img
        src="../images/icons/Group 18687.png"
        className="img-whatsapp"
        alt="..."
      />
      <div className="catbody justify-content-between align-items-center gap-5">
        <h6 className="price-per-month mt-2 ">$2500/Mo</h6>
        <div className="apartment  d-flex justify-content-between align-items-center">
          <p className="comfort">Comfortable Apartment</p>
          <button className="btn btn-sale mb-3">Sale</button>
        </div>
        <div className="address d-flex gap-1">
          <img
            src="../images/icons/Vector (8).png"
            className="img-location"
          />
          <p className="full-address "> 709 West Drive Chicago, IL 60606</p>
        </div>
        <div className="icons-details d-flex">
          <div className="bed-2 d-flex">
            <img
              src="../images/icons/Vector (7).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border"></div>
            <p className="beds-3 ms-1">3 Beds</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon (2).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">2 Baths</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon.png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">1 Parking</p>
          </div>
          <div className="bed-2 d-flex ms-3">
            <img
              src="../images/icons/Icon (1).png"
              className="img-bed"
              alt=""
            />
            <div className="left-border ms-1"></div>
            <p className="beds-3 ms-1">120 sqft</p>
          </div>
        </div>
      </div>
    </div>
  </div>


                <div className="row icon-start-side-width">
                  <div className="icon-start-side">
                    <div className="side-first-icon">
                      <img src="../images/Ellipse 346.png" alt="" />
                    </div>
                    <div className="side-text-icon">
                      <span>Cheelbase</span>
                    </div>
                    <div className="side-second-icon">
                      <img src="../images/Group 18482.png" alt="" />
                      <img src="../images/Group 18481.png" alt="" />
                    </div>
                    <div className="side-third-icon">
                      <span>@cheelbas......</span>
                    </div>
                    <div className="side-fourth-icon">
                      <span>Ad</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <span style={{ fontSize: 10, textAlign: "center" }}>
                      Nice bagggggg for breakfast , lanuckkkkk anrd mornjddhhd eats
                      forever testlfig hfhfh click on the link below to downlaod #dad
                    </span>
                  </div>
                  <div className="fifth-img-below-bugger mt-2">
                    <img
                      className="ms-1"
                      src="../images/Rectangle 5028.png"
                      width="100%"
                      height="247px"
                      alt=""
                    />
                  </div>
                  <div className="row ms-2 mt-2">
                    <div className="col-lg-1">
                      <img src="../images/thumbs-up.png" alt="" />
                    </div>
                    <div className="col-lg-2">
                      <img src="../images/heart.png" alt="" />
                    </div>
                    <div className="col-lg-2">
                      <span style={{ fontSize: 10 }}>541</span>
                    </div>
                    <div className="col-lg-3">
                      <span style={{ fontSize: 10 }}>87 Shares</span>
                    </div>
                    <div className="col-lg-3">
                      <span style={{ fontSize: 10 }}>shop now</span>
                    </div>
                  </div>
                </div>
           
            {/* 2nd */}
            <div className="row">
              <div className="col-lg-3">
                <div>
                  <img
                    className="img-3-width"
                    src="../images/Subtract(1).png"
                    alt=""
                  />
                </div>
                <div className="baby-featured">
                  <div className="baby-product">
                    <span>Baby products</span>
                  </div>
                  <div className="featured">
                    <span>Featured</span>
                  </div>
                  <div className="whattsapp-icon ms-2">
                    <img
                      className="fs-1"
                      src="../images/whatsapp-yellow.png"
                      alt=""
                    />
                    <img src="../images/Group 18682.png" alt="" />
                  </div>
                  <div className="text-below-Toddler">
                    <span>Toddler's toy</span>
                  </div>
                  <div className="courrency mt-3">
                    <span className="courrency1">$20.36 (USD)</span>
                    <button className="btn-bg-button text-end">more</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div>
                  <img
                    className="img-3-width"
                    src="../images/Subtract(1).png"
                    alt=""
                  />
                </div>
                <div className="baby-featured">
                  <div className="baby-product">
                    <span>Baby products</span>
                  </div>
                  <div className="featured">
                    <span>Featured</span>
                  </div>
                  <div className="whattsapp-icon ms-2">
                    <img
                      className="fs-1"
                      src="../images/whatsapp-yellow.png"
                      alt=""
                    />
                    <img src="../images/Group 18682.png" alt="" />
                  </div>
                  <div className="text-below-Toddler">
                    <span>Toddler's toy</span>
                  </div>
                  <div className="courrency mt-3">
                    <span className="courrency1">$20.36 (USD)</span>
                    <button className="btn-bg-button text-end">more</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div>
                  <img
                    className="img-3-width"
                    src="../images/Subtract(1).png"
                    alt=""
                  />
                </div>
                <div className="baby-featured">
                  <div className="baby-product">
                    <span>Baby products</span>
                  </div>
                  <div className="featured">
                    <span>Featured</span>
                  </div>
                  <div className="whattsapp-icon ms-2">
                    <img
                      className="fs-1"
                      src="../images/whatsapp-yellow.png"
                      alt=""
                    />
                    <img src="../images/Group 18682.png" alt="" />
                  </div>
                  <div className="text-below-Toddler">
                    <span>Toddler's toy</span>
                  </div>
                  <div className="courrency mt-3">
                    <span className="courrency1">$20.36 (USD)</span>
                    <button className="btn-bg-button text-end">more</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="row icon-start-side-width">
                  <div className="icon-start-side">
                    <div className="side-first-icon">
                      <img src="../images/Ellipse 346.png" alt="" />
                    </div>
                    <div className="side-text-icon">
                      <span>Cheelbase</span>
                    </div>
                    <div className="side-second-icon">
                      <img src="../images/Group 18482.png" alt="" />
                      <img src="../images/Group 18481.png" alt="" />
                    </div>
                    <div className="side-third-icon">
                      <span>@cheelbas......</span>
                    </div>
                    <div className="side-fourth-icon">
                      <span>Ad</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <span style={{ fontSize: 10, textAlign: "center" }}>
                      Nice bagggggg for breakfast , lanuckkkkk anrd mornjddhhd eats
                      forever testlfig hfhfh click on the link below to downlaod #dad
                    </span>
                  </div>
                  <div className="fifth-img-below-bugger mt-2">
                    <img
                      className="ms-1"
                      src="../images/Rectangle 5028.png"
                      width="100%"
                      height="247px"
                      alt=""
                    />
                  </div>
                  <div className="row ms-2 mt-2">
                    <div className="col-lg-1">
                      <img src="../images/thumbs-up.png" alt="" />
                    </div>
                    <div className="col-lg-2">
                      <img src="../images/heart.png" alt="" />
                    </div>
                    <div className="col-lg-2">
                      <span style={{ fontSize: 10 }}>541</span>
                    </div>
                    <div className="col-lg-3">
                      <span style={{ fontSize: 10 }}>87 Shares</span>
                    </div>
                    <div className="col-lg-3">
                      <span style={{ fontSize: 10 }}>shop now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div>
                  <img
                    className="img-3-width"
                    src="../images/Subtract(1).png"
                    alt=""
                  />
                </div>
                <div className="baby-featured">
                  <div className="baby-product">
                    <span>Baby products</span>
                  </div>
                  <div className="featured">
                    <span>Featured</span>
                  </div>
                  <div className="whattsapp-icon ms-2">
                    <img
                      className="fs-1"
                      src="../images/whatsapp-yellow.png"
                      alt=""
                    />
                    <img src="../images/Group 18682.png" alt="" />
                  </div>
                  <div className="text-below-Toddler">
                    <span>Toddler's toy</span>
                  </div>
                  <div className="courrency mt-3">
                    <span className="courrency1">$20.36 (USD)</span>
                    <button className="btn-bg-button text-end">more</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div>
                  <img
                    className="img-3-width"
                    src="../images/Subtract(1).png"
                    alt=""
                  />
                </div>
                <div className="baby-featured">
                  <div className="baby-product">
                    <span>Baby products</span>
                  </div>
                  <div className="featured">
                    <span>Featured</span>
                  </div>
                  <div className="whattsapp-icon ms-2">
                    <img
                      className="fs-1"
                      src="../images/whatsapp-yellow.png"
                      alt=""
                    />
                    <img src="../images/Group 18682.png" alt="" />
                  </div>
                  <div className="text-below-Toddler">
                    <span>Toddler's toy</span>
                  </div>
                  <div className="courrency mt-3">
                    <span className="courrency1">$20.36 (USD)</span>
                    <button className="btn-bg-button text-end">more</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div>
                  <img
                    className="img-3-width"
                    src="../images/Subtract(1).png"
                    alt=""
                  />
                </div>
                <div className="baby-featured">
                  <div className="baby-product">
                    <span>Baby products</span>
                  </div>
                  <div className="featured">
                    <span>Featured</span>
                  </div>
                  <div className="whattsapp-icon ms-2">
                    <img
                      className="fs-1"
                      src="../images/whatsapp-yellow.png"
                      alt=""
                    />
                    <img src="../images/Group 18682.png" alt="" />
                  </div>
                  <div className="text-below-Toddler">
                    <span>Toddler's toy</span>
                  </div>
                  <div className="courrency mt-3">
                    <span className="courrency1">$20.36 (USD)</span>
                    <button className="btn-bg-button text-end">more</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="row icon-start-side-width">
                  <div className="icon-start-side">
                    <div className="side-first-icon">
                      <img src="../images/Ellipse 346.png" alt="" />
                    </div>
                    <div className="side-text-icon">
                      <span>Cheelbase</span>
                    </div>
                    <div className="side-second-icon">
                      <img src="../images/Group 18482.png" alt="" />
                      <img src="../images/Group 18481.png" alt="" />
                    </div>
                    <div className="side-third-icon">
                      <span>@cheelbas......</span>
                    </div>
                    <div className="side-fourth-icon">
                      <span>Ad</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <span style={{ fontSize: 10, textAlign: "center" }}>
                      Nice bagggggg for breakfast , lanuckkkkk anrd mornjddhhd eats
                      forever testlfig hfhfh click on the link below to downlaod #dad
                    </span>
                  </div>
                  <div className="fifth-img-below-bugger mt-2">
                    <img
                      className="ms-1"
                      src="../images/Rectangle 5028.png"
                      width="100%"
                      height="247px"
                      alt=""
                    />
                  </div>
                  <div className="row ms-2 mt-2">
                    <div className="col-lg-1">
                      <img src="../images/thumbs-up.png" alt="" />
                    </div>
                    <div className="col-lg-2">
                      <img src="../images/heart.png" alt="" />
                    </div>
                    <div className="col-lg-2">
                      <span style={{ fontSize: 10 }}>541</span>
                    </div>
                    <div className="col-lg-3">
                      <span style={{ fontSize: 10 }}>87 Shares</span>
                    </div>
                    <div className="col-lg-3">
                      <span style={{ fontSize: 10 }}>shop now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div>
                  <img
                    className="img-3-width"
                    src="../images/Subtract(1).png"
                    alt=""
                  />
                </div>
                <div className="baby-featured">
                  <div className="baby-product">
                    <span>Baby products</span>
                  </div>
                  <div className="featured">
                    <span>Featured</span>
                  </div>
                  <div className="whattsapp-icon ms-2">
                    <img
                      className="fs-1"
                      src="../images/whatsapp-yellow.png"
                      alt=""
                    />
                    <img src="../images/Group 18682.png" alt="" />
                  </div>
                  <div className="text-below-Toddler">
                    <span>Toddler's toy</span>
                  </div>
                  <div className="courrency mt-3">
                    <span className="courrency1">$20.36 (USD)</span>
                    <button className="btn-bg-button text-end">more</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div>
                  <img
                    className="img-3-width"
                    src="../images/Subtract(1).png"
                    alt=""
                  />
                </div>
                <div className="baby-featured">
                  <div className="baby-product">
                    <span>Baby products</span>
                  </div>
                  <div className="featured">
                    <span>Featured</span>
                  </div>
                  <div className="whattsapp-icon ms-2">
                    <img
                      className="fs-1"
                      src="../images/whatsapp-yellow.png"
                      alt=""
                    />
                    <img src="../images/Group 18682.png" alt="" />
                  </div>
                  <div className="text-below-Toddler">
                    <span>Toddler's toy</span>
                  </div>
                  <div className="courrency mt-3">
                    <span className="courrency1">$20.36 (USD)</span>
                    <button className="btn-bg-button text-end">more</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div>
                  <img
                    className="img-3-width"
                    src="../images/Subtract(1).png"
                    alt=""
                  />
                </div>
                <div className="baby-featured">
                  <div className="baby-product">
                    <span>Baby products</span>
                  </div>
                  <div className="featured">
                    <span>Featured</span>
                  </div>
                  <div className="whattsapp-icon ms-2">
                    <img
                      className="fs-1"
                      src="../images/whatsapp-yellow.png"
                      alt=""
                    />
                    <img src="../images/Group 18682.png" alt="" />
                  </div>
                  <div className="text-below-Toddler">
                    <span>Toddler's toy</span>
                  </div>
                  <div className="courrency mt-3">
                    <span className="courrency1">$20.36 (USD)</span>
                    <button className="btn-bg-button text-end">more</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="row icon-start-side-width">
                  <div className="icon-start-side">
                    <div className="side-first-icon">
                      <img src="../images/Ellipse 346.png" alt="" />
                    </div>
                    <div className="side-text-icon">
                      <span>Cheelbase</span>
                    </div>
                    <div className="side-second-icon">
                      <img src="../images/Group 18482.png" alt="" />
                      <img src="../images/Group 18481.png" alt="" />
                    </div>
                    <div className="side-third-icon">
                      <span>@cheelbas......</span>
                    </div>
                    <div className="side-fourth-icon">
                      <span>Ad</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <span style={{ fontSize: 10, textAlign: "center" }}>
                      Nice bagggggg for breakfast , lanuckkkkk anrd mornjddhhd eats
                      forever testlfig hfhfh click on the link below to downlaod #dad
                    </span>
                  </div>
                  <div className="fifth-img-below-bugger mt-2">
                    <img
                      className="ms-1"
                      src="../images/Rectangle 5028.png"
                      width="100%"
                      height="247px"
                      alt=""
                    />
                  </div>
                  <div className="row ms-2 mt-2">
                    <div className="col-lg-1">
                      <img src="../images/thumbs-up.png" alt="" />
                    </div>
                    <div className="col-lg-2">
                      <img src="../images/heart.png" alt="" />
                    </div>
                    <div className="col-lg-2">
                      <span style={{ fontSize: 10 }}>541</span>
                    </div>
                    <div className="col-lg-3">
                      <span style={{ fontSize: 10 }}>87 Shares</span>
                    </div>
                    <div className="col-lg-3">
                      <span style={{ fontSize: 10 }}>shop now</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <label class="channels" for="#"> Find Channels</label>
            <div className="row  mt-3  ">
              <div className="col-lg-2 col-width-set-moblie">
                <img
                  src="../images/Rectangle 1182.png"
                  width="200px alt="
                />
                <div className=" moblie-img text-center">
                  <div className="">
                    <img
                      alt=""
                      src="../images/Ellipse 6(2).png"
                    />
                  </div>
                  <span className="">
                    Fx Trading Prop
                  </span>
                  <button>
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="col-lg-2 col-width-set-moblie">
                <img
                  alt=""
                  src="../images/Rectangle 1182.png"
                  width="200px"
                />
                <div className="moblie-img text-center">
                  <div className="">
                    <img
                      alt=""
                      src="../images/Ellipse 6(2).png"
                    />
                  </div>
                  <span className="">
                    Fx Trading Prop
                  </span>
                  <button>
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="col-lg-2 col-width-set-moblie">
                <img
                  alt=""
                  src="../images/Rectangle 1182.png"
                  width="200px"
                />
                <div className="moblie-img text-center">
                  <div className="">
                    <img
                      alt=""
                      src="../images/Ellipse 6(2).png"
                    />
                  </div>
                  <span className="">
                    Fx Trading Prop
                  </span>
                  <button>
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="col-lg-2 col-width-set-moblie">
                <img
                  alt=""
                  src="../images/Rectangle 1182.png"
                  width="200px"
                />
                <div className="moblie-img text-center">
                  <div className="">
                    <img
                      alt=""
                      src="../images/Ellipse 6(2).png"
                    />
                  </div>
                  <span className="">
                    Fx Trading Prop
                  </span>
                  <button>
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="col-lg-2 col-width-set-moblie">
                <img
                  alt=""
                  src="../images/Rectangle 1182.png"
                  width="200px"
                />
                <div className="moblie-img text-center">
                  <div className="">
                    <img
                      alt=""
                      src="../images/Ellipse 6(2).png"
                    />
                  </div>
                  <span className="">
                    Fx Trading Prop
                  </span>
                  <button>
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="col-lg-2 col-width-set-moblie ">
                <img
                  alt=""
                  src="../images/Rectangle 1182.png"
                  width="200px"
                />
                <div className="moblie-img text-center">
                  <div className="">
                    <img
                      alt=""
                      src="../images/Ellipse 6(2).png"
                    />
                  </div>
                  <span className="">
                    Fx Trading Prop
                  </span>
                  <button>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 images-position">
                <img
                  alt=""
                  className="room-img-width"
                  src="../images/Image.png"
                />
                <img
                  alt=""
                  className="whatsapp-yellow-position"
                  src="../images/whatsapp-yellow.png"
                />
                <span>
                  $2500/Mo
                </span>
                <div
                  className="row"
                  style={{
                    flexDirection: 'row'
                  }}
                >
                  <h6 className="ms-2 Comefortable-text">
                    <b>
                      Comefortable Appartment
                    </b>
                  </h6>
                  <button className="btn-outline-success g-0 sale-btn ">
                    {' '}Sale
                  </button>
                </div>
                <div className="row">
                  <div className="d-flex">
                    <img
                      alt=""
                      className="vector-2x"
                      src="../images/Vector@2x.png"
                      width="30px"
                    />
                    <p className=" ms-2 mt-2">
                      709 West Drive Chicago, IL 60606
                    </p>
                  </div>
                </div>
                <div className="row icon-img-color">
                  <div className="col-lg-3">
                    <img
                      alt=""
                      className="width-img"
                      src="../images/bed.png"
                    />
                    <img
                      alt=""
                      src="../images/Line.png"
                    />
                    <span>
                      3 bads
                    </span>
                  </div>
                  <div className="col-lg-3">
                    <img
                      alt=""
                      className="width-img"
                      src="../images/lin"
                    />
                    <img
                      alt=""
                      src="../images/Line.png"
                    />
                    <span>
                      3 bad
                    </span>
                  </div>
                  <div className="col-lg-3">
                    <img
                      alt=""
                      className="width-img"
                      src="../images/bed.png"
                    />
                    <img
                      alt=""
                      src="../images/Line.png"
                    />
                    <span>
                      3 bad
                    </span>
                  </div>
                  <div className="col-lg-3 ">
                    <img
                      alt=""
                      className="width-img"
                      src="../images/card.png"
                    />
                    <img
                      alt=""
                      src="../images/Line.png"
                    />
                    <span>
                      120sqft
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 images-position">
                <img
                  alt=""
                  className="room-img-width"
                  src="../images/Image.png"
                />
                <img
                  alt=""
                  className="whatsapp-yellow-position"
                  src="../images/whatsapp-yellow.png"
                />
                <span>
                  $2500/Mo
                </span>
                <div
                  className="row"
                  style={{
                    flexDirection: 'row'
                  }}
                >
                  <h6 className="ms-2 Comefortable-text">
                    <b>
                      Comefortable Appartment
                    </b>
                  </h6>
                  <button className="btn-outline-success g-0 sale-btn ">
                    {' '}Sale
                  </button>
                </div>
                <div className="row">
                  <div className="d-flex">
                    <img
                      alt=""
                      className="vector-2x"
                      src="../images/Vector@2x.png"
                      width="30px"
                    />
                    <p className=" ms-2 mt-2">
                      709 West Drive Chicago, IL 60606
                    </p>
                  </div>
                </div>
                <div className="row icon-img-color">
                  <div className="col-lg-3">
                    <img
                      alt=""
                      className="width-img"
                      src="../images/bed.png"
                    />
                    <img
                      alt=""
                      src="../images/Line.png"
                    />
                    <span>
                      3 bads
                    </span>
                  </div>
                  <div className="col-lg-3">
                    <img
                      alt=""
                      className="width-img"
                      src="../images/lin"
                    />
                    <img
                      alt=""
                      src="../images/Line.png"
                    />
                    <span>
                      3 bad
                    </span>
                  </div>
                  <div className="col-lg-3">
                    <img
                      alt=""
                      className="width-img"
                      src="../images/bed.png"
                    />
                    <img
                      alt=""
                      src="../images/Line.png"
                    />
                    <span>
                      3 bad
                    </span>
                  </div>
                  <div className="col-lg-3 ">
                    <img
                      alt=""
                      className="width-img"
                      src="../images/card.png"
                    />
                    <img
                      alt=""
                      src="../images/Line.png"
                    />
                    <span>
                      120sqft
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 images-position">
                <img
                  alt=""
                  className="room-img-width"
                  src="../images/Image.png"
                />
                <img
                  alt=""
                  className="whatsapp-yellow-position"
                  src="../images/whatsapp-yellow.png"
                />
                <span>
                  $2500/Mo
                </span>
                <div
                  className="row"
                  style={{
                    flexDirection: 'row'
                  }}
                >
                  <h6 className="ms-2 Comefortable-text">
                    <b>
                      Comefortable Appartment
                    </b>
                  </h6>
                  <button className="btn-outline-success g-0 sale-btn ">
                    {' '}Sale
                  </button>
                </div>
                <div className="row">
                  <div className="d-flex">
                    <img
                      alt=""
                      className="vector-2x"
                      src="../images/Vector@2x.png"
                      width="30px"
                    />
                    <p className=" ms-2 mt-2">
                      709 West Drive Chicago, IL 60606
                    </p>
                  </div>
                </div>
                <div className="row icon-img-color">
                  <div className="col-lg-3">
                    <img
                      alt=""
                      className="width-img"
                      src="../images/bed.png"
                    />
                    <img
                      alt=""
                      src="../images/Line.png"
                    />
                    <span>
                      3 bads
                    </span>
                  </div>
                  <div className="col-lg-3">
                    <img
                      alt=""
                      className="width-img"
                      src="../images/lin"
                    />
                    <img
                      alt=""
                      src="../images/Line.png"
                    />
                    <span>
                      3 bad
                    </span>
                  </div>
                  <div className="col-lg-3">
                    <img
                      alt=""
                      className="width-img"
                      src="../images/bed.png"
                    />
                    <img
                      alt=""
                      src="../images/Line.png"
                    />
                    <span>
                      3 bad
                    </span>
                  </div>
                  <div className="col-lg-3 ">
                    <img
                      alt=""
                      className="width-img"
                      src="../images/card.png"
                    />
                    <img
                      alt=""
                      src="../images/Line.png"
                    />
                    <span>
                      120sqft
                    </span>
                  </div>
                </div>
              </div>
            </div>


          </>

        </div>
      </main>
    </>
  );
};
export default Products;
