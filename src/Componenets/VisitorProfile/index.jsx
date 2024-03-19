import React, {useState, useEffect} from "react";

const VisitorProfile=()=>{
 
    return(
        <>
        <div className="col-lg-12 col-md-12 col-sm height-main">
  <img className="vist-img" src="../images/Rectangle 1128.png" alt="" />
  <img
          className="vist-img-position"
          src="../images/Group 3465296.png"
          alt=""
        />
 
  <img className="vist-avtar" src="../images/Avatar.png" alt="" />
  <div className="btn-containter">
    <label className="btn-view" htmlFor="#">
      View more
    </label>
    <label className="btn-view" htmlFor="#">
      share
    </label>
  </div>
</div>

        </>
    );
};
export default VisitorProfile;