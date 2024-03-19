import React, {useEffect} from "react";
import Header from "../../../Componenets/Header";
import '../Channeladmin/Channeladmin.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const Channeladmin  = () => {
    useEffect(() => {
        // Initialize tooltip
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
          return new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
    
        // Show modal on tooltip click
        document.getElementById('tooltipButton').addEventListener('click', () => {
          const modal = new window.bootstrap.Modal(document.getElementById('tooltipModal'));
          modal.show();
        });
    
        // Clean up when the component unmounts
        return () => {
          tooltipList.forEach((tooltip) => tooltip.dispose());
        };
      }, []);


    return (

        <>
        <Header/>
        <div className="container-fluid  room-page-5">
  <div className="row">
    <div className="col-8 p-0">
      <img
        src="../images/cb-room-bg.png"
        width="100%"
        height="450px"
        alt=""
      />
      <div className="text-center">
        <i className="fa-solid fa-camera-rotate" />
      </div>
    </div>
    <div className="col form">
      <div className="display d-flex  flex-column gap-3 pt-3">
        <div className="input-box">
          <label htmlFor="">Product Code</label>
          <input type="text" />
        </div>
        <div className="input-box">
          <label htmlFor="">Product Code</label>
          <input type="text" />
        </div>
        <div className="text-end">
          <a href="javascript:void(0);" className="btn display-btn">
            Display Now
          </a>
        </div>
        <div className="content ">
          <p>
            Would like to displace more products/ services or Have discounted
            products on the banner?
          </p>
        </div>
      </div>
      <div className="dropdown-form text-center mt-5">
        <span
          className="modal-btn "
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Click Me"
          id="tooltipButton"
        >
          Yes
        </span>
      </div>
    </div>
  </div>
</div>


<div className="modal" tabIndex={-1} role="dialog" id="tooltipModal">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div className="modal-body">
        <form>
          {/* Your form elements go here */}
          <div className="mb-3">
            <label className="form-label">Product Text</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Text below 14 characters."
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Product Code</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={2}
              defaultValue={""}
            />
          </div>
          <p>You can add a maximum of 5 products on the banner</p>
          <div className="submit text-end">
            <button type="submit" className="btn ">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="modal-footer"></div>
    </div>
  </div>
</div>


        </>
    )
}

export default Channeladmin;