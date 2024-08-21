import './styles.css';

function Button() {
   function onLearnMore() {
      alert ("Splash Splash!");
   };

   return ( 
         <button onClick={onLearnMore}>
            Learn more
         </button>
   );
}

export default Button;