import axios from "axios"
const produkAllUrl = "http://0.0.0.0:5050/produk/all"
const produkUserUrl = "http://0.0.0.0:5050/produk/user"
const clientUrl = "http://0.0.0.0:5050/client"
const token = localStorage.getItem('token')

export const getProdukAll = () => {
    console.log("cek 1")
    return async (dispatch) => {
        await dispatch({
            type: "LOADING_PRODUK"
        });
        console.log("cek 2")
        const response = await axios.get(produkAllUrl);
        dispatch({
            type: "GET_PRODUK_ALL",
            payload: response.data
        })
        console.log("cek produk", response.data)
    }
}

export const getProdukUser = () => {
    console.log("cek 1")
    return async (dispatch) => {
        await dispatch({
            type: "LOADING_PRODUK"
        });
        console.log("cek 2")
        const response = await axios.get(produkUserUrl);
        dispatch({
            type: "GET_PRODUK_ALL",
            payload: response.data
        })
        console.log("cek produk", response.data)
    }
}
