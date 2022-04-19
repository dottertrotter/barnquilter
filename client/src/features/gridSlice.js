import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rows: 10,
  cols: 10,
  boxTable: [],
  colorsArray: []
}

export const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    setGridRows: (state, action) => {
      state.rows = action.payload
    },
    setGridCols: (state, action) => {
      state.cols = action.payload
    },
    setBoxTableSize: (state, action) => {
      let cols = [];
      let rows = [];
      for (let r = 0; r < state.rows; r++) {
        for (let c = 0; c < state.cols; c++) {
          cols.push({});
        }
        rows.push(cols)
        cols = [];
      }
      state.boxTable = rows;
    },
    
    // action.payload is {rowIndex, colIndex, type, color1, color2, points}
    addBoxToTable: (state, action) => {
      let copiedBoxTable = JSON.parse(JSON.stringify(state.boxTable));
      copiedBoxTable[action.payload.rowIndex][action.payload.colIndex] = {
        type: action.payload.type,
        color1: action.payload.color1,
        color2: action.payload.color2,
        points: action.payload.points
      };

      state.boxTable = copiedBoxTable;

      let tempColorsArray = state.colorsArray;
      if (action.payload.color1 && !state.colorsArray.includes(action.payload.color1)) {
        tempColorsArray.push(action.payload.color1);
      }

      if (action.payload.color2 && !state.colorsArray.includes(action.payload.color2)) {
        tempColorsArray.push(action.payload.color2);
      }

      state.colorsArray = tempColorsArray;  
    }
  },
})

export const { setGridRows, setGridCols, setBoxTableSize, addBoxToTable } = gridSlice.actions

export default gridSlice.reducer
