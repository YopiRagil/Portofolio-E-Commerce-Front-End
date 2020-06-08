import React from "react";

const Footer = (props) => {
  return (
    <footer className="shadow-lg p-1 mt-2 rounded">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 my-auto">
            <img
              alt="pict"
              src={require("../media/logo1.png")}
              style={{ width: "200px" }}
            />
          </div>

          <div className="col-lg-3">
            <h5 className="my-2">Menu :</h5>
            <div className="row">
              <div className="col-4">
                <p>DiscouNT</p>
                <p>Contact Us</p>
                <p>Best Seller</p>
              </div>
              <div className="col-4">
                <p>Category</p>
                <p>About Us</p>
                <p>Join Us</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <h5 className="my-2">Social Media:</h5>
            <div className="d-flex flex-row bd-highlight mb-3">
              <div className="bd-highlight mr-1">
                <img
                  alt="pict"
                  src={require("../media/fb.png")}
                  style={{ width: "50px" }}
                />
              </div>
              <div className="bd-highlight mr-1">
                <img
                  alt="pict"
                  src={require("../media/ig.png")}
                  style={{ width: "50px" }}
                />
              </div>
              <div className="bd-highlight mr-1">
                <img
                  alt="pict"
                  src={require("../media/twit.png")}
                  style={{ width: "50px" }}
                />
              </div>
              <div className="bd-highlight mr-">
                <img
                  alt="pict"
                  src={require("../media/link.png")}
                  style={{ width: "50px" }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <p className="my-5">©copy right 2020, Electronice</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
