const initialState = {
    token: '',
    isLogin: false,
    name: '',
    password: '',
}

export default function signinReducer(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_INPUT_USER":
            return {
                ...state,
                [action.payload.target.name]: action.payload.target.value,
            };
        case "SUCCESS_LOGIN":
            return {
                ...state,
                token: action.payload.token,
                isLogin: true,
            };
        case "LOG_OUT":
            return {
                ...state,
                isLogin: false,
            }
        default:
            return state
    }
}