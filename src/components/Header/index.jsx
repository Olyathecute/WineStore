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
          <LinkStyled to="/posts" activeClassName="active" exact>
            Posts
          </LinkStyled>
        </NavbarItem>
      </Navbar>
      <Icons>
        <Search />
        <LinkStyled to="/favorites" activeClassName="active" exact>
          <Heart />
        </LinkStyled>
        <LinkStyled to="/basket" activeClassName="active" exact>
          <Basket />
        </LinkStyled>
      </Icons>
    </Wrapper>
  )
}

export default Header
