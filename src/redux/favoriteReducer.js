let initialState = {
    favoriteRecipes: [],
    id: []
}

export const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE': {
            return {
                ...state,
                favoriteRecipes: [
                    ...state.favoriteRecipes,
                    action.recipe
                ],
                id: [...state.id, action.recipe.info.id]
            }
        }
        case 'REMOVE_FROM_FAVORITE': {

        }
        default:
            return state;
    }
}

export const addToFavorite = (recipe) => {
    return {
        type: 'ADD_TO_FAVORITE',
        recipe
    }
}
