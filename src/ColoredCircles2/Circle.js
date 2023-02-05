import React, {useState} from "react";
import "./Circle.css";

/** State is more spread in this ex...
 *
 * Great if you never need all the data together (position and color for every circle)
 * You can pass data down, but you can't pass it back up...
 * You can inherit a trait, but you can't give your parents one of your unique traits
 * State is splintered here, typically it is consolidated-- "lifted up" to the highest component
 * One adv is when we moveCircle, it only changes the state for the one circle, so only that circle is rerendered
 */

function getRandom(min = 0, max = 100) {
  return Math.random() * (max - min) + min;
}

function Circle({color, idx}) {
  const [position, setPosition] = useState({x: getRandom(), y: getRandom()})

  const moveCircle = () => {
    setPosition({x: getRandom(), y: getRandom()})
  }
  return (
    <div 
      onClick={moveCircle}
      className="Circle" 
      style={{ 
        backgroundColor: color, 
        position: 'absolute',
        top: `${position.y}vh`,
        left: `${position.x}vw` 
      }}
    >
      {idx + 1}
    </div>
  );
}

export default Circle;