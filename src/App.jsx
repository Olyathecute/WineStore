import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getWines } from './store/features/winesSlice'
import { getPosts } from './store/features/postsSlice'
import { colorFilter } from './store/features/winesSlice'
import WineCell from './components/WineCell'
import PostCell from './components/PostCell'
import Header from './components/Header'
import Footer from './components/Footer'
import MainSection from './components/Sections/MainSection'
import BestSellers from './components/Sections/BestSellers'
import PostsSection from './components/Sections/PostsSection'
import GiftCardSection from './components/Sections/GiftCardSection'
import DiscountSection from './components/Sections/DiscountSection'
import PhotoSection from './components/Sections/PhotoSection'

const App = () => {
  const wines = useSelector(state => state.wines)
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()

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

      <MainSection />
      <BestSellers />
      <PostsSection />
      <DiscountSection />
      <GiftCardSection />
      <PhotoSection />

      {/* {wines.map(wine => {
        return <WineCell wine={wine} key={wine.id} />
      })}

      {posts.map(post => {
        return <PostCell post={post} key={post.id} />
      })} */}
      {/* <button onClick={filterTest}>filter</button> */}
      {/* <Routes>
        <Route path='/' element={} />
        <Route path='/wines' element={} />
				<Route path="/wine/:id" element={} />
        <Route path='/about' element={} />
        <Route path='/posts' element={} />
        <Route path='/post/:id' element={} />
        <Route path='/giftCard' element={} />
        <Route path='/basket' element={} />
        <Route path='/favorite' element={} />
      </Routes> */}
      <Footer />
    </>
  )
}

export default App
