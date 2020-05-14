import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import FormRegister from "../component/RegisterForm";
import { connect } from "react-redux";
import {
  registerClient,
  changeInputUser,
} from "../store/actions/registerAction";

class Register extends Component {
  render() {
    console.log("regis2", this.props);
    return (
      <div>
        <Navbar />
        <FormRegister {...this.props} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.register.token,
    isLogin: state.register.isLogin,
  };
};

const mapDispatchToProps = {
  changeInput: (el) => changeInputUser(el),
  registerClient,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
