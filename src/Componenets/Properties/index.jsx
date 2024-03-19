import React from "react";

const Properties = () => {
  return (
    <>
     <div className="container-fluid">
  <div className="row">
    <div className="col-3 right-sidebar-section" />
    <div className="col-md">
      {/* section gallery start */}
      <div className="container-fluid  mt-2">
        <div className="container d-flex justify-content-between gallery">
          <div className="h4">Gallery</div>
          <a href="">
            <button type="button" className="btn">
              View all
            </button>
          </a>
        </div>
        <div className="row gallery2">
          <div className="col-sm-3">
            <img src="images/g1.jpg" alt="" />
          </div>
          <div className="col-sm-3">
            <img src="images/g2.jpg" alt="" />
          </div>
          <div className="col-sm-3">
            <img src="images/g3.jpg" alt="" />
          </div>
          <div className="col-sm-3">
            <img src="images/g4.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* section gallery end */}
      {/* section properties start */}
      <div className="container-fluid mt-2">
        <div className="container d-flex justify-content-between properties">
          <div className="h4">Properties</div>
          <a href="">
            <button type="button" className="btn">
              View More
            </button>
          </a>
        </div>
        <div className="row properties2 ">
          <div className="col-sm-3">
            <img src="images/properties.jpg" alt="" />
          </div>
          <div className="col-sm-3">
            <img src="images/properties.jpg" alt="" />
          </div>
          <div className="col-sm-3">
            <img src="images/properties.jpg" alt="" />
          </div>
          <div className="col-sm-3">
            <img src="images/properties.jpg" alt="" />
          </div>
        </div>
        <div className="row properties2 videos mt-5">
          <div className="col-sm-3">
            {/* <img src="images/properties.jpg" alt=""> */}
            <iframe
              width="100%"
              height="250px"
              src="https://www.youtube.com/embed/o1fWvomcXt8?si=Hhf6epxhwFAZu__y"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </div>
          <div className="col-sm-3">
            {/* <img src="images/properties.jpg" alt=""> */}
            <iframe
              width="100%"
              height="250px"
              src="https://www.youtube.com/embed/o1fWvomcXt8?si=Hhf6epxhwFAZu__y"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </div>
          <div className="col-sm-3">
            {/* <img src="images/properties.jpg" alt=""> */}
            <iframe
              width="100%"
              height="250px"
              src="https://www.youtube.com/embed/o1fWvomcXt8?si=Hhf6epxhwFAZu__y"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </div>
          <div className="col-sm-3">
            {/* <img src="images/properties.jpg" alt=""> */}
            <iframe
              width="100%"
              height="250px"
              src="https://www.youtube.com/embed/o1fWvomcXt8?si=Hhf6epxhwFAZu__y"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </div>
        </div>
        <div className="row properties2 videos mt-5">
          <div className="col-sm-3">
            {/* <img src="images/properties.jpg" alt=""> */}
            <iframe
              width="100%"
              height="250px"
              src="https://www.youtube.com/embed/o1fWvomcXt8?si=Hhf6epxhwFAZu__y"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </div>
          <div className="col-sm-3">
            {/* <img src="images/properties.jpg" alt=""> */}
            <iframe
              width="100%"
              height="250px"
              src="https://www.youtube.com/embed/o1fWvomcXt8?si=Hhf6epxhwFAZu__y"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </div>
          <div className="col-sm-3">
            {/* <img src="images/properties.jpg" alt=""> */}
            <iframe
              width="100%"
              height="250px"
              src="https://www.youtube.com/embed/o1fWvomcXt8?si=Hhf6epxhwFAZu__y"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </div>
          <div className="col-sm-3">
            {/* <img src="images/properties.jpg" alt=""> */}
            <iframe
              width="100%"
              height="250px"
              src="https://www.youtube.com/embed/o1fWvomcXt8?si=Hhf6epxhwFAZu__y"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
      {/* section properties end */}
      {/* column9 main ends  */}
      {/* section apaertment start */}
      {/* <div class="container-fluid  mt-5">
                  <div class="row apartment">
                      <div class="col-sm-6">
                          <img src="images/apartment.jpg" width="300px" alt="image">
                          <p class="price">$2500/Mo</p>
                          <div class="d-flex justify-content-between">
                              <div>
                                  <div class="h5">Comefortable Appartment</div>
                              </div>
                              <div>
                                  <a href="">
                                      <button type="button" class="btn">For Rent</button>

                                  </a>
                              </div>
                          </div>
                          <p class="address"><i class="fa-solid fa-location-dot"></i>709 West Drive Chicago,IL
                              60606</p>
                          <div class="d-flex justify-content-between icons">
                              <div>
                                  <p><i class="fa-solid fa-bed"></i>3 Beds</p>
                              </div>
                              <div>
                                  <p><i class="fa-solid fa-bath"></i>2 Baths</p>
                              </div>
                              <div>
                                  <p><i class="fa-solid fa-square-parking"></i>1 Parking</p>
                              </div>
                              <div>
                                  <p><i class="fa-solid fa-ruler"></i>120sqft</p>
                              </div>
                          </div>
                      </div>

                      <div class="col-sm-6">
                          <img src="images/apartment.jpg" width="300px" alt="image">
                          <p class="price">$2500/Mo</p>
                          <div class="d-flex justify-content-between">
                              <div>
                                  <div class="h5">Comefortable Appartment</div>
                              </div>
                              <div>
                                  <a href="">
                                      <button type="button" class="btn">For Rent</button>

                                  </a>
                              </div>
                          </div>
                          <p class="address"><i class="fa-solid fa-location-dot"></i>709 West Drive Chicago,IL
                              60606</p>
                          <div class="d-flex justify-content-between icons">
                              <div>
                                  <p><i class="fa-solid fa-bed"></i>3 Beds</p>
                              </div>
                              <div>
                                  <p><i class="fa-solid fa-bath"></i>2 Baths</p>
                              </div>
                              <div>
                                  <p><i class="fa-solid fa-square-parking"></i>1 Parking</p>
                              </div>
                              <div>
                                  <p><i class="fa-solid fa-ruler"></i>120sqft</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div> */}
      {/* section apaertment end */}
    </div>
  </div>
</div>

    </>
  );
};
export default Properties;
