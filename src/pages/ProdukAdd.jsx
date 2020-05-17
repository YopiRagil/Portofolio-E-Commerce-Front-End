import React, { Component } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import FormProduk from "../component/FormProduk";
import { connect } from "react-redux";
import { addProduk, changeInputUser } from "../store/actions/produkAction";

class AddProduk extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormProduk {...this.props} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.register.isLogin,
  };
};

const mapDispatchToProps = {
  changeInput: (el) => changeInputUser(el),
  addProduk,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduk);
