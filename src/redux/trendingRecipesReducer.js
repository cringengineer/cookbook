import axios from "axios";

let initialState = {
    trendingRecipesList: [],
    isFetching: true,
}

export const trendingRecipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TRENDING_RECIPES': {
            return {
                ...state,
                trendingRecipesList: action.recipes.data.recipes,
                isFetching: false
            };
        }
        default: {
            return state;
        }
    }
}

export const trendingRecipesFetchDataSuccess = (recipes) => {
    return {
        type: 'GET_TRENDING_RECIPES',
        recipes
    }
}

export const trendingRecipesFetchData = (url) => {
    return (dispatch) => {
        axios.get(url)
            .then(data => dispatch(trendingRecipesFetchDataSuccess(data)))
    }
}

