import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllWines } from '../../data/interface'

export const getWines = createAsyncThunk('wines/getWines', async (_, { rejectWithValue, dispatch }) => {
  const wines = await getAllWines()
  dispatch(setWines(wines))
})

const winesSlice = createSlice({
  name: 'wines',
  initialState: [],
  reducers: {
    setWines: (_, action) => action.payload,
    colorFilter: (state, action) => (state = state.filter(wine => wine.color === action.payload)),
    tasteFilter: (state, action) => (state = state.filter(wine => wine.taste === action.payload)),
    priceFilter: (state, action) => (state = state.filter(wine => wine.price >= action.payload[0] && wine.price <= action.payload[1]))
  }
})

export const { setWines, colorFilter, tasteFilter, priceFilter } = winesSlice.actions
export default winesSlice.reducer
