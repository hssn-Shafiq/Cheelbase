import React from "react";
import Header from "../../../Componenets/Header";
import '../Videosearch/Videosearch.css';

const Videosearch = () => {

    return (
        <>
        <Header/>
        <main className="max-width">
  <div className="container-fliud">
    <div className="row height d-flex  align-items-center pb-3  bg-color-below">
      <div className="col-lg-3  ms-4">
        <img src="assets/images/Group 3465342.png" alt="" />
      </div>
      <div className="col-lg-6">
        <div className="form">
          <i className="fa fa-search" />
          <input
            type="text"
            className="form-control form-input"
            placeholder="Search anything..."
          />
        </div>
      </div>
    </div>
    {/* inner Carousel */}
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner text-center">
        <div className="carousel-item active ">
          <button type="button" className="btn btn-lg btn-primary btn-space">
            Live
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            Music
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            UX/UI
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            User Interface design
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            Graphic design
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            User experience design
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            UI
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            Interaction design
          </button>
        </div>
        <div className="carousel-item  ">
          <button type="button" className="btn btn-lg btn-primary btn-space">
            Live
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            Music
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            UX/UI
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            User Interface design
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            Graphic design
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            User experience design
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            UI
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            Interaction design
          </button>
        </div>
        <div className="carousel-item ">
          <button type="button" className="btn btn-lg btn-primary btn-space">
            Live
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            Music
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            UX/UI
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            User Interface design
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            Graphic design
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            User experience design
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            UI
          </button>
          <button type="button" className="btn btn-lg btn-primary btn-space">
            Interaction design
          </button>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    {/* inner Carousel end */}
    {/* first line */}
    <div className="row main-video-width d-flex mt-3">
      <div className="col-lg-3 video-width ">
        <img src="../images/Group 18849.png" width="300px" alt="" />
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <a href="chating-page.html"></a>
        <div className="icon ">
          <a href="chating-page.html"></a>
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width">
        {" "}
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width">
        {" "}
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
    </div>
    {/* first line end*/}
    {/* 2nd line */}
    <div className="row main-video-width d-flex mt-3">
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
    </div>
    {/* 2nd line end  */}
    {/* 3rd line  */}
    <div className="row main-video-width d-flex mt-3">
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width ">
        <img src="../images/Group 18484 (1).png" width="300px" alt="" />
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
    </div>
    {/* 3rd line end */}
    {/* 4th line  */}
    <div className="row main-video-width d-flex mt-3">
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width ">
        <img src="../images/Group 18484 (1).png" width="300px" alt="" />
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
    </div>
    {/* 4th line end  */}
    {/* 5th line  */}
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
    {/* 5th line end  */}
    {/* 6th line  */}
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
    {/* 6th line end  */}
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
    {/* 8th start */}
    <div className="row main-video-width d-flex mt-3">
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width ">
        <img src="../images/Group 18484 (1).png" width="300px" alt="" />
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
    </div>
    {/* 8th end */}
    {/* 9th start */}
    <div className="row main-video-width d-flex mt-3">
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
      <div className="col-lg-3 video-width m-0 ">
        <iframe
          width={300}
          height={170}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
        <div className="icon ">
          <a className="under-line-bar" href="chating-page.html">
            <img src="../images/Ellipse 367.png" alt="" />
            <h6>
              This is my entire video for the next shouti ng of all time. hsnsn
              snsns sjss usus sjsjsjsjs skaoan sns ssj.....{" "}
            </h6>
            <label htmlFor="">Cheelbase</label>
            <p>709m view . 17 minutes ago</p>
          </a>
        </div>
      </div>
    </div>
    {/* 9th end  */}
    <div className="btn-next text-center">
        <a href="/Visitorchatting">
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

export default Videosearch;