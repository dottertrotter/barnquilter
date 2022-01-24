import React from 'react';
import { useContext, useEffect, useState } from "react"
import BoxMenu from './BoxMenu';

function OptionsMenu() {

  return (
    <div className="options-menu">
      <h2>Options</h2>
      <BoxMenu />
    </div>
  );
}
export default OptionsMenu;