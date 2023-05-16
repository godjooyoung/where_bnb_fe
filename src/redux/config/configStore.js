import { createStore } from "redux";
import { combineReducers } from "redux";

// 새롭게 추가한 부분
import kakaoLogin from "../modules/user";

const rootReducer = combineReducers({
    kakaoLogin: kakaoLogin, // <-- 새롭게 추가한 부분
});
const store = createStore(rootReducer);

export default store;