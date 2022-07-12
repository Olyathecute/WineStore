import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWines } from '../../../store/features/winesSlice'
import { Wrapper, Text } from './BestSellersStyles'
import Carousel from '../../Carousel'

const BestSellers = () => {
  const dispatch = useDispatch()
  const bestSellers = useSelector(state => state.wines).filter(wine => wine.id % 2 != 0)

  useEffect(() => {
    dispatch(getWines())
  }, [dispatch])

  return (
    <Wrapper>
      <Text>Best Sellers</Text>
      <Carousel wines={bestSellers} />
    </Wrapper>
  )
}

export default BestSellers
