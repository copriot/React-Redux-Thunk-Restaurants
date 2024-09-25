import { combineReducers, createStore, applyMiddleware } from "redux";
import restaurantReducer from './reducers/restaurantReducer'
import productReducer from "./reducers/productReducer";
import { thunk } from "redux-thunk";


const rootReducer = combineReducers({
    restaurants: restaurantReducer,
    products: productReducer
});




const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

