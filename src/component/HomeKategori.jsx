import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Kategori = (props) => {
  return (
    <section>
      <div
        className="d-flex justify-content-center"
        style={{ paddingTop: "", marginBottom: "" }}
      >
        <div
          className="card bgKategori"
          style={{ width: "90%", padding: "20px 30px 0 20px" }}
        >
          <h5> Kategori</h5>
          <div className="card-deck" style={{ marginBottom: "" }}>
            <div
              className="card kategoriTool"
              style={{ marginBottom: "100px" }}
            >
              <img
                className="card-img-top"
                src={require("../media/hp.jpg")}
                alt="Card image cap"
                style={{ width: "100%", height: "50%" }}
              />
              <div className="card-body">
                <p className="card-title kategoriName">Mobile Phone</p>
              </div>
            </div>
            <div
              className="card kategoriTool"
              style={{ marginBottom: "100px" }}
            >
              <img
                className="card-img-top"
                src={require("../media/laptop.jpg")}
                alt="Card image cap"
                style={{ width: "100%", height: "50%" }}
              />
              <div className="card-body">
                <p className="card-title kategoriName">Laptop</p>
              </div>
            </div>
            <div
              className="card kategoriTool"
              style={{ marginBottom: "100px" }}
            >
              <img
                className="card-img-top"
                src={require("../media/speaker.jpg")}
                alt="Card image cap"
                style={{ width: "100%", height: "50%" }}
              />
              <div className="card-body">
                <p className="card-title kategoriName">Speaker</p>
              </div>
            </div>
            <div
              className="card kategoriTool"
              style={{ marginBottom: "100px" }}
            >
              <img
                className="card-img-top"
                src={require("../media/tv.jpg")}
                alt="Card image cap"
                style={{ width: "100%", height: "50%" }}
              />
              <div className="card-body">
                <p className="card-title kategoriName">TV</p>
              </div>
            </div>
            <div
              className="card kategoriTool"
              style={{ marginBottom: "100px" }}
            >
              <img
                className="card-img-top"
                src={require("../media/logo.png")}
                alt="Card image cap"
                style={{ width: "100%", height: "50%" }}
              />
              <div className="card-body">
                <p className="card-title kategoriName">Accessories</p>
              </div>
            </div>
            <div
              className="card kategoriTool"
              style={{ marginBottom: "100px" }}
            >
              <img
                className="card-img-top"
                src={require("../media/logo.png")}
                alt="Card image cap"
                style={{ width: "100%", height: "50%" }}
              />
              <div className="card-body">
                <p className="card-title kategoriName">Vapour</p>
              </div>
            </div>
          </div>
          <div className="card-deck">
            <div
              className="card kategoriTool"
              style={{ marginBottom: "100px" }}
            >
              <img
                className="card-img-top"
                src={require("../media/hp.jpg")}
                alt="Card image cap"
                style={{ width: "100%", height: "50%" }}
              />
              <div className="card-body">
                <p className="card-title kategoriName">Games</p>
              </div>
            </div>
            <div
              className="card kategoriTool"
              style={{ marginBottom: "100px" }}
            >
              <img
                className="card-img-top"
                src={require("../media/laptop.jpg")}
                alt="Card image cap"
                style={{ width: "100%", height: "50%" }}
              />
              <div className="card-body">
                <p className="card-title kategoriName">Kipas/AC</p>
              </div>
            </div>
            <div
              className="card kategoriTool"
              style={{ marginBottom: "100px" }}
            >
              <img
                className="card-img-top"
                src={require("../media/speaker.jpg")}
                alt="Card image cap"
                style={{ width: "100%", height: "50%" }}
              />
              <div className="card-body">
                <p className="card-title kategoriName">Elektronik Dapur</p>
              </div>
            </div>
            <div
              className="card kategoriTool"
              style={{ marginBottom: "100px" }}
            >
              <img
                className="card-img-top"
                src={require("../media/tv.jpg")}
                alt="Card image cap"
                style={{ width: "100%", height: "50%" }}
              />
              <div className="card-body">
                <p className="card-title kategoriName">Lampu</p>
              </div>
            </div>
            <div
              className="card kategoriTool"
              style={{ marginBottom: "100px" }}
            >
              <img
                className="card-img-top"
                src={require("../media/logo.png")}
                alt="Card image cap"
                style={{ width: "100%", height: "50%" }}
              />
              <div className="card-body">
                <p className="card-title kategoriName">Tools</p>
              </div>
            </div>
            <div
              className="card kategoriTool"
              style={{ marginBottom: "100px" }}
            >
              <img
                className="card-img-top"
                src={require("../media/logo.png")}
                alt="Card image cap"
                style={{ width: "100%", height: "50%" }}
              />
              <div className="card-body">
                <p className="card-title kategoriName">Lainnya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Kategori;
