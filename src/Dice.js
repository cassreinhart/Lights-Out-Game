// import React, { useState } from "react";
// import "./Dice.css";
// import Die from "./Die.js";

// /** A game can be any number of Dies, all with random values. */

// function Dice(props) {

//   const [values, setValue] = useState(Array.from({ length: props.numDice }));

//   /** roll a new set of random numbers */

//   const roll = () => {
//     setValue(curValues =>
//         curValues.map(n => Math.floor(Math.random() * props.maxVal) + 1),
//     );
//   };

//   return (
//       <section className="Dice">
//         <h1>{props.title}</h1>
//         <div>
//           {values.map(n => (
//               <Die value={n} />
//           ))}
//         </div>
//         <button onClick={roll}>Roll</button>
//       </section>
//   );
// }

// Dice.defaultProps = {
//   title: "Main Game",
//   numDice: 6,
//   maxVal: 20,
// };

// export default Dice;


import React, {useState} from "react";
import Die from "./Die";
import './Dice.css'

const Dice = ({numDice= 6, title="Main Game", maxVal=20}) => {
  const [numbers, setNumbers] = useState(Array.from({length: numDice}));

  const rollDice = () => (
    setNumbers(numbers=> (
      numbers.map(n => Math.floor( Math.random() * maxVal) + 1)
    ))
  )
  // const dice = [];
  // for (let i = 0; i < numDice; i++) {
  //   const num =Math.floor( Math.random() * maxVal) + 1;
  //   dice.push(num)
  // }

  return (
    <div className="Dice">
      <h2>{title}</h2>
      <div>
      {numbers.map(num => <Die val={num} />)}
      </div>
      <button onClick={rollDice}>Roll</button>
    </div>
  )
}

export default Dice;