import React, { Component } from "react";
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
    return (
      <div>
        <Navbar {...this.props} {...this.props.profileData} />
        {console.log("regis2", this.props)}
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
    profileData: state.userProfile.profileData,
  };
};

const mapDispatchToProps = {
  changeInput: (el) => changeInputUser(el),
  registerClient,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
