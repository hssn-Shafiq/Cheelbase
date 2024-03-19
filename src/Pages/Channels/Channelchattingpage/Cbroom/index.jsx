import React from "react";
import Header from "../../../../Componenets/Header";
import '../Cbroom/Cbroom.css';

const Cbroom = () => {
    return (
        <>
        <Header/>
        <div className="container text-center form-cb-room p-3 ">
  <div className="row form-inner">
    <h3> Provide the information below for your visitors to see</h3>
    <form className="form-horizontal p-2">
      <div className="form-group d-flex align-items-center justify-content-center my-2">
        <label className="control-label col-sm-2 text-box-label">
          BUSINESS NAME:
        </label>
        <div className="col-sm-4">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group d-flex align-items-center justify-content-center my-2">
        <label className="control-label col-sm-2 text-box-label">SLOGAN:</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group d-flex align-items-center justify-content-center my-2">
        <label className="control-label col-sm-2 text-box-label">
          BUSINESS LOGO:
        </label>
        <div className="col-sm-4">
          <input type="file" className="form-control" />
        </div>
      </div>
      <div className="form-group d-flex align-items-center justify-content-center my-2">
        <label className="control-label col-sm-2 text-box-label">
          MANAGER NAME:
        </label>
        <div className="col-sm-4">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group d-flex align-items-center justify-content-center my-2">
        <label className="control-label col-sm-2 text-box-label">
          PHONE NUMBER:
        </label>
        <div className="col-sm-4">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group d-flex align-items-center justify-content-center my-2">
        <label className="control-label col-sm-2 text-box-label">
          MERCHANDISER:
        </label>
        <div className="col-sm-4">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group d-flex align-items-center justify-content-center my-2">
        <label className="control-label col-sm-2 text-box-label">
          ORDER HOLDER:
        </label>
        <div className="col-sm-4">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <div className="checkbox">
            <label>
              {" "}
              Do you want to add more roles? <input type="checkbox" />
            </label>
          </div>
        </div>
      </div>
      <div className="form-group mt-5">
        <div className="col-sm-offset-2 col-sm-12">
          <h5>This information will be visible to visitors </h5>
          <a
            type="submit"
            href="/Cbroomnext"
            className="btn btn-primary"
          >
            Continue
          </a>
        </div>
      </div>
    </form>
  </div>
</div>

        </>
    );
}

export default Cbroom;