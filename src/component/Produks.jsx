import React from "react";
import { Link } from "react-router-dom";

const Produks = (props) => {
  const deleteProduk = async (id) => {
    await props.doingDelete(id);
    await props.updateProduk();
  };
  return (
    <div
      className="card cardBestSeller mb-2 col-sm-6  col-lg-3"
      style={{ padding: "0" }}
    >
      <Link to="/produkdetail">
        <img className="card-img-top imgProduk" src={props.gambar} alt="img" />
        <div className="card-body">
          <h5 className="card-title kategoriName">{props.produkName}</h5>
          <h6 className="kategoriName">Harga : {props.harga}</h6>
          <h6 className="kategoriName">Stock tersedia : {props.stock}</h6>
        </div>
        {props.user_id === props.profileData.id ? (
          <div className="text-center">
            <button
              style={{ margin: "-10px 5px 10px 0" }}
              type="button"
              className="btn btn-primary"
            >
              Edit Barang
            </button>
            <button
              style={{ margin: "-10px 0 10px 0" }}
              type="button"
              className="btn btn-danger"
              value={props.produk_id}
              onClick={() => deleteProduk(props.produkId)}
            >
              Delete
            </button>
          </div>
        ) : (
          <div className="text-center">
            <button
              style={{ margin: "-10px 0 10px 0" }}
              type="button"
              className="btn btn-primary"
            >
              Masuk Keranjang
            </button>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Produks;
