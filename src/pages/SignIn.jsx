import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Navbar from "../component/Navbar";
import FormSignIn from "../component/SignInForm";
import { connect } from "react-redux";
import { doLogin, changeInputUser } from "../store/actions/signinAction";

class SignIn extends Component {
  render() {
    // console.log("cek props di sgin in", this.props);
    const message = this.props.location.state
      ? this.props.location.state.message
      : " ";

    return (
      <React.Fragment>
        <Navbar />
        <FormSignIn {...this.props} />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    isLogin: state.user.isLogin,
  };
};

const mapDispatchToProps = {
  changeInput: (el) => changeInputUser(el),
  doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
