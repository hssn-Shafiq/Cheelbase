import React, {useState, useEffect} from "react";
import Header from "../../../Componenets/Header";
import '../Verificationmain/Verificationmain.css';

const Verificationmain = () => {
  const [localUser, setLocalUser] = useState(null);

  useEffect(() => {
    const localUserData = localStorage.getItem("user");
    if (localUserData) {
      setLocalUser(JSON.parse(localUserData));
    }
  }, []);
    return(
        <>
        <Header/>
        <div className="container-fluid verification-main">
  <div className="row d-flex align-items-center gap-4">
    <div className="col-md p-3 phone-verification-col-1">
      <a href="javascript:void(0);" className="back-arrow" onClick={() => window.history.back()}>
        <i className="fa-solid fa-arrow-left" />
      </a>
      <div className=" p-5">
        <h4 className="title">Profile Verification</h4>
        <div className="profile-box d-flex  p-3 align-items-center gap-4">
          {localUser && (
            <>
              <div className="image">
            <img
              src={localUser.image}
              alt={localUser.fullname}
              width={60}
              height={70}
              className="rounded-circle"
            />
            <i className="fa-solid fa-check" />
          </div>
          <div className="content">
            <h6>{localUser.fullname}</h6>
            <a href="javascript:void(0);">
              <h5>Verification of the profile!</h5>
            </a>
          </div>
            </>
          )}
        
        </div>
        <p className="mx-2">Benefits of Verified cheelbase account</p>
        <ul>
          <li>
            <h4 className="list-title">Enhanced verification</h4>
            <p className="list-text">
              Let your subscribes know it’s the real you with a verified badge
              on your Cheelbase Profile
            </p>
          </li>
          <li>
            <h4 className="list-title">Protect your account</h4>
            <p className="list-text">
              Active impersonation monitoring for accounts
            </p>
          </li>
          <li>
            <h4 className="list-title">VIP SUPPORT</h4>
            <p className="list-text">
              Get support when you need it from real person on issues that
              matter to you
            </p>
          </li>
          <li>
            <h4 className="list-title">Share money</h4>
            <p className="list-text">Send money to your fans on cheelbase</p>
          </li>
        </ul>
      </div>
    </div>
    <div className="col-md phone-verification-col-2">
      <div className="verified-btn">
        <a
          href="/Verification1"
          className="btn verified-btn "
        >
          Get Verified
        </a>
      </div>
      <div className="p-5">
        <div className="profile-box d-flex flex-column  p-3 align-items-center gap-3">
          {localUser && (
            <>
            <div className="image">
            <img
              src={localUser.image}
              alt={localUser.fullname}
              width={100}
              height={100}
              className="rounded-circle"
            />
          </div>
          <div className="content text-center">
            <h6>
            {localUser.fullname}
              <span>
                <i className="fa-solid fa-check" />
              </span>
            </h6>
            <h5>Subscribed since june 2023</h5>
          </div>
            </>
          )}
          
        </div>
        <ul>
          <li className="d-flex align-items-center gap-4">
            <div className="image">
              <i className="fa-regular fa-circle-check" />
            </div>
            <div className="content">
              <h6>Cheelbase verified</h6>
              <a href="javascript:void(0);">
                <h5>Activate</h5>
              </a>
            </div>
          </li>
          <li className="d-flex align-items-center gap-4">
            <div className="image">
              <i className="fa-solid fa-credit-card" />
            </div>
            <div className="content">
              <h6>Manage subscription</h6>
              <a href="/Billlingplan1">
                <h5>Billed monthly</h5>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Verificationmain;