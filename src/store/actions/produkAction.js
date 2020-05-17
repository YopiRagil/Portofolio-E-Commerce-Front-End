import axios from "axios"
const produkAllUrl = "http://0.0.0.0:5050/produk/all"
const produkPostUrl = "http://0.0.0.0:5050/produk"
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
            tipestock: response.data.filter(item => item.tipe_id == categoryProduks)[0].tipe.tipe_stock
        })
    }
};


// post

export const addProduk = () => {
    return async (dispatch, getState) => {
        await dispatch({
            type: "LOADING_PRODUK"
        });
        alert("sdh msuk addProduk")
        const tipeId = getState().produk.tipe;
        const namaProduk = getState().produk.namaProduk;
        const harga = getState().produk.harga;
        const stock = getState().produk.stock;
        const sold = getState().produk.sold;
        const gambar = getState().produk.gambar;
        const deskripsi = getState().produk.deskripsi;
        const diskon = getState().produk.diskon;
        const promo = getState().produk.promo;
        const bodyRequestProduk = {
            tipeId: tipeId,
            namaProduk: namaProduk,
            harga: harga,
            stock: stock,
            sold: sold,
            gambar: gambar,
            deskripsi: deskripsi,
            diskon: diskon,
            promo: promo
        }
        const token = localStorage.getItem('token')
        alert("sdh msuk addProduk2")
        console.log("body req", bodyRequestProduk)
        const request = await axios
            .post(produkPostUrl, bodyRequestProduk, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    "Content-Type": "applicaton/json; Chart=utf-8",
                    // "Content-Length": "<calculated when request is sent>; Chart=utf-8"
                },
            })
        console.log("req regis", request)

    };
};

export const changeInputUser = (el) => {
    return {
        type: "CHANGE_INPUT_PRODUK",
        payload: el,
    };
};
