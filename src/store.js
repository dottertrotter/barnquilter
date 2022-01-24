import { configureStore } from '@reduxjs/toolkit'
import painterReducer from './features/painterSlice'

export default configureStore({
  reducer: {
    painter: painterReducer
  },
})