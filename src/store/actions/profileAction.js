import axios from "axios"
const userUrl = "http://0.0.0.0:5050/user"


export const getProfileInformation = () => {
    console.log("cek 1")
    return async (dispatch) => {
        await dispatch({
            type: "LOADING_PROFILE"
        });
        console.log("cek 2")
        const response = await axios.get(userUrl, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
        console.log("cek auth", response.data)
        dispatch({
            type: "GET_PROFILE",
            payload: response.data
        })
    }
}
