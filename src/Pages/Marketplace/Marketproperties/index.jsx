import React from "react";
import Header from "../../../Componenets/Header";
import '../Marketproperties/Marketproperties.css';

const Marketproperties = () => {

    return (
        <>
        <Header/>

  <div className="search-bar ">
    <div className="search-inline justify-content-evenly align-items-center d-flex">
      <button className="market text-light ">Marketplace</button>
      <button className="all text-light">Properties</button>
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
  <div className="marketstore mt-2 d-flex">
    <div className="category">
      <div className="category-1 mt-4 ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
      <div className="category-1  mt-1  ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
      <div className="category-1  mt-1 ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
      <div className="category-1 mt-1 ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
      <div className="category-1 mt-1 ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
      <div className="category-1 mt-1 ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
      <div className="category-1 mt-1 ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
      <div className="category-1  mt-1 ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
      <div className="category-1 mt-1 ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
      <div className="category-1  mt-1 ms-5">
        <button className="category-1 text-light">Category 1</button>
      </div>
    </div>
    <div className="sale ms-2">
      <img
        src="../images/Rectangle 5213 (1).png"
        className="img-sale"
        alt=""
      />
    </div>
  </div>
  <div className="house-photos-1 d-flex justify-content-evenly align-items-center">
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
  <div className="house-photos-3 d-flex justify-content-evenly align-items-center">
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
  <div className="house-photos-4 d-flex justify-content-evenly align-items-center">
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
  <div className="house-photos-5 d-flex justify-content-evenly align-items-center">
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
  <div className="house-photos-6 d-flex justify-content-evenly align-items-center">
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
  <div className="house-photos-7 d-flex justify-content-evenly align-items-center">
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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
          <p className="full-addresses "> 709 West Drive Chicago, IL 60606</p>
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

        </>
    )
}

export default Marketproperties;