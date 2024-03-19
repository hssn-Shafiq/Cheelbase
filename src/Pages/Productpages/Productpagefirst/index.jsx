import React from "react";
import '../Productpagefirst/nav.css';
import '../Productpagefirst/left-sidebar.css';
import '../Productpagefirst/right-sidebar.css';
import '../Productpagefirst/Productpagefirst.css';

const Productpagefirst = () => {
    return (
        <>
      
  {/* navbar starts */}
  <header>
    <nav className="navbar navbar-expand-sm">
      <div className="container">
        <a className="navbar-brand" href="#">
          Cheelbase
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item dropdown">
              <a
                className="btn dropdown cursor-pointer create-btn"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Create <i className="fas fa-plus-circle" />
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Video
                </a>
                <a className="dropdown-item" href="#">
                  Cheels
                </a>
                <a className="dropdown-item" href="#">
                  Gallery
                </a>
                <a className="dropdown-item" href="#">
                  Products
                </a>
                <a className="dropdown-item" href="#">
                  Food Items
                </a>
                <a className="dropdown-item" href="#">
                  Properties
                </a>
              </div>
            </li>
          </ul>
          <form className="d-flex nav-icon">
            {/* <input class="form-control me-sm-2" type="text" placeholder="Search">
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
            <div className="call">
              <i className="fa-solid fa-camera" />
              <i className="fa-solid fa-phone" />
            </div>
            <div className="notifications">
              <i className="fa-regular fa-message" />
              <i className="fa-solid fa-bell" />
            </div>
            <div className="user d-flex flex-row">
              <ul className="me-auto mt-2 mt-lg-0">
                <li className="dropdown">
                  <i
                    className="fa-solid fa-user user-icon dropdown"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  />
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-gear" />
                      General Settings
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fa-regular fa-address-book" />
                      Contact
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-phone" />
                      Calls
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fa-regular fa-message" />
                      Save Messeges
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-people-group" />
                      Invite Friends
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fa-regular fa-circle-question" />
                      Cheelbase FAQ
                    </a>
                  </div>
                </li>
              </ul>
              <label htmlFor="user" className="mt-1">
                Marina
              </label>
            </div>
            {/* <div class="lines">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div> */}
          </form>
        </div>
      </div>
    </nav>
  </header>
  {/* navbar ends  */}

  <div className="container-fluid">
  <div className="row">
    {/* sidebar column starts */}
    <div className="col-md-3 left-sidebar-main">
      <div className="searchbar d-flex align-items-center mt-0">
        <li className="dropdown">
          <i
            className="fa-solid fa-bars dropdown"
            id="dropdownId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
          <div className="dropdown-menu" aria-labelledby="dropdownId">
            <a className="dropdown-item" href="#">
              <i className="fa-solid fa-gear" />
              Business Tool
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa-solid fa-photo-film" />
              Gallery
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa-solid fa-mobile" />
              Cheels
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa-solid fa-store" />
              Store
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa-solid fa-utensils" />
              Resturants
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa-solid fa-hand-holding-dollar" />
              Property Listing
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa-solid fa-wallet" />
              Monitization
            </a>
          </div>
        </li>
        <i className="fa fa-search" />
        {/* <input class="form-control searchbar-input" type="search" placeholder="Search" aria-label="Search"> */}
        <input
          className="text-center"
          type="search"
          placeholder="Search user,groups,channels"
        />
      </div>
      {/* Sidebar */}
      <nav id="sidebar" className="d-md-block sidebar">
        <div>
          <ul className="nav flex-column">
            <li className="nav-item child">
              <h2>Recent Chats</h2>
              {/* Chat items */}
              <div className="parent">
                <div>
                  <img
                    src="../images/hug shark  banner.jpeg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              <div className="parent">
                <div>
                  <img
                    src="../images/open thumb.jpg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              <div className="parent">
                <div>
                  <img
                    src="../images/life in two bannn.jpeg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              <div className="parent">
                <div>
                  <img
                    src="../images/lawless thumb.jpg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              <div className="parent">
                <div>
                  <img
                    src="../images/garage thumb.jpeg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              {/* Add more chat items as needed */}
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <div className="channels-heading ">
            <h3>Channels</h3>
          </div>
          <ul className="nav flex-column">
            <li className="nav-item child">
              <h2>Recent Channels</h2>
              {/* Chat items */}
              <div className="parent">
                <div>
                  <img
                    src="../images/hug shark  banner.jpeg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              <div className="parent">
                <div>
                  <img
                    src="../images/open thumb.jpg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              <div className="parent">
                <div>
                  <img
                    src="../images/life in two bannn.jpeg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              <div className="parent">
                <div>
                  <img
                    src="../images/lawless thumb.jpg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              <div className="parent">
                <div>
                  <img
                    src="../images/garage thumb.jpeg"
                    alt="Chat 1"
                    className="chat-image"
                  />
                </div>
                <div>
                  <span className="profile-name">Matheus</span>
                  <p className="text-muted">Bora jogar aquele?</p>
                </div>
                <div className="tticon">
                  <span className="time">11:45 AM</span>
                  <i className="fa-solid fa-check-double" />
                </div>
              </div>
              {/* Add more chat items as needed */}
            </li>
          </ul>
        </div>
      </nav>
      {/* sidebar ends */}
    </div>
    {/* sidebar column ends */}
    {/* center main starts  */}
    <div className="col-6 center-main">
      <div className="container-fluid gap-2 products-cards-columns mt-2">
        <div className="col-md-4 product1">
          <div className="card product-card">
            <a href="productsinglepage.html">
              <img
                src="../images/product.jpeg "
                className="card-img-top"
                alt="Product 1"
              />
            </a>
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
          <div className="card product-card">
            <a href="productsinglepage.html">
              <img
                src="../images/product.jpeg"
                className="card-img-top"
                alt="Product 2"
              />
            </a>
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
          <div className="card product-card">
            <a href="productsinglepage.html">
              <img
                src="../images/product.jpeg"
                className="card-img-top"
                alt="Product 3"
              />
            </a>
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
      <div className="container-fluid gap-2 products-cards-columns mt-2">
        <div className="col-md-4 product1">
          <div className="card product-card">
            <a href="productsinglepage.html">
              <img
                src="../images/product.jpeg "
                className="card-img-top"
                alt="Product 1"
              />
            </a>
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
          <div className="card product-card">
            <a href="productsinglepage.html">
              <img
                src="../images/product.jpeg"
                className="card-img-top"
                alt="Product 2"
              />
            </a>
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
          <div className="card product-card">
            <a href="productsinglepage.html">
              {" "}
              <img
                src="../images/product.jpeg"
                className="card-img-top"
                alt="Product 3"
              />
            </a>
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
      <div className="container-fluid gap-2 products-cards-columns mt-2">
        <div className="col-md-4 product1">
          <div className="card product-card">
            <a href="productsinglepage.html">
              <img
                src="../images/product.jpeg "
                className="card-img-top"
                alt="Product 1"
              />
            </a>
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
          <div className="card product-card">
            <a href="productsinglepage.html">
              <img
                src="../images/product.jpeg"
                className="card-img-top"
                alt="Product 2"
              />
            </a>
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
          <div className="card product-card">
            <a href="productsinglepage.html">
              <img
                src="../images/product.jpeg"
                className="card-img-top"
                alt="Product 3"
              />
            </a>
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
    {/* right sidebar starts  */}
    <div className="col-3 right-sidebar-section ">
      {/* section right-side-bar start */}
      <div className="continer-fluid">
        {/* video section */}
        <div className="video" id="video">
          <button
            type="button"
            onclick="document.getElementById('video').style.display='none'"
            className="btn"
          >
            <i className="fa-solid fa-xmark" />
          </button>
          <img src="../images/video1.png" width="100%" alt="img" />
        </div>
        {/* feature section */}
        <div className="feature mt-3">
          <div className="h6">Feature</div>
          <div>
            <div className="container-fluid">
              <div className="row feature-child p-0">
                <div className="col-sm-6 p-1 mt-0">
                  <img
                    src="../images/col1.jpg"
                    className="rounded"
                    alt="image"
                  />
                  <div className="mt-3">
                    <div className="p">Lorem ipsum, dolor</div>
                    <p>4k View 2Months ago</p>
                  </div>
                </div>
                <div className="col-sm-6 p-1 mt-0">
                  <img
                    src="../images/col2.jpg"
                    className="rounded"
                    alt="image"
                  />
                  <div className="mt-3">
                    <div className="p">Lorem ipsum, dolor</div>
                    <p>1 millions View</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sponsored section */}
        <div className="mt-5 Sprd" id="Sponsored">
          <div className="d-flex justify-content-between align-items-center sprd-content">
            <div className="h6">Sponsored</div>
            <button
              type="button"
              onclick="document.getElementById('Sponsored').style.display='none'"
              className="btn"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <img src="../images/g4.jpg" width="100%" alt="img" />
        </div>
        {/* subcribe section */}
        <div className="sub mt-3">
          <img src="../images/col4.jpg" width="100%" />
          <div className="capt">
            <div className="profile d-flex justify-content-around align-items-center">
              <div className="d-flex align-items-center gap-2">
                <img
                  src="../images/profile.jpg"
                  width="30px"
                  className="rounded-circle"
                  alt="img"
                />
                <div className="h6 mt-2 text-md">SADUKS Tuts</div>
              </div>
              <button type="button" className="btn">
                subcribe
              </button>
            </div>
          </div>
        </div>
        {/* apartment2 section */}
        <div className="apartment2 mt-5">
          <div className="col">
            <img
              src="../images/apartment.jpg"
              width="300px"
              height="112px"
              alt="image"
            />
            <p className="price">$2500/Mo</p>
            <div className="d-flex justify-content-between align-items-center apart-content">
              <div className="h5 title">Comefortable Appartment</div>
              <a href="">
                <button type="button" className="btn rent-btn">
                  For Rent
                </button>
              </a>
            </div>
            <p className="address">
              <i className="fa-solid fa-location-dot" />
              709 West Drive Chicago,IL 60606
            </p>
            <div className="d-flex justify-content-between icons">
              <div>
                <p>
                  <i className="fa-solid fa-bed" />3 Beds
                </p>
              </div>
              <div>
                <p>
                  <i className="fa-solid fa-bath" />2 Baths
                </p>
              </div>
              <div>
                <p>
                  <i className="fa-solid fa-square-parking" />1 Parking
                </p>
              </div>
              <div>
                <p>
                  <i className="fa-solid fa-ruler" />
                  120sqft
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* order food section */}
        <div className="food-order">
          <div className="food">
            <img
              src="../images/order food.jpg"
              width="110px"
              className="rounded-circle"
              alt="image"
            />
            <div className="d-flex justify-content-around">
              <p>
                <b>$40.0</b>
              </p>
              <p>
                <i className="fa-solid fa-star" />
                <b>5.0</b>
              </p>
            </div>
            <div className="h4">Healty Salad</div>
            <a href="">
              <button type="button" className="btn">
                Order Now <i className="fa-solid fa-arrow-right" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



        </>
    )
}

export default Productpagefirst