import React from "react";
import { Link } from "react-router-dom";
import ToolProfil from "./NavbarProfileTools";

const Navbar = (props, postSignout, changeRouter) => {
  // console.log("cek masuk logout", props);
  postSignout = async () => {
    await props.doLogout();
    const isLogin = props.logout;
    console.log("cek islogin", isLogin);
    if (!isLogin) {
      props.history.push("/signin");
    }
  };
  changeRouter = async (category) => {
    console.log("props list", props);
    if (props.inputCategory) {
      await props.inputCategory(category);
    } else {
      props.history.replace("produk/" + category);
    }
  };

  return (
    <navbar className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 bg-white rounded">
      <Link className="navbar-brand" to="/">
        <img
          alt="pict"
          src={require("../media/logo.png")}
          style={{ width: "90px" }}
        />
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
              <Link
                to="/produk/1"
                value={1}
                className="dropdown-item text-light"
                onClick={() => changeRouter(1)}
              >
                Hand Phone
              </Link>
              <Link
                to="/produk/2"
                className="dropdown-item text-light"
                onClick={() => changeRouter(2)}
              >
                Laptop
              </Link>
              <div className="dropdown-divider"></div>
              <Link to="/produk" className="dropdown-item text-light" href="#">
                Something else here
              </Link>
            </div>
          </li>
          <li>
            <li className="nav-item active">
              <Link className="nav-link" href="#">
                GRATIS <span className="sr-only">(current)</span>
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
            onChange={props.doSearch}
            value={props.keyword}
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
