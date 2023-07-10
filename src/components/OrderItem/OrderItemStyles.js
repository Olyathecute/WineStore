import styled from 'styled-components'
import { MainGradient, LightColor, PinkColor, RedColor, DarkRedColor } from '../../styles/colors'
import { FontText } from '../../styles/fonts'
import { Section } from '../../styles/elements'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 10px 30px 10px 40px;
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 50%;
`

export const WineInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 2rem;

  font-family: ${FontText};
  color: ${DarkRedColor};
`

export const Title = styled.h3``

export const Description = styled.div`
  margin: 0;
  white-space: pre-wrap;
`

export const Image = styled.img.attrs(({ src }) => ({
  src: src
}))`
  width: 3rem;
`

export const Price = styled.h3`
  color: ${DarkRedColor};
`
