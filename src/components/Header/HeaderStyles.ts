import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PinkColor, RedColor, DarkRedColor, FontText, FontLogo, Button, Cell } from '../../data/styles'
import { BsBasket } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'

export const Wrapper = styled.div`
  background-color: ${DarkRedColor};
  box-shadow: 0 0 1rem ${DarkRedColor};
  padding: 0.1rem 1.5rem;
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.h1`
  margin: 0;
  color: ${PinkColor};
  font-family: ${FontLogo};
  font-weight: lighter;
  font-size: 3.2rem;
`

export const LinkStyled = styled(Link)``

export const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const NavbarItem = styled.h4`
  margin: 0 1.5rem;
  color: ${PinkColor};
  font-family: ${FontText};
  font-weight: lighter;
  font-size: 1.5rem;
`

export const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Basket = styled(BsBasket)`
  margin: 0 0.5rem;
  color: ${PinkColor};
  font-size: 1.5rem;
`
export const Heart = styled(FaHeart)`
  margin: 0 0.5rem;
  color: ${PinkColor};
  font-size: 1.5rem;
`
export const Search = styled(BsSearch)`
  margin: 0 0.5rem;
  color: ${PinkColor};
  font-size: 1.5rem;
`
