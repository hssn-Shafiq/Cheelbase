import React from "react";
import Header from "../../../Componenets/Header";
import '../Channelhome/Channelhome.css';
import ChannelSidebar from "../../../Componenets/ChannelSidebar";

const Channelhome = () => {
    return (
        <>
            <Header/>
            <div className="container-fluid">
  <div className="row">
    {/* sidebar column starts */}
    <ChannelSidebar />
    {/* sidebar column ends */}
    <div className="col-md  channel-main-profile">
      <div className="channel-back-image pt-2 ">
        <img src="../images/Rectangle 5168.png" alt="" width="100%" />
        <div className="channel-profile d-flex align-items-center gap-4">
          <div className="profile-img">
            <img src="../images/Group 14.png" alt="" width={70} />
          </div>
          <div className="profile-content">
            <h3>Dev's Channel</h3>
            <h4>Public Channel</h4>
          </div>
        </div>
      </div>
      <div className="channel-description p-3">
        <h3>Description</h3>
        <p>
          Descriptio {"{"}Today lets talk about this new technoloy innovations
          that come out everyday {"}"}
        </p>
        <hr className="me-5" />
        <a href="channel-chating-page.html">
          cbase.me/devschannel <br />
          Invite link
        </a>
        <hr className="me-5" />
      </div>
      <div className="members p-3">
        <h3>Members</h3>
        <br />
        <div className="subscriber ps-5">
          <img src="../images/icons/groups_2.png" width={60} alt="" />
          <span>70,000</span>
          <span className="sbcr-title ms-5">subscriber</span>
        </div>
        <div className=" subscriber ps-5">
          <img
            src="../images/icons/groups_2 (1).png"
            width={60}
            alt=""
          />
          <span>14</span>
          <span className="sbcr-title admin-title ms-5">Admins</span>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    );
}

export default Channelhome;
