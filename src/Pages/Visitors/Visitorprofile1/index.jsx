import React, { useState, useEffect } from "react";
import { db } from "../../../firebase/Config";
import { collection, getDocs } from "@firebase/firestore";
import Header from "../../../Componenets/Header";
import "../Visitorprofile1/Visitorprofile.css";

const Visitorprofile1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoMetadataCollectionRef = collection(db, "visitorcheels");
        const querySnapshot = await getDocs(videoMetadataCollectionRef);

        const fetchedData = [];

        querySnapshot.forEach((doc) => {
          fetchedData.push({ id: doc.id, ...doc.data() });
        });

        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Header />
      <main className="max-width">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm height-main">
              <div className="vist-img">
                <div className="visit-img-position">
                  <img
                    src="../images/icons/add_circle (1).png"
                    className="img-circle "
                    id="customButton"
                    onclick="document.getElementById('input-file').click()"
                    alt=""
                  />

                  <input type="file" id="input-file" className="" />
                </div>

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
          </div>
          <div className="row width-row my-5">
            <div className="col-lg-2 icons-links amp-stories ms-4">
              <a
                href="visitors-profile-cheels.html"
                className="d-flex flex-column align-items-center"
              >
                <img
                  className="img-width"
                  src="../images/amp_stories1.png"
                  alt=""
                />
                <label className="mt-2 text-light" htmlFor="#">
                  <b>Cheels</b>
                </label>
              </a>
            </div>
            <div className="col-lg-2 icons-links">
              <a
                href="visitor-video.html"
                className="d-flex flex-column align-items-center"
              >
                <img className="img-width" src="../images/movie.png" alt="" />
                <label className="mt-2" htmlFor="#">
                  <b>Videos</b>
                </label>
              </a>
            </div>
            <div className="col-lg-2 icons-links">
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
            <div className="col-lg-2 icons-links">
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
            <div className="col-lg-2 icons-links">
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
            <div className="col-lg-2 icons-links">
              <a
                href="property.html"
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
          <div className="row mt-5 d-flex">
            <div className="col-6 d-flex">
              <img
                className="left-img"
                src="../images/Rectangle 16.png"
                alt=""
              />
            </div>
            <div className="col-lg-6 d-flex">
              <img
                className="right-img"
                src="../images/Group 18484 (1).png"
                alt=""
              />
            </div>
          </div>
          <div className="container mt-3">
            <div className="input-group search-icon-bottom">
              <button
                className="btn btn-outline-secondary btn-icon-search"
                type="button"
                id="search-icon"
              >
                <i className="fas fa-search" />
              </button>
              <input
                type="text"
                className="form-control btn-icon-search1"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="search-icon"
              />
            </div>
          </div>
          <div className="row p-5 d-flex align-items-center">
          {data.map((item) => (
            <div className="col-md-3" key={item.id}>
              <div className="card border-0" style={{height:"400px"}}>
                <img className="card-img-top object-fit-auto w-100" height={220} src={item.imageURL} alt="Title" />
                <div className="card-body ps-2">
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>

        <div className="btn-next text-center">
          <a href="/Cheelbasesingle">
            <button className="btn btn-primary">Continue to Next</button>
          </a>
        </div>
      </main>
    </>
  );
};

export default Visitorprofile1;
