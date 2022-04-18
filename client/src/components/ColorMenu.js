import React from 'react';
import { useEffect, useState } from "react"
import BoxTypes from '../data/boxTypes';

import { useSelector, useDispatch } from 'react-redux'
import { setColor1, setColor2 } from '../features/painterSlice'


function ColorMenu() {
  const selectedBoxType = BoxTypes[useSelector((state) => state.painter.value)];
  const prevColors = useSelector((state) => state.grid.colorsArray);

  let numberOfColors = selectedBoxType[0].colors;
  const [colorInputs, setColorInputs] = useState([]);
  const [colorInputValue1, setColorInputValue1] = useState("#000000");
  const [colorInputValue2, setColorInputValue2] = useState("#000000");

  const dispatch = useDispatch()

  useEffect(() => {
    if (selectedBoxType[0].colors > 0) {
      numberOfColors = selectedBoxType[0].colors;
      buildColorOptions();
    }
    
  }, [selectedBoxType, prevColors, colorInputValue1, colorInputValue2]);

  function updateColorsArray(event, index) {
    if (index === 0) {
      dispatch(setColor1(event.target.value));
      setColorInputValue1(event.target.value);
    } else {
      dispatch(setColor2(event.target.value));
      setColorInputValue2(event.target.value);
    }
  }

  function buildPreviousColorOptions (colorIndex) {
    let prevColorsDisplay = [];

    for (let c = 0; c < prevColors.length; c++) {

      prevColorsDisplay.push(
        <div className="previous-color" style={{background: prevColors[c]}} onClick={(e) => prevColorPick(e, prevColors[c], colorIndex)}></div>
      )
    }

    return prevColorsDisplay;
  }

  function prevColorPick(event, color, colorIndex) {
    updateColorsArray({target:{value:color}}, colorIndex);
  }

  function buildColorOptions() {
    let tempInputs = [];

    for (let c = 0; c < numberOfColors; c++) {
      if (c === 0)  {
        tempInputs.push(
          <div key={`color-input-${c}`} >
            <input type="color" className="color-input" onChange={(e) => updateColorsArray(e, c)} value={colorInputValue1} />
            <div className="previous-colors">
              {buildPreviousColorOptions(c)}
            </div>
          </div>
        );

      } else {
        tempInputs.push(
          <div key={`color-input-${c}`} >
            <input type="color" className="color-input" onChange={(e) => updateColorsArray(e, c)} value={colorInputValue2} />
            <div className="previous-colors">
              {buildPreviousColorOptions(c)}
            </div>
          </div>
        );
      }
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