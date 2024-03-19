import React from "react";
import Header from "../../../Componenets/Header";
import '../Gallerypage/Gallerypage.css';

const Gallerypage = () => {

    return (
        <>
        <Header/>
        <main>
  <div className="container-fluid">
    <div className="row offset-3">
      <div className="col-lg-4 Marina-text d-flex justify-content-center">
        <img src="../images/Vector.png" alt="" />
        <h6>
          <b>Marina ojokplo </b>
        </h6>
      </div>
    </div>
    <div className="row offset-3">
      <div className="col-lg-6 second-img-top justify-content-start d-flex mt-3">
        <img src="../images/Ellipse 2.png" alt="" />
        <div className="text-below-img">
          <b className="fs-4">
            <h5>Camila</h5>
          </b>
          <p className="d-flex justify-content-center">Mexico City, Mexico</p>
        </div>
        <div className="side-img-icon">
          <img src="../images/more (1).png" alt="" />
        </div>
      </div>
      <div className="below-nav-img">
        <img
          className="first-img"
          src="../images/Rectangle 19.png"
          alt=""
        />
        <div className="img-tool">
          <div>
            <img
              className="heart"
              src="../images/Icon-heart .png"
              alt=""
            />
            <span>5,4k</span>
            <img
              className="heart1"
              src="../images/Icon-comment.png "
              alt=""
            />
            <span>165</span>
            <img
              className="heart2"
              src="../images/Icon-communication.png"
              alt=""
            />
          </div>
          <div className="bookmark">
            <img
              className="bookmark-img"
              src="../images/Group 7098.png"
              alt=""
            />
            <img
              className="bookmark-img1"
              src="../images/Bookmark.png"
              alt=""
            />
          </div>
        </div>
        <div className="row d-flex">
          <div className="img-side3">
            <img
              className="img-side3-short1"
              src="../images/Ellipse 6.png"
              alt=""
            />
            <img
              className="img-side3-short2"
              src="../images/Ellipse 7.png"
              alt=""
            />
            <img
              className="img-side3-short3"
              src="../images/Ellipse 8.png"
              alt=""
            />
          </div>
          <div className="img-side-text mt-4">
            <span>Aaron, Hank Adams, John, William...</span>
            <button type="submit">MORE</button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row icon-start-side-width">
            <div className="icon-start-side d-flex">
              <div className="side-first-icon">
                <img src="../images/Ellipse 346.png" alt="" />
              </div>
              <div className="side-text-icon">
                <span>Cheelbase</span>
              </div>
              <div className="side-second-icon">
                <img src="../images/Group 18482.png" alt="" />
                <img src="../images/Group 18481.png" alt="" />
              </div>
              <div className="side-third-icon">
                <span>@cheelbas......</span>
              </div>
              <div className="side-fourth-icon">
                <span>Ad</span>
              </div>
            </div>
            <div className="row mt-2">
              <span style={{ fontSize: 10, textAlign: "center" }}>
                Nice bagggggg for breakfast , lanuckkkkk anrd mornjddhhd eats
                forever testlfig hfhfh click on the link below to downlaod #dad
              </span>
            </div>
            <div className="fifth-img-below-bugger mt-2">
              <img
                className="ms-1"
                src="../images/Rectangle 5028.png"
                width="100%"
                height="247px"
                alt=""
              />
            </div>
            <div className="row ms-2 mt-2">
              <div className="col-lg-1">
                <img src="../images/thumbs-up.png" alt="" />
              </div>
              <div className="col-lg-2">
                <img src="../images/heart.png" alt="" />
              </div>
              <div className="col-lg-2">
                <span style={{ fontSize: 10 }}>541</span>
              </div>
              <div className="col-lg-3">
                <span style={{ fontSize: 10 }}>87 Shares</span>
              </div>
              <div className="col-lg-3">
                <span style={{ fontSize: 10 }}>shop now</span>
              </div>
            </div>
          </div>
        </div>
        <img
          className="first-img mt-4"
          src="../images/Rectangle 19.png"
          alt=""
        />
        <div className="img-tool">
          <div>
            <img
              className="heart"
              src="../images/Icon-heart .png"
              alt=""
            />
            <span>5,4k</span>
            <img
              className="heart1"
              src="../images/Icon-comment.png "
              alt=""
            />
            <span>165</span>
            <img
              className="heart2"
              src="../images/Icon-communication.png"
              alt=""
            />
          </div>
          <div className="bookmark">
            <img
              className="bookmark-img"
              src="../images/Group 7098.png"
              alt=""
            />
            <img
              className="bookmark-img1"
              src="../images/Bookmark.png"
              alt=""
            />
          </div>
        </div>
        <div className="row d-flex">
          <div className="img-side3">
            <img
              className="img-side3-short1"
              src="../images/Ellipse 6.png"
              alt=""
            />
            <img
              className="img-side3-short2"
              src="../images/Ellipse 7.png"
              alt=""
            />
            <img
              className="img-side3-short3"
              src="../images/Ellipse 8.png"
              alt=""
            />
          </div>
          <div className="img-side-text mt-4">
            <span>Aaron, Hank Adams, John, William...</span>
            <button type="submit">MORE</button>
          </div>
        </div>
        <iframe
          className="mt-4"
          width={483}
          height={200}
          src="https://www.youtube.com/embed/8vo7yMTFOqA?si=pGgmHjRGU4dwjQtY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
      </div>
    </div>
    <div className="btn-next text-center">
        <a href="/Restaurantpage">
        <button className="btn btn-primary">
        Continue to Next
      </button>
     </a>
      </div>
  </div>
</main>

        </>
    );
}

export default Gallerypage;