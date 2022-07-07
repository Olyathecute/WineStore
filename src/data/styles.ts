import styled from 'styled-components'

export const LightColor = '#FFF3F0'
export const PinkColor = '#FFA79F'
export const RedColor = '#7E2F2D'
export const DarkRedColor = '#4F0106'

export const FontLogo = 'Allison, cursive'
export const FontText = 'Montserrat, sans-serif'

export const Button = styled.button`
  width: 80%;
  padding: 0.2rem;
  cursor: pointer;

  background-color: ${PinkColor};
  color: ${RedColor};
  border-radius: 1rem;
  border: none;
  font-family: ${FontText};
  font-weight: bold;

  &:hover {
    box-shadow: 0 0 10px ${DarkRedColor};
  }
`

export const Cell = styled.div`
  width: 8rem;
  background-color: ${RedColor};
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    // cursor: pointer;
  }
`
