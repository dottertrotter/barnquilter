import React from 'react';
import { useContext, useEffect, useState } from "react"
import BoxMenu from './BoxMenu';
import GridMenu from './GridMenu';
import ColorMenu from './ColorMenu';

import { useSelector, useDispatch } from 'react-redux'

function OptionsMenu() {
  const [data, setData] = React.useState(null);

  const currentTableState = useSelector((state) => state.grid.boxTable);
  let tableStateData;

  useEffect(() => {
    if (tableStateData !== currentTableState) {
      tableStateData = currentTableState;
    }
  }, [currentTableState]);

  function saveQuilt() {
    console.log(tableStateData);

    fetch("/save", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tableStateData)
    })
    .then((res) => res.json());
    //.then((data) => setData(data.message));
  }

  return (
    <div className="options-menu">
      <GridMenu />
      <BoxMenu />
      <ColorMenu />
      <input type="button" value="Save" onClick={saveQuilt} />
      <p>{!data ? "" : data}</p>
    </div>
  );
}
export default OptionsMenu;