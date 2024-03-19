import React from "react";
import Header from "../../../Componenets/Header";
import "../Marketplace/Marketplace.css";

const Marketplace = () => {
  return (
    <>
      <Header />
      <div className="search-bar ">
        <div className="search-inline justify-content-evenly align-items-center d-flex">
          <button className="market text-light ">Marketplace</button>
          <button className="all text-light">All</button>
          <div className="dropdown-mark">
            <div
              className=" dropdown   text-light dropdown-toggle  "
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
                <li className="d-flex ">
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
          <div className="main">
            {/* Another variation with a button */}
            <div className="input-group d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="search items, categories others"
              />
              <div className="append ">
                <button
                  className="btn btn-secondary d-flex search-icon "
                  type="button"
                >
                  <div className="faa-searchh ">
                    <i className="fa fa-search " />
                  </div>
                  <p className="search ms-3">search</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="marketplace">
        <img src="../images/Rectangle 5300.png" className="img-market" alt="" />
      </div>
      <div className="rectangle-photos d-flex justify-content-between align-items-center mt-2 gap-2">
        <img src="../images/Rectangle 5299.png" className="img-rec1" alt="" />
        <img
          src="../images/Rectangle 5300 (1).png"
          className="img-rec "
          alt=""
        />
        <img src="../images/Rectangle 5213.png" className="img-rec " alt="" />
      </div>
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
            <div className="card-body">
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
            <div className="card-body">
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
            <div className="card-body">
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
            <div className="card-body">
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
            <div className="card-body">
              <p className="">Toddler's toy</p>
              <div className="usd justify-content-between align-items-center d-flex">
                <span className="amount">$20.36 (USD)</span>
                <button className="btn more">more</button>
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
            <div className="card-body justify-content-between align-items-center gap-5">
              <h6 className="price-per-month mt-2 ">$2500/Mo</h6>
              <div className="apartment  d-flex justify-content-between align-items-center">
                <p className="comfort">Comfortable Apartment</p>
                <button className="btn btn-sale mb-3">Sale</button>
              </div>
              <div className=" d-flex gap-1">
                <img
                  src="../images/icons/Vector (8).png"
                  className="img-location"
                />
                <p className="full-addresses ">
                  {" "}
                  709 West Drive Chicago, IL 60606
                </p>
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
            <div className="card-body justify-content-between align-items-center gap-5">
              <h6 className="price-per-month mt-2 ">$2500/Mo</h6>
              <div className="apartment  d-flex justify-content-between align-items-center">
                <p className="comfort">Comfortable Apartment</p>
                <button className="btn btn-sale mb-3">Sale</button>
              </div>
              <div className="addresses d-flex gap-1">
                <img
                  src="../images/icons/Vector (8).png"
                  className="img-location"
                />
                <p className="full-addresses ">
                  {" "}
                  709 West Drive Chicago, IL 60606
                </p>
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
            <div className="card-body justify-content-between align-items-center gap-5">
              <h6 className="price-per-month mt-2 ">$2500/Mo</h6>
              <div className="apartment  d-flex justify-content-between align-items-center">
                <p className="comfort">Comfortable Apartment</p>
                <button className="btn btn-sale mb-3">Sale</button>
              </div>
              <div className="addresses d-flex gap-1">
                <img
                  src="../images/icons/Vector (8).png"
                  className="img-location"
                />
                <p className="full-addresses ">
                  {" "}
                  709 West Drive Chicago, IL 60606
                </p>
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
            <div className="card-body justify-content-between align-items-center gap-5">
              <h6 className="price-per-month mt-2 ">$2500/Mo</h6>
              <div className="apartment  d-flex justify-content-between align-items-center">
                <p className="comfort">Comfortable Apartment</p>
                <button className="btn btn-sale mb-3">Sale</button>
              </div>
              <div className="addresses d-flex gap-1">
                <img
                  src="../images/icons/Vector (8).png"
                  className="img-location"
                />
                <p className="full-addresses ">
                  {" "}
                  709 West Drive Chicago, IL 60606
                </p>
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
            <div className="card-body justify-content-between align-items-center gap-5">
              <h6 className="price-per-month mt-2 ">$2500/Mo</h6>
              <div className="apartment  d-flex justify-content-between align-items-center">
                <p className="comfort">Comfortable Apartment</p>
                <button className="btn btn-sale mb-3">Sale</button>
              </div>
              <div className="addresses d-flex gap-1">
                <img
                  src="../images/icons/Vector (8).png"
                  className="img-location"
                />
                <p className="full-addresses ">
                  {" "}
                  709 West Drive Chicago, IL 60606
                </p>
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
            <div className="card-body justify-content-between align-items-center gap-5">
              <h6 className="price-per-month mt-2 ">$2500/Mo</h6>
              <div className="apartment  d-flex justify-content-between align-items-center">
                <p className="comfort">Comfortable Apartment</p>
                <button className="btn btn-sale mb-3">Sale</button>
              </div>
              <div className="addresses d-flex gap-1">
                <img
                  src="../images/icons/Vector (8).png"
                  className="img-location"
                />
                <p className="full-addresses ">
                  {" "}
                  709 West Drive Chicago, IL 60606
                </p>
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
            <div className="card-body justify-content-between align-items-center gap-5">
              <h6 className="price-per-month mt-2 ">$2500/Mo</h6>
              <div className="apartment  d-flex justify-content-between align-items-center">
                <p className="comfort">Comfortable Apartment</p>
                <button className="btn btn-sale mb-3">Sale</button>
              </div>
              <div className="addresses d-flex gap-1">
                <img
                  src="../images/icons/Vector (8).png"
                  className="img-location"
                />
                <p className="full-addresses ">
                  {" "}
                  709 West Drive Chicago, IL 60606
                </p>
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
            <div className="card-body justify-content-between align-items-center gap-5">
              <h6 className="price-per-month mt-2 ">$2500/Mo</h6>
              <div className="apartment  d-flex justify-content-between align-items-center">
                <p className="comfort">Comfortable Apartment</p>
                <button className="btn btn-sale mb-3">Sale</button>
              </div>
              <div className="addresses d-flex gap-1">
                <img
                  src="../images/icons/Vector (8).png"
                  className="img-location"
                />
                <p className="full-addresses ">
                  {" "}
                  709 West Drive Chicago, IL 60606
                </p>
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
      </div>

      <div className="next-button-continue text-center">
        <a href="/Marketstore">
          <button className=" btn btn-primary">Continue to Next</button>
        </a>
      </div>
    </>
  );
};

export default Marketplace;
