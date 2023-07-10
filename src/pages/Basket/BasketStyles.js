import styled from 'styled-components'
import { MainGradient, LightColor, PinkColor, RedColor, DarkRedColor } from '../../styles/colors'
import { FontText } from '../../styles/fonts'
import { Section } from '../../styles/elements'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  min-height: 100vh;
`

export const MainText = styled.h1`
  font-size: 3rem;
  font-family: ${FontText};
  color: ${DarkRedColor};
`

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
`

export const Item = styled.div``
