import recipe from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
  const recipeAutor = <div>{recipe[0].author}</div>;
  // const recipeAutorImage = <img className="autorImage" src={recipe[0].authorImage} />;
  const recipeAutorImage = recipe.map((props) => (
   <img key= {props.authorImage} className="autorImage" src={recipe[0].authorImage}  />
   ));
  
  let url = recipe[0].website
  const recipeWebsite = <a href={url} target="_blank">{url}</a>;
 
  return (
    <div>
       {recipeAutorImage}
       {recipeAutor}
       {recipeWebsite}
    </div>
 );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 