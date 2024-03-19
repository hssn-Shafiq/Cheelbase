import React from "react";
import Header from "../../../../Componenets/Header";
import '../Videocall/Videocall.css';

const Videocall = () => {
    return(
        <>
        <Header/>
        <div className="container-fluid video-main ">
  <div className="row">
    <div className="col-md-8 p-3">
      <div className="requesting-profile text-light d-flex align-items-center justify-content-between ">
        <div className="name d-flex align-items-center ">
          <h2>@marina</h2>
          <div className="members">
            <i className="fa-solid fa-users">
              {" "}
              <span>15</span>
            </i>
          </div>
        </div>
        <div className="request d-flex align-items-center gap-3">
          <span>Marina is requesting to join you live</span>
          <img src="../images/Oval 5 Copy 2.png" width={30} alt="" />
        </div>
      </div>
      <div className="call">
        <div className="time">
          <i className="fa-solid fa-record-vinyl" />
          <span>
            live<span>00:12:26</span>
          </span>
        </div>
        <div className="video-call">
          <img src="../images/video-call.png" width="100%" alt="" />
          <div className="video-call-profile d-flex align-items-center gap-3 p-1">
            <div className="profile-img">
              <img src="../images/Oval 5 Copy 2.png" alt="" width={40} />
            </div>
            <div className="profile-content">
              <h4>@Marina</h4>
              <span>This is my comments</span>
            </div>
            <div className="pin-icons d-flex flex-column align-items-center justify-content-start">
              <i className="fa-solid fa-reply" />
              <i className="fa-solid fa-thumbtack" />
            </div>
          </div>
          <div className="video-call-others-profile d-flex flex-column gap-2">
            <img src="../images/video-call-2.png" width={80} alt="" />
            <img src="../images/video-call-2.png" width={80} alt="" />
          </div>
          <div className="range-slider d-flex flex-column align-items-center p-2">
            <input
              className="input-range"
              orient="vertical"
              type="range"
              step="0.5"
              defaultValue={5}
              min={1}
              max={10}
            />
            <i className="fa fa-volume-up" />
          </div>
          <div className="video-icons">
            <i
              className="fa fa-volume-down"
              onclick="this.style.color = 'rgba(230, 230, 230, 0.432)';"
            />
            <i
              className="fa-solid fa-video"
              onclick="this.style.color = 'rgba(230, 230, 230, 0.432)';"
            />
            <i
              className="fa-solid fa-camera-rotate"
              onclick="this.style.color = 'rgba(230, 230, 230, 0.432)';"
            />
            <i
              className="fa-solid fa-microphone-slash"
              onclick="this.style.color = 'rgba(230, 230, 230, 0.432)';"
            />
            <i
              className="fa-solid fa-share-from-square"
              onclick="this.style.color = 'rgba(230, 230, 230, 0.432)';"
            />
            <i
              className="fa-solid fa-phone-slash"
              onclick="this.style.color = 'rgba(230, 230, 230, 0.432)';"
            />
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
        <div className="profile-1 d-flex align-items-center gap-3">
          <div className="image">
            <img src="../images/Ellipse 11 (1).png" width={30} alt="" />
          </div>
          <div className="content mt-5">
            <h5>Jack</h5>
            <span>
              Anyone is up for illustrations. I think there are less relatable
              images according to our brand.{" "}
            </span>
            <div className="time text-center ">2:00pm</div>
          </div>
        </div>
        <div className="profile-1 typing d-flex align-items-center gap-3 ">
          <div className="image">
            <img src="../images/Group 12.png" width={40} alt="" />
          </div>
          <div className="content">
            <h5>John is typing...</h5>
            <img
              src="../images/Group 18748.png"
              width="200px"
              height="150px"
              alt=""
            />
          </div>
        </div>
        <div className="chat-input  d-flex align-items-center gap-2">
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
}

export default Videocall;