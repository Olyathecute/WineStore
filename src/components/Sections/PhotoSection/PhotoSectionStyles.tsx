import styled from 'styled-components'
import { PinkColor, RedColor, FontText, Section } from '../../../data/styles'

export const Wrapper = styled(Section)`
  background-color: ${RedColor};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: 3rem;
  font-family: ${FontText};
  color: ${PinkColor};
  margin: 0;
`

export const Message = styled.h1`
  font-family: ${FontText};
  text-align: center;
  color: ${PinkColor};
  margin: 0;
`

export const PhotosBlock = styled.div`
  display: flex;
  justify-content: space-around;
`
