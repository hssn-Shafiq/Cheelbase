import React from "react";
import Header from "../../../../Componenets/Header";
import '../Cbroomnext/Cbroomnext.css';

 const Cbroomnext = () => {
    return (
        <>
        <Header/>
        <div className="container text-center form-cb-room p-3 ">
  <div className="row team">
    <h5>it's time to let your team.</h5>
    <ul>
      <li>
        <a href="Manager-notify.html">Manager</a>
      </li>
      <li>
        <a href="Merchandiser-notify.html">Merchandiser</a>
      </li>
      <li>
        <a href="order-handler-notify.html">Order Handler</a>
      </li>
    </ul>
    <a href="javascript-void(0);" className="btn">
      Notify Your team
    </a>
  </div>
  <div className="row mt-5">
    <form className="form-horizontal p-2">
      <div className="form-data">
        <div className="form-group d-flex align-items-center justify-content-center my-2">
          <label className="control-label col-sm-2 text-box-label">
            <b>Manager:</b>
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username"
            />
          </div>
        </div>
        <div className="form-group d-flex align-items-center justify-content-center my-2">
          <label className="control-label col-sm-2 text-box-label">
            Merchandiser:
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username"
            />
          </div>
        </div>
        <div className="form-group d-flex align-items-center justify-content-center my-2">
          <label className="control-label col-sm-2 text-box-label">
            Order handler:
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username"
            />
          </div>
        </div>
        <div className="form-group mt-5">
          <div className="col-sm-offset-2 col-sm-12">
            <a type="submit" href="/Chattingpage2" className="btn btn-primary">
              Send Now
            </a>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

        </>
    );
 }

 export default Cbroomnext;