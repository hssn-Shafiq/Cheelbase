import React from "react";
import Header from "../../Componenets/Header";
import Sidebar from "../../Componenets/Sidebar";
import RightSideBar from "../../Componenets/RightSideBar";
import GalleryPageComp from "../../Componenets/GalleryPageComp";

const Gallery = () => {
  return (
    <>
     <div className="container-fliud container-width">
        <div className="row">
          <Header />
          <Sidebar />
          <GalleryPageComp />
          <RightSideBar />
        </div>
      </div>
    </>
  );
};
export default Gallery;
