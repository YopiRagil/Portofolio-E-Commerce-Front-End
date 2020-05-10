import axios from "axios"
const signInUrl = "http://0.0.0.0:5050/auth"

export const doLogin = (props) => {
    // console.log("cek masuk");
    return async (dispatch, getState) => {
        const username = getState().user.name;
        const password = getState().user.password;

        await axios
            .get(signInUrl, {
                params: {
                    username: username,
                    password: password
                }
            })
            // console.log("cek masuk axious")
            .then(async (response) => {
                // console.log("masuk api", response)
                dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
                localStorage.setItem("token", response.data.token)
            })
            .catch(function (error) {
                // console.log(error)
            });
    };
};

export const changeInputUser = (el) => {
    return {
        type: "CHANGE_INPUT_USER",
        payload: el,
    };
};
export const doLogout = (el) => {
    return {
        type: "LOG_OUT",
        payload: el,
    };
};