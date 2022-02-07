import React from 'react';
import { useEffect, useState } from "react"
import BoxTypes from '../data/boxTypes';

import { useSelector, useDispatch } from 'react-redux'
import { setColor1, setColor2 } from '../features/painterSlice'


function ColorMenu() {
  const selectedBoxType = BoxTypes[useSelector((state) => state.painter.value)];

  let colorsArray = [];
  let numberOfColors = selectedBoxType[0].colors;
  const [colorInputs, setColorInputs] = useState([]);

  const dispatch = useDispatch()

  useEffect(() => {
    if (selectedBoxType[0].colors > 0) {
      numberOfColors = selectedBoxType[0].colors;
      buildColorOptions();
    }
    
  }, [selectedBoxType]);

  function updateColorsArray(event, index) {
    if (index === 0) {
      dispatch(setColor1(event.target.value));
    } else {
      dispatch(setColor2(event.target.value));
    }
  } 

  function buildColorOptions() {
    let tempInputs = [];

    for (let c = 0; c < numberOfColors; c++) {
      tempInputs.push(<div key={`color-input-${c}`} ><input type="color" className="color-input" onChange={(e) => updateColorsArray(e, c)} /></div>);
    }

    setColorInputs(tempInputs);
  }

  return (
    <div>
      <h2>Colors</h2>
      {colorInputs}
    </div>
  );
}
export default ColorMenu;