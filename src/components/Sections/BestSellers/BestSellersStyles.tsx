import styled from 'styled-components'
import { PinkColor, RedColor, FontText, Section } from '../../../data/styles'

export const Wrapper = styled(Section)`
  background-color: ${RedColor};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const Text = styled.h1`
  margin: 0;
  font-family: ${FontText};
  font-size: 3rem;
  color: ${PinkColor};
`
