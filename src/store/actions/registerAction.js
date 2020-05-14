import axios from "axios"
const clientUrl = "http://0.0.0.0:5050/client"
const usertUrl = "http://0.0.0.0:5050/user"
const signInUrl = "http://0.0.0.0:5050/auth"


export const registerClient = () => {
    console.log("cek masuk");
    return async (dispatch, getState) => {
        const username = getState().register.userName;
        const name = getState().register.name;
        const email = getState().register.email;
        const password = getState().register.password;
        const confirmPassword = getState().register.confirmPassword;
        const noTlp = getState().register.noTlp;
        const alamat = getState().register.alamat;

        localStorage.clear()
        localStorage.setItem("username", username)
        localStorage.setItem("password", password)
        await axios
            .post(clientUrl, {
                headers: {},
                data: {
                    username: username,
                    password: password,
                }
            })

        await axios
            .post(usertUrl, {
                headers: {},
                data: {
                    name: name,
                    email: email,
                    noTlp: noTlp,
                    alamat: alamat
                }
            })

        await axios
            .get(signInUrl, {
                params: {
                    username: username,
                    password: password
                }
            })
            .then(async (response) => {
                // console.log("masuk api", response.data.token)
                await dispatch({ type: "SUCCESS_SIGNIN", payload: response.data });
                localStorage.setItem("token", response.data.token)
                console.log("cek storage2", localStorage)
            })
            .catch(function (error) {
            });
    };
};

export const changeInputUser = (el) => {
    return {
        type: "CHANGE_INPUT_REGISTER",
        payload: el,
    };
};