import axios from "axios"
const clientUrl = "http://0.0.0.0:5050/client"
const userUrl = "http://0.0.0.0:5050/user"
const signInUrl = "http://0.0.0.0:5050/auth"


export const registerClient = () => {
    return async (dispatch, getState) => {
        alert("sdh msuk tws regis1")
        const username = getState().register.userName;
        const password = getState().register.password;
        const confirmPassword = getState().register.confirmPassword;
        const name = getState().register.name;
        const email = getState().register.email;
        const noTlp = getState().register.noTlp;
        const alamat = getState().register.alamat;
        const bodyRequestClient = {
            username: username,
            password: password,
            status: "user"
        }
        const bodyRequestUser = {
            name: name,
            email: email,
            no_hp: noTlp,
            alamat: alamat
        }
        localStorage.clear()
        localStorage.setItem("username", username)
        localStorage.setItem("password", password)
        await axios
            .post(clientUrl, bodyRequestClient, {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            })
        alert("Create account success")

        await axios
            .get(signInUrl, {
                params: {
                    username: username,
                    password: password
                }
            })
            .then(async (response) => {
                await dispatch({ type: "SUCCESS_SIGNIN", payload: response.data });
                localStorage.setItem("token", response.data.token)
                console.log("cek storage2", localStorage)
            })
            .catch(function (error) {
            });
        const token = localStorage.getItem('token')
        const req = await axios
            .post(userUrl, bodyRequestUser, {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            })
        console.log("req regis", req)

    };
};

export const changeInputUser = (el) => {
    return {
        type: "CHANGE_INPUT_REGISTER",
        payload: el,
    };
};