import styled from 'styled-components'
import { PinkColor, DarkRedColor, FontText, Section, Button } from '../../../data/styles'

export const Wrapper = styled(Section)`
  background: linear-gradient(90deg, rgb(255, 255, 255) 64%, rgb(255, 255, 255) 49%, rgb(240, 203, 200));
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
`
export const LeftSide = styled.div`
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
