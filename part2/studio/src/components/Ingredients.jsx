import recipe from "./recipe.json";
import "./styling.css";

function IngredientList() {
  let recipeIngridients = recipe[0].ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>;
  });
   return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {recipeIngridients}
      </ul>
    </div>
   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 