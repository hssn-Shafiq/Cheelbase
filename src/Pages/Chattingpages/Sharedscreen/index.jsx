import React from "react";
import Header2 from "../../../Componenets/Header2";
import '../Sharedscreen/Sharedscreen.css';

const Sharedscreen = () => {
    return (
        <>
            <Header2/>
            <main className="max-width">
  <div className="container-fulid">
    <div className="height-main">
      <div className="btn-profile-2">
        <button className="btn updateproof text-light " htmlFor="#">
          Update Profile
        </button>
      </div>
      <div className="marina-ojok d-flex">
        <img src="../images/icons/Vector7.png" alt="" />
        <h6 className="marina ms-2">Marina ojokplo</h6>
      </div>
      <div className="visit-image-2">
        <div className="img-circle">
          <img src="../images/icons/add_circle (1).png" alt="" />
        </div>
      </div>
      <div className="update-cover ">
        <button className="btnproof text-center text-light" htmlFor="#">
          Update Cover
        </button>
      </div>
    </div>
    <div className="additional-info mt-5">
      <div className="cheelbase d-flex justify-content-end">
        <div className="col-md cheel mt-1  d-flex">
          <img
            src="../images/icons/3p.png"
            className="img-size mt-2 ms-2"
            alt=""
          />
          <p className="text-margin">@cheelbase</p>
          <img
            src="../images/icons/visibility_lock.png"
            className="img-size ms-2 mt-1 "
            alt=""
          />
        </div>
        <div className=" col-md-3 account-category mt-1 d-flex">
          <img
            src="../images/icons/category.png"
            className="img-size mt-2"
            alt=""
          />
          <p className="text-margin">Account Category</p>
          <img
            src="../images/icons/visibility_lock.png"
            className="img-size ms-2 mt-1 "
            alt=""
          />
        </div>
        <div className="col-md-3 contact mt-1 d-flex">
          <img
            src="../images/icons/phone_callback.png"
            className="img-size mt-2"
            alt=""
          />
          <p className="text-margin">+256 394501790</p>
          <img
            src="../images/icons/visibility_lock.png"
            className="img-size ms-2 mt-1 "
            alt=""
          />
          <div className="dropdown">
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md groups">
          <h4>4</h4>
          <p>Groups</p>
        </div>
        <div className="col-md channels">
          <h4>4</h4>
          <p>Channels</p>
        </div>
        <div className="col-1 subscribers">
          <h4>209 M</h4>
          <p>Subscribers</p>
        </div>
      </div>
    </div>
    <hr className="hr-line" />
    <div className="professional-experience ms-2 d-flex">
      <div className="proffession mt-1">
        <img src="../images/icons/vertical_split.png" alt="" />
      </div>
      <div className="experience ms-3">
        <h5>
          I am a proffessional website developer with 17 years of experience
        </h5>
      </div>
    </div>
    <hr className="hr-line" />
    <div className="main-address">
      <div className="address-info mt-4 d-flex">
        <div className=" col-6 ms-2 address d-flex">
          <img
            src="../images/icons/home_pin.png"
            className="img-size ms-1 mt-1"
            alt=""
          />
          <h5 className="london ms-2">Ruislip, Greater London</h5>
          <img
            src="../images/icons/visibility_lock.png"
            className="img-size ms-3 mt-1 "
            alt=""
          />
        </div>
        <div className="col-6 email d-flex">
          <img
            src="../images/icons/forward_to_inbox.png"
            className="img-size mt-1 "
            alt=""
          />
          <h5 className="london">Info@cheelbase.app</h5>
          <img
            src="../images/icons/visibility_lock.png"
            className="img-size mt-1 ms-2 "
            alt=""
          />
        </div>
      </div>
    </div>
    <hr className="hr-line" />
    <div className="website-link d-flex mt-4 justify-content-between">
      <div className="linking d-flex">
        <div className="link-icon">
          <img src="../images/icons/language.png" alt="" />
        </div>
        <div className="link">
          <h6>www.cheelbase.app</h6>
        </div>
      </div>
      <div className="linking d-flex">
        <div className="link-icon">
          <img src="../images/icons/language.png" alt="" />
        </div>
        <div className="link">
          <h6>www.cheelbase.app</h6>
        </div>
      </div>
      <div className="linking d-flex">
        <div className="link-icon">
          <img src="../images/icons/language.png" alt="" />
        </div>
        <div className="link">
          <h6>www.cheelbase.app</h6>
        </div>
      </div>
      <div className="linking d-flex">
        <div className="link-icon">
          <img src="../images/icons/language.png" alt="" />
        </div>
        <div className="link">
          <h6>www.cheelbase.app</h6>
        </div>
      </div>
    </div>
    <div className="row mt-5 d-flex">
      <div className="col-6  d-flex">
        <img
          className="left-img"
          src="../images/Group 3465035.png"
          alt=""
        />
      </div>
      <div className="col-lg-6  d-flex">
        <img
          className="right-img"
          src="../images/Group 18484 (1).png"
          alt=""
        />
      </div>
    </div>
    <div className="row width-row my-5">
      <div className="col-lg-2 icons-links">
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
      <div className="col-lg-2  icons-links">
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
      <div className="col-lg-2  icons-links">
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
      <div className="col-lg-2 icons-links ">
        <a
          href="visitors-profile-cheels.html"
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
      <div className="col-lg-2  icons-links">
        <a
          href="visitors-profile-cheels.html"
          className="d-flex flex-column align-items-center"
        >
          <img
            className="img-width"
            src="../images/shopping_basket.png"
            alt=""
          />
          <label className="mt-2" htmlFor="">
            <b>Products</b>
          </label>
        </a>
      </div>
      <div className="col-lg-2  icons-links">
        <a
          href="visitors-profile-cheels.html"
          className="d-flex flex-column align-items-center"
        >
          <img
            className="img-width"
            src="../images/real_estate_agent.png"
            alt=""
          />
          <label className="mt-2" htmlFor="">
            <b>Properties</b>
          </label>
        </a>
      </div>
    </div>
    {/* Food */}
    <div className="labeled-text">
      {" "}
      <label className=" fs-2 ms-3" htmlFor="">
        <b>Foods</b>
      </label>
    </div>
    <div className="row mt-5">
      <div className="col-lg-2 width-col">
        <img
          className="food-girl-img"
          src="../images/Rectangle 1133.png"
          alt=""
        />
      </div>
      <div className="col-lg-2 width-col">
        <img
          className="food-girl-img"
          src="../images/Rectangle 1133.png"
          alt=""
        />
      </div>
      <div className="col-lg-2 width-col">
        <img
          className="food-girl-img"
          src="../images/Rectangle 1133.png"
          alt=""
        />
      </div>
      <div className="col-lg-2 width-col">
        <img
          className="food-girl-img"
          src="../images/Rectangle 1133.png"
          alt=""
        />
      </div>
      <div className="col-lg-2 width-col">
        <img
          className="food-girl-img"
          src="../images/Rectangle 1133.png"
          alt=""
        />
      </div>
    </div>
    {/* Products */}
    <div className="labeled-text">
      {" "}
      <label className=" fs-2 ms-3" htmlFor="">
        <b>Products</b>
      </label>
    </div>
    <div className="row mt-5 ms-4 ">
      <div className="col-lg-2 ">
        <img
          className="product-img"
          src="../images/Rectangle 1136.png"
          alt=""
        />
      </div>
      <div className="col-lg-2 ">
        <img
          className="product-img"
          src="../images/Rectangle 1137.png"
          alt=""
        />
      </div>
      <div className="col-lg-2 ">
        <img
          className="product-img"
          src="../images/Rectangle 1138.png"
          alt=""
        />
      </div>
      <div className="col-lg-2 ">
        <img
          className="product-img"
          src="../images/Rectangle 1137.png"
          alt=""
        />
      </div>
      <div className="col-lg-2 ">
        <img
          className="product-img"
          src="../images/Rectangle 1138.png"
          alt=""
        />
      </div>
      <div className="col-lg-2 ">
        <img
          className="product-img"
          src="../images/Rectangle 1137.png"
          alt=""
        />
      </div>
    </div>
    {/* property listing */}
    <div className="labeled-text">
      {" "}
      <label className=" fs-2 ms-3" htmlFor="">
        <b>Property Listing</b>
      </label>
    </div>
    <div className="row img-sizing justify-content-center  mt-5">
      <img
        className="listing-product2"
        src="../images/Rectangle 1139.png"
        alt=""
      />
      <img
        className="listing-product2"
        src="../images/Rectangle 1140.png"
        alt=""
      />
      <img
        className="listing-product2"
        src="../images/Rectangle 1139.png"
        alt=""
      />
      <img
        className="listing-product2"
        src="../images/Rectangle 1139.png"
        alt=""
      />
      <img
        className="listing-product2"
        src="../images/Rectangle 1139.png"
        alt=""
      />
    </div>
    <div className="next text-center">
      <a href="/Groupcall2">
        <button className="btn btn-primary">Continue to Next</button>
      </a>
    </div>
  </div>
</main>


        </>
    );
}

export default Sharedscreen;