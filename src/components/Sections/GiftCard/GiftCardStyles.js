import styled from 'styled-components'
import { LightColor, PinkColor, DarkRedColor, RedColor } from '../../../styles/colors'
import { Section, Button } from '../../../styles/elements'
import { FontText } from '../../../styles/fonts'

export const Wrapper = styled(Section)`
  background-color: ${LightColor};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
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
  max-width: 80%;

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
  height: 15rem;
`

export const Waves = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(204% + 1.3px);
    height: 93px;
    transform: rotateY(180deg);
  }

  .fill {
    fill: ${RedColor};
  }
`
