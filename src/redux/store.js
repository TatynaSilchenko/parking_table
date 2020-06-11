import {applyMiddleware, combineReducers, createStore} from "redux";
import TableReducer from "./TableReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
    table: TableReducer,
    form: formReducer
});
const store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store;
