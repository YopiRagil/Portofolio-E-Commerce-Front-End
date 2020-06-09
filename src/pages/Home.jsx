import React, { Component } from "react";
import Navbar from "../component/Navbar";
import Promo from "../component/HomePromo";
import Footer from "../component/Footer";
import Kategori from "../component/HomeKategori";
import Produks from "../component/Produks";
import { getProdukAll, InputSearchProduk } from "../store/actions/produkAction";
import { getProfileInformation } from "../store/actions/profileAction";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount = async () => {
    this.props.getProdukAll();
    this.props.getProfileInformation();
  };

  render() {
    console.log("masuk", this.props.produkData);
    return (
      <div className="homeBG">
        <Navbar
          {...this.props}
          {...this.props.profileData}
          keyword={this.props.search}
          doSearch={(event) => this.props.InputSearchProduk(event)}
        />
        <Promo {...this.props} />
        <hr />
        <Kategori {...this.props} />
        <hr />
        <h5 style={{ textAlign: "center" }}> Best Seller</h5>
        <div className="container-fluid">
          {this.props.isLoadingProduk ? (
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
              {this.props.produkData.map((item, key) => (
                <>
                  <Produks
                    {...this.props}
                    user_id={0}
                    produkName={item.nama_produk}
                    gambar={item.gambar}
                    harga={item.harga}
                    stock={item.stock}
                  />
                </>
              ))}
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    produkData: state.produk.produkData,
    profileData: state.userProfile.profileData,
    isLoadingProduk: state.produk.isLoading,
  };
};
const mapDispatchToProps = {
  getProdukAll,
  getProfileInformation,
  InputSearchProduk,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
