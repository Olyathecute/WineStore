import React, { useState } from 'react'
import { Wrapper, Logo, Navbar, NavbarItem, Icons, Basket, Heart, Search } from './HeaderStyles'
import { LOGO } from '../../data/styles'

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Logo>{LOGO}</Logo>
      <Navbar>
        <NavbarItem>Wines</NavbarItem>
        <NavbarItem>About</NavbarItem>
        <NavbarItem>Posts</NavbarItem>
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
