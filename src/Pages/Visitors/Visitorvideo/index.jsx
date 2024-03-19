import React, { useState, useEffect } from "react";
import { db } from "../../../firebase/Config";
import { collection, getDocs } from "@firebase/firestore";
import Header from "../../../Componenets/Header";
import'../Visitorvideo/Visitorvideo.css';

const Visitorvideo = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Reference to the collection where video metadata is stored
        const videoMetadataCollectionRef = collection(db, "visitorvideo");

        // Get all documents from the collection
        const querySnapshot = await getDocs(videoMetadataCollectionRef);

        // Process each document and extract video metadata
        const fetchedVideos = [];
        querySnapshot.forEach((doc) => {
          fetchedVideos.push({ id: doc.id, ...doc.data() });
        });

        setVideos(fetchedVideos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

if(loading){
  return <p>Loading...</p>;
}
    return(
        <>
        <Header/>
        <main className="max-width">
  <div className="container-fluid">
    {/* background images */}
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm height-main">
        <img
          className="vist-img"
          src="../images/Rectangle 1128.png"
          alt=""
        />
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
    </div>
    {/* background image end  */}
    {/* portion  */}
    <div className="row width-row my-5">
      <div className="col-lg-2 icons-links">
        <a
          href="visitors-profile-cheels.html"
          className="d-flex flex-column align-items-center"
        >
          <img
            className="img-width"
            src="../images/amp_stories.png"
            alt=""
          />
          <label className="mt-2 " htmlFor="#">
            <b>Cheels</b>
          </label>
        </a>
      </div>
      <div className="col-lg-2  icons-links amp-stories">
        <a
          href="visitor-video.html"
          className="d-flex flex-column align-items-center"
        >
          <img
            className="img-width"
            src="../images/movie-video.png"
            alt=""
          />
          <label className="mt-2 text-light" htmlFor="#">
            <b>Videos</b>
          </label>
        </a>
      </div>
      <div className="col-lg-2  icons-links">
        <a
          href="visitor-gallery.html"
          className="d-flex flex-column align-items-center"
        >
          <img
            className="img-width"
            src="../images/gallery_thumbnail.png"
            alt=""
          />
          <label className="mt-2" htmlFor="">
            <b>Gallery</b>
          </label>
        </a>
      </div>
      <div className="col-lg-2 icons-links ">
        <a
          href="restaurant.html"
          className="d-flex flex-column align-items-center"
        >
          <img
            className="img-width"
            src="../images/lunch_dining.png"
            alt=""
          />
          <label className="mt-2" htmlFor="">
            <b>Foods</b>
          </label>
        </a>
      </div>
      <div className="col-lg-2  icons-links">
        <a
          href="product.html"
          className="d-flex flex-column align-items-center"
        >
          <img
            className="img-width"
            src="../images/shopping_basket.png"
            alt=""
          />
          <label className="mt-2" htmlFor="">
            <b>Products</b>
          </label>
        </a>
      </div>
      <div className="col-lg-2  icons-links">
        <a
          href="visitors-profile-cheels.html"
          className="d-flex flex-column align-items-center"
        >
          <img
            className="img-width"
            src="../images/real_estate_agent.png"
            alt=""
          />
          <label className="mt-2" htmlFor="">
            <b>Properties</b>
          </label>
        </a>
      </div>
    </div>
    {/* portion end */}
    <div className="container mt-3">
      <div className="input-group  search-icon-bottom">
        <button
          className="btn btn-outline-secondary btn-icon-search"
          type="button"
          id="search-icon"
        >
          <i className="fas fa-search" />
        </button>
        <input
          type="text"
          className="form-control  btn-icon-search1"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="search-icon"
        />
      </div>
    </div>
    {/* video section  */}
    {/* first line */}
    <div className="row main-video-width d-flex justify-content-start  mt-3">
      {videos.map((video) => (
        <div key={video.id} className="col-lg-3">
          <iframe
            width={300}
            height={170}
            src={video.videoURL} // Assuming videoURL contains the YouTube embed URL
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <div className="content d-flex gap-2">
          <div className="icon">
            <a className="under-line-bar" href="video-search-page.html">
              <img src={video.imageURL} alt=""className="rounded-circle object-fit-cover" />
            </a>
          </div>
          <div className="detail">
          <h6>{video.description}</h6>
              <label htmlFor="" className="">{video.channelName}</label>
              <p className="view"><span>709M views</span> <span>upload Time: 12.3</span></p>
          </div>
          </div>
        </div>
      ))}
    </div>
    {/* first end */}

    {/* 5th start */}
    <div className="row main-video-width d-flex mt-3">
      <div className="col-lg-3 video-width ">
        <img src="../images/Group 1051.png" width="300px" alt="" />
      </div>
      <div className="col-lg-3 video-width ">
        <img src="../images/Group 1051.png" width="300px" alt="" />
      </div>
      <div className="col-lg-3 video-width ">
        <img src="../images/Group 1051.png" width="300px" alt="" />
      </div>
      <div className="col-lg-3 video-width ">
        <img src="../images/Group 1051.png" width="300px" alt="" />
      </div>
    </div>
    {/* 5th end  */}
    {/* 6th start */}
    <div className="row main-video-width d-flex mt-3">
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Rectangle 4988.png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Rectangle 4991.png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Rectangle 4988.png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Rectangle 4988.png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Rectangle 4991.png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Rectangle 4988.png" width="200px" alt="" />
      </div>
    </div>
    {/* 6th end */}
    <label className="channels" htmlFor="#">
      {" "}
      Find Channels
    </label>
    {/* 7th start */}
    <div className="row main-video-width d-flex mt-3">
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Group 18147 (1).png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Group 18147 (1).png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Group 18147 (1).png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Group 18147 (1).png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Group 18147 (1).png" width="200px" alt="" />
      </div>
      <div className="col-lg-3 video-width1 ">
        <img src="../images/Group 18147 (1).png" width="200px" alt="" />
      </div>
    </div>
    {/* 7th end */}
    <div className="btn-next text-center">
        <a href="/Videosearch">
        <button className="btn btn-primary">
        Continue to Next
      </button>
     </a>
      </div>
  </div>
</main>

        </>
    )
}

export default Visitorvideo;