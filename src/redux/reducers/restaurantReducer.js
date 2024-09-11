
const initialState = {
    restaurants: [],
    isLoading: false,
    error: null,
}


const restaurantReducer = (state = initialState, action) => {
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
export default restaurantReducer