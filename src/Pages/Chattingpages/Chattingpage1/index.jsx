import React from "react";
import Header from "../../../Componenets/Header";
import '../Chattingpage1/Chattingpage1.css';
import Sidebar from "../../../Componenets/Sidebar";
import '../Chattingpage1/chatting.css';
import '../Chattingpage1/icons.css';
import '../Chattingpage1/stories.css';
import '../Chattingpage1/channelchatting.css';
import '../Groupcall/Leftsidebar.css';
import '../Groupcall/Rightsider.css';
const Chattingpage1 = () => {

    return (
        <>
        <Header/>
        <div className="container-fliud max-width">
        <div className="row">

        <Sidebar/>
         <div className="col-lg-6 margin-side">
      {/* /// stories main starts  */}
      <div className="container-fluid stories-main">
        <div className="stories-container">
          <div className="content">
            <div className="previous-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <div className="stories" />
            <div className="next-btn active">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="stories-full-view">
          <div className="close-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="content">
            <div className="previous-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <div className="story">
              <img src="../images/3.jpg" alt="" />
              <div className="author">Author</div>
            </div>
            <div className="next-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* stories main ends  */}
      {/* icons section start */}
      <div className="container-fluid  icon-section">
        <a
          href="javascript:void(0);"
          id="icon-btn"
          onclick="changeBackground()"
        >
          {/* <i class="fa-regular fa-images"></i> */}
          <img src="../images/icons/amp_stories.png" alt="" />
          <p>Cheels</p>
        </a>
        <a
          href="javascript:void(0);"
          id="icon-btn"
          onclick="changeBackground()"
        >
          {" "}
          <img src="../images/icons/movie.png" alt="" />
          <p>Video</p>
        </a>
        <a
          href="javascript:void(0);"
          id="icon-btn"
          onclick="changeBackground()"
        >
          {/* <i class="fa-regular fa-images"></i> */}
          <img src="../images/icons/gallery_thumbnail.png" alt="" />
          <p>Gallery</p>
        </a>
        <a
          href="javascript:void(0);"
          id="icon-btn"
          onclick="changeBackground()"
        >
          <img src="../images/icons/lunch_dining.png" alt="" />
          <p>Resturants</p>
        </a>
        <a
          href="javascript:void(0);"
          id="icon-btn"
          onclick="changeBackground()"
        >
          <img src="../images/icons/shopping_basket.png" alt="" />
          <p>Shop</p>
        </a>
        <a
          href="javascript:void(0);"
          id="icon-btn"
          onclick="changeBackground()"
        >
          <img src="../images/icons/night_shelter.png" alt="" />
          <p>Properties</p>
        </a>
      </div>
      {/* icons section ends */}
      {/* channel section starts  */}
      <div className="container-fluid channels-section">
        <div className="container d-flex justify-content-between align-items-center find-Channels">
          <p className="channel ml-3">Find Channels</p>
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
          <div className="col-sm-3 column1">
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
          <div className="col-sm-3 column1">
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
      {/* find-Channels ends */}
      {/* products section start */}
      <div className="container-fluid products section">
        <p>Top Cheels</p>
        <div className="row products-cards-columns">
          <div className="col-md-4 product1">
            <div className="card  product-card">
              <img
                src="../images/product.jpeg "
                className="card-img-top"
                alt="Product 1"
              />
            </div>
          </div>
          <div className="col-md-4 product1">
            <div className="card  product-card">
              <img
                src="../images/product.jpeg"
                className="card-img-top"
                alt="Product 2"
              />
            </div>
          </div>
          <div className="col-md-4 product1">
            <div className="card  product-card">
              <img
                src="../images/product.jpeg"
                className="card-img-top"
                alt="Product 3"
              />
            </div>
          </div>
        </div>
      </div>
      {/* product section end  */}
        </div>
  {/* right sidebar starts  */}
  <div className="col-3 right-sidebar-section-3">
    {/* section right-side-bar start */}
    <div className="continer-fluid  ">
      {/* video section */}
      <div className="burger-info mt-1">
        <img
          src="../images/Group 18484 (1).png"
          className="burger-img"
          alt=""
        />
      </div>
      <p className="label-feature text-primary ">Featured</p>
      <div className="feature-main justify-content-start ">
        <div className=" mt-4 d-flex">
          <img
            src="../images/col2.jpg"
            className="img-feature1 "
            alt=""
          />
          <img
            src="../images/col2.jpg"
            className="img-feature2 "
            alt=""
          />
        </div>
        <div className="lorem-ipsum justify-content-start mt-1 d-flex ">
          <p className="col-5 lorem-ip1">Lorem ipsum dolor sit amet...</p>
          <p className="col-5 lorem-ip2">Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="one-million d-flex justify-content-start">
          <p className="million1">1 million views</p>
          <p className="million2">1 million views</p>
        </div>
      </div>
      <div className="feature-main justify-content-start ">
        <div className=" mt-4 d-flex">
          <img
            src="../images/col2.jpg"
            className="img-feature1 "
            alt=""
          />
          <img
            src="../images/col2.jpg"
            className="img-feature2 "
            alt=""
          />
        </div>
        <div className="lorem-ipsum justify-content-start mt-1 d-flex ">
          <p className="col-5 lorem-ip1">Lorem ipsum dolor sit amet...</p>
          <p className="col-5 lorem-ip2">Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="one-million d-flex justify-content-start">
          <p className="million1">1 million views</p>
          <p className="million2">1 million views</p>
        </div>
      </div>
    </div>
  </div>

      <div className="continue-next text-center">
        <a href="/Searchcontactpage"><button className="btn btn-primary">Continue to Next</button></a>
      </div>
</div>
</div>
        </>
    );
}

export default Chattingpage1;