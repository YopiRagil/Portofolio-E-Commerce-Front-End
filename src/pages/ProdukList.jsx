import React, { Component } from "react";
import Navbar from "../component/Navbar";
import ListOfProduk from "../component/ListOfProduk";
import Footer from "../component/Footer";
import { connect } from "react-redux";

class ProdukList extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div
          className="d-flex justify-content-center"
          style={{ paddingTop: "50px" }}
        >
          <div className="card" style={{ width: "90%", padding: "30px" }}>
            <h3>Kategori/Search</h3>
            <hr />
            <ListOfProduk />
            <ListOfProduk />
            <ListOfProduk />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProdukList;
