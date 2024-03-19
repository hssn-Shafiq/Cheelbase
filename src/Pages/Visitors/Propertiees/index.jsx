import React from "react";
import Header from "../../../Componenets/Header";
import "../Propertiees/propertiees.css";

const Propertiees = () => {
  return (
    <>
      <Header/>
      <main className="max-width">
  <div className="container-fluid">
    {/* background images */}
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm height-main">
        <img
          className="vist-img"
          src="../images/Rectangle 1128.png"
          alt=""
        />
        <img
          className="vist-img-position"
          src="../images/Group 3465296.png"
          alt=""
        />
        <img className="vist-avtar" src="../images/Avatar.png" alt="" />
        <div className="btn-containter">
          <label className="btn-view" htmlFor="#">
            View more
          </label>
          <label className="btn-view" htmlFor="#">
            share
          </label>
        </div>
      </div>
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
        <label className="mt-2 " htmlFor="#">
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
    <div className="col-lg-2 icons-links   ">
      <a
        href="restaurant.html"
        className="d-flex flex-column align-items-center"
      >
        <img
          className="img-width"
          src="../images/lunch_dining.png"
          alt=""
        />
        <label className="mt-2 " htmlFor="">
          <b>Foods</b>
        </label>
      </a>
    </div>
    <div className="col-lg-2  icons-links">
      <a href="product.html" className="d-flex flex-column align-items-center">
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
    <div className="col-lg-2  icons-links amp-stories">
      <a href="property.html" className="d-flex flex-column align-items-center">
        <img className="img-width" src="../images/house.png" alt="" />
        <label className="mt-2 text-light" htmlFor="">
          <b>Properties</b>
        </label>
      </a>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-4 images-position">
      <img className="room-img-width" src="../images/Image.png" alt="" />
      <img
        className="whatsapp-yellow-position"
        src="../images/whatsapp-yellow.png"
        alt=""
      />
      <span>$2500/Mo</span>
      <div className="row" style={{ flexDirection: "row" }}>
        <h6 className="ms-2 Comefortable-text">
          <b>Comefortable Appartment</b>
        </h6>
        <button className="btn-outline-success g-0 sale-btn "> Sale</button>
      </div>
      <div className="row">
        <div className="d-flex">
          <img
            className="vector-2x"
            src="../images/Vector@2x.png"
            width="30px"
            alt=""
          />
          <p className=" ms-2 mt-2">709 West Drive Chicago, IL 60606</p>
        </div>
      </div>
      <div className="row icon-img-color">
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bads</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/lin" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3 ">
          <img className="width-img" src="../images/card.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>120sqft</span>
        </div>
      </div>
    </div>
    <div className="col-lg-4 images-position">
      <img className="room-img-width" src="../images/Image.png" alt="" />
      <img
        className="whatsapp-yellow-position"
        src="../images/whatsapp-yellow.png"
        alt=""
      />
      <span>$2500/Mo</span>
      <div className="row" style={{ flexDirection: "row" }}>
        <h6 className="ms-2 Comefortable-text">
          <b>Comefortable Appartment</b>
        </h6>
        <button className="btn-outline-success g-0 sale-btn "> Sale</button>
      </div>
      <div className="row">
        <div className="d-flex">
          <img
            className="vector-2x"
            src="../images/Vector@2x.png"
            width="30px"
            alt=""
          />
          <p className=" ms-2 mt-2">709 West Drive Chicago, IL 60606</p>
        </div>
      </div>
      <div className="row icon-img-color">
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bads</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/lin" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3 ">
          <img className="width-img" src="../images/card.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>120sqft</span>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
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
  {/* 2nd */}
  <div className="row mt-5">
    <div className="col-lg-4 images-position">
      <img className="room-img-width" src="../images/Image.png" alt="" />
      <img
        className="whatsapp-yellow-position"
        src="../images/whatsapp-yellow.png"
        alt=""
      />
      <span>$2500/Mo</span>
      <div className="row" style={{ flexDirection: "row" }}>
        <h6 className="ms-2 Comefortable-text">
          <b>Comefortable Appartment</b>
        </h6>
        <button className="btn-outline-success g-0 sale-btn "> Sale</button>
      </div>
      <div className="row">
        <div className="d-flex">
          <img
            className="vector-2x"
            src="../images/Vector@2x.png"
            width="30px"
            alt=""
          />
          <p className=" ms-2 mt-2">709 West Drive Chicago, IL 60606</p>
        </div>
      </div>
      <div className="row icon-img-color">
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bads</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/lin" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3 ">
          <img className="width-img" src="../images/card.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>120sqft</span>
        </div>
      </div>
    </div>
    <div className="col-lg-4 images-position">
      <img className="room-img-width" src="../images/Image.png" alt="" />
      <img
        className="whatsapp-yellow-position"
        src="../images/whatsapp-yellow.png"
        alt=""
      />
      <span>$2500/Mo</span>
      <div className="row" style={{ flexDirection: "row" }}>
        <h6 className="ms-2 Comefortable-text">
          <b>Comefortable Appartment</b>
        </h6>
        <button className="btn-outline-success g-0 sale-btn "> Sale</button>
      </div>
      <div className="row">
        <div className="d-flex">
          <img
            className="vector-2x"
            src="../images/Vector@2x.png"
            width="30px"
            alt=""
          />
          <p className=" ms-2 mt-2">709 West Drive Chicago, IL 60606</p>
        </div>
      </div>
      <div className="row icon-img-color">
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bads</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/lin" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3 ">
          <img className="width-img" src="../images/card.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>120sqft</span>
        </div>
      </div>
    </div>
    <div className="col-lg-4 images-position">
      <img className="room-img-width" src="../images/Image.png" alt="" />
      <img
        className="whatsapp-yellow-position"
        src="../images/whatsapp-yellow.png"
        alt=""
      />
      <span>$2500/Mo</span>
      <div className="row" style={{ flexDirection: "row" }}>
        <h6 className="ms-2 Comefortable-text">
          <b>Comefortable Appartment</b>
        </h6>
        <button className="btn-outline-success g-0 sale-btn "> Sale</button>
      </div>
      <div className="row">
        <div className="d-flex">
          <img
            className="vector-2x"
            src="../images/Vector@2x.png"
            width="30px"
            alt=""
          />
          <p className=" ms-2 mt-2">709 West Drive Chicago, IL 60606</p>
        </div>
      </div>
      <div className="row icon-img-color">
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bads</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/lin" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3 ">
          <img className="width-img" src="../images/card.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>120sqft</span>
        </div>
      </div>
    </div>
  </div>
  {/* 3rd */}
  <div className="row mt-5">
    <div className="col-lg-4 images-position">
      <img className="room-img-width" src="../images/Image.png" alt="" />
      <img
        className="whatsapp-yellow-position"
        src="../images/whatsapp-yellow.png"
        alt=""
      />
      <span>$2500/Mo</span>
      <div className="row" style={{ flexDirection: "row" }}>
        <h6 className="ms-2 Comefortable-text">
          <b>Comefortable Appartment</b>
        </h6>
        <button className="btn-outline-success g-0 sale-btn "> Sale</button>
      </div>
      <div className="row">
        <div className="d-flex">
          <img
            className="vector-2x"
            src="../images/Vector@2x.png"
            width="30px"
            alt=""
          />
          <p className=" ms-2 mt-2">709 West Drive Chicago, IL 60606</p>
        </div>
      </div>
      <div className="row icon-img-color">
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bads</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/lin" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3 ">
          <img className="width-img" src="../images/card.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>120sqft</span>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
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
    <div className="col-lg-4 images-position">
      <img className="room-img-width" src="../images/Image.png" alt="" />
      <img
        className="whatsapp-yellow-position"
        src="../images/whatsapp-yellow.png"
        alt=""
      />
      <span>$2500/Mo</span>
      <div className="row" style={{ flexDirection: "row" }}>
        <h6 className="ms-2 Comefortable-text">
          <b>Comefortable Appartment</b>
        </h6>
        <button className="btn-outline-success g-0 sale-btn "> Sale</button>
      </div>
      <div className="row">
        <div className="d-flex">
          <img
            className="vector-2x"
            src="../images/Vector@2x.png"
            width="30px"
            alt=""
          />
          <p className=" ms-2 mt-2">709 West Drive Chicago, IL 60606</p>
        </div>
      </div>
      <div className="row icon-img-color">
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bads</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/lin" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3 ">
          <img className="width-img" src="../images/card.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>120sqft</span>
        </div>
      </div>
    </div>
  </div>
  {/* 4th */}
  <div className="row mt-5">
    <div className="col-lg-4 images-position">
      <img className="room-img-width" src="../images/Image.png" alt="" />
      <img
        className="whatsapp-yellow-position"
        src="../images/whatsapp-yellow.png"
        alt=""
      />
      <span>$2500/Mo</span>
      <div className="row" style={{ flexDirection: "row" }}>
        <h6 className="ms-2 Comefortable-text">
          <b>Comefortable Appartment</b>
        </h6>
        <button className="btn-outline-success g-0 sale-btn "> Sale</button>
      </div>
      <div className="row">
        <div className="d-flex">
          <img
            className="vector-2x"
            src="../images/Vector@2x.png"
            width="30px"
            alt=""
          />
          <p className=" ms-2 mt-2">709 West Drive Chicago, IL 60606</p>
        </div>
      </div>
      <div className="row icon-img-color">
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bads</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/lin" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3 ">
          <img className="width-img" src="../images/card.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>120sqft</span>
        </div>
      </div>
    </div>
    <div className="col-lg-4 images-position">
      <img className="room-img-width" src="../images/Image.png" alt="" />
      <img
        className="whatsapp-yellow-position"
        src="../images/whatsapp-yellow.png"
        alt=""
      />
      <span>$2500/Mo</span>
      <div className="row" style={{ flexDirection: "row" }}>
        <h6 className="ms-2 Comefortable-text">
          <b>Comefortable Appartment</b>
        </h6>
        <button className="btn-outline-success g-0 sale-btn "> Sale</button>
      </div>
      <div className="row">
        <div className="d-flex">
          <img
            className="vector-2x"
            src="../images/Vector@2x.png"
            width="30px"
            alt=""
          />
          <p className=" ms-2 mt-2">709 West Drive Chicago, IL 60606</p>
        </div>
      </div>
      <div className="row icon-img-color">
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bads</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/lin" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3 ">
          <img className="width-img" src="../images/card.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>120sqft</span>
        </div>
      </div>
    </div>
    <div className="col-lg-4 images-position">
      <img className="room-img-width" src="../images/Image.png" alt="" />
      <img
        className="whatsapp-yellow-position"
        src="../images/whatsapp-yellow.png"
        alt=""
      />
      <span>$2500/Mo</span>
      <div className="row" style={{ flexDirection: "row" }}>
        <h6 className="ms-2 Comefortable-text">
          <b>Comefortable Appartment</b>
        </h6>
        <button className="btn-outline-success g-0 sale-btn "> Sale</button>
      </div>
      <div className="row">
        <div className="d-flex">
          <img
            className="vector-2x"
            src="../images/Vector@2x.png"
            width="30px"
            alt=""
          />
          <p className=" ms-2 mt-2">709 West Drive Chicago, IL 60606</p>
        </div>
      </div>
      <div className="row icon-img-color">
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bads</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/lin" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3">
          <img className="width-img" src="../images/bed.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>3 bad</span>
        </div>
        <div className="col-lg-3 ">
          <img className="width-img" src="../images/card.png" alt="" />
          <img src="../images/Line.png" alt="" />
          <span>120sqft</span>
        </div>
      </div>
    </div>
  </div>
  <label className="channels" htmlFor="#">
    {" "}
    Find Channels
  </label>
  {/* 7th start */}
  <div className="row  mt-3  ">
  <div className="col-lg-2 col-width-set-moblie">
      <img src="../images/Rectangle 1182.png" width="200px" alt="" />
      <div className="moblie-img text-center">
        <div className="">
          <img src="../images/Ellipse 6(2).png" alt="" />
        </div>
        <span className="">Fx Trading Prop</span>
        <button>Subscribe</button>
      </div>
    </div>
    <div className="col-lg-2 col-width-set-moblie">
      <img src="../images/Rectangle 1182.png" width="200px" alt="" />
      <div className="moblie-img text-center">
        <div className="">
          <img src="../images/Ellipse 6(2).png" alt="" />
        </div>
        <span className="">Fx Trading Prop</span>
        <button>Subscribe</button>
      </div>
    </div>
    <div className="col-lg-2 col-width-set-moblie">
      <img src="../images/Rectangle 1182.png" width="200px" alt="" />
      <div className="moblie-img text-center">
        <div className="">
          <img src="../images/Ellipse 6(2).png" alt="" />
        </div>
        <span className="">Fx Trading Prop</span>
        <button>Subscribe</button>
      </div>
    </div>
    <div className="col-lg-2 col-width-set-moblie">
      <img src="../images/Rectangle 1182.png" width="200px" alt="" />
      <div className="moblie-img text-center">
        <div className="">
          <img src="../images/Ellipse 6(2).png" alt="" />
        </div>
        <span className="">Fx Trading Prop</span>
        <button>Subscribe</button>
      </div>
    </div>
    <div className="col-lg-2 col-width-set-moblie">
      <img src="../images/Rectangle 1182.png" width="200px" alt="" />
      <div className="moblie-img text-center">
        <div className="">
          <img src="../images/Ellipse 6(2).png" alt="" />
        </div>
        <span className="">Fx Trading Prop</span>
        <button>Subscribe</button>
      </div>
    </div>
    <div className="col-lg-2 col-width-set-moblie ">
      <img src="../images/Rectangle 1182.png" width="200px" alt="" />
      <div className="moblie-img text-center">
        <div className="">
          <img src="../images/Ellipse 6(2).png" alt="" />
        </div>
        <span className="">Fx Trading Prop</span>
        <button>Subscribe</button>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <a href="chating-page.html"></a>
        <div className="icon ">
          <a href="chating-page.html"></a>
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
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
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <a href="chating-page.html"></a>
        <div className="icon ">
          <a href="chating-page.html"></a>
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <a href="chating-page.html"></a>
        <div className="icon ">
          <a href="chating-page.html"></a>
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</main>

    </>
  );
};
export default Propertiees;
