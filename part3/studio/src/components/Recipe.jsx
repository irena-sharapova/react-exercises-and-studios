import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://preppykitchen.com/sourdough-pancakes/";
   let authorPhoto = "https://preppykitchen.com/wp-content/uploads/2024/07/New-Book-Feature-Image.jpg";
   let authorName = "John Kanell";

   return (
      <div>
         <img src={authorPhoto} alt="" style={{ objectFit: "contain", borderRadius: "50%" }}
         width = "150px"
         />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a>
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      "all-purpose flour",
      "granulated sugar",
      "baking powder",
      "baking soda",
      "salt",
      "sourdough starter",
      "milk",
      "large eggs",
      "butter melted and cooled"
   ];

   let ingredientListItems = ingredients.map((ingredient, index) =>{
      return <li key={index}>{ingredient}</li>;
   })
   return (
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
           {ingredientListItems}
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div>
         <div>
            <h1>Sourdough Pancakes</h1>
            <p>Try these fluffy sourdough pancakes for a simple, delicious breakfast that makes good use of your active sourdough starter or sourdough discard. Fluffy and light with perfect crisp edges, these pancakes will disappear in a flash!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://preppykitchen.com/wp-content/uploads/2024/08/Sourdough-Pancakes-Feature.jpg"
       alt="" 
       className="imageUpdates"
       height = "450px"
        />
   );
}

export default function RecipeDisplay() {
   return (
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
