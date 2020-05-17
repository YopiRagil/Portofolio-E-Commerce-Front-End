import axios from "axios"
const produkAllUrl = "http://0.0.0.0:5050/produk/all"
const produkUserUrl = "http://0.0.0.0:5050/produk/user"
const token = localStorage.getItem('token')

export const getProdukAll = () => {
    // console.log("cek 1")
    return async (dispatch) => {
        await dispatch({
            type: "LOADING_PRODUK"
        });
        // console.log("cek 2")
        const response = await axios.get(produkAllUrl);
        dispatch({
            type: "GET_PRODUK_ALL",
            payload: response.data
        })
        // console.log("cek produk", response.data)
    }
}

export const getProdukUser = () => {
    console.log("cek 1")
    return async (dispatch) => {
        await dispatch({
            type: "LOADING_PRODUK"
        });
        console.log("cek 2")
        const response = await axios.get(produkUserUrl, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        dispatch({
            type: "GET_PRODUK_USER",
            payload: response.data
        })
    }
}
export const getCategoryProduks = (categoryProduks) => {
    return async (dispatch) => {
        await dispatch({
            type: "LOADING_PRODUK"
        });
        const response = await axios.get(produkAllUrl);
        dispatch({
            type: "GET_PRODUK_ALL",
            payload: response.data.filter(item => item.tipe_id == categoryProduks),
            tipeName: response.data.filter(item => item.tipe_id == categoryProduks)[0].tipe.tipe_name
        })
    }
};
