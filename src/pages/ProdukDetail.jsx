import React, { Component } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { connect } from "react-redux";
import { InputSearchProduk } from "../store/actions/produkAction";
import { getProfileInformation } from "../store/actions/profileAction";

class ProdukDetail extends Component {
  componentDidMount = async () => {
    this.props.getProfileInformation();
  };

  render() {
    return (
      <div>
        <Navbar
          {...this.props}
          {...this.props.profileData}
          keyword={this.props.search}
          doSearch={(event) => this.props.InputSearchProduk(event)}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    produkData: state.produk.produkData,
    profileData: state.userProfile.profileData,
    tipeName: state.produk.tipeName,
    isLoadingProduk: state.produk.isLoading,
  };
};
const mapDispatchToProps = {
  getProfileInformation,
  InputSearchProduk,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProdukDetail);
