import { Button } from '../../../data/styles'
import { Wrapper, TextSide, ImgSide, Text, Text2, Img } from './GiftCardSectionStyles'

const GiftCardSection: React.FC = () => {
  return (
    <Wrapper>
      <TextSide>
        <Text>
          Gift card <p>A gift gard is the best decision for present!</p>
        </Text>
        <Text2>Learn more</Text2>
      </TextSide>

      <ImgSide>
        <Img src="./assets/giftCard.svg" />
      </ImgSide>
    </Wrapper>
  )
}

export default GiftCardSection
