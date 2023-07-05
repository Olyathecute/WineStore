import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { LightColor, PinkColor, RedColor, DarkRedColor, FontText, FontLogo, Button, Cell } from '../../data/styles'
import { BsBasket } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'

const iconStyle = css`
  margin: 0 0.5rem;
  color: ${PinkColor};
  font-size: 1.5rem;
`

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

export const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${PinkColor};

  &.${props => props.activeClassName} {
    color: ${LightColor};
  }
`

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
  ${iconStyle}
`
export const Heart = styled(FaHeart)`
  ${iconStyle}
`
export const Search = styled(BsSearch)`
  ${iconStyle}
`
