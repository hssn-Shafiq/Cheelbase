import React from "react";
import Header2 from "../../../Componenets/Header2";
import "../Merchandisercall/Merchandiser.css";

const Merchandisercall = () => {
  return (
    <>
      <Header2 />
      <div className="container-fluid video-main ">
  <div className="row">
    <div className="col-md-8 p-3">
      <div className=" text-light  border-none">
        <div className="name ">
          <h3>
            <b>@marina</b>
          </h3>
        </div>
      </div>
      <div className="call" >
        <div className="video-call">
          <img
            src="../images/cb-room-bg.png"
            width="100%"
            height="100%"
            alt=""
          />
          <div className="video-call-others-profile d-flex flex-column gap-2">
            <img src="../images/Group 18910.png" width={140} alt="" />
            <img src="../images/Group 18911.png" width={140} alt="" />
          </div>
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
        <div className="profile-1 typing d-flex align-items-center gap-3 ">
          <div className="image d-flex align-items-center">
            <img src="../images/Group 12.png" width={40} alt="" />
            <h5>John is typing...</h5>
          </div>
          <div className="content"></div>
        </div>
        <div className="chat-input  d-flex align-items-center gap-2 mt-5">
          <i className="fa-solid fa-plus plus-icon" />
          <div className="emoji-icon">
            <i className="fa-regular fa-face-smile" />
          </div>
          <input type="text" />
          <div className="share-icons">
            <i className="fa-solid fa-paperclip" />
            <i className="fa-solid fa-camera" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Merchandisercall;
