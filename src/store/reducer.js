import * as actionTypes from './actions';
import { INGREDIENT_PRICES } from '../constants/prices';
const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        meat: 0,
        cheese: 0
    },
    totalPrice: 4
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.IngradientName]: state.ingredients[action.IngradientName] + 1,
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.IngradientName]

            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.IngradientName]: state.ingredients[action.IngradientName] - 1
                }

            }
        default:
            return {
                ...state
            }
    }

};

export default reducer;