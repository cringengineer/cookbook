import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import {recipesReducer} from "./recipesReducer";
import thunk from "redux-thunk";
import {recipeInfoReducer} from "./recipeInfoReducer";
import {trendingRecipesReducer} from "./trendingRecipesReducer";
import {favoriteReducer} from "./favoriteReducer";
import {findByIngredientsReducer} from "./findByIngredientsReducer";

let reducers = combineReducers({
    recipesPage: recipesReducer,
    recipeInfoPage: recipeInfoReducer,
    trendingPage: trendingRecipesReducer,
    favoritePage: favoriteReducer,
    findByIngredientsPage: findByIngredientsReducer
})

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store
export default store;