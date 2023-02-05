// import React from "react";
// import "./App.css";
// import Dice from "./Dice";

// /** Simple game with dice. */

// function App() {
//   return (
//     <div className="App">
//       <Dice />
//       <Dice numDice={4} title="Mini Dice" maxVal={20} />
//     </div>
//   );
// }

// export default App;
 

import React from "react"
import './App.css'
// import Dice from "./Dice";
import ColorfulCircles from './ColoredCircles1/ColorfulCircles'

function App() {
  return (
    <div className="App">
      <ColorfulCircles />
      {/* <Dice numDice={9} maxVal={6}/>
      <Dice title="Roll Me" /> */}
    </div>
  )
}

export default App;