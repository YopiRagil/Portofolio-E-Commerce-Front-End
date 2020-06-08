import React from "react";
import { Link } from "react-router-dom";

const Produks = (props) => {
  console.log("component produk");
  return (
    <div
      className="card cardBestSeller mb-2  col-lg-3"
      style={{ padding: "0" }}
    >
      <Link>
        <img
          className="card-img-top imgProduk"
          src={props.gambar}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title kategoriName">{props.produkName}</h5>
          <h6 className="kategoriName">Harga : {props.harga}</h6>
          <h6 className="kategoriName">Stock tersedia : {props.stock}</h6>
        </div>
      </Link>
    </div>
  );
};

export default Produks;
