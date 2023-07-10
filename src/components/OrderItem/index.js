import { Wrapper, ItemWrapper, WineInfo, Image, Description, SubTitle2 } from './OrderItemStyles'
import { SubTitleSmall } from '../../styles/elements'
import Counter from '../Counter'

const upperFirst = word => word[0].toUpperCase() + word.slice(1)

const Item = ({ data }) => {
  const { name, color, taste, strength, size, img, price } = data
  const description = `${upperFirst(color)}, ${upperFirst(taste)}\n${size}l, ${strength}`

  console.log(data)
  return (
    <>
      <Wrapper>
        <ItemWrapper>
          <Image src={img} />
          <WineInfo>
            <SubTitle2>{name}</SubTitle2>
            <Description>{description}</Description>
          </WineInfo>
        </ItemWrapper>
        <Counter currentValue={1} />
        <SubTitleSmall>${price}</SubTitleSmall>
      </Wrapper>
    </>
  )
}

export default Item
