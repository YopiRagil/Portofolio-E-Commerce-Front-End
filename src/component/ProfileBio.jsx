import React from "react";
import ProfileAsBuyer from "./ProfileAsBuyer";
import ProfileAsSeller from "./ProfileAsSeller";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ProfileBio = (props) => {
  return (
    <section className="container-fluid">
      <div style={{ padding: "30px" }}>
        <h3 style={{ paddingBottom: "20px" }}>{props.name}</h3>
        <div className="row">
          <div className="col-lg-3">
            <img
              src={require("../media/profil_picture_default.png")}
              style={{ width: "250px", padding: "0 20px 20px 0" }}
            />
          </div>
          <div class=" col-lg-7">
            <h5>Profile</h5>
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <th scope="row">Username</th>
                  <td>: {props.username}</td>
                </tr>
                <tr>
                  <th scope="row">Nama</th>
                  <td>: {props.name}</td>
                </tr>
                <tr>
                  <th scope="row">Alamat</th>
                  <td>: {props.alamat}</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>: {props.email}</td>
                </tr>
                <tr>
                  <th scope="row">Contact</th>
                  <td>: {props.no_hp}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            class="nav-item nav-link active"
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Barang dijual
          </a>
          <a
            class="nav-item nav-link"
            id="nav-profile-tab"
            data-toggle="tab"
            href="#nav-profile"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Barang Dibeli
          </a>
        </div>
      </nav>
      <div
        class="tab-content"
        id="nav-tabContent"
        style={{ paddingTop: "20px" }}
      >
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          {" "}
          <ProfileAsSeller />
        </div>
        <div
          class="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <ProfileAsBuyer />
        </div>
      </div>
    </section>
  );
};

export default ProfileBio;
