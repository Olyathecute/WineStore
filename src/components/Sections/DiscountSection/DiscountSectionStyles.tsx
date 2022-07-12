import styled from 'styled-components'
import { LightColor, PinkColor, DarkRedColor, FontText, FontLogo, Section, Button } from '../../../data/styles'

export const Wrapper = styled(Section)`
  background-color: ${PinkColor};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
export const TextSide = styled.div`
  width: 50%;
`

export const ImgSide = styled.div`
  width: 50%;
  text-align: center;
`
export const Text = styled.h1`
  font-size: 3rem;
  font-family: ${FontText};
  color: ${DarkRedColor};
  margin: 0;

  div p {
    font-family: ${FontLogo};
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 100;
    margin: 0.5rem 0;
  }
`

export const Text2 = styled.h3`
  font-size: 2rem;
  font-family: ${FontText};
  color: ${DarkRedColor};
  margin: 0;
  max-width: 80%;
`

export const Img = styled.img`
  height: 22rem;
`
