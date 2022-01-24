import React from 'react';
import { useContext, useEffect, useState } from "react"

function Box() {
  // Declare a new state variable, which we'll call "count"
  const [style, setStyle] = useState("empty");

  return (
    <div className="box">
      {/* <svg width="50" height="50">
        <rect width="50" height="50" style={{fill: 'rgb(0,0,255)'}} />
        <polygon points="0,0 0,50 50,50" style={{fill: 'lime'}} />
        Sorry, your browser does not support inline SVG.  
      </svg> */}
    </div>
  );
}
export default Box;