import React from 'react';
import { useContext, useEffect, useState } from "react"
import BoxMenu from './BoxMenu';
import GridMenu from './GridMenu';
import ColorMenu from './ColorMenu';

function OptionsMenu() {
  const [data, setData] = React.useState(null);

  function saveQuilt() {
    console.log('save')
  }

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="options-menu">
      <GridMenu />
      <BoxMenu />
      <ColorMenu />
      <input type="button" value="Save" onClick={saveQuilt} />
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}
export default OptionsMenu;