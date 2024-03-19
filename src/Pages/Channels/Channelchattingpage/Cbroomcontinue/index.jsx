import React from "react";
import Header from "../../../../Componenets/Header";
import './Cbroomcontinue.css';

const Cbroomcontinue = () => {
    return(
        <>
        <Header/>
        <div className="container text-center form-cb-room p-3 ">
  <div className="row team pt-5">
    <h2>
      <b>
        {"{"}Business name{"}"} Room
      </b>
    </h2>
    <div className="btns mt-5 d-flex">
      <a href="javascript:void(0);" className="btn rounded-5">
        Upload Image
      </a>
      <a href="javascript:void(0);" className="btn rounded-5">
        Capture me
      </a>
    </div>
  </div>
</div>

        </>
    );
}

export default Cbroomcontinue;