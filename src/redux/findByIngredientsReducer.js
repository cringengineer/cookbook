import axios from "axios";

let initialState = {
    recipesList: [],
    isFetching: true,
    ingredientsList: []
}

export const findByIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RESULTS': {
            return {
                ...state,
                recipesList: action.recipes.data,
                isFetching: false,
                ingredientsList: []
            };
        }
        case 'GET_INGREDIENT': {
            return {
                ...state,
                ingredientsList: [
                    ...state.ingredientsList,
                    action.payload
                ]
            }
        }
        default: {
            return state;
        }
    }
}


export const findByIngredientsFetchDataSuccess = (recipes) => {
    return {
        type: 'GET_RESULTS',
        recipes
    }
}


export const findByIngredientsFetchData = (url) => {
    return (dispatch) => {
        axios.get(url)
            .then(data => dispatch(findByIngredientsFetchDataSuccess(data)))
    }
}

export const getIngredients = (payload) => {
    return {
        type: 'GET_INGREDIENT',
        payload
    }
}

