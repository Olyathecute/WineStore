import styled, { css } from 'styled-components'
import { LightColor, PinkColor, RedColor, DarkRedColor, MainGradient } from './colors'
import { FontLogo, FontText } from './fonts'

export const LayoutContainer = styled.div`
  background-color: ${LightColor};
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: calc(100vh - 20rem);
`

export const Button = styled.button`
  background-color: ${PinkColor};
  color: ${RedColor};
  border-radius: 1rem;
  border: none;
  font-family: ${FontText};
  font-weight: bold;
  display: inline;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px ${DarkRedColor};
  }
`

export const Cell = styled.div`
  width: 8rem;
  height: 13rem;
  background-color: ${RedColor};
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr 1fr;

  box-shadow: 0 3px 7px ${DarkRedColor};

  &:hover {
    // cursor: pointer;
  }
`
export const Section = styled.section`
  height: 80vh;
  width: 100%;
  padding: 3rem 4rem;
  box-sizing: border-box;
`

const fontStyle = css`
  font-family: ${FontText};
  color: ${props => (props.$light ? PinkColor : DarkRedColor)};
`

export const Title = styled.h1`
  font-size: 46px;
  ${fontStyle}
`

export const SubTitle = styled.h3`
  font-size: 26px;
  ${fontStyle}
`

export const SubTitleSmall = styled.h5`
  font-size: 20px;
  ${fontStyle}
`

export const Text = styled.p`
  ${fontStyle}
`
