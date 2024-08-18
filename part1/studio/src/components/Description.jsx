import React from 'react';
import styles from './Description.module.css';

export default function RecipeAuthor() {

    let authorLink = "https://preppykitchen.com/waffle-recipe/";
    let authorPhoto = "https://preppykitchen.com/wp-content/uploads/2020/09/New-Headshot-Round-60-2.jpg";
    let authorName = "John Kanell";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="John Kanell" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Preppy Kitchen</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Waffle Recipe</h1>
                    <p>Learn how to make waffles from scratch with my easy waffle recipe! Crisp and golden on the outside and light and fluffy on the inside, these are simply the best waffles.</p>
                </div>
                <RecipeAuthor />
            </div>

        );
    }
}


export default RecipeDescription;