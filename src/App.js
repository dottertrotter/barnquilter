import { useContext, useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Box from './components/Box'
import OptionsMenu from "./components/OptionsMenu";

function App() {

  const [numberOfRows, setNumberOfRows] = useState(12);
  const [numberOfCols, setNumberOfCols] = useState(12);
  const [table, setTable] = useState([]);

  function buildTable() {
    let cols = [];
    let rows = [];
    for (let r = 0; r < numberOfRows; r++) {
      for (let c = 0; c < numberOfCols; c++) {
        cols.push(<Box key={`${r}-${c}`}></Box>);
      }
      rows.push(<div className="row" key={`row-${r}`}>{cols}</div>)
      cols = [];
    }
    setTable(rows);
  }

  useEffect(() => {
    buildTable();
  }, [numberOfRows, numberOfCols]);

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
