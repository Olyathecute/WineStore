import styled from 'styled-components'
import { Section, Button } from '../../../styles/elements'
import { MainGradient, PinkColor, DarkRedColor } from '../../../styles/colors'
import { FontText } from '../../../styles/fonts'

export const Wrapper = styled(Section)`
  background: ${MainGradient};
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  position: relative;
`
export const LeftSide = styled.div`
  width: 50%;
  display: grid;
  grid-template-rows: repeat(4, 1fr) 4fr;
  align-items: center;
`

export const Text = styled.h1`
  font-size: 3rem;
  font-family: ${FontText};
  color: ${PinkColor};
  margin: 0;

  span {
    color: ${DarkRedColor};
  }
`

export const GoShopButton = styled(Button)`
  font-size: 1.1rem;
  width: 30%;
`

export const Img = styled.img`
  transform: rotate(-30deg);
  height: 40rem;
  padding-left: 4rem;
`

export const Waves = styled.div`
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
    width: calc(100% + 1.3px);
    height: 50px;
    transform: rotateY(180deg);
  }

  .grad {
    fill: url(#MyGradientTop);
  }
`
