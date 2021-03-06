import axios from "axios"
const signInUrl = "https://electronice_be.yopiragil.my.id/auth"
// const signInUrl = "http://0.0.0.0:5050/auth"


export const doLogin = () => {
    // console.log("cek masuk");
    return async (dispatch, getState) => {
        console.log("cek storage", localStorage)
        const username = getState().user.name;
        const password = getState().user.password;
        localStorage.clear()
        localStorage.setItem("username", username)
        console.log("cek storage2", localStorage)
        await axios
            .get(signInUrl, {
                params: {
                    username: username,
                    password: password
                }
            })

            .then(async (response) => {
                console.log("masuk api", response.data.token)
                await dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
                // localStorage.clear()
                // localStorage.data.removeItem("token")
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("isLogin", true)
                localStorage.setItem("id_user", response.data.id)
            })
            .catch(function (error) {
            });
    };
};

export const changeInputUser = (el) => {
    return {
        type: "CHANGE_INPUT_USER",
        payload: el,
    };
};
export const doLogout = () => {
    localStorage.clear()
    return {
        type: "LOG_OUT",
    };
};