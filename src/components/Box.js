import React from 'react';
import BoxTypes from '../data/boxTypes';
import { useContext, useEffect, useState } from "react"

import { useSelector, useDispatch } from 'react-redux'

function Box() {
  const selectedBoxType = BoxTypes[useSelector((state) => state.painter.value)];

  // Declare a new state variable, which we'll call "count"
  const [style, setStyle] = useState([]);

  function handleClick() {
    console.log(selectedBoxType[0])

    let tempStyle = [];

    switch (selectedBoxType[0].type) {
      case 'polygon': 
        tempStyle.push(
          <svg width="50" height="50">
            <rect width="50" height="50" style={{fill: 'white'}} />
            <polygon points={selectedBoxType[0].points} style={{fill: 'black'}} />
          </svg>
        )
      break;
      default:
        tempStyle.push(
          <svg width="50" height="50">
            <svg width="50" height="50">
              <rect width="50" height="50" style={{fill: 'black'}} />
            </svg>
          </svg>
        )
    }

    

    setStyle(tempStyle);
  }

  return (
    <div className="box" onClick={() => handleClick()}>
      {style}
    </div>
  );
}
export default Box;