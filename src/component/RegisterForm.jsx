import React from "react";

const FormRegister = (props, postRegister) => {
  // console.log("regis3");
  postRegister = async () => {
    await props.registerClient();
    const isLogin = props.isLogin;
    props.history.push("/profile");
    // console.log("regis1");
    if (isLogin) {
      props.history.push("/");
    }
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Register</h5>
                <form
                  className="form-signin"
                  method="post"
                  style={{ paddingBottom: "70px" }}
                >
                  <div
                    className="form-label-group"
                    style={{ paddingBottom: "30px" }}
                  >
                    <label for="inputUserName">User Name</label>
                    <input
                      type="text"
                      id="inputUserName"
                      className="form-control"
                      placeholder="User Name"
                      name="userName"
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
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      onChange={(el) => props.changeInput(el)}
                    />
                  </div>
                  <div
                    className="form-label-group"
                    style={{ paddingBottom: "30px" }}
                  >
                    <label for="inputPassword">Confirm Password</label>
                    <input
                      type="Password"
                      name="confirmPassword"
                      id="inputConfirmPassword"
                      className="form-control"
                      placeholder="Konfirmasi Password"
                      onChange={(el) => props.changeInput(el)}
                    />
                  </div>
                  <div
                    className="form-label-group"
                    style={{ paddingBottom: "30px" }}
                  >
                    <label for="inputName">Name</label>
                    <input
                      type="text"
                      id="inputName"
                      className="form-control"
                      placeholder="name"
                      name="name"
                      onChange={(el) => props.changeInput(el)}
                    />
                  </div>

                  <div
                    className="form-label-group"
                    style={{ paddingBottom: "30px" }}
                  >
                    <label for="inputEmail">Email address</label>
                    <input
                      type="text"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      name="email"
                      onChange={(el) => props.changeInput(el)}
                    />
                  </div>

                  <div
                    className="form-label-group"
                    style={{ paddingBottom: "30px" }}
                  >
                    <label for="inputNoTlp">Nomor Telephone</label>
                    <input
                      type="text"
                      id="inputNoTlp"
                      className="form-control"
                      placeholder="Nomor telephone"
                      name="noTlp"
                      onChange={(el) => props.changeInput(el)}
                    />
                  </div>

                  <div
                    className="form-label-group"
                    style={{ paddingBottom: "30px" }}
                  >
                    <label for="inputAlamat">Alamat</label>
                    <input
                      type="text"
                      id="inputAlamat"
                      className="form-control"
                      placeholder="Alamat"
                      name="alamat"
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
                      Apakah anda yakin data yang anda masukkan sudah benar?
                    </label>
                  </div>
                  <button
                    onClick={() => postRegister()}
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="button"
                  >
                    DAFTAR
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
