import {applyMiddleware, combineReducers, createStore} from "redux";
import TableReducer from "./TableReducer";
import thunk from "redux-thunk";

const reducers=combineReducers({
table:TableReducer
});
const store=createStore(reducers,applyMiddleware(thunk));
window.store = store;
export default store;
