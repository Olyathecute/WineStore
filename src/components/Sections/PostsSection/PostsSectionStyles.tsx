import styled from 'styled-components'
import { LightColor, DarkRedColor, FontText, Section } from '../../../data/styles'

export const Wrapper = styled(Section)`
  background-color: ${LightColor};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const Text = styled.h1`
  font-size: 3rem;
  font-family: ${FontText};
  color: ${DarkRedColor};
  margin: 0;
`

export const PostsBlock = styled.div`
  display: flex;
  justify-content: space-around;
`
