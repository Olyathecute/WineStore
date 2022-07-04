import { configureStore } from '@reduxjs/toolkit'
import winesSlice from './features/winesSlice'

const store = configureStore({
  devTools: true,
  reducer: {
    wines: winesSlice
  }
})

export default store
