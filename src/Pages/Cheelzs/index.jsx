import React from "react";
import Sidebar from "../../Componenets/Sidebar";
import ReelsCheelz from "../../Componenets/ReelsCheelz";
import RightSideBar from "../../Componenets/RightSideBar";
import Header from "../../Componenets/Header";
import "../Cheelzs/cheel.css"

const Cheelzs = () => {
  return (
    <>
      <div className="container-fliud container-width">
        <div className="row">
          <Header/>
         <Sidebar/>
          <ReelsCheelz/>
          <RightSideBar/>
        </div>
      </div>
    </>
  );
};
export default Cheelzs;
