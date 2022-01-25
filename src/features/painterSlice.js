import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  color1: '#000000',
  color2: '#FFFFFF'
}

export const painterSlice = createSlice({
  name: 'painter',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload
    },
    setColor1: (state, action) => {
      state.color1 = action.payload
    },
    setColor2: (state, action) => {
      state.color2 = action.payload
    }
  },
})

export const { setValue, setColor1, setColor2 } = painterSlice.actions

export default painterSlice.reducer
