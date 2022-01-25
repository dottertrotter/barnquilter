import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rows: 15,
  cols: 15
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
  },
})

export const { setGridRows, setGridCols } = gridSlice.actions

export default gridSlice.reducer
