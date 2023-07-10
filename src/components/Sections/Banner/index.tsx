import { NavLink } from 'react-router-dom'
import { Button } from '../../../styles/elements'
import { GLASS } from '../../../data/constants'
import { Wrapper, LeftSide, Text, Img, GoShopButton, Waves } from './BannerStyles'

const BannerSection: React.FC = () => {
  return (
    <Wrapper>
      <LeftSide>
        <div></div>
        <div></div>

        <Text>
          Make your day <span>better</span>
        </Text>
        <GoShopButton>
          <NavLink to="/wines">Shop wine</NavLink>
        </GoShopButton>
      </LeftSide>

      <Img src={GLASS} />
      <Waves>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <linearGradient id="MyGradientTop" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="49%" stopColor="rgb(255, 255, 255)" />
            <stop offset="64%" stopColor="rgb(255, 255, 255)" />
            <stop offset="100%" stopColor="rgb(240, 203, 200)" />
          </linearGradient>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="grad"
          ></path>
        </svg>
      </Waves>
    </Wrapper>
  )
}

export default BannerSection
