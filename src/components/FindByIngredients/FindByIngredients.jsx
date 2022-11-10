import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../redux/findByIngredientsReducer";
import style from './FindByIngredients.module.css';

const FindByIngredients = () => {
    const dispatch = useDispatch();
    const milkProducts = ['milk', 'soy milk', 'dry milk', 'cream cheese', 'ice cream', 'sour cream', 'cream', 'butter', 'peanut butter', 'nut butter', 'cheese', 'blue cheese', 'feta cheese', 'vegan cheese', 'yogurt', 'greek yogurt'].sort()
    const vegetablesProducts = ['artichokes', 'asparagus spears', 'baby bell peppers', 'bell pepper', 'chili peppers', 'green bell pepper', 'green chili pepper', 'orange bell pepper', 'red bell peppers', 'yellow bell pepper', 'napa cabbage', 'red cabbage', 'carrot', 'baby carrots', 'cucumbers', 'english cucumber', 'granulated garlic', 'romaine lettuce', 'canned mushrooms', 'portabella mushrooms', 'red onion', 'sweet onion', 'white onion', 'yellow onion', 'snow peas', 'red potatoes', 'new potatoes', 'pumpkin', 'spinach', 'garlic', 'mushrooms'].sort()
    const fruitsProducts = ['banana', 'strawberry', 'grapes', 'apple', 'watermelon', 'orange', 'blueberry', 'lemon', 'peach', 'avocado', 'pineapple', 'cherry', 'raspberry', 'pear', 'lime', 'blackberry', 'mango', 'plume'].sort()
    const meatProducts = ['pork', 'beef', 'mutton', 'veal', 'poultry', 'venison', 'chicken', 'ham', 'bacon', 'salami', 'prosciutto'].sort()
    const cereals = ['buckwheat', 'rice', 'wheat', 'oatmeal', 'bulgur', 'barley', 'rye', 'quinoa', 'couscous'].sort()
    const fishProducts = ['sturgeon', 'beluga', 'salmon', 'anchovies', 'sardines', 'perch', 'trout', 'shrimps', 'squid'].sort()

    let ingredientsList = useSelector(state => state.findByIngredientsPage.ingredientsList)

    const removeIngredient = (value) => {
        let index = ingredientsList.indexOf(value)
        ingredientsList.splice(index, 1)
    }

    return (
        <div>
            <form className={style.form__container}>
                <p className={style.category}>Milk ingredients</p>
                <div className={style.ingredients__container}>
                    {milkProducts.map(ingredient => {
                        return <div className={style.ingredient} key={ingredient}>
                            <input className={style.ingredient__input} id={ingredient} type='checkbox'
                                   value={ingredient}
                                   onClick={(e) => e.target.checked ? dispatch(getIngredients(`${e.target.value}`)) : removeIngredient(e.target.value)}></input>
                            <label className={style.ingredient__name}>{ingredient}</label>
                        </div>
                    })}
                </div>

                <p className={style.category}>Vegetables</p>
                <div className={style.ingredients__container}>
                    {vegetablesProducts.map(ingredient => {
                        return <div className={style.ingredient} key={ingredient}>
                            <input className={style.ingredient__input} id={ingredient} type='checkbox'
                                   value={ingredient}
                                   onClick={(e) => e.target.checked ? dispatch(getIngredients(`${e.target.value}`)) : removeIngredient(e.target.value)}></input>
                            <label className={style.ingredient__name}>{ingredient}</label>
                        </div>
                    })}
                </div>

                <p className={style.category}>Fruits and berries</p>
                <div className={style.ingredients__container}>
                    {fruitsProducts.map(ingredient => {
                        return <div className={style.ingredient} key={ingredient}>
                            <input className={style.ingredient__input} id={ingredient} type='checkbox'
                                   value={ingredient}
                                   onClick={(e) => e.target.checked ? dispatch(getIngredients(`${e.target.value}`)) : removeIngredient(e.target.value)}></input>
                            <label className={style.ingredient__name}>{ingredient}</label>
                        </div>
                    })}
                </div>

                <p className={style.category}>Meat</p>
                <div className={style.ingredients__container}>
                    {meatProducts.map(ingredient => {
                        return <div className={style.ingredient} key={ingredient}>
                            <input className={style.ingredient__input} id={ingredient} type='checkbox'
                                   value={ingredient}
                                   onClick={(e) => e.target.checked ? dispatch(getIngredients(`${e.target.value}`)) : removeIngredient(e.target.value)}></input>
                            <label className={style.ingredient__name}>{ingredient}</label>
                        </div>
                    })}
                </div>

                <p className={style.category}>Cereals</p>
                <div className={style.ingredients__container}>
                    {cereals.map(ingredient => {
                        return <div className={style.ingredient} key={ingredient}>
                            <input className={style.ingredient__input} id={ingredient} type='checkbox'
                                   value={ingredient}
                                   onClick={(e) => e.target.checked ? dispatch(getIngredients(`${e.target.value}`)) : removeIngredient(e.target.value)}></input>
                            <label className={style.ingredient__name}>{ingredient}</label>
                        </div>
                    })}
                </div>

                <p className={style.category}>Fish</p>
                <div className={style.ingredients__container}>
                    {fishProducts.map(ingredient => {
                        return <div className={style.ingredient} key={ingredient}>
                            <input className={style.ingredient__input} id={ingredient} type='checkbox'
                                   value={ingredient}
                                   onClick={(e) => e.target.checked ? dispatch(getIngredients(`${e.target.value}`)) : removeIngredient(e.target.value)}></input>
                            <label className={style.ingredient__name}>{ingredient}</label>
                        </div>
                    })}
                </div>
            </form>
        </div>
    );
};

export default FindByIngredients;