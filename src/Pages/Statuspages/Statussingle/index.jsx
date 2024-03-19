import React from "react";
import Header from "../../../Componenets/Header";
import '../Statussingle/Statussingle.css';
import Sidebar from "../../../Componenets/Sidebar"; 
const Statussingle  = () => {
    return(
        <>
        <Header/>
        <div className="container-fluid">
  <div className="row">
    {/* sidebar column starts */}
    <Sidebar/>
    {/* sidebar column ends */}
    <div className="col-md center-main">
  <div className="d-flex card-channel mt-5">
    <div className="card cart-one" style={{ width: "46rem" }}>
      <img
        src="../images/Rectangle 5003.png"
        className="card-img-top "
        alt="..."
      />
      <div className="card-body">
        <div className="d-flex card-inner">
          <h6 className="card-title me-1">From@Cheelbase:</h6>
          <h5 className="latest">Latest updadhdhd dddjdj djd.......</h5>
          <p className="date ms-2">11/11/2023</p>
        </div>
        <p className="card-text">
          ontrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of c dhdhdhd ddjdjdjd diddid aodiddd dkdodidmas
          xjdjdjdjd djddjwfjasas scjashasuihasuhas scascuashcasuc csasus
          sxjschaschascascjascashasjcjxnxc scbasjasjasschsacbasicasj sjjascjas
          ye...........
        </p>
        <div className="icons-section d-flex justify-content-start align-items-center">
          <div className="d-flex chat ">
            <img
              src="../images/icons/chat_bubble.png"
              className="img-icon mt-1 "
              alt=""
            />
            <p className="ms-1">77</p>
          </div>
          <div className="d-flex heart ms-5">
            <img
              src="../images/icons/favorite.png"
              className="img-icon mt-1 "
              alt=""
            />
            <p className="ms-1">7K</p>
          </div>
          <div className="d-flex share ms-5">
            <img
              src="../images/icons/share.png"
              className="img-icon mt-1 ms-1"
              alt=""
            />
            <p className="ms-1">56K</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid channels-section">
      <div className="container d-flex justify-content-between align-items-center find-Channels">
        <p className="channel ml-3">Featured Channels</p>
        <button className="more">more</button>
      </div>
      <div className="row find-Channels-columns ">
        <div className="col-sm-3 column1">
          <img
            src="../images/WhatsApp Image 2023-11-07 at 12.20.48 PM.jpeg"
            className="rounded-circle"
            alt="image"
          />
          <div className="separator">
            <p>Fx Trading Prop</p>
            <button className="btn  subscribe-btn">Subscribe</button>
          </div>
        </div>
        <div className="col-sm-3 ms-3 column1">
          <img
            src="../images/WhatsApp Image 2023-11-07 at 12.20.48 PM.jpeg"
            className="rounded-circle"
            alt="image"
          />
          <div className="separator">
            <p>Fx Trading Prop</p>
            <button className="btn subscribe-btn">Subscribe</button>
          </div>
        </div>
        <div className="col-sm-3 ms-3 column1">
          <img
            src="../images/WhatsApp Image 2023-11-07 at 12.20.48 PM.jpeg"
            className="rounded-circle"
            alt="image"
          />
          <div className="separator">
            <p>Fx Trading Prop</p>
            <button className="btn subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className=" d-flex  cheel-apartment mt-5">
    <div className="card-main">
      <div className="card2" style={{ width: "18.8rem" }}>
        <img
          src="../images/icons/Group 18687.png"
          className="img-whatsapp"
          alt="..."
        />
        <div className="cardbodysecond justify-content-between align-items-center gap-5">
          <h6 className="price-per-month mt-4 ">$2500/Mo</h6>
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
    <div className=" d-felx cheels ">
      <div className="d-flex justify-content-between cheel-detail">
        <button className="watch">Cheels</button>
        <button className="watch">Watch all</button>
      </div>
      <div className="d-flex gap-1 mt-3 cheelsecond">
        <div className="best-tutorial ms-1">
          <h6 className="">My best tutorial of the year</h6>
          <p className="">1.7m views</p>
        </div>
        <div className="year">
          <h6 className="">My best tutorial of the year</h6>
          <p className="">1.7mviews</p>
        </div>
        <div className="year2">
          <h6 className="">My best tutorial of the year</h6>
          <p className="">1.7mviews</p>
        </div>
        <div className="year3">
          <h6 className="">My best tutorial of the year</h6>
          <p className="">1.7mviews</p>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid d-flex">
    <div className="gallerymain col-lg-4 ">
      <div className="d-flex justify-content-between see-all">
        <button className="all">Gallery</button>
        <button className="all">See all</button>
      </div>
      <div className="d-flex images">
        <img
          src="../images/Rectangle (1).png"
          className="img-rectangle  ms-1"
          alt=""
        />
        <img
          src="../images/Rectangle (2).png"
          className="img-rectangle "
          alt=""
        />
        <img
          src="../images/Rectangle (3).png"
          className="img-rectangle ms-1"
          alt=""
        />
      </div>
    </div>
    <div className="d-flex burger-main col-lg-4">
      <div className="card" style={{ width: "10rem" }}>
        <img
          src="../images/Rectangle 5252.png"
          className="card-img-top"
          alt="..."
        />
        <div className="d-flex justify-content-between burger-detail">
          <h6 className="burgerr">Burger</h6>
          <p className="burgerr">$3.49</p>
        </div>
        <p className="card-text">
          This is my whole description for the whole me.
        </p>
      </div>
      <div className="card ms-1" style={{ width: "10rem" }}>
        <img
          src="../images/Rectangle 5252.png"
          className="card-img-top"
          alt="..."
        />
        <div className="d-flex justify-content-between burger-detail">
          <h6 className="burgerr">Burger</h6>
          <p className="burgerr">$3.49</p>
        </div>
        <p className="card-text">
          This is my whole description for the whole me.
        </p>
      </div>
    </div>
    <div className="d-flex cat-main col-lg-4">
      <div className="card mt-1" style={{ width: "15rem" }}>
        <img
          src="../images/product-1.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="d-flex feature-product">
          <p className="product">Baby products</p>
          <p className="feature text-center">Featured</p>
        </div>
        <div className="icons d-flex gap-3">
          <img
            src="../images/icons/Group 18687.png"
            className="img-icon"
            alt=""
          />
          <img
            src="../images/icons/Group 18688.png"
            className="img-icon"
            alt=""
          />
        </div>
        <div className="toy">
          <p className="">Toddler's toy</p>
          <div className="usd justify-content-between align-items-center d-flex">
            <span className="amount">$20.36 (USD)</span>
            <button className="btn more">more</button>
          </div>
        </div>
      </div>
      <div className="card ms-3 mt-1" style={{ width: "15rem" }}>
        <img
          src="../images/product-1.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="d-flex feature-product">
          <p className="product">Baby products</p>
          <p className="feature text-center">Featured</p>
        </div>
        <div className="icons d-flex gap-3">
          <img
            src="../images/icons/Group 18687.png"
            className="img-icon"
            alt=""
          />
          <img
            src="../images/icons/Group 18688.png"
            className="img-icon"
            alt=""
          />
        </div>
        <div className="toy">
          <p className="">Toddler's toy</p>
          <div className="usd justify-content-between align-items-center d-flex">
            <span className="amount">$20.36 (USD)</span>
            <button className="btn more">more</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
</div>

        </>
    )
}

export default Statussingle;