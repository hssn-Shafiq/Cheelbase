import React from "react";
import VisitorVideoUpload from "../../Componenets/Visitors/VisitorVideoUpload";
import VisitorCheelsUpload from "../../Componenets/Visitors/VisitorCheelUpload";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row text-center d-flex align-items-center justify-content-center bg-dark">
          <div className="col-12 p-5">
            <p>
              <a
                class="btn btn-primary"
                data-bs-toggle="collapse"
                href="#multiCollapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                upload Visitors Video
              </a>
              <button
                class="btn btn-primary ms-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#multiCollapseExample2"
                aria-expanded="false"
                aria-controls="multiCollapseExample2"
              >
                Upload Visitors Cheels
              </button>
            </p>
            <div class="row">
              <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample1">
                  <div class="card card-body">
                    <VisitorVideoUpload />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample2">
                  <div class="card card-body">
                    <VisitorCheelsUpload />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
