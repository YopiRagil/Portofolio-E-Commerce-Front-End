const initialState = {
    produkData: [],
    produkDataTipe: [],
    tipeName: '',
    produkUser: [],
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
            return {
                ...produkState,
                produkData: action.payload,
                isLoading: false,
                tipeName: action.tipeName
            }
        case "GET_PRODUK_USER":
            return {
                ...produkState,
                produkUser: action.payload,
                isLoading: false
            }
        case "GET_PRODUK_TIPE":
            return {
                ...produkState,
                produkDataTipe: action.payload,
                isLoading: false
            }
        case "CHANGE_INPUT_PRODUK":
            return {
                ...produkState,
                [action.payload.target.name]: action.payload.target.value,
            };
        default:
            return produkState
    }
}