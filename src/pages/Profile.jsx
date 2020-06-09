import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ProfileBio from "../component/ProfileBio";
import { connect } from "react-redux";
import { getProfileInformation } from "../store/actions/profileAction";
import {
  getProdukUser,
  deleteProduk,
  updateProduk,
} from "../store/actions/produkAction";

class Profile extends Component {
  componentDidMount = async () => {
    this.props.getProfileInformation();
    this.props.getProdukUser();
  };

  componentDidUpdate() {
    if (this.props.update === true) {
      this.props.getProdukUser();
    }
  }
  render() {
    return (
      <div>
        {localStorage.getItem("isLogin") ? (
          <div>
            <Navbar {...this.props} {...this.props.profileData} />
            <ProfileBio
              doDelete={(produkId) => this.props.deleteProduk(produkId)}
              {...this.props}
            />
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
    isLoadingProfile: state.userProfile.isLoading,
    loginInfo: state.user,
    produkUser: state.produk.produkUser,
    isLoading: state.produk.isLoading,
    isLoadingProduk: state.produk.isLoading,
    update: state.produk.update,
  };
};
const mapDispatchToProps = {
  getProfileInformation,
  getProdukUser,
  deleteProduk,
  updateProduk,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
