import axios from "axios"
const userUrl = "http://0.0.0.0:5050/user/2"
const token = localStorage.getItem('token')

export const getProfileInformation = () => {
    console.log("cek 1")
    return async (dispatch) => {
        await dispatch({
            type: "LOADING_PROFILE"
        });
        console.log("cek 2", token)
        const response = await axios.get(userUrl, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        dispatch({
            type: "GET_PROFILE",
            payload: response.data
        })
        console.log("cek auth", response.data)
    }
}
