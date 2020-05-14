import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ListOfProduk = (props) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={require("../media/hp.jpg")}
        alt="Card image cap"
        style={{ width: "100%" }}
      />
      <div className="card-body">
        <h4 className="card-title kategoriName">Nama Produk</h4>
        <p>Harga : 10000000</p>
        <p>Stok : 20</p>
        <p>Penjual : Yopi</p>
      </div>
    </div>
  );
};

export default ListOfProduk;
