import React, { useState } from 'react'
import { CellWine, Name, Price, Img, Info, Bottom, HeartFull, HeartEmpty } from './WineCellStyles'
import { Button } from '../../data/styles'

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
    <CellWine>
      <Img src={wine.img} />
      <Info>
        <Name>{wine.name}</Name>
        <Price>${wine.price}</Price>
        <Bottom>
          <Button>Buy</Button>
          {like ? <HeartFull onClick={() => setLike(!like)} /> : <HeartEmpty onClick={() => setLike(!like)} />}
        </Bottom>
      </Info>
    </CellWine>
  )
}

export default WineCell
