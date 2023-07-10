import { Wrapper, RightWrapper, ItemsList } from './BasketStyles'
import { LayoutContainer } from '../../styles/elements'
import OrderItem from '../../components/OrderItem'
import LocalizedStrings from 'react-localization'
import l10nResources from './Basket.l10n'
import { wines } from '../../data/winesData'
import { Title, SubTitle, TitleSmall } from '../../styles/elements'

const l10n = new LocalizedStrings(l10nResources)

// id, name, year, color, taste, strength, country, producer, img, price

const Basket = ({ price = 0 }) => {
  return (
    <LayoutContainer>
      <Title>{l10n.pageTitle}</Title>

      <ItemsList>
        {wines.map(wine => (
          <OrderItem key={wine.id} data={wine} />
        ))}
      </ItemsList>

      <RightWrapper>
        <SubTitle>
          {l10n.totalPrice}&nbsp;${price}
        </SubTitle>
      </RightWrapper>
    </LayoutContainer>
  )
}

export default Basket
