import { Routes, Route } from 'react-router-dom'
import { colorFilter } from './store/features/winesSlice'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer'
import Home from './pages/Home'
import Wines from './pages/Wines'
import About from './pages/About'
import Posts from './pages/Posts'

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

      <button onClick={buttonClick}>Click</button>

      {/* 
      {posts.map(post => {
        return <PostCell post={post} key={post.id} />
      })} */}
      {/* <button onClick={filterTest}>filter</button> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wines" element={<Wines />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        {/* <Route path="/wine/:id" element={} />
        
        <Route path='/post/:id' element={} />
        <Route path='/giftCard' element={} />
        <Route path='/basket' element={} />
        <Route path='/favorite' element={} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
