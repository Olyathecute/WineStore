import styled from 'styled-components'
import { LightColor, PinkColor, DarkRedColor, FontText, FontLogo, Section, Button } from '../../../data/styles'

export const Wrapper = styled(Section)`
  background-color: ${PinkColor};
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
  height: 20rem;
`

export const WavesTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(102% + 1.3px);
    height: 104px;
    transform: rotateY(180deg);
  }

  .fill {
    fill: ${LightColor};
  }
`

export const WavesBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(102% + 1.3px);
    height: 99px;
    transform: rotateY(180deg);
  }

  .fill {
    fill: ${LightColor};
  }
`
