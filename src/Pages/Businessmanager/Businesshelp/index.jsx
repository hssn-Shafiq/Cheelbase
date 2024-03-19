import React from "react";
import Header from "../../../Componenets/Header";
import '../Businesshelp/Businesshelp.css';
import '../Businesshelp/Businesssidebar.css';
const Businesshelp = () => {

    return (
        <>
        <Header/>
        <div className="container-fluid">
  <div className="row g-0">
    <div className="mt-1 business-sidebar">
      {/* Sidebar */}
      <div className="help">
        <p className="btn">Help</p>
      </div>
      <div className="help-center  d-flex ">
        <img
          src="../images/icons/not_listed_location.png"
          className="img-location ms-3 mt-1 "
          alt=""
        />
        <div className="center ms-1 ">
          <h5 className="btn helpp-centerr">Help center</h5>
          <p className=" support ms-2">Get Support, Contact us</p>
        </div>
      </div>
      <div className="help-info ms-4 mt-3">
        <div className="terms  d-flex">
          <img
            src="../images/icons/news.png"
            className="img-news mt-1"
            alt=""
          />
          <p className="btn term ms-2">Terms</p>
        </div>
        <div className="policies d-flex">
          <img
            src="../images/icons/notes.png"
            className="img-news mt-1"
            alt=""
          />
          <p className="btn ploicy ms-2">Policies</p>
        </div>
        <div className="app-info d-flex">
          <img
            src="../images/icons/dishwasher_gen.png"
            className="img-news mt-1"
            alt=""
          />
          <p className="btn info ms-2">App info</p>
        </div>
      </div>
      {/* sidebar ends */}
    </div>
    {/* sidebar column ends */}
    <div className="chat-content">
      <div className="chat-with d-flex justify-content-between  align-items-center">
        <button className="btn chat ">Chat with us</button>
        <button className=" btn ticket d-flex  justify-content-end">
          Submit Ticket
        </button>
      </div>
      <div className="search-blog d-flex justify-content-center">
        <input
          type="search"
          className="searchh "
          placeholder="search from our latest blogs"
        />
        <img
          src="../images/icons/Ellipse 1.png"
          className="img-ellipse "
          alt=""
        />
      </div>
      <div className="cards mt-3 d-flex">
        <div className="card" style={{ width: "31rem" }}>
          <img
            src="../images/Rectangle 5003.png"
            className="card-img-top "
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">@Cheelbase</h5>
            <p className="card-text">
              ontrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of c dhdhdhd ddjdjdjd diddid aodiddd
              dkdodidmas xjdjdjdjd djddjwfjasas scjashasuihasuhas scascuashcasuc
              csasus sxjschaschascascjascashasjcjxnxc scbasjasjasschsacbasicasj
              sjjascjas ye...........
            </p>
            <div className="icons d-flex justify-content-start align-items-center">
              <div className="d-flex chat ">
                <img
                  src="../images/icons/chat_bubble.png"
                  className="img-icon mt-1 "
                  alt=""
                />
                <p className="ms-1">77</p>
              </div>
              <div className="d-flex heart ms-5">
                <img
                  src="../images/icons/favorite.png"
                  className="img-icon mt-1 "
                  alt=""
                />
                <p className="ms-1">7K</p>
              </div>
              <div className="d-flex share ms-5">
                <img
                  src="../images/icons/share.png"
                  className="img-icon mt-1 ms-1"
                  alt=""
                />
                <p className="ms-1">56K</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card ms-3" style={{ width: "31rem" }}>
          <img
            src="../images/Rectangle 5003.png"
            className="card-img-top "
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">@Cheelbase</h5>
            <p className="card-text">
              ontrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of c dhdhdhd ddjdjdjd diddid aodiddd
              dkdodidmas xjdjdjdjd djddjwfjasas scjashasuihasuhas scascuashcasuc
              csasus sxjschaschascascjascashasjcjxnxc scbasjasjasschsacbasicasj
              sjjascjas ye...........
            </p>
            <div className="icons d-flex justify-content-start align-items-center">
              <div className="d-flex chat ">
                <img
                  src="../images/icons/chat_bubble.png"
                  className="img-icon mt-1 "
                  alt=""
                />
                <p className="ms-1">77</p>
              </div>
              <div className="d-flex heart ms-5">
                <img
                  src="../images/icons/favorite.png"
                  className="img-icon mt-1 "
                  alt=""
                />
                <p className="ms-1">7K</p>
              </div>
              <div className="d-flex share ms-5">
                <img
                  src="../images/icons/share.png"
                  className="img-icon mt-1 ms-1"
                  alt=""
                />
                <p className="ms-1">56K</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card ms-3" style={{ width: "31rem" }}>
          <img
            src="../images/Rectangle 5003.png"
            className="card-img-top "
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">@Cheelbase</h5>
            <p className="card-text">
              ontrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of c dhdhdhd ddjdjdjd diddid aodiddd
              dkdodidmas xjdjdjdjd djddjwfjasas scjashasuihasuhas scascuashcasuc
              csasus sxjschaschascascjascashasjcjxnxc scbasjasjasschsacbasicasj
              sjjascjas ye...........
            </p>
            <div className="icons d-flex justify-content-start align-items-center">
              <div className="d-flex chat ">
                <img
                  src="../images/icons/chat_bubble.png"
                  className="img-icon mt-1 "
                  alt=""
                />
                <p className="ms-1">77</p>
              </div>
              <div className="d-flex heart ms-5">
                <img
                  src="../images/icons/favorite.png"
                  className="img-icon mt-1 "
                  alt=""
                />
                <p className="ms-1">7K</p>
              </div>
              <div className="d-flex share ms-5">
                <img
                  src="../images/icons/share.png"
                  className="img-icon mt-1 ms-1"
                  alt=""
                />
                <p className="ms-1">56K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards mt-3 d-flex">
        <div className="card" style={{ width: "31rem" }}>
          <img
            src="../images/Rectangle 5003.png"
            className="card-img-top "
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">@Cheelbase</h5>
            <p className="card-text">
              ontrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of c dhdhdhd ddjdjdjd diddid aodiddd
              dkdodidmas xjdjdjdjd djddjwfjasas scjashasuihasuhas scascuashcasuc
              csasus sxjschaschascascjascashasjcjxnxc scbasjasjasschsacbasicasj
              sjjascjas ye...........
            </p>
            <div className="icons d-flex justify-content-start align-items-center">
              <div className="d-flex chat ">
                <img
                  src="../images/icons/chat_bubble.png"
                  className="img-icon mt-1 "
                  alt=""
                />
                <p className="ms-1">77</p>
              </div>
              <div className="d-flex heart ms-5">
                <img
                  src="../images/icons/favorite.png"
                  className="img-icon mt-1 "
                  alt=""
                />
                <p className="ms-1">7K</p>
              </div>
              <div className="d-flex share ms-5">
                <img
                  src="../images/icons/share.png"
                  className="img-icon mt-1 ms-1"
                  alt=""
                />
                <p className="ms-1">56K</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card ms-3" style={{ width: "31rem" }}>
          <img
            src="../images/Rectangle 5003.png"
            className="card-img-top "
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">@Cheelbase</h5>
            <p className="card-text">
              ontrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of c dhdhdhd ddjdjdjd diddid aodiddd
              dkdodidmas xjdjdjdjd djddjwfjasas scjashasuihasuhas scascuashcasuc
              csasus sxjschaschascascjascashasjcjxnxc scbasjasjasschsacbasicasj
              sjjascjas ye...........
            </p>
            <div className="icons d-flex justify-content-start align-items-center">
              <div className="d-flex chat ">
                <img
                  src="../images/icons/chat_bubble.png"
                  className="img-icon mt-1 "
                  alt=""
                />
                <p className="ms-1">77</p>
              </div>
              <div className="d-flex heart ms-5">
                <img
                  src="../images/icons/favorite.png"
                  className="img-icon mt-1 "
                  alt=""
                />
                <p className="ms-1">7K</p>
              </div>
              <div className="d-flex share ms-5">
                <img
                  src="../images/icons/share.png"
                  className="img-icon mt-1 ms-1"
                  alt=""
                />
                <p className="ms-1">56K</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card ms-3" style={{ width: "31rem" }}>
          <img
            src="../images/Rectangle 5003.png"
            className="card-img-top "
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">@Cheelbase</h5>
            <p className="card-text">
              ontrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of c dhdhdhd ddjdjdjd diddid aodiddd
              dkdodidmas xjdjdjdjd djddjwfjasas scjashasuihasuhas scascuashcasuc
              csasus sxjschaschascascjascashasjcjxnxc scbasjasjasschsacbasicasj
              sjjascjas ye...........
            </p>
            <div className="icons d-flex justify-content-start align-items-center">
              <div className="d-flex chat ">
                <img
                  src="../images/icons/chat_bubble.png"
                  className="img-icon mt-1 "
                  alt=""
                />
                <p className="ms-1">77</p>
              </div>
              <div className="d-flex heart ms-5">
                <img
                  src="../images/icons/favorite.png"
                  className="img-icon mt-1 "
                  alt=""
                />
                <p className="ms-1">7K</p>
              </div>
              <div className="d-flex share ms-5">
                <img
                  src="../images/icons/share.png"
                  className="img-icon mt-1 ms-1"
                  alt=""
                />
                <p className="ms-1">56K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-continue text-center">
        <a
          href="/Supportchat"
          className="text-light"
        >
          <button className="btn btn-primary ">Continue</button>
        </a>
      </div>
    </div>
  </div>
</div>

        </>
    );
}

export default Businesshelp;