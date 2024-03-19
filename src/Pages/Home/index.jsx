import React from "react";
import Header from "../../Componenets/Header";
import Sidebar from "../../Componenets/Sidebar";
import Stories from "../../Componenets/Stories";
import RightSideBar from "../../Componenets/RightSideBar";
import Gallery from "../../Componenets/Gallery";
import Properties from "../../Componenets/Properties";
import { useAuth } from '../../AuthContext';

const Home =()=>{
    return(
      
        <div>
        <Header/>
        <div className="container-fliud ">
        <div className="row">
        <Sidebar/>
        <Stories/>
        <RightSideBar/>
        </div>
        </div>
         </div>
    );
}
export default Home;