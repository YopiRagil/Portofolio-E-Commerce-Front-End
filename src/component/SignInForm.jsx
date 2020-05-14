import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const FormSignIn = (props, postLogin) => {
  postLogin = async () => {
    await props.doLogin();
    const isLogin = props.isLogin;
    console.log(isLogin);
    if (isLogin) {
      props.history.push("/profile");
    }
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form
                  onSubmit={(el) => el.preventDefault()}
                  className="form-signin"
                  style={{ paddingBottom: "70px" }}
                >
                  <div
                    className="form-label-group"
                    style={{ paddingBottom: "30px" }}
                  >
                    <label for="userName">User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="User Name"
                      name="name"
                      onChange={(el) => props.changeInput(el)}
                    />
                  </div>

                  <div
                    className="form-label-group"
                    style={{ paddingBottom: "30px" }}
                  >
                    <label for="inputPassword">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={(el) => props.changeInput(el)}
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
                      Remember password
                    </label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                    onClick={() => postLogin()}
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

export default FormSignIn;
