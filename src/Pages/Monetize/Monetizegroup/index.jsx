import React from "react";
import Header from "../../../Componenets/Header";
import '../Monetizegroup/Monetizegroup.css';

 const Monetizegroup = () => {
    return(
        <>
        <Header/>
  <img
    src="../images/icons/arrow_back.png"
    className="ms-3 mt-3"
    alt=""
  />
  <div className="monetize-chats">
    <div className="chat-first">
      <h3 className="col-8 monetize-one text-danger ms-3 mt-2">
        Monetize your group
      </h3>
    </div>
    <div className="profile ms-5">
      <ul>
        <li className="dots ">
          Minimum numbers
          <p className="amount ">500</p>
          <img
            src="../images/icons/check_box.png"
            className="img-box"
            alt=""
          />
        </li>
      </ul>
    </div>
    <div className="channel-id text-center">
      <label htmlFor="channel">Select group id</label>
      <div className="dropdown">
        <button
          className="btn fest dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Love fest
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="photo text-center">
      <img src="../images/Rectangle 1152.png" className="mt-1" alt="" />
      <div className="upload-file">
        <button
          id="customButton"
          onclick="document.getElementById('input-file').click()"
        >
          photo
        </button>
        <input type="file" id="input-file" />
      </div>
    </div>
    <div className="photo-second text-center mt-3">
      <img
        src="../images/Rectangle 1152.png"
        className="mt-1 img-rec"
        alt=""
      />
      <div className="upload-filetwo">
        <button
          id="customButton"
          onclick="document.getElementById('input-file').click()"
        >
          ID Front
        </button>
        <input type="file" id="input-file" />
      </div>
    </div>
    <div className="photo-second text-center mt-3">
      <img
        src="../images/Rectangle 1152.png"
        className="mt-1 img-rec"
        alt=""
      />
      <div className="upload-filetwo">
        <button
          id="customButton"
          onclick="document.getElementById('input-file').click()"
        >
          ID Back
        </button>
        <input type="file" id="input-file" />
      </div>
    </div>
    <div className="dropdown payment text-center">
      <label htmlFor="">Select Payment Method</label>
      <button
        className="btn-method rounded-5 mt-2 dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Select Payment Method
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a className="dropdown-item" href="#">
            Paypal
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            VISA
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Pioneer
          </a>
        </li>
      </ul>
    </div>
    <button type="file" className="upload mt-5 d-flex">
      <p className="mt-2 ms-2">Upload proof of Address</p>
      <img
        src="../images/icons/upload (1).png"
        className="ms-3 mt-2"
        alt=""
      />
    </button>
    <div className="email">
      <label htmlFor="" className="ms-3">
        myemail@gmail.com
      </label>
    </div>
    <button className="btn btn-submit text-center rounded-5">Submit now</button>
    <div className="btn-next mt-5 text-center">
      <a href="/Monetizeaffiliate">
        <button className="btn btn-primary">Continue to Next</button>
      </a>
    </div>
  </div>


        
        </>
    )
 }

 export default Monetizegroup