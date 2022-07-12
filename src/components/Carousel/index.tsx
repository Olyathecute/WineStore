import React from 'react'
import WineCell from '../WineCell'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Wine {
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

const settings = {
  className: 'center',
  infinite: true,
  centerPadding: '1rem',
  slidesToShow: 5,
  swipeToSlide: true
}

const Carousel: React.FC<{ wines: Wine[] }> = ({ wines }) => {
  return (
    <Slider {...settings}>
      {wines.map(wine => (
        <WineCell key={wine.id} wine={wine} />
      ))}
    </Slider>
  )
}

export default Carousel
