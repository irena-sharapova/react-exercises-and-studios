import React from 'react';
import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    let ingredients = ['50g granulated sugar', '2 cups milk', '2 cups all-purpose flour', '2 large eggs', '1 tablespoon baking powder'];

    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className={styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    );
}