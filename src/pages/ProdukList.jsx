import React, { Component } from "react";
import Navbar from "../component/Navbar";
import Produks from "../component/Produks";
import Footer from "../component/Footer";
import { connect } from "react-redux";
import {
  getCategoryProduks,
  InputSearchProduk,
} from "../store/actions/produkAction";
import { getProfileInformation } from "../store/actions/profileAction";
class ProdukList extends Component {
  componentDidMount = async () => {
    const categoryID = await this.props.match.params.category;
    this.props.getCategoryProduks(categoryID);
    this.props.getProfileInformation();
  };

  handleRequestCategory = async (categoryProduks) => {
    await this.props.history.replace("produk/" + categoryProduks);
    this.props.getCategoryProduks(categoryProduks);
  };
  render() {
    return (
      <div>
        {console.log("produk list", this.props.produkData)};
        <Navbar
          {...this.props}
          {...this.props.profileData}
          inputCategory={(categoryProduks) =>
            this.handleRequestCategory(categoryProduks)
          }
          keyword={this.props.search}
          doSearch={(event) => this.props.InputSearchProduk(event)}
        />
        <div
          className="d-flex justify-content-center"
          style={{ paddingTop: "50px" }}
        >
          <div className="card" style={{ width: "90%", padding: "30px" }}>
            <h3>{this.props.tipeName}</h3>
            <hr />
            <div className="container-fluid">
              <div className="row m-5">
                {this.props.produkData.map((item) => (
                  <>
                    <Produks
                      produkName={item.nama_produk}
                      gambar={item.gambar}
                      harga={item.harga}
                      stock={item.stock}
                    />
                  </>
                ))}
              </div>
            </div>
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
    profileData: state.userProfile.profileData,
    isLoading: state.produk.isLoading,
    tipeName: state.produk.tipeName,
  };
};
const mapDispatchToProps = {
  getCategoryProduks,
  getProfileInformation,
  InputSearchProduk,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProdukList);
