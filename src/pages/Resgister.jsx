import React, { Component } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import FormRegister from "../component/RegisterForm";
import { connect } from "react-redux";

class Register extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormRegister />
        <Footer />
      </div>
    );
  }
}

export default Register;
