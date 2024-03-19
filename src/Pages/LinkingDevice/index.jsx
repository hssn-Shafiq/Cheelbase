import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../LinkingDevice/linking.css";

const LinkingDevice = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Use setTimeout to delay the redirection by 5 seconds
    const timeoutId = setTimeout(() => {
      // Redirect to the home page
      navigate("/Home");
    }, 5000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [navigate]); // Include navigate in the dependencies to avoid lint warnings

  return (
    <>
      <div className="container-sm linking-main p-5 sm-p-0 rounded-3" style={{ width: '1090px' }}>
        <div className="row p-5">
          <div className="col-sm-5 sm-p-0 text-end">
            <img src="images/portrait.png" alt="" style={{ width: "150px" }} />
          </div>
          <div className="col-sm-2 text-center d-flex flex-column align-items-center justify-content-end">
            <img src="images/cycle.png" alt="" style={{ width: "30px" }} />
            <p className="link-text mt-3">Linking Device..........</p>
          </div>
          <div className="col-sm-5 px-4">
            <img src="images/laptop.png" alt="" style={{ width: "150px" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkingDevice;
