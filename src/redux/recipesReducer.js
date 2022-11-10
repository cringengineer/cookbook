import axios from "axios";

let initialState = {
    recipesList: [],
    isFetching: true,
    offSet: 0
}

export const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RECIPES': {
            return {
                ...state,
                recipesList: action.recipes.data.results,
                isFetching: false
            };
        }
        case 'NEXT_PAGE': {
            return {
                ...state,
                offSet: state.offSet + action.offSet
            }
        }
        case 'PREVIOUS_PAGE': {
            return {
                ...state,
                offSet: state.offSet - action.offSet
            }
        }
        default: {
            return state;
        }
    }
}

export const recipesFetchDataSuccess = (recipes) => {
    return {
        type: 'GET_RECIPES',
        recipes
    }
}

export const recipesFetchData = (url) => {
    return (dispatch) => {
        axios.get(url)
            .then(data => dispatch(recipesFetchDataSuccess(data)))
    }
}

export const nextPage = (offSet) => {
    return {
        type: 'NEXT_PAGE',
        offSet: offSet
    }
}

export const previousPage = (offSet) => {
    return {
        type: 'PREVIOUS_PAGE',
        offSet: offSet
    }
}