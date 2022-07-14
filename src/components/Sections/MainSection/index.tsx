import { Button } from '../../../data/styles'
import { GLASS } from '../../../data/constants'
import { Wrapper, LeftSide, Text, Img, GoShopButton } from './MainSectionStyles'

const MainSection: React.FC = () => {
  return (
    <Wrapper>
      <LeftSide>
        <div></div>
        <div></div>

        <Text>
          Make your day <span>better</span>
        </Text>
        <GoShopButton>Shop wine</GoShopButton>
      </LeftSide>

      <Img src={GLASS} />
    </Wrapper>
  )
}

export default MainSection
