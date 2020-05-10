import React, { Component } from "react";
import Navbar from "../component/Navbar";
import Promo from "../component/HomePromo";
import Footer from "../component/Footer";
import Kategori from "../component/HomeKategori";
import BestSeller from "../component/HomeBestSeller";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Promo />
        <Kategori />
        <BestSeller />
        <Footer />
      </div>
    );
  }
}

export default Home;
