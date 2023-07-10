import styled from 'styled-components'
import { DarkRedColor } from '../../styles/colors'
import { FontText } from '../../styles/fonts'
import { Section } from '../../styles/elements'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  min-height: 100vh;
`

export const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
