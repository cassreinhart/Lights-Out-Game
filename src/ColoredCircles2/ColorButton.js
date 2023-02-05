import React from "react";
import './ColorButtons.css'

function ColorButton({color, addCircle}) {
    return (
            <button 
              onClick={() => addCircle(color)} 
              className="ColorButton"
              style={{backgroundColor: color}}
              key={color}
            >
                {color}
            </button>
    )
}

export default ColorButton;