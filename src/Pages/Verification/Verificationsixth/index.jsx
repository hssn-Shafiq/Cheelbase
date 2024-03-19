import React from "react";
import Header from "../../../Componenets/Header";
import './Verificationsixth.css';

const Verificationsixth = () => {
    return (

        <>
        <Header/>
        <div className="container-fluid verification-identity-main">
  <div className="row pt-3  verification-identity ">
    <div className="col-md verification-content ">
      <a href="javascript:void(0);" className="back-arrow" onClick={() => window.history.back()}>
        <i className="fa-solid fa-arrow-left back-arrow" />
      </a>
      <div className="business-verification  ">
        <div className=" content">
          <h2 className=" selfie">Business verification</h2>
          <p className="below-information">Submit below information</p>
        </div>
        <div className="business-information  mt-5">
          <div className="business-form">
            <form action="">
              <div className="form-group">
                <label htmlFor="business">Legal business/company name</label>
                <br />
                <input type="text " className="input-text mt-2" />
              </div>
              <div className="form-group">
                <label htmlFor="business">Business category</label>
                <br />
                <input type="text " className="input-text mt-2" />
              </div>
              <p className="address mt-3">Company address</p>
              <div className="form-group mt-4">
                <input
                  type="text"
                  className="input-text "
                  placeholder="Street address"
                />
              </div>
              <div className="form-group mt-4">
                <input
                  type="text"
                  className="input-text"
                  placeholder="Street address2"
                />
              </div>
              <div className="form-group mt-4">
                <input type="text" className="input-text" placeholder="city" />
              </div>
              <div className="form-group mt-4">
                <input
                  type="text"
                  className="input-text"
                  placeholder="Region"
                />
              </div>
              <div className="form-group mt-4">
                <input
                  type="text"
                  className="input-text "
                  placeholder="Postal code"
                />
              </div>
              <div className="form-group mt-4">
                <input
                  type="text"
                  className="input-text"
                  placeholder="Country"
                />
              </div>
            </form>
          </div>
          <div className="registeration-info">
            <p className="certificate">Certificate of reg</p>
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
            <h5 className="business-name mt-4">
              Name of business/company owner
            </h5>
            <p className="same-name"> (Names should be the same on ID)</p>
            <div className="input-fields">
              <div className="form-group">
                <input type="text" className="input-field" />
                <br />
              </div>
              <div className="form-group mt-4">
                <input type="text" className="input-field" />
                <br />
              </div>
              <div className="form-group mt-4">
                <input type="text" className="input-field" />
              </div>
              <div className="next text-center mt-3">
                <a href="/Verificationid">
                  <button className="btn next-button rounded-pill text-center ">
                    <p>Continue</p>
                  </button>
                </a>
              </div>
            </div>
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

export default Verificationsixth;