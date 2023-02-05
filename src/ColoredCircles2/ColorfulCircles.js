import React, {useState} from "react";
import Circle from "./Circle";
import ColorButtons from "./ColorButtons";



const ColorfulCircles = () => {
  const [circles, setCircles] = useState([])
  const addCircle = (color) => {
    setCircles(circles => [...circles, color]);
  } 

  return (
    <div>
      <ColorButtons addCircle={addCircle} options={['peachpuff', 'lavender', 'thistle']} />
      {circles.map((color, idx) => (
        <Circle
          color={color} 
          idx={idx} 
          key={idx} 
        />
      ))}

    </div>
  )
}


export default ColorfulCircles;