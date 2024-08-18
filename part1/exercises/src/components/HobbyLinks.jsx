export default function HobbyLinks() {
    let pageTitle = "My Hobby Links";
    let hobbyLinks = ["https://unsplash.com/",

    "https://www.behance.net/"];
    
    return (
       <div>
          <h3>{pageTitle}</h3>
          <a href = {hobbyLinks[0]}>Unsplash</a>
          <br /> 
          <a href = {hobbyLinks[1]}>Behance</a>
        
       </div>      
    );
 }