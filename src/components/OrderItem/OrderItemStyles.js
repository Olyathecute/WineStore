import styled from 'styled-components'
import { DarkRedColor } from '../../styles/colors'
import { FontText } from '../../styles/fonts'
import { SubTitleSmall } from '../../styles/elements'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 30%;
`

export const WineInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 3rem;

  font-family: ${FontText};
  color: ${DarkRedColor};
`

export const Description = styled.div`
  margin: 0;
  white-space: pre-wrap;
`

export const SubTitle2 = styled(SubTitleSmall)`
  margin-bottom: 0;
`

export const Image = styled.img.attrs(({ src }) => ({
  src: src
}))`
  width: 3rem;
`
