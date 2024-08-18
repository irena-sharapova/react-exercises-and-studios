// export default function ChoresList () {
//    return <p>No content is here!</p>;
// }
import React from 'react';
import classes from './ChoresList.module.css';


class ChoresList extends React.Component {
   render() {
      const chore = ["cooking", "do laundry", "wash dishes", "take out trash", "vacuum flor"];
      return (
      <div>
         <h3 className = {classes.choresHeading}>My list of chores</h3>
         <ol>
            <li className={classes.choresText}>{chore[0]}</li>
            <li className={classes.choresText}>{chore[1]}</li>
            <li className={classes.choresText}>{chore[2]}</li>
            <li className={classes.choresText}>{chore[3]}</li>
            <li className={classes.choresText}>{chore[4]}</li>
         </ol>
      </div>
      );
   }
}

export default ChoresList;