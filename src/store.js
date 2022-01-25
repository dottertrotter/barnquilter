import { configureStore } from '@reduxjs/toolkit'
import painterReducer from './features/painterSlice'
import gridReducer from './features/gridSlice'

export default configureStore({
  reducer: {
    painter: painterReducer,
    grid: gridReducer
  },
})