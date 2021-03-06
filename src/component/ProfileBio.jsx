import React from "react";
import ProfileAsBuyer from "./ProfileAsBuyer";
import Produks from "./Produks";
import { Link } from "react-router-dom";

const ProfileBio = (props) => {
  return (
    <section className="container-fluid">
      {props.isLoadingProfile ? (
        <div className="d-flex justify-content-center">
          <div
            style={{ width: "200px", height: "200px", color: "gray" }}
            className="spinner-grow "
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div style={{ padding: "30px" }}>
          <h3 style={{ paddingBottom: "20px" }}>{props.profileData.name}</h3>
          <div className="row">
            <div className="col-lg-3">
              <img
                alt="pict"
                src={props.profileData.avatar}
                style={{ width: "250px", padding: "0 20px 20px 0" }}
              />
            </div>
            <div className=" col-lg-7">
              <h5>Profile</h5>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <th scope="row">Username</th>
                    <td>: {localStorage.getItem("username")}</td>
                  </tr>
                  <tr>
                    <th scope="row">Nama</th>
                    <td>: {props.profileData.name}</td>
                  </tr>
                  <tr>
                    <th scope="row">Alamat</th>
                    <td>: {props.profileData.alamat}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td>: {props.profileData.email}</td>
                  </tr>
                  <tr>
                    <th scope="row">Contact</th>
                    <td>: {props.profileData.no_hp}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            className="nav-item nav-link active"
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
            className="nav-item nav-link"
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
        className="tab-content"
        id="nav-tabContent"
        style={{ paddingTop: "20px" }}
      >
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <Link className="row ml-2" to="/addproduk">
            <div>
              <img
                alt="pict"
                src={require("../media/addproduk.png")}
                style={{ width: "30px" }}
              />
            </div>
            <p>Tambah produk</p>
          </Link>
          <div className="container-fluid">
            {props.isLoadingProduk ? (
              <div className="d-flex justify-content-center">
                <div
                  style={{ width: "200px", height: "200px", color: "gray" }}
                  className="spinner-grow "
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="row m-5">
                {props.produkUser.map((item) => (
                  <Produks
                    doingDelete={(produkId) => props.doDelete(produkId)}
                    {...props}
                    produkId={item.id}
                    user_id={item.user_id}
                    produkName={item.nama_produk}
                    gambar={item.gambar}
                    harga={item.harga}
                    stock={item.stock}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div
          className="tab-pane fade"
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
