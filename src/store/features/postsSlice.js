import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllPosts } from '../../data/interface'

export const getPosts = createAsyncThunk('posts/getPosts', async (_, { rejectWithValue, dispatch }) => {
  const posts = await getAllPosts()
  dispatch(setPosts(posts))
})

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    setPosts: (_, action) => action.payload
  }
})

export const { setPosts } = postsSlice.actions
export default postsSlice.reducer
