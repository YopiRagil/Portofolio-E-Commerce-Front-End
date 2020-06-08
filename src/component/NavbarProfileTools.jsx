import React from "react";
import { connect } from "react-redux";
import { doLogout } from "../store/actions/signinAction";
import { Link } from "react-router-dom";

const ToolProfil = (props) => {
  const logOut = async () => {
    await props.doLogout();
  };
  return (
    <section>
      {localStorage.getItem("isLogin") ? (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle mr-lg-5"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  alt="pict"
                  // src={props.avatar}
                  style={{ borderRadius: "100px", width: "8vmin" }}
                />
              </a>
              <div
                className="dropdown-menu mr-lg-auto"
                aria-labelledby="navbarDropdown"
                style={{
                  marginLeft: "-10vmin",
                  background: "DarkSlateGray",
                  borderRadius: "10px",
                }}
              >
                <div className="d-flex justify-content-center">
                  <img
                    alt="pict"
                    // src={props.avatar}
                    style={{ borderRadius: "50px", width: "15vmin" }}
                  />
                </div>
                <Link
                  to="/profile"
                  className="dropdown-item signin"
                  style={{ textAlign: "center", color: "white" }}
                >
                  {props.name}
                </Link>
                <hr />
                <p style={{ textAlign: "center", color: "white" }}>
                  <Link
                    href="#"
                    className="dropdown-item"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Setting
                  </Link>
                </p>
                <p style={{ textAlign: "center", color: "white" }}>
                  <Link
                    href="#"
                    className="dropdown-item"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Account
                  </Link>
                </p>
                <Link
                  onClick={logOut}
                  to="/signin"
                  className="dropdown-item"
                  style={{ textAlign: "center", color: "white" }}
                >
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <Link
            className="btn bg-info text-white btn-outline-info my-2 my-sm-0 mr-3"
            type="submit"
            to="/signin"
          >
            Signin
          </Link>
          <Link
            className="btn bg-info text-white btn-outline-info my-2 my-sm-0 mr-4"
            type="submit"
            to="/register"
          >
            Register
          </Link>
        </div>
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
    isLogin: state.user.isLogin,
  };
};
const mapDispatchToProps = {
  doLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolProfil);
