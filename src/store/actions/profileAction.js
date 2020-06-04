import axios from "axios"
const userUrl = "https://electronice_be.yopiragil.my.id/user/list"
// const userUrl = "http://0.0.0.0:5050/user/list"

export const getProfileInformation = () => {
    // console.log("cek 1")
    const token = localStorage.getItem('token')
    return async (dispatch) => {
        await dispatch({
            type: "LOADING_PROFILE"
        });
        // console.log("cek 2", token)
        const response = await axios.get(userUrl, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        // console.log("cek auth", response.data[0])
        dispatch({
            type: "GET_PROFILE",
            payload: response.data
        })
    }
}
