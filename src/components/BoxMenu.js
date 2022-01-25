import React from 'react';
import { useEffect, useState } from "react"
import BoxTypes from '../data/boxTypes';

import { useSelector, useDispatch } from 'react-redux';
import { setValue } from '../features/painterSlice';

function BoxMenu() {

  const [boxOptions, setBoxOptions] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const color1 = useSelector((state) => state.painter.color1);
  const color2 = useSelector((state) => state.painter.color2);

  const dispatch = useDispatch()
  
  useEffect(() => {
    buildBoxOptions();
  }, [selectedIndex, color1, color2]);

  function selectType(index) {
    setSelectedIndex(index);

    dispatch(setValue(index))
  }

  function buildBoxOptions() {
    let tempBoxOptions = [];

    BoxTypes.forEach((box, index) => { 
      box.forEach((component) => { 
        let selected = '';
        if (selectedIndex === index) {
          selected = 'selected'
        }

        const classes = `box box-option ${selected}`

        switch (component.type) {
          case 'polygon':
            tempBoxOptions.push(
              <div className={classes} onClick={() => selectType(index)} key={`box-${index}`}>
                <svg width="50" height="50">
                  <rect width="50" height="50" style={{fill: color2}} />
                  <polygon points={component.points} style={{fill: color1}} />
                </svg>
              </div>
            )
            break;
          default:
            tempBoxOptions.push(
              <div className={classes} onClick={() => selectType(index)} key={`box-${index}`}>
                <svg width="50" height="50">
                  <rect width="50" height="50" style={{fill: color1}} />
                </svg>
              </div>
            )
        }
      });
    });

    setBoxOptions(tempBoxOptions);
  }

  return (
    <div>
      <h2>Patterns</h2>
      <div className="box-menu">
        {boxOptions}
      </div>
    </div>
  );
}
export default BoxMenu;