import React from 'react';
import { useContext, useEffect, useState } from "react"
import BoxMenu from './BoxMenu';
import GridMenu from './GridMenu';

function OptionsMenu() {

  return (
    <div className="options-menu">
      <GridMenu />
      <BoxMenu />
    </div>
  );
}
export default OptionsMenu;