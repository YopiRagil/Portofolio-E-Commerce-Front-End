const initialState = {
    produkData: [],
    isLoading: true,
};

export default function produkReducer(produkState = initialState, action) {
    switch (action.type) {
        case "LOADING_PRODUK":
            return {
                ...produkState,
                isLoading: true
            }
        case "GET_PRODUK_ALL":
            console.log("cek masuk reducer")
            return {
                ...produkState,
                produkData: action.payload,
                isLoading: false
            }
        default:
            return produkState
    }
}