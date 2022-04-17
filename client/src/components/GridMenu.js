import React from 'react';
import { useEffect, useState } from "react"
import BoxTypes from '../data/boxTypes';

import { useSelector, useDispatch } from 'react-redux'
import { setGridRows, setGridCols, setBoxTableSize } from '../features/gridSlice'


function GridMenu() {
  const [rows, setRows] = useState(useSelector((state) => state.grid.rows));
  const [cols, setCols] = useState(useSelector((state) => state.grid.cols));

  const dispatch = useDispatch();

  function handleRows(event) {
    dispatch(setGridRows(event.target.value));
    dispatch(setBoxTableSize(event.target.value));
    setRows(event.target.value);
  }

  function handleCols(event) {
    dispatch(setGridCols(event.target.value));
    dispatch(setBoxTableSize(event.target.value));
    setCols(event.target.value);
  }

  return (
    <div>
      <h2>Grid Size</h2>
      <label htmlFor="rows">Rows</label>
      <input type="number" value={rows} className="grid-input" name="rows" onChange={(e) => handleRows(e)} />
      <label htmlFor="cols">Columns</label>
      <input type="number" value={cols} className="grid-input" name="cols" onChange={(e) => handleCols(e)} />
    </div>
  );
}
export default GridMenu;