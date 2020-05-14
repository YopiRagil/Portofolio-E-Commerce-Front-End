import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ProfileAsBuyer = (props) => {
  return (
    <section>
      <h3>Barang Dibeli</h3>
      <div style={{ padding: "20px" }}>
        <div className="card-deck" style={{ paddingBottom: "30px" }}>
          <div className="card cardBestSeller">
            <img
              className="card-img-top"
              src={require("../media/hp.jpg")}
              alt="Card image cap"
              style={{ width: "100%", height: "60%" }}
            />
            <div className="card-body">
              <p className="card-title kategoriName">Mobile Phone</p>
            </div>
          </div>
          <div className="card cardBestSeller">
            <img
              className="card-img-top"
              src={require("../media/hp.jpg")}
              alt="Card image cap"
              style={{ width: "100%", height: "60%" }}
            />
            <div className="card-body">
              <p className="card-title kategoriName">Mobile Phone</p>
            </div>
          </div>
          <div className="card cardBestSeller">
            <img
              className="card-img-top"
              src={require("../media/laptop.jpg")}
              alt="Card image cap"
              style={{ width: "100%", height: "60%" }}
            />
            <div className="card-body">
              <p className="card-title kategoriName">Laptop</p>
            </div>
          </div>
          <div className="card cardBestSeller">
            <img
              className="card-img-top"
              src={require("../media/speaker.jpg")}
              alt="Card image cap"
              style={{ width: "100%", height: "60%" }}
            />
            <div className="card-body">
              <p className="card-title kategoriName">Speaker</p>
            </div>
          </div>
          <div className="card cardBestSeller">
            <img
              className="card-img-top"
              src={require("../media/logo.png")}
              alt="Card image cap"
              style={{ width: "100%", height: "60%" }}
            />
            <div className="card-body">
              <p className="card-title kategoriName">Vapour</p>
            </div>
          </div>
        </div>
        <div className="card-deck">
          <div className="card cardBestSeller">
            <img
              className="card-img-top"
              src={require("../media/hp.jpg")}
              alt="Card image cap"
              style={{ width: "100%", height: "60%" }}
            />
            <div className="card-body">
              <p className="card-title kategoriName">Games</p>
            </div>
          </div>
          <div className="card cardBestSeller">
            <img
              className="card-img-top"
              src={require("../media/hp.jpg")}
              alt="Card image cap"
              style={{ width: "100%", height: "60%" }}
            />
            <div className="card-body">
              <p className="card-title kategoriName">Mobile Phone</p>
            </div>
          </div>
          <div className="card cardBestSeller">
            <img
              className="card-img-top"
              src={require("../media/laptop.jpg")}
              alt="Card image cap"
              style={{ width: "100%", height: "60%" }}
            />
            <div className="card-body">
              <p className="card-title kategoriName">Kipas/AC</p>
            </div>
          </div>
          <div className="card cardBestSeller">
            <img
              className="card-img-top"
              src={require("../media/speaker.jpg")}
              alt="Card image cap"
              style={{ width: "100%", height: "60%" }}
            />
            <div className="card-body">
              <p className="card-title kategoriName">Elektronik Dapur</p>
            </div>
          </div>
          <div className="card cardBestSeller">
            <img
              className="card-img-top"
              src={require("../media/tv.jpg")}
              alt="Card image cap"
              style={{ width: "100%", height: "60%" }}
            />
            <div className="card-body">
              <p className="card-title kategoriName">Lampu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileAsBuyer;
