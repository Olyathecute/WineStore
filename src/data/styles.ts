import styled from 'styled-components'

export const LightColor = '#FFF3F0'
export const PinkColor = '#FFA79F'
export const RedColor = '#7E2F2D'
export const DarkRedColor = '#4F0106'

export const FontLogo = 'Allison, cursive'
export const FontText = 'Montserrat, sans-serif'

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
export const Section = styled.div`
  height: 70vh;
  width: 100%;
  padding: 3rem 4rem;
  box-sizing: border-box;
`
