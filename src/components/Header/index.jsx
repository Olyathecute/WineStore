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
          <LinkStyled to="/wines" activeclassname="active" exact="true">
            Wines
          </LinkStyled>
        </NavbarItem>
        <NavbarItem>
          <LinkStyled to="/posts" activeclassname="active" exact="true">
            Posts
          </LinkStyled>
        </NavbarItem>
      </Navbar>
      <Icons>
        <Search />
        <LinkStyled to="/favorites" activeclassname="active" exact="true">
          <Heart />
        </LinkStyled>
        <LinkStyled to="/basket" activeclassname="active" exact="true">
          <Basket />
        </LinkStyled>
      </Icons>
    </Wrapper>
  )
}

export default Header
