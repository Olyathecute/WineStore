import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getWines } from './store/features/winesSlice'
import { colorFilter } from './store/features/winesSlice'
import WineCell from './components/WineCell'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  const wines = useSelector(state => state.wines)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWines())
  }, [dispatch])

  const filterTest = () => {
    dispatch(colorFilter('red'))
  }

  return (
    <>
      <Header />
      {wines.map(wine => {
        return <WineCell wine={wine} key={wine.id} />
      })}
      <button onClick={filterTest}>filter</button>
      <Routes>
        <Route path='/' element={} />
        <Route path='/wines' element={} />
				<Route path="/wine/:id" element={} />
        <Route path='/about' element={} />
        <Route path='/posts' element={} />
        <Route path='/post/:id' element={} />
        <Route path='/giftCard' element={} />
        <Route path='/basket' element={} />
        <Route path='/favorite' element={} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
