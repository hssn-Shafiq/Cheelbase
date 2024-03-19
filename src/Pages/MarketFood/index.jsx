import React from "react";
import Header from "../../Componenets/Header";
import "../../Pages/MarketPlace/nav.css"
import "../../Pages/MarketPlace/marketplace.css"
const MarketFood = () => {
  return (
    <>
      <Header />
      <main>
        <div className="search-bar ">
          <div className="search-inline justify-content-evenly align-items-center d-flex">
            <button className="market text-light ">Marketplace</button>
            <button className="all text-light">Restaurants</button>
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
                      src="/images/icons/storefront.png"
                      className="img-icon mt-2"
                      alt=""
                    />
                    <a className="dropdown-item text-light" href="#">
                      Store
                    </a>
                  </li>
                  <li className="d-flex">
                    <img
                      src="/images/icons/lunch_dining (1).png"
                      className="img-icon mt-2"
                      alt=""
                    />
                    <a className="dropdown-item text-light" href="#">
                      Food
                    </a>
                  </li>
                  <li className="d-flex ">
                    <img
                      src="/images/icons/water_damage.png"
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
              src="/images/Rectangle 5300 (2).png"
              className="img-sale"
              alt=""
            />
          </div>
        </div>
        <div className="burger-photos-1 d-flex mt-5 justify-content-evenly align-items-center ">
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="burger-photos-2 d-flex mt-5 justify-content-evenly align-items-center ">
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="burger-photos-3 d-flex mt-5 justify-content-evenly align-items-center ">
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="burger-photos-4 d-flex mt-5 justify-content-evenly align-items-center ">
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="burger-photos-5 d-flex mt-5 justify-content-evenly align-items-center ">
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
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
                  <img src="/images/icons/Group 18687.png" alt="" />
                  <img src="/images/icons/Group 18688.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default MarketFood;
