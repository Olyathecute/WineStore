import { Button } from '../../../data/styles'
import { Wrapper, Text, Img, TextSide, ImgSide } from './DiscountSectionStyles'

const DiscountSection: React.FC = () => {
  return (
    <Wrapper>
      <ImgSide>
        <Img src="./assets/bottles.svg" />
      </ImgSide>

      <TextSide>
        <Text>
          <div>
            <p>Special Summer Offer</p>
          </div>
          25% DISCOUNT
          <p>for all wines of 2019</p>
        </Text>
        <Button>Show wine</Button>
      </TextSide>
    </Wrapper>
  )
}

export default DiscountSection
