import styled from 'styled-components'
import { PinkColor, RedColor } from '../../../styles/colors'
import { Section } from '../../../styles/elements'
import { FontText } from '../../../styles/fonts'

export const Wrapper = styled(Section)`
  background-color: ${RedColor};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title1 = styled.h1`
  font-size: 3rem;
  font-family: ${FontText};
  color: ${PinkColor};
  margin: 0;
`
export const Title2 = styled.h1`
  font-size: 1.5rem;
  font-family: ${FontText};
  color: ${PinkColor};
  margin: 0;
`

export const Message = styled.h1`
  font-size: 1.5rem;
  font-family: ${FontText};
  text-align: center;
  color: ${PinkColor};
  margin: 0;
`

export const PhotosBlock = styled.div`
  display: flex;
  justify-content: space-around;
`
