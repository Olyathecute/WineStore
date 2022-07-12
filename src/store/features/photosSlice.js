import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllPhotos } from '../../data/interface'

export const getPhotos = createAsyncThunk('photos/getPhotos', async (_, { rejectWithValue, dispatch }) => {
  const wines = await getAllPhotos()
  dispatch(setPhotos(wines))
})

const photosSlice = createSlice({
  name: 'photos',
  initialState: [],
  reducers: {
    setPhotos: (_, action) => action.payload
  }
})

export const { setPhotos } = photosSlice.actions
export default photosSlice.reducer
