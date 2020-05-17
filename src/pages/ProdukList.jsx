import React, { Component } from "react";
import Navbar from "../component/Navbar";
import Produks from "../component/Produks";
import Footer from "../component/Footer";
import { connect } from "react-redux";
import { getCategoryProduks } from "../store/actions/produkAction";

class ProdukList extends Component {
  componentDidMount = async () => {
    const categoryID = await this.props.match.params.category;
    this.props.getCategoryProduks(categoryID);
  };

  handleRequestCategory = async (categoryProduks) => {
    await this.props.history.replace("produk/" + categoryProduks);
    this.props.getCategoryProduks(categoryProduks);
  };
  render() {
    const categoryKeyWord = this.props.produkData[0];
    console.log("cek prod list", this.props.produkData);
    return (
      <div>
        {console.log("produk list", this.props.produkData)};
        <Navbar
          {...this.props}
          inputCategory={(categoryProduks) =>
            this.handleRequestCategory(categoryProduks)
          }
        />
        <div
          className="d-flex justify-content-center"
          style={{ paddingTop: "50px" }}
        >
          <div className="card" style={{ width: "90%", padding: "30px" }}>
            <h3>Find : {this.props.tipeName}</h3>
            <hr />
            <div className="container-fluid">
              <div className="row m-5">
                {this.props.produkData.map((item, key) => (
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
    isLoading: state.produk.isLoading,
    tipeName: state.produk.tipeName,
  };
};
const mapDispatchToProps = {
  getCategoryProduks,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProdukList);
