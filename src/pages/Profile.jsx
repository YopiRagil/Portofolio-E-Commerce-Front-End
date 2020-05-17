import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ProfileBio from "../component/ProfileBio";
import { connect } from "react-redux";
import { getProfileInformation } from "../store/actions/profileAction";
import { getProdukUser } from "../store/actions/produkAction";

class Profile extends Component {
  componentDidMount = async () => {
    this.props.getProfileInformation();
    this.props.getProdukUser();
  };
  render() {
    // console.log("response profile", this.props);
    // console.log("cek profile", this.props.profileData);
    const isLoading = this.props.isLoading;
    return (
      <div>
        {this.props.loginInfo.isLogin ? (
          <div>
            <Navbar {...this.props} />
            <ProfileBio {...this.props} />
            <Footer />
          </div>
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
            }}
          />
        )}
        ;
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileData: state.userProfile.profileData,
    isLoading: state.userProfile.isLoading,
    loginInfo: state.user,
    produkUser: state.produk.produkUser,
    isLoading: state.produk.isLoading,
  };
};
const mapDispatchToProps = {
  getProfileInformation,
  getProdukUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
