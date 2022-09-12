import React, { useState } from 'react'
import { Wrapper, Logo, Navbar, NavbarItem, Icons, Basket, Heart, Search, LinkStyled } from './HeaderStyles'
import { LOGO } from '../../data/constants'

const Header = () => {
  return (
    <Wrapper>
      <LinkStyled to="/">
        <Logo>{LOGO}</Logo>
      </LinkStyled>

      <Navbar>
        <NavbarItem>
          <LinkStyled to="/wines" activeClassName="active" exact>
            Wines
          </LinkStyled>
        </NavbarItem>
        <NavbarItem>
          <LinkStyled to="/about" activeClassName="active" exact>
            About
          </LinkStyled>
        </NavbarItem>
        <NavbarItem>
          <LinkStyled to="/posts" activeClassName="active" exact>
            Posts
          </LinkStyled>
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
