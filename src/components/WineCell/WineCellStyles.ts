import styled from 'styled-components'
import { PinkColor, RedColor, DarkRedColor, FontText, Button, Cell } from '../../data/styles'
import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'

export const CellWine = styled(Cell)`
  box-shadow: 0 3px 7px ${DarkRedColor};
`
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
`

export const Info = styled.div`
  width: 100%;
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
