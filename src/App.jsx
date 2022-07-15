import { Routes, Route } from 'react-router-dom'
import { colorFilter } from './store/features/winesSlice'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

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
      <Home />

      {/* 
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
