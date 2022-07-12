import React, { useState } from 'react'
import { Wrapper, Logo, Navbar, NavbarItem, Icons, Basket, Heart, Search, LinkStyled } from './HeaderStyles'
import { LOGO } from '../../data/constants'

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Logo>{LOGO}</Logo>
      <Navbar>
        <NavbarItem>
          {/* <LinkStyled to={}>Wines</LinkStyled> */}
          Wines
        </NavbarItem>
        <NavbarItem>
          {/* <LinkStyled to={}>About</LinkStyled> */}
          About
        </NavbarItem>
        <NavbarItem>
          {/* <LinkStyled to={}>Posts</LinkStyled> */}
          Posts
        </NavbarItem>
      </Navbar>
      <Icons>
        <Search />
        <Heart />
        <Basket />
      </Icons>
    </Wrapper>
  )
}

export default Header
