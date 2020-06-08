import axios from "axios"
const produkUrl = "https://electronice_be.yopiragil.my.id/produk"
// const produkUrl = "http://0.0.0.0:5050/produk"

export const getProdukAll = () => {
    // console.log("cek 1")
    return async (dispatch) => {
        await dispatch({
            type: "LOADING_PRODUK"
        });
        // console.log("cek 2")
        const response = await axios.get(produkUrl + "/all");
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
        const response = await axios.get(produkUrl + "/user", {
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
        try {
            const res = await axios.get(produkUrl + "/all");
            dispatch({
                type: "GET_PRODUK_ALL",
                payload: res.data.filter(item => item.tipe_id == categoryProduks),
                tipestock: res.data.filter(item => item.tipe_id == categoryProduks)[0].tipe.tipe_name
            })
        }
        catch (error) {
            console.error(error.response);
        }
        // console.log("cek tipe name", response.data.filter(item => item.tipe_id == 1)[0].tipe.tipe_name)
    }
};


// post

export const addProduk = () => {
    return async (dispatch, getState) => {
        await dispatch({
            type: "LOADING_PRODUK"
        });
        var tipeId = getState().produk.tipe;
        if (tipeId === undefined) {
            var tipeId = 1
        }
        const namaProduk = getState().produk.namaProduk;
        const harga = getState().produk.harga;
        const stock = getState().produk.stock;
        const sold = getState().produk.sold;
        const gambar = getState().produk.gambar;
        const deskripsi = getState().produk.deskripsi;
        const diskon = getState().produk.diskon;
        const promo = getState().produk.promo;
        const bodyRequestProduk = {
            tipe_id: tipeId,
            nama_produk: namaProduk,
            harga: harga,
            sold: sold,
            stock: stock,
            deskripsi: deskripsi,
            gambar: gambar,
            diskon: diskon,
            promo: promo
        }
        const token = localStorage.getItem('token')
        console.log("body req", bodyRequestProduk)
        await axios
            .post(produkUrl, bodyRequestProduk, {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            })
            .then(response => {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error.response);
            });

    };
};

export const changeInputUser = (el) => {
    return {
        type: "CHANGE_INPUT_PRODUK",
        payload: el,
    };
};

export const clearWhenLogout = () => {
    return {
        type: "CLEAR",
    };
};

export const InputSearchProduk = (event) => {
    const value = event.target.value;
    return async (dispatch) => {
        await dispatch({
            type: "SEARCH_INPUT"
        });
        await dispatch(searchProduk(value));
    }
};
export const searchProduk = (keyword) => {
    return async (dispatch) => {
        if (keyword.length > 2) {
            await dispatch({
                type: "LOADING_PRODUK"
            });
            try {
                const response = await axios.get(produkUrl + "/all", {
                    params: {
                        keyword: keyword,
                    },
                });
                dispatch({
                    type: "SEARCH_PRODUK",
                    payload: response.data,
                });
            } catch (error) {
                console.error(error);
            }
        }
    }

};