import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWines } from './store/features/winesSlice'
import { colorFilter } from './store/features/winesSlice'

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
      <div>hello</div>
      {wines.map(wine => {
        return <h1 key={wine.id}>{wine.name}</h1>
      })}
      <button onClick={filterTest}>filter</button>
    </>
  )
}

export default App
