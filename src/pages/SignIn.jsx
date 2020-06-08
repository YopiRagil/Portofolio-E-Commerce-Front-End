import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import FormSignIn from "../component/SignInForm";
import { connect } from "react-redux";
import { doLogin, changeInputUser } from "../store/actions/signinAction";

class SignIn extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar {...this.props} {...this.props.profileData} />
        <FormSignIn {...this.props} />
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    isLogin: state.user.isLogin,
    profileData: state.userProfile.profileData,
  };
};

const mapDispatchToProps = {
  changeInput: (el) => changeInputUser(el),
  doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
