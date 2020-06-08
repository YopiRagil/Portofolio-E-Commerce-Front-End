const initialState = {
    produkData: [],
    produkDataTipe: [],
    tipeName: '',
    produkUser: [],
    isLoading: true,
    search: ''
};

export default function produkReducer(produkState = initialState, action) {
    switch (action.type) {
        case "LOADING_PRODUK":
            return {
                ...produkState,
                isLoading: true
            }
        case "CLEAR":
            return initialState
        case "GET_PRODUK_ALL":
            return {
                ...produkState,
                produkData: action.payload,
                tipeName: action.tipestock,
                isLoading: false,
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
            }
        case "SEARCH_PRODUK":
            return {
                ...produkState,
                produkData: action.payload,
                isLoading: false
            }
        case "SEARCH_INPUT":
            return {
                ...produkState,
                search: action.payload
            }
        default:
            return produkState
    }
}