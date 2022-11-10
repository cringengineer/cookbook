import './App.css';
import RecipesContainer from "./components/RecipesPage/RecipesContainer";
import {Route, Routes} from "react-router-dom";
import RecipeInfoContainer from "./components/RecipeInfoPage/RecipeInfoContainer";
import {useSelector} from "react-redux";
import StartWindow from "./components/StartWindow/StartWindow";
import TrendingPage from "./components/TrendingPage/Trending";
import FindByIngredientsContainer from "./components/FindByIngredients/FindByIngridientsContainer";
import FoundedRecipes from "./components/FindByIngredients/FoundedRecipes";
import Favorite from "./components/Favorite/Favorite";

const App = () => {
    const recipeInfo = useSelector(state => state.recipeInfoPage.recipeInfo);
    const foundedRecipes = useSelector(state => state.findByIngredientsPage.recipesList);
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<StartWindow/>}></Route>
                <Route path='/recipes/' element={<RecipesContainer/>}></Route>
                <Route path='/recipes/recipe/:recipeId' element={<RecipeInfoContainer info={recipeInfo}/>}></Route>
                <Route path='/trendingPage/' element={<TrendingPage />}></Route>
                <Route path='/trendingPage/recipe/:recipeId' element={<RecipeInfoContainer info={recipeInfo}/>}></Route>
                <Route path='/search/' element={<FindByIngredientsContainer/>}></Route>
                <Route path='/searchResults' element={<FoundedRecipes recipes={foundedRecipes}/>}></Route>
                <Route path='/searchResults/recipe/:recipeId' element={<RecipeInfoContainer info={recipeInfo}/>}></Route>
                <Route path='/favoritePage' element={<Favorite />}></Route>
                <Route path='/favoritePage/recipe/:recipeId' element={<RecipeInfoContainer info={recipeInfo}/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
