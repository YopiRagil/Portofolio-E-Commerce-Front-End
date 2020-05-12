import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const BestSeller = (props) => {
  return (
    <section style={{ padding: "20px 0 20px 0" }}>
      <h5 style={{ textAlign: "center" }}> Best Seller</h5>
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
              <h5 className="card-title kategoriName">Samsung S11</h5>
              <h6 className="kategoriName">Harga : 2600000</h6>
              <h6 className="kategoriName">Stock tersedia : 20 barang</h6>
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
              <h5 className="card-title kategoriName">Samsung S11</h5>
              <h6 className="kategoriName">Harga : 2600000</h6>
              <h6 className="kategoriName">Stock tersedia : 20 barang</h6>
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
              <h5 className="card-title kategoriName">Samsung S11</h5>
              <h6 className="kategoriName">Harga : 2600000</h6>
              <h6 className="kategoriName">Stock tersedia : 20 barang</h6>
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
              <h5 className="card-title kategoriName">Samsung S11</h5>
              <h6 className="kategoriName">Harga : 2600000</h6>
              <h6 className="kategoriName">Stock tersedia : 20 barang</h6>{" "}
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
              <h5 className="card-title kategoriName">Samsung S11</h5>
              <h6 className="kategoriName">Harga : 2600000</h6>
              <h6 className="kategoriName">Stock tersedia : 20 barang</h6>{" "}
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
              <h5 className="card-title kategoriName">Samsung S11</h5>
              <h6 className="kategoriName">Harga : 2600000</h6>
              <h6 className="kategoriName">Stock tersedia : 20 barang</h6>{" "}
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
              <h5 className="card-title kategoriName">Samsung S11</h5>
              <h6 className="kategoriName">Harga : 2600000</h6>
              <h6 className="kategoriName">Stock tersedia : 20 barang</h6>{" "}
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
              <h5 className="card-title kategoriName">Samsung S11</h5>
              <h6 className="kategoriName">Harga : 2600000</h6>
              <h6 className="kategoriName">Stock tersedia : 20 barang</h6>{" "}
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
              <h5 className="card-title kategoriName">Samsung S11</h5>
              <h6 className="kategoriName">Harga : 2600000</h6>
              <h6 className="kategoriName">Stock tersedia : 20 barang</h6>{" "}
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
              <h5 className="card-title kategoriName">Samsung S11</h5>
              <h6 className="kategoriName">Harga : 2600000</h6>
              <h6 className="kategoriName">Stock tersedia : 20 barang</h6>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
