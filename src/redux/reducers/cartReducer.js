import Actions from "./actionTypes";

const initialState = {
    isLoading: false,
    error: null,
    cart: [],
}




const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CART_LOADING:
            return { ...state, isLoading: true };
        case Actions.CART_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        case Actions.CART_SUCCESS:
            return { ...state, isLoading: false, error: null, cart: action.payload };

        //mevcut elemanın üzerine yeni elemanı ekle
        case Actions.ADD_ITEM:

            const updatedCart = state.cart.concat(action.payload)
            return { ...state, cart: updatedCart }
        default:
            return state;
    }
};
export default cartReducer;