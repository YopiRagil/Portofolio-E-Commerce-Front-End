import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const FormRegister = (props) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Register</h5>
                <form className="form-signin" style={{ paddingBottom: "70px" }}>
                  <div
                    className="form-label-group"
                    style={{ paddingBottom: "30px" }}
                  >
                    <label for="inputUserName">User Name</label>
                    <input
                      type="userName"
                      id="inputUserName"
                      className="form-control"
                      placeholder="User Name"
                      required
                      autofocus
                    />
                  </div>
                  <div
                    className="form-label-group"
                    style={{ paddingBottom: "30px" }}
                  >
                    <label for="inputEmail">Email address</label>
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      required
                      autofocus
                    />
                  </div>

                  <div
                    className="form-label-group"
                    style={{ paddingBottom: "30px" }}
                  >
                    <label for="inputPassword">Password</label>
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div
                    className="form-label-group"
                    style={{ paddingBottom: "30px" }}
                  >
                    <label for="inputPassword">Confirm Password</label>
                    <input
                      type="confirmPassword"
                      id="inputConfirmPassword"
                      className="form-control"
                      placeholder="confirmPassword"
                      required
                    />
                  </div>
                  <div
                    className="custom-control custom-checkbox mb-3"
                    style={{ paddingBottom: "50px" }}
                  >
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label className="custom-control-label" for="customCheck1">
                      Apakah anda yakin data yang anda masukkan sudah benar?
                    </label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormRegister;
