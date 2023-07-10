import styled, { css } from 'styled-components'
import { PinkDarkColor, PinkColor, RedColor } from '../../styles/colors'
import { FontText } from '../../styles/fonts'
import { FiPlus, FiMinus } from 'react-icons/fi'

const iconStyle = css`
  margin: 0 0.5rem;
  color: ${RedColor};
  font-size: 1rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 2rem;
  weight: auto;

  background-color: ${PinkColor};
  border-radius: 0.5rem;
`

const Button = styled.button`
  text-align: center;
  padding: 0.5rem;
  border: none;
  background-color: ${PinkColor};
  cursor: pointer;

  &:hover {
    background-color: ${PinkDarkColor};
  }
`

export const ButtonLeft = styled(Button)`
  border-radius: 0.5rem 0 0 0.5rem;
`

export const ButtonRight = styled(Button)`
  border-radius: 0 0.5rem 0.5rem 0;
`

export const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 1.5rem;
  background-color: ${PinkColor};
  color: ${RedColor};
  padding: 0 0.5rem;
  font-family: ${FontText};
`

export const Plus = styled(FiPlus)`
  ${iconStyle}
`

export const Minus = styled(FiMinus)`
  ${iconStyle}
`
