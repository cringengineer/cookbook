import React from 'react';
import style from './Instruction.module.css'
import {useSelector} from "react-redux";

const Instruction = () => {
    let instruction = useSelector(state => state.recipeInfoPage.instructions)
    let ingredientsList = useSelector(state => state.recipeInfoPage.ingredientsList)

    let arr = ingredientsList.map(item=> item.name)
    let ingredients = [...new Set(arr)]

    return (
        <div className={style.container}>
            <h3 className={style.title}>Ingredients:</h3>

            <ul className={style.ingredients__list}>{ingredients.map(ingredient => <li className={style.ingredient}
                                                                                       key={ingredient}>{ingredient}</li>)}
            </ul>
            <h4 className={style.recipe__title}>Recipe:</h4>
            <div className={style.recipe} dangerouslySetInnerHTML={{
                __html:
                instruction
            }}></div>
        </div>

    );
};

export default Instruction;