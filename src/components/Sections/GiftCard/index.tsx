import { NavLink } from 'react-router-dom'
import { Button, Title, SubTitleSmall } from '../../../styles/elements'
import { GIFT_CARD } from '../../../data/constants'
import { Wrapper, TextSide, ImgSide, Img, Waves } from './GiftCardStyles'
import LocalizedStrings from 'react-localization'
import l10nResources from '../Sections.l10n'

const l10n = new LocalizedStrings(l10nResources)

const GiftCard: React.FC = () => {
  return (
    <Wrapper>
      <TextSide>
        <Title>{l10n.giftCard.title}</Title>
        <SubTitleSmall>{l10n.giftCard.text}</SubTitleSmall>
        <NavLink to="/giftCard">
          <SubTitleSmall>Learn more</SubTitleSmall>
        </NavLink>
      </TextSide>

      <ImgSide>
        <Img src={GIFT_CARD} />
      </ImgSide>
      <Waves>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill"
          ></path>
        </svg>
      </Waves>
    </Wrapper>
  )
}

export default GiftCard
