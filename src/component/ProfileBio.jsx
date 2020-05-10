import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ProfileBio = (props) => {
  return (
    <section className="container-fluid">
      <div style={{ padding: "30px" }}>
        <h3 style={{ paddingBottom: "20px" }}>Nama User</h3>
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
                  <td>: Yopi</td>
                </tr>
                <tr>
                  <th scope="row">Nama</th>
                  <td>: Yopi Ragil</td>
                </tr>
                <tr>
                  <th scope="row">Alamat</th>
                  <td>: Jombang</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>: yopi@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">Contact</th>
                  <td>: 0808080808</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileBio;
