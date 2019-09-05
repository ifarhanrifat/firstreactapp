const initialState =  {
    loading: true,
    products: []
}

function productsReducer(state = initialState, action = {}) {
    switch (action.type) {
        case "UPDATE_PRODUCT":
            return Object.assign({}, state, {products: action.products, loading: false}) //object ni bna hua tha action.products
            default: return state;
    }
};
export default productsReducer;