import React from 'react';
import { useContext, useEffect, useState } from "react"
import BoxMenu from './BoxMenu';
import GridMenu from './GridMenu';
import ColorMenu from './ColorMenu';

import { useSelector, useDispatch } from 'react-redux'

function OptionsMenu() {
  const currentTableState = useSelector((state) => state.grid.boxTable);
  const rows = useSelector((state) => state.grid.rows);
  const cols = useSelector((state) => state.grid.cols);
  
  let tableStateData;

  useEffect(() => {
    if (tableStateData !== currentTableState) {
      tableStateData = currentTableState;
    }
  }, [currentTableState]);

  function saveQuilt() {
    //console.log(tableStateData);

    localStorage.setItem('quilts', [{
      rows: rows,
      cols: cols,
      tableData: tableStateData
    }]);
  }

  return (
    <div className="options-menu">
      <GridMenu />
      <BoxMenu />
      <ColorMenu />
      <input type="button" value="Save" onClick={saveQuilt} />
    </div>
  );
}
export default OptionsMenu;