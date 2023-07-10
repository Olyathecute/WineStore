import { Wrapper, ItemWrapper, WineInfo, Image, Title, Price, Description } from './OrderItemStyles'
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
            <Title>{name}</Title>
            <Description>{description}</Description>
          </WineInfo>
        </ItemWrapper>

        <Counter currentValue={1} />
        <Price>{price}$</Price>
      </Wrapper>
    </>
  )
}

export default Item
