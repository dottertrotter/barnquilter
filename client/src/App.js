import { useState, useEffect } from "react";
import './App.css';
import Box from './components/Box'
import OptionsMenu from "./components/OptionsMenu";
import { useSelector, useDispatch } from 'react-redux'

import { setBoxTableSize } from './features/gridSlice'

function App() {
  const savedNumberOfRows = useSelector((state) => state.grid.rows);
  const savedNumerOfCols = useSelector((state) => state.grid.cols);

  let numberOfRows = savedNumberOfRows;
  let numberOfCols = savedNumerOfCols;
  const [table, setTable] = useState([]);

  const dispatch = useDispatch();

  function buildTable() {
    let cols = [];
    let rows = [];
    for (let r = 0; r < numberOfRows; r++) {
      for (let c = 0; c < numberOfCols; c++) {
        cols.push(<Box key={`${r}-${c}`} keyValue={`${r}-${c}`} rowIndex={r} colIndex={c}></Box>);
      }
      rows.push(<div className="row" key={`row-${r}`}>{cols}</div>)
      cols = [];
    }
    setTable(rows);
  }

  useEffect(() => {
    if (numberOfRows !== savedNumberOfRows) {
      numberOfRows = savedNumberOfRows;
    }

    if (numberOfCols !== savedNumerOfCols) {
      numberOfCols = savedNumerOfCols;
    }
    buildTable();
    dispatch(setBoxTableSize());
  }, [savedNumberOfRows, savedNumerOfCols]);

  return (
    <div className="container">
      <div className="columns options-column">
        <OptionsMenu />
      </div>
      <div className="columns table-column">
        <div className="table-container">{table}</div>
      </div>
    </div>
  );
}

export default App;
