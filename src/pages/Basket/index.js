import { Wrapper, MainText, ItemsList } from './BasketStyles'
import { LayoutContainer } from '../../styles/elements'
import OrderItem from '../../components/OrderItem'
import LocalizedStrings from 'react-localization'
import l10nResources from './Basket.l10n'
import { wines } from '../../data/winesData'

const l10n = new LocalizedStrings(l10nResources)

// id, name, year, color, taste, strength, country, producer, img, price

const Basket = () => {
  return (
    <LayoutContainer>
      <MainText>{l10n.pageTitle}</MainText>

      <ItemsList>
        {wines.map(wine => (
          <OrderItem key={wine.id} data={wine} />
        ))}
      </ItemsList>

      <p>{l10n.totalPrice}</p>
    </LayoutContainer>
  )
}

export default Basket
