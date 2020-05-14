import React, { Component } from "react";
import Navbar from "../component/Navbar";
import Promo from "../component/HomePromo";
import Footer from "../component/Footer";
import Kategori from "../component/HomeKategori";
import BestSeller from "../component/HomeBestSeller";
import { getProdukAll } from "../store/actions/produkAction";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount = async () => {
    this.props.getProdukAll();
  };

  render() {
    console.log("masuk", this.props.produkData);
    return (
      <div className="homeBG">
        <Navbar />
        <Promo />
        <hr />
        <Kategori />
        <hr />
        <h5 style={{ textAlign: "center" }}> Best Seller</h5>
        <div className="container-fluid">
          <div className="row m-5">
            {this.props.produkData.map((item, key) => (
              <>
                <BestSeller
                  produkName={item.nama_produk}
                  gambar={item.gambar}
                  harga={item.harga}
                  stock={item.stock}
                />
              </>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    produkData: state.produk.produkData,
    isLoading: state.produk.isLoading,
  };
};
const mapDispatchToProps = {
  getProdukAll,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
