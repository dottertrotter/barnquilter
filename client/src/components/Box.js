import React from 'react';
import BoxTypes from '../data/boxTypes';
import { useContext, useEffect, useState } from "react"

import { useSelector, useDispatch } from 'react-redux'
import { addBoxToTable } from '../features/gridSlice'

function Box(props) {
  const selectedBoxType = BoxTypes[useSelector((state) => state.painter.value)];
  const color1 = useSelector((state) => state.painter.color1);
  const color2 = useSelector((state) => state.painter.color2);

  const [style, setStyle] = useState([]);

  const dispatch = useDispatch();

  function handleClick() {
    let tempStyle = [];

    switch (selectedBoxType[0].type) {
      case 'polygon': 
        tempStyle.push(
          <svg width="50" height="50">
            <rect width="50" height="50" style={{fill: color2}} />
            <polygon points={selectedBoxType[0].points} style={{fill: color1}} />
          </svg>
        )
      break;
      default:
        tempStyle.push(
          <svg width="50" height="50">
            <svg width="50" height="50">
              <rect width="50" height="50" style={{fill: color1}} />
            </svg>
          </svg>
        )
    }

    dispatch(addBoxToTable({
      rowIndex: props.rowIndex, 
      colIndex: props.colIndex, 
      type: selectedBoxType[0].type, 
      color1: color1, 
      color2: color2,
      points: selectedBoxType[0].points
    }));

    setStyle(tempStyle);
  }

  return (
    <div className="box" onClick={() => handleClick()}>
      {style}
    </div>
  );
}
export default Box;