import { combineReducers, createStore, applyMiddleware } from "redux";
import restaurantReducer from './reducers/restaurantReducer'
import productReducer from "./reducers/productReducer";
import { thunk } from "redux-thunk";
import cartReducer from "./reducers/cartReducer";


const rootReducer = combineReducers({
    restaurants: restaurantReducer,
    products: productReducer,
    cart: cartReducer
});




const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

