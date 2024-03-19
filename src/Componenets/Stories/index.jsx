import React from "react";

const Stories = () => {
  return (
    <>
     <div className="col-12 col-lg-6 center-main">
  {/* /// stories main starts  */}
  <div className=" stories-main">
    <div className="stories-container">
      <div className="content">
        <div className="previous-btn active">
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
        <div className="stories">
          <div className="story">
            <img src="images/3.jpg" />
            <div className="author">Jiane</div>
          </div>
          <div className="story">
            <img src="images/2.jpg" />
            <div className="author">Willow Grace</div>
          </div>
          <div className="story">
            <img src="images/3.jpg" />
            <div className="author">Emma Smith</div>
          </div>
          <div className="story">
            <img src="images/4.jpg" />
            <div className="author">Ruby Skye</div>
          </div>
          <div className="story">
            <img src="images/5.jpg" />
            <div className="author">Live Blogger</div>
          </div>
          <div className="story">
            <img src="images/6.jpg" />
            <div className="author">Hazel Jade</div>
          </div>
          <div className="story">
            <img src="images/7.jpg" />
            <div className="author">Eden Faith</div>
          </div>
          <div className="story">
            <img src="images/8.jpg" />
            <div className="author">Flora Maeve</div>
          </div>
          <div className="story">
            <img src="images/9.jpg" />
            <div className="author">Nathaniel Hayes</div>
          </div>
          <div className="story">
            <img src="images/10.jpg" />
            <div className="author">Everett Lee</div>
          </div>
          <div className="story">
            <img src="images/11.jpg" />
            <div className="author">Owen</div>
          </div>
          <div className="story">
            <img src="images/12.jpg" />
            <div className="author">Caleb Knox</div>
          </div>
          <div className="story">
            <img src="images/13.jpg" />
            <div className="author">Felix</div>
          </div>
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
          <img src="images/13.jpg" alt="" />
          <div className="author">Felix</div>
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
  <div>
  <div className="container-fluid  icon-section">
    <a
      href="javascript:void(0);"
      id="icon-btn"
      onclick="changeBackground()"
    >
      <img
        alt=""
        src="images/vibration.png"
      />
      <p>
        Cheels
      </p>
    </a>
    <a
      href="javascript:void(0);"
      id="icon-btn"
      onclick="changeBackground()"
    >
      {' '}
      <img
        alt=""
        src="images/icons/video-icon-thumb.png"
      />
      <p>
        Video
      </p>
    </a>
    <a
      href="javascript:void(0);"
      id="icon-btn"
      onclick="changeBackground()"
    >
      <img
        alt=""
        src="images/icons/picture-gallery-thumb.png"
      />
      <p>
        Gallery
      </p>
    </a>
    <a
      href="javascript:void(0);"
      id="icon-btn"
      onclick="changeBackground()"
    >
      <img
        alt=""
        src="images/burger.png"
      />
      <p>
        Resturants
      </p>
    </a>
    <a
      href="javascript:void(0);"
      id="icon-btn"
      onclick="changeBackground()"
    >
      <img
        alt=""
        src="images/shopping-cart.png"
      />
      <p>
        Shop
      </p>
    </a>
    <a
      href="javascript:void(0);"
      id="icon-btn"
      onclick="changeBackground()"
    >
      <img
        alt=""
        src="images/camping-tent.png"
      />
      <p>
        Properties
      </p>
    </a>
  </div>
</div>
  {/* icons section ends */}
  {/* channel section starts  */}
  <div className="container-fluid channels-section">
    <div className="container d-flex justify-content-between align-items-center find-Channels">
      <div className="h4 main-title">Find Channels</div>
      <button type="button" className="btn view-btn">
        View all
      </button>
    </div>
    <div className="row find-Channels-columns">
      <div className="col-sm-4 column1">
        <img
          src="images/WhatsApp Image 2023-11-07 at 12.20.48 PM.jpeg"
          className="rounded-circle"
          alt="image"
        />
        <div className="separator">
          <p>1 millions View</p>
          <button className="btn  subscribe-btn">Subscribe</button>
        </div>
      </div>
      <div className="col-sm-4 column1">
        <img
          src="images/WhatsApp Image 2023-11-07 at 12.20.48 PM.jpeg"
          className="rounded-circle"
          alt="image"
        />
        <div className="separator">
          <p>1 millions View</p>
          <button className="btn subscribe-btn">Subscribe</button>
        </div>
      </div>
      <div className="col-sm-4 column1">
        <img
          src="images/WhatsApp Image 2023-11-07 at 12.20.48 PM.jpeg"
          className="rounded-circle"
          alt="image"
        />
        <div className="separator">
          <p>1 millions View</p>
          <button className="btn subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
  {/* find-Channels ends */}
  {/* products section start */}
  <div className="container-fluid products-section">
    <div className="container d-flex justify-content-end align-items-center ">
      <button type="button" className="btn view-btn">
        View all
      </button>
    </div>
    <div className="row products-cards-columns">
      <div className="col-md-4 product1">
        <div className="card  product-card">
          <img
            src="images/product.jpeg "
            className="card-img-top"
            alt="Product 1"
          />
          <div className="card-icons">
            <i className="fab fa-whatsapp" />
            <i className="fas fa-shopping-cart" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Product 1</h5>
            <div className="d-flex justify-content-between">
              <p className="card-text">$20.00</p>
              <a href="#" className="view-more">
                more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 product1">
        <div className="card  product-card">
          <img
            src="images/product.jpeg"
            className="card-img-top"
            alt="Product 2"
          />
          <div className="card-icons">
            <i className="fab fa-whatsapp" />
            <i className="fas fa-shopping-cart" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Product 1</h5>
            <div className="d-flex justify-content-between">
              <p className="card-text">$20.00</p>
              <a href="#" className="view-more">
                more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 product1">
        <div className="card  product-card">
          <img
            src="images/product.jpeg"
            className="card-img-top"
            alt="Product 3"
          />
          <div className="card-icons">
            <i className="fab fa-whatsapp" />
            <i className="fas fa-shopping-cart" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Product 3</h5>
            <div className="d-flex justify-content-between">
              <p className="card-text">$20.00</p>
              <a href="#" className="view-more">
                more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* product section end  */}
  {/* section ad start */}
  <div className="container-fluid   mainads " id="adsvideo">
    <div className="title d-flex justify-content-between">
      <div className="h1">Sponsored ad</div>
      <button
        type="button"
        onclick="document.getElementById('adsvideo').style.display='none'"
        className="btn"
      >
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
    <div className="adsvideo">
      <iframe
        width="100%"
        height={320}
        src="https://www.youtube.com/embed/o1fWvomcXt8?si=Hhf6epxhwFAZu__y"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen=""
      />
    </div>
  </div>
  {/* section ad ends  */}
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
        <img src="images/col1.jpg" className="rounded" alt="image" />
        <div className="p">Lorem ipsum, dolor</div>
        <p>4k View 2Months ago</p>
      </div>
      <div className="col-sm-3">
        <img src="images/col2.jpg" className="rounded" alt="image" />
        <div className="p">Lorem ipsum, dolor</div>
        <p>1 millions View</p>
      </div>
      <div className="col-sm-3">
        <img src="images/col3.jpg" className="rounded" alt="image" />
        <div className="p">Lorem ipsum, dolor</div>
        <p>1 millions View</p>
      </div>
      <div className="col-sm-3">
        <img src="images/col4.jpg" className="rounded" alt="image" />
        <div className="p">Lorem ipsum, dolor</div>
        <p>1 millions View</p>
      </div>
    </div>
  </div>
  {/* section cheel end */}
  {/* section order start */}
  <div className="container-fluid ">
  <div className="container d-flex justify-content-between topcheel">
    <div className="h4">
      Order Food
    </div>
    <a href="">
      <button
        className="btn"
        type="button"
      >
        View all
      </button>
    </a>
  </div>
  <div className="row gap-3 order-columns-home">
    <div
      className=" col-sm card cards-home"
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="..."
        className="card-img-top"
        src="images/order food.jpg"
      />
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between">
          Burger{' '}
          <span>
            $3.49
          </span>
        </h5>
        <p className="card-text">
          This is my whole description for the whole me
        </p>
        <div className="more d-flex justify-content-between align-items-center">
          <a href="#">
            more
          </a>
          <a href="#">
            <span>
              <i className="fab fa-whatsapp" />
            </span>
            <span>
              <i className="fas fa-shopping-cart" />
            </span>
          </a>
        </div>
      </div>
    </div>
    <div
      className=" col-sm card cards-home"
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="..."
        className="card-img-top"
        src="images/order food.jpg"
      />
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between">
          Burger{' '}
          <span>
            $3.49
          </span>
        </h5>
        <p className="card-text">
          This is my whole description for the whole me
        </p>
        <div className="more d-flex justify-content-between align-items-center">
          <a href="#">
            more
          </a>
          <a href="#">
            <span>
              <i className="fab fa-whatsapp" />
            </span>
            <span>
              <i className="fas fa-shopping-cart" />
            </span>
          </a>
        </div>
      </div>
    </div>
    <div
      className=" col-sm card cards-home"
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="..."
        className="card-img-top"
        src="images/order food.jpg"
      />
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between">
          Burger{' '}
          <span>
            $3.49
          </span>
        </h5>
        <p className="card-text">
          This is my whole description for the whole me
        </p>
        <div className="more d-flex justify-content-between align-items-center">
          <a href="#">
            more
          </a>
          <a href="#">
            <span>
              <i className="fab fa-whatsapp" />
            </span>
            <span>
              <i className="fas fa-shopping-cart" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
  {/* section order end */}

  {/* Gallery SEction starts  */}
  <div className="container-fluid ">
    <div className="container d-flex justify-content-between topcheel">
      <div className="h4">
        Feautred Gallery
      </div>
      <a href="">
        <button
          className="btn"
          type="button"
        >
          View all
        </button>
      </a>
    </div>
    <div className="row gap-1 order-columns-home">
      <div className="col-sm card p-1">
        <div className="container-fluid d-flex justify-content-between gallery-contact">
          <div className="d-flex">
            <img
              alt="Chat 1"
              className="chat-image"
              src="images/gallery dp.png"
            />
            <div className="profile-content">
              <span className="profile-name">
                Camilla
              </span>
              <p className="text-muted">
                Mexico City, Mexico
              </p>
            </div>
          </div>
          <div className="tticon">
            <i className="fa-solid fa-ellipsis">
              {' '}
            </i>
          </div>
        </div>
        <div className="gallery-image">
          <a href="gallerysinglepage.html">
            <img
              alt="gallery-image"
              src="images/Gallery-image.png"
              width="100%"
            />
          </a>
        </div>
        <div className="gallery-icon d-flex align-items-center justify-content-between p-2 pt-2 pb-0">
          <div>
            <div className="btn">
              <i className="fa-solid fa-heart">
                {' '}5.4K
              </i>
            </div>
            <i className="fas fa-comment">
              {' '}165
            </i>
            <i className="fas fa-paper-plane" />
          </div>
          <div className="download-icons">
            <i className="fas fa-download" />
            <i className="fas fa-bookmark" />
          </div>
        </div>
        <div className="gallery-footer mt-1 d-flex align-items-center justify-content-between">
          <div className="images d-flex align-items-center justify-content-between gap-2">
            <div className="footer-images d-flex align-items-center justify-content-around">
              <img
                alt="Chat 1"
                className="footer-image1"
                src="images/gallery dp.png"
              />
              <img
                alt="Chat 1"
                className="footer-image2"
                src="images/Ellipse 7.png"
              />
              <img
                alt="Chat 1"
                className="footer-image3"
                src="images/Ellipse 8.png"
              />
            </div>
            <div className="footer-title">
              Aaron, Hank Adams, John, William...
            </div>
          </div>
          <div className="gallery-footer-btn">
            more
          </div>
        </div>
      </div>
      <div className="col-sm card p-1">
        <div className="container-fluid d-flex justify-content-between gallery-contact">
          <div className="d-flex">
            <img
              alt="Chat 1"
              className="chat-image"
              src="images/gallery dp.png"
            />
            <div className="profile-content">
              <span className="profile-name">
                Camilla
              </span>
              <p className="text-muted">
                Mexico City, Mexico
              </p>
            </div>
          </div>
          <div className="tticon">
            <i className="fa-solid fa-ellipsis">
              {' '}
            </i>
          </div>
        </div>
        <div className="gallery-image">
          <a href="gallerysinglepage.html">
            <img
              alt="gallery-image"
              src="images/Gallery-image.png"
              width="100%"
            />
          </a>
        </div>
        <div className="gallery-icon d-flex align-items-center justify-content-between p-2 pt-2 pb-0">
          <div>
            <div className="btn">
              <i className="fa-solid fa-heart">
                {' '}5.4K
              </i>
            </div>
            <i className="fas fa-comment">
              {' '}165
            </i>
            <i className="fas fa-paper-plane" />
          </div>
          <div className="download-icons">
            <i className="fas fa-download" />
            <i className="fas fa-bookmark" />
          </div>
        </div>
        <div className="gallery-footer mt-1 d-flex align-items-center justify-content-between">
          <div className="images d-flex align-items-center justify-content-between gap-2">
            <div className="footer-images d-flex align-items-center justify-content-around">
              <img
                alt="Chat 1"
                className="footer-image1"
                src="images/gallery dp.png"
              />
              <img
                alt="Chat 1"
                className="footer-image2"
                src="images/Ellipse 7.png"
              />
              <img
                alt="Chat 1"
                className="footer-image3"
                src="images/Ellipse 8.png"
              />
            </div>
            <div className="footer-title">
              Aaron, Hank Adams, John, William...
            </div>
          </div>
          <div className="gallery-footer-btn">
            more
          </div>
        </div>
      </div>
      <div className="col-sm card p-1">
        <div className="container-fluid d-flex justify-content-between gallery-contact">
          <div className="d-flex">
            <img
              alt="Chat 1"
              className="chat-image"
              src="images/gallery dp.png"
            />
            <div className="profile-content">
              <span className="profile-name">
                Camilla
              </span>
              <p className="text-muted">
                Mexico City, Mexico
              </p>
            </div>
          </div>
          <div className="tticon">
            <i className="fa-solid fa-ellipsis">
              {' '}
            </i>
          </div>
        </div>
        <div className="gallery-image">
          <a href="gallerysinglepage.html">
            <img
              alt="gallery-image"
              src="images/Gallery-image.png"
              width="100%"
            />
          </a>
        </div>
        <div className="gallery-icon d-flex align-items-center justify-content-between p-2 pt-2 pb-0">
          <div>
            <div className="btn">
              <i className="fa-solid fa-heart">
                {' '}5.4K
              </i>
            </div>
            <i className="fas fa-comment">
              {' '}165
            </i>
            <i className="fas fa-paper-plane" />
          </div>
          <div className="download-icons">
            <i className="fas fa-download" />
            <i className="fas fa-bookmark" />
          </div>
        </div>
        <div className="gallery-footer mt-1 d-flex align-items-center justify-content-between">
          <div className="images d-flex align-items-center justify-content-between gap-2">
            <div className="footer-images d-flex align-items-center justify-content-around">
              <img
                alt="Chat 1"
                className="footer-image1"
                src="images/gallery dp.png"
              />
              <img
                alt="Chat 1"
                className="footer-image2"
                src="images/Ellipse 7.png"
              />
              <img
                alt="Chat 1"
                className="footer-image3"
                src="images/Ellipse 8.png"
              />
            </div>
            <div className="footer-title">
              Aaron, Hank Adams, John, William...
            </div>
          </div>
          <div className="gallery-footer-btn">
            more
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Gallery section ends */}

  {/* Section order starts */}
  <div className="container-fluid ">
  <div className="container d-flex justify-content-between topcheel">
    <div className="h4">
      Feautred Video
    </div>
    <a href="">
      <button
        className="btn"
        type="button"
      >
        Watch More
      </button>
    </a>
  </div>
  <div className="row gap-3 order-columns-home">
    <div className="col-sm">
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        frameBorder="0"
        height="250px"
        src="https://www.youtube.com/embed/o1fWvomcXt8?si=Hhf6epxhwFAZu__y"
        title="YouTube video player"
        width="100%"
      />
    </div>
    <div className="col-sm">
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        frameBorder="0"
        height="250px"
        src="https://www.youtube.com/embed/o1fWvomcXt8?si=Hhf6epxhwFAZu__y"
        title="YouTube video player"
        width="100%"
      />
    </div>
    <div className="col-sm">
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        frameBorder="0"
        height="250px"
        src="https://www.youtube.com/embed/o1fWvomcXt8?si=Hhf6epxhwFAZu__y"
        title="YouTube video player"
        width="100%"
      />
    </div>
  </div>
</div>
  {/* Section orders ends */}
</div>

    </>
  );
};
export default Stories;
