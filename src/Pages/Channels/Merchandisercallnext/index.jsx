import React from "react";
import Header2 from '../../../Componenets/Header2';
import '../Merchandisercallnext/Merchandisercallnext.css';

const Merchandisercallnext = () => {
    return(
        <>
        <Header2/>
        <div className="container-fluid video-main ">
        <div className="row">
          <div className="col-md-8 p-3">
            <div className="name d-flex ">
              <img
                src="../images/icons/Ellipse 360.png"
                className="img-hand"
              ></img>
              <h6 className="mt-2 ms-3">
                <b>Business name......</b>
              </h6>
            </div>

            <div className="video-call">
              <div className="icons-list d-flex">
                <div className="persons mt-3 ms-2 d-flex">
                  <img
                    src="../images/icons/groups_2.png"
                    className="img-group"
                    alt=""
                  />
                  <img
                    src="../images/icons/171k.png"
                    className="img-num"
                    alt=""
                  />
                </div>

                <div className="icons mt-1 d-flex">
                  <img
                    src="../images/icons/Group 18675.png "
                    className="img-heart mt-2"
                    alt=""
                  />
                  <div className="shopping-cart mt-3 ms-3 d-flex">
                    <img
                      src="../images/icons/shopping_cart_checkout.png"
                      className="img-group"
                      alt=""
                    />
                    <img
                      src="../images/icons/1.3k.png"
                      className="img-num"
                      alt=""
                    />
                  </div>

                  <div className="shopping-basket mt-2 ms-3">
                    <img
                      src="../images/icons/shopping_basket (1).png"
                      className="img-group"
                      alt=""
                    />
                    <img src="../images/icons/17.png" className="" alt="" />
                  </div>
                </div>
              </div>

              <img
                className="img-cb"
                src="../images/cb-room-bg.png"
                width="100%"
                height={440}
                alt=""
              />

              <div className="video-call-others-profile d-flex flex-column  gap-2">
                <img src="../images/Group 18910.png" width={110} alt="" />
                <img src="../images/Group 18911.png" width={110} alt="" />
              </div>

              <div className="add-person d-flex">
                <p className="jane">@jane.....</p>
                <img
                  src="../images/icons/add_circle (2).png"
                  className="ms-2"
                  alt=""
                />
              </div>
            </div>

            <div className="products d-flex">
              <div className="product-name d-flex">
                <img
                  src="../images/icons/shoppingmode.png"
                  className="img-icon"
                  alt=""
                />
                <p className="ms-3">Product name</p>
                <p className="ms-3">Product code</p>
              </div>


                <div className="notification d-flex gap-2">
                    <img src="../images/icons/Group 18772.png" className="img-notify" alt="" />
                    <img src="../images/icons/Group 18773.png" className="img-notify" alt="" />
                    
                </div>
              <div className="ink-pen d-flex gap-3">
                <a href="">
                  <img
                    src="../images/icons/ink_pen.png"
                    className="img-icon"
                    alt=""
                  />
                </a>

                <a href="">
                  <img
                    src="../images/icons/add_circle (3).png"
                    className="img-icon"
                    alt=""
                  />
                </a>

                <a href="">
                  <img
                    src="../images/icons/Group 18687.png"
                    className="img-icon"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col rightbar-messenger p-2 m-2">
            <div className="like-icons d-flex align-items-center justify-content-between p-2 pt-3">
              <i className="fa-regular fa-thumbs-up">
                <sub>17 k</sub>
              </i>
              <i className="fa-regular fa-message">
                <sub>30 k</sub>
              </i>
              <i className="fa-regular fa-star">
                <sub>30 k</sub>
              </i>
              <i className="fa-solid fa-share-nodes">
                <sub>30 k</sub>
              </i>
            </div>
            <div className="chatting mt-0">
              <div className="profile-1 d-flex align-items-center gap-3">
                <div className="image">
                  <img src="../images/Ellipse 11.png" width={30} alt="" />
                </div>
                <div className="content ">
                  <h5>Caesy</h5>
                  <span>Hello Guys! Whats your opinion? </span>
                  <div className="time text-center ">2:00pm</div>
                </div>
              </div>
              <div className="profile-1 d-flex align-items-center gap-3">
                <div className="image">
                  <img src="../images/Ellipse 12.png" width={30} alt="" />
                </div>
                <div className="content ">
                  <h5>John</h5>
                  <span>Images are better. </span>
                  <div className="time text-end me-4 ">2:00pm</div>
                </div>
              </div>
              <div className="reply mt-4">
                <div className="content ">
                  <h5>You</h5>
                  <span>Yes, It will decrease the loading </span>
                  <div className="time text-center mt-2 ">2:01pm</div>
                </div>
              </div>

              <div className="profile-1 d-flex align-items-center gap-3">
                <div className="image">
                  <img src="../images/Ellipse 12.png" width={30} alt="" />
                </div>
                <div className="content ">
                  <h5>Jack</h5>
                  <span className="col-8">Anyone is up for illustrations. I think there are less relatable images according to our brand. </span>
                  <div className="time text-end me-4 ">2:00pm</div>
                </div>
              </div>
              <div className="profile-1 typing d-flex align-items-center gap-3 ">
                <div className="image d-flex align-items-center">
                  <img src="../images/Group 12.png" width={40} alt="" />
                  <h5>John is typing...</h5>
                </div>
                <div className="content"></div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Merchandisercallnext;