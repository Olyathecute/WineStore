import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './features/postsSlice'
import winesSlice from './features/winesSlice'
import photosSlice from './features/photosSlice'

const store = configureStore({
  devTools: true,
  reducer: {
    wines: winesSlice,
    posts: postsSlice,
    photos: photosSlice
  }
})

export default store
