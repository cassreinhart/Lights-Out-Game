import React from "react";
import "./ColorButtons.css"
import ColorButton from "./ColorButton";

function ColorButtons({addCircle, options}) {
  return (
    <div className="ColorButtons">
      {options.map(color => (
        <ColorButton color={color} key={color} addCircle={addCircle}/>
        ))}
    </div>
  )
}

export default ColorButtons;