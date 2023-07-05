import { Routes, Route } from 'react-router-dom'
import { colorFilter } from './store/features/winesSlice'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer'
import Main from './pages/Main'
import Wines from './pages/Wines'
import WinePage from './pages/WinePage'
import Posts from './pages/Posts'
import PostPage from './pages/PostPage'
import Basket from './pages/Basket'
import GiftCardPage from './pages/GiftCardPage'
import WishList from './pages/WishList'

const App = () => {
  // useEffect(() => {
  //   dispatch(getWines())
  //   dispatch(getPosts())
  // }, [dispatch])

  // const filterTest = () => {
  //   dispatch(colorFilter('red'))
  // }

  return (
    <>
      <Header />
      {/* 
      {posts.map(post => {
        return <PostCell post={post} key={post.id} />
      })} */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/wines" element={<Wines />} />
        <Route path="/wine/:id" element={<WinePage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/giftCard" element={<GiftCardPage />} />
        <Route path="/favorites" element={<WishList />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
