const initialState = {
    token: '',
    isLogin: false,
    userName: '',
    password: '',
}

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_INPUT_REGISTER":
            return {
                ...state,
                [action.payload.target.userName]: action.payload.target.value,
            };
        case "SUCCESS_SIGNIN":
            return {
                ...state,
                token: action.payload.token,
                isLogin: true,
            };
        default:
            return state
    }
}