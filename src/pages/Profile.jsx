import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ProfileBio from "../component/ProfileBio";
import { connect } from "react-redux";
import ProfileAsBuyer from "../component/ProfileAsBuyer";
import { getProfileInformation } from "../store/actions/profileAction";

class Profile extends Component {
  componentDidMount = async () => {
    this.props.getProfileInformation();
    // console.log("response", this.props);
  };
  render() {
    console.log("cek profile", this.props);
    const isLoading = this.props.isLoading;
    return (
      <div>
        {this.props.loginInfo.isLogin ? (
          <div>
            <Navbar />
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
  };
};
const mapDispatchToProps = {
  getProfileInformation,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
