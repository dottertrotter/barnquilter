import React from 'react';
import { useContext, useEffect, useState } from "react"
import BoxMenu from './BoxMenu';
import GridMenu from './GridMenu';
import ColorMenu from './ColorMenu';

function OptionsMenu() {

  return (
    <div className="options-menu">
      <GridMenu />
      <BoxMenu />
      <ColorMenu />
    </div>
  );
}
export default OptionsMenu;