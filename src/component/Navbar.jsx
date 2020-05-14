import React from "react";
import { Link } from "react-router-dom";
import ToolProfil from "./NavbarProfileTools";
import { connect } from "react-redux";

const Navbar = (props, postSignout) => {
  postSignout = async () => {
    console.log("cek masuk logout");
    await props.doLogout();
    const isLogin = props.logout;
    console.log("cek islogin", isLogin);
    if (!isLogin) {
      props.history.push("/signin");
    }
  };
  return (
    <navbar className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 bg-white rounded">
      <Link className="navbar-brand" to="/">
        <img src={require("../media/logo.png")} style={{ width: "90px" }} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Kategori
            </Link>
            <div
              className="dropdown-menu bg-secondary"
              aria-labelledby="navbarDropdown"
            >
              <Link className="dropdown-item text-light" href="#">
                Hand Phone
              </Link>
              <Link className="dropdown-item text-light" href="#">
                Laptop
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item text-light" href="#">
                Something else here
              </Link>
            </div>
          </li>
          <li>
            <li className="nav-item active">
              <Link className="nav-link" href="#">
                Diskon <span className="sr-only">(current)</span>
              </Link>
            </li>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 mr-auto">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <ToolProfil {...props} />
      </div>
    </navbar>
  );
};

export default Navbar;
