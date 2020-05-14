import React from "react";

const BestSeller = (props) => {
  return (
    <div
      className="card cardBestSeller mb-2  col-lg-3"
      style={{ padding: "0" }}
    >
      <img
        className="card-img-top imgProduk"
        src={props.gambar}
        alt="Card image cap"
        style={{ width: "100%", height: "60%" }}
      />
      <div className="card-body">
        <h5 className="card-title kategoriName">{props.produkName}</h5>
        <h6 className="kategoriName">Harga : {props.harga}</h6>
        <h6 className="kategoriName">Stock tersedia : {props.stock}</h6>
      </div>
    </div>
  );
};

export default BestSeller;
