import styled from 'styled-components'
import { LightColor, RedColor, DarkRedColor } from '../../styles/colors'
import { FontText } from '../../styles/fonts'

export const Wrapper = styled.div`
  background-color: ${LightColor};
  padding: 1rem 1.5rem;
  display: grid;
  grid-template-areas:
    'i m'
    's m';
  grid-gap: 1rem;
  color: ${RedColor};
`

export const Info = styled.div`
  grid-area: i;
  display: flex;
  justify-content: space-around;
`
export const Title = styled.h3`
  font-family: ${FontText};
  margin: 0.7rem 0;
`

export const Column = styled.div``

export const List = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ListItem = styled.li`
  font-family: ${FontText};
  list-style-type: none;
`

export const Social = styled.div`
  grid-area: s;
  display: flex;

  justify-content: center;
  font-size: 2rem;
`

export const MapSection = styled.div`
  grid-area: m;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Map = styled.iframe`
  width: 100%;
  height: 100%;
  border: 1px solid ${DarkRedColor};
  loading: lazy;
  margin: 0.5rem 0;
`

export const Text = styled.p`
  margin: 0;
  font-size: 0.8rem;
`

export const Section = styled.div`
  margin: 0 1rem;
`
