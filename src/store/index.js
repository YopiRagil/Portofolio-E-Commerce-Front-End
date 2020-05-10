import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import signinReducer from "./reducer/signInReducer"
import profileReducer from "./reducer/profileReducer"

const rootReducer = combineReducers({
    user: signinReducer,
    userProfile: profileReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState());
});

export default store;