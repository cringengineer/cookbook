import axios from "axios";

let initialState = {
    recipeInfo: [],
    isFetching: true,
    instructions: '',
    ingredientsList: []
}

export const recipeInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RECIPE_INFO': {
            return {
                ...state,
                recipeInfo: action.recipeInfo,
                instructions: action.recipeInfo.instructions,
                ingredientsList: action.recipeInfo.extendedIngredients,
                isFetching: false
            };
        }
        default: {
            return state;
        }
    }
}

export const getRecipeInfo = (recipeInfo) => {
    return {
        type: 'GET_RECIPE_INFO',
        recipeInfo: recipeInfo.data
    }
}


export const getRecipeInfoData = (url) => {
    return (dispatch) => {
        axios.get(url)
            .then(data => dispatch(getRecipeInfo(data)))
    }
}

