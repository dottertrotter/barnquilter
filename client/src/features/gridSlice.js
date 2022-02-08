import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rows: 10,
  cols: 10,
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
      console.log(state.boxTable);
    },
    // action is {rowIndex, colIndex, type, color1, color2}
    addBoxToTable: (state, action) => {
      //console.log(action.payload);

      let copiedBoxTable = JSON.parse(JSON.stringify(state.boxTable));
      copiedBoxTable[action.payload.rowIndex][action.payload.colIndex] = {
        type: action.payload.type,
        color1: action.payload.color1,
        color2: action.payload.color2,
        points: action.payload.points
      };

      state.boxTable = copiedBoxTable;
      console.log(state.boxTable)

    }
  },
})

export const { setGridRows, setGridCols, setBoxTableSize, addBoxToTable } = gridSlice.actions

export default gridSlice.reducer
