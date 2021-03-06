import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import signinReducer from "./reducer/signInReducer"
import profileReducer from "./reducer/profileReducer"
import produkReducer from "./reducer/produkReducer"
import registerReducer from "./reducer/registerReducer"


const rootReducer = combineReducers({
    user: signinReducer,
    userProfile: profileReducer,
    produk: produkReducer,
    register: registerReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState());
});

export default store;