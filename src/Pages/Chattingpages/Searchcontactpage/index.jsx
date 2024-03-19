import React from "react";
import Header from "../../../Componenets/Header";
import '../Searchcontactpage/Searchcontactpage.css';

const Searchcontactpage = () => {

    return(
        <>
        <Header/>
        <div className="container contact-main d-flex justify-content-center">
  <div className="container">
    <div className="row">
      <div className="search-contact-page mt-5 d-flex justify-content-between align-items-center">
        <div className="contacts">
          <p className="contact">Find contact</p>
          <p className="no-of-contacts">126 contacts</p>
        </div>
        <div className="magnify-glass mb-5 ">
          <i className="fa-solid fa-magnifying-glass" />
        </div>
      </div>
      <div className="group-channel mt-1 justify-content-between align-items-center d-flex ">
        <div className="channeled  d-flex">
          <img src="../images/icons/Group 18591.png" alt="" />
          <p className="create-channel mt-2 ">Create Channel</p>
        </div>
        <div className="group d-flex ">
          <img src="../images/icons/Group 18592.png" alt="" />
          <p className="create-group mt-2">Create group</p>
        </div>
      </div>
      <hr className="line mt-4" />
      <div className="buttons-group  ">
        <div className="buttons d-flex justify-content-between justify-content-center ">
          <div className="contact">
            <button className="from-contacts rounded-5 ">
              {" "}
              From contacts <span className="number">126</span>
            </button>
          </div>
          <div className="business">
            <button className="businesses rounded-5">Businesses</button>
          </div>
          <div className="favorite">
            <button className="favourite rounded-5 ">Favourite 04</button>
          </div>
          <div className="channels">
            <button className="channel rounded-5">Channel 03</button>
          </div>
          <div className="group">
            <button className="groups rounded-5">Groups 10</button>
          </div>
        </div>
      </div>
      <div className="persons-profile">
        <div className="profile mt-5 d-flex">
          <a href="/Chattingmessenger">
            <img
              src="../images/Ellipse 303.png"
              className="img-border"
              alt=""
            />
          </a>
          <div className="info mt-2">
            <a href="/Chattingmessenger">
              <p>marina</p>
            </a>
            <p className="last-chat">Last chat 15 minutes ago</p>
          </div>
        </div>
        <div className="profile mt-5 d-flex">
          <img
            src="../images/Ellipse 304 (1).png"
            className="img-border"
            alt=""
          />
          <div className="info mt-2">
            <p>Jane bobobonahyi</p>
            <p className="last-chat">Last chat 3 days ago</p>
          </div>
        </div>
        <div className="profile mt-5 d-flex">
          <img
            src="../images/Ellipse 6 (1).png"
            className="img-border"
            alt=""
          />
          <div className="info mt-2">
            <p>Gaming cheating group</p>
            <p className="last-chat">Last chat 15 days ago</p>
          </div>
        </div>
        <div className="profile mt-5 d-flex">
          <img
            src="../images/Ellipse 304.png"
            className="img-border"
            alt=""
          />
          <div className="info mt-2">
            <p>MarkVicent</p>
            <p className="last-chat">Last chat 15 minutes ago</p>
          </div>
        </div>
        <div className="profile mt-5 d-flex">
          <img
            src="../images/Ellipse 304 (1).png"
            className="img-border"
            alt=""
          />
          <div className="info mt-2">
            <p>MarkVicent</p>
            <p className="last-chat">Last chat 15 minutes ago</p>
          </div>
        </div>
        <div className="profile mt-5 d-flex">
          <img
            src="../images/Ellipse 304 (1).png"
            className="img-border"
            alt=""
          />
          <div className="info mt-2">
            <p>MarkVicent</p>
            <p className="last-chat">Last chat 15 minutes ago</p>
          </div>
        </div>
        <div className="profile mt-5 d-flex">
          <img
            src="../images/Ellipse 304 (1).png"
            className="img-border"
            alt=""
          />
          <div className="info mt-2">
            <p>MarkVicent</p>
            <p className="last-chat">Last chat 15 minutes ago</p>
          </div>
        </div>
        <div className="profile mt-5 d-flex">
          <img
            src="../images/Ellipse 304 (1).png"
            className="img-border"
            alt=""
          />
          <div className="info mt-2">
            <p>MarkVicent</p>
            <p className="last-chat">Last chat 15 minutes ago</p>
          </div>
        </div>
        <div className="profile mt-5 d-flex">
          <img
            src="../images/Ellipse 304 (1).png"
            className="img-border"
            alt=""
          />
          <div className="info mt-2">
            <p>MarkVicent</p>
            <p className="last-chat">Last chat 15 minutes ago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Searchcontactpage;