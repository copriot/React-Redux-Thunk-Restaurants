import { combineReducers, createStore } from "redux";
import restaurantReducer from './reducers/restaurantReducer'
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
    restaurants: restaurantReducer,
    products: productReducer
});



// import ederken istedigimiz ismi veriyoz zaten ne gerek var store diye degiskene atmaya




const store = createStore(rootReducer);

export default store;

