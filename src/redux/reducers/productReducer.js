import Actions from '../reducers/actionTypes'

const initialState = {
    products: [],
    isLoading: false,
    error: null,
    restaurant: null,
}


const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case Actions.PROD_LOADING:
            return { ...state, isLoading: true };

        case Actions.PROD_ERROR:
            return { ...state, isLoading: false, error: action.payload };

        case Actions.PROD_SUCCESS:
            //    console.log(action)
            return {
                ...state,
                isLoading: false,
                error: null,
                restaurant: action.payload[0].data,
                products: action.payload[1].data
            };

        default:
            return state;

    }
};


export default productReducer;