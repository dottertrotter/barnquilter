import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  color: '#000000'
}

export const painterSlice = createSlice({
  name: 'painter',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setValue } = painterSlice.actions

export default painterSlice.reducer
