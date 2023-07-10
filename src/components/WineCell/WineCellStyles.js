import styled from 'styled-components'
import { PinkColor, RedColor, DarkRedColor } from '../../styles/colors'
import { Button } from '../../styles/elements'
import { FontText } from '../../styles/fonts'
import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'

export const Name = styled.div`
  font-family: ${FontText};
  font-weight: bold;
  color: ${PinkColor};
  margin: 0.3rem 0;
`

export const Price = styled.div`
  font-family: ${FontText};
  margin-bottom: 0.3rem;
  color: ${PinkColor};
  opacity: 80%;
`

export const HeartEmpty = styled(FiHeart)`
  color: ${PinkColor};
  font-size: 1.3rem;
  cursor: pointer;
`

export const HeartFull = styled(FaHeart)`
  color: ${PinkColor};
  font-size: 1.3rem;
  cursor: pointer;
`

export const Img = styled.img`
  width: 20%;
  height: 7rem;
`

export const Info = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-rows: minmax(1.5rem, auto) 1.5rem 1.5rem;
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BuyButton = styled(Button)`
  width: 80%;
  padding: 0.2rem;
`
