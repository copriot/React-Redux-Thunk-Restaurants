
const initialState = {
    products: [],
    isLoading: false,
    error: null,
    restaurant: null,
}


const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case "X AKSİYONU":
            return state;

        case "Y AKSİyoNU":
            return state;

        case "Z AKSİYONU":
            return state;

        default:
            return state;

    }
};


export default productReducer;