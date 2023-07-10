import styled from 'styled-components'
import { Section, Button, Title } from '../../../styles/elements'
import { MainGradient, DarkRedColor } from '../../../styles/colors'

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

export const BannerTitle = styled(Title)`
  margin: 0;

  p {
    color: ${DarkRedColor};
    margin: 0;
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
