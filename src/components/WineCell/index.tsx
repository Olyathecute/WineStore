import React, { useState } from 'react'
import { Name, Price, Img, Info, Bottom, HeartFull, HeartEmpty, BuyButton } from './WineCellStyles'
import { Cell } from '../../data/styles'

interface Props {
  id: number
  name: string
  year: string
  color: string
  taste: string
  strength: string
  country: string
  producer: string
  img: string
  price: number
}

const WineCell: React.FC<{ wine: Props }> = ({ wine }) => {
  const [like, setLike] = useState<boolean>(false)

  return (
    <Cell>
      <Img src={wine.img} alt={wine.name} />
      <Info>
        <Name>{wine.name}</Name>
        <Price>${wine.price}</Price>
        <Bottom>
          <BuyButton>Buy</BuyButton>
          {like ? <HeartFull onClick={() => setLike(!like)} /> : <HeartEmpty onClick={() => setLike(!like)} />}
        </Bottom>
      </Info>
    </Cell>
  )
}

export default WineCell
