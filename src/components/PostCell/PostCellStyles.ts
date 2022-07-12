import styled from 'styled-components'
import { PinkColor, FontText } from '../../data/styles'

export const Name = styled.div`
  font-family: ${FontText};
  font-weight: bold;
  color: ${PinkColor};
  margin: 1rem 0 0 0;
  text-align: center;
`

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  height: 10rem;
  border-radius: 0.5rem;
`
