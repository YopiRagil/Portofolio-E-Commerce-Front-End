import React, { Component } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import FormProduk from "../component/FormProduk";
import { connect } from "react-redux";
import { addProduk, changeInputUser } from "../store/actions/produkAction";
import { getProfileInformation } from "../store/actions/profileAction";

class AddProduk extends Component {
  componentDidMount = async () => {
    this.props.getProfileInformation();
  };
  render() {
    return (
      <div>
        <Navbar {...this.props} {...this.props.profileData} />
        <FormProduk {...this.props} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.register.isLogin,
    profileData: state.userProfile.profileData,
  };
};

const mapDispatchToProps = {
  changeInput: (el) => changeInputUser(el),
  addProduk,
  getProfileInformation,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduk);
