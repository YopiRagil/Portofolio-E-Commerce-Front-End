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
    // console.log("cek 1")
    const token = localStorage.getItem('token')
    return async (dispatch) => {
        await dispatch({
            type: "LOADING_PRODUK"
        });
        const response = await axios.get(produkUserUrl, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        console.log("cek response", response)
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
            tipestock: response.data.filter(item => item.tipe_id == categoryProduks)[0].tipe.tipe_name
        })
        // console.log("cek tipe name", response.data.filter(item => item.tipe_id == 1)[0].tipe.tipe_name)
    }
};


// post

export const addProduk = () => {
    return async (dispatch, getState) => {
        await dispatch({
            type: "LOADING_PRODUK"
        });
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
        // alert("sdh msuk addProduk2")
        // console.log("body req", bodyRequestProduk)
        // const request = await axios
        //     .post(produkPostUrl, bodyRequestProduk, {
        //         headers: {
        //             Authorization: 'Bearer ' + token,
        //             // "Content-Type": "applicaton/json; Chart=utf-8",
        //             // "Content-Length": "<calculated when request is sent>; Chart=utf-8"
        //         },
        //     })


        const myJSON = JSON.stringify(bodyRequestProduk);

        await axios
            .post("http://localhost:5000/produk", bodyRequestProduk, {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    // "Content-Type": "application/json; charset=utf-8",
                    // Accept: "application/json; charset=utf-8",
                }
            })
            // .then(async (response) => {
            //     if (response.status === 200) {
            //         dispatch({
            //             type: "GET_PRODUK_ALL",
            //             payload: response.data
            //         });
            //     }
            // })
            .catch(function (error) {
                console.log(error);
            });
        // console.log("req regis", request)

    };
};

export const changeInputUser = (el) => {
    return {
        type: "CHANGE_INPUT_PRODUK",
        payload: el,
    };
};
