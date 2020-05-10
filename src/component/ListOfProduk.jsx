import React from "react";
import OneProduk from "./OneProduk";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ListOfProduk = (props) => {
  return (
    <section style={{ padding: "20px 0 20px 0" }}>
      <div className="card-deck" style={{ paddingBottom: "20px" }}>
        <OneProduk />
        <OneProduk />
        <OneProduk />
        <OneProduk />
      </div>
    </section>
  );
};

export default ListOfProduk;
