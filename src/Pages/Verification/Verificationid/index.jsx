import React from "react";
import Header from "../../../Componenets/Header";
import './Verificationid.css';

const Verificationid = () => {

    return (
        <>
        <Header/>
        <div className="container-fluid verification-identity-main">
  <div className="row pt-3  verification-identity ">
    <div className="col-md verification-content">
      <a href="javascript:void(0);" className="back-arrow" onClick={() => window.history.back()}>
        <i className="fa-solid fa-arrow-left back-arrow" />
      </a>
      <div className="business-verification ">
        <div className=" content">
          <h2 className=" selfie">Business verification</h2>
        </div>
        <div className="id-profile ">
          <div className="identity ">
            <div className="national-card mt-3 d-flex ">
              <p className="cardid  mt-1">National ID card</p>
              <input type="radio" className="btn btn-primary   radio-card" />
            </div>
            <div className="passport-person mt-3 d-flex ">
              <p className="passport mt-1">Passport</p>
              <input
                type="radio"
                className="btn  btn-primary  radio-passport"
              />
            </div>
            <div className="drivers-license mt-3 d-flex ">
              <p className="license mt-1">Driver's License</p>
              <input type="radio" className="btn btn-primary radio-license" />
            </div>
            <div className="state-id  mt-3 d-flex  ">
              <p className="state mt-1">State ID</p>
              <input type="radio" className=" btn btn-primary radio-id" />
            </div>
          </div>
          <div className="registeration-info ">
            <p className="photo-confirmation">ID FRONT</p>
            <div className="registeration">
              <img
                src="../images/icons/linked_camera.png"
                className="linked-camera"
                alt=""
              />
              <div className="upload-file">
                <button
                  id="customButton"
                  onclick="document.getElementById('input-file').click()"
                >
                  upload file
                </button>
                <input type="file" id="input-file" />
              </div>
            </div>
            <p className="photo-confirmation mt-3">ID BACK</p>
            <div className="registeration">
              <img
                src="../images/icons/linked_camera.png"
                className="linked-camera"
                alt=""
              />
              <div className="upload-file">
                <button
                  id="customButton"
                  onclick="document.getElementById('input-file').click()"
                >
                  upload file
                </button>
                <input type="file" id="input-file" />
              </div>
            </div>
            <p className="photo-confirmation mt-3">PROOF OF RESIDENCE</p>
            <div className="registeration">
              <img
                src="../images/icons/linked_camera.png"
                className="linked-camera"
                alt=""
              />
              <div className="upload-file">
                <button
                  id="customButton"
                  onclick="document.getElementById('input-file').click()"
                >
                  upload file
                </button>
                <input type="file" id="input-file" />
              </div>
            </div>
          </div>
          <div className="next">
            <a
              href="/Verificationconfirmation"
              className="mt-5 btn-continue "
            >
              <button className="btn next-button  ">
                <p>Continue</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="universe">
    <h6 className="from ">From</h6>
    <h6 className="annex-universe">Annex universe Itd</h6>
  </div>
</div>

        </>
    );
}

export default Verificationid;