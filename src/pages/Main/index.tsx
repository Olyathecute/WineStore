import Banner from '../../components/Sections/Banner'
import BestSellers from '../../components/Sections/BestSellers'
import Posts from '../../components/Sections/Posts'
import GiftCard from '../../components/Sections/GiftCard'
import Discount from '../../components/Sections/Discount'
import Photo from '../../components/Sections/Photos'

const Main: React.FC = () => {
  return (
    <>
      <Banner />
      <BestSellers />
      <Posts />
      <Discount />
      <GiftCard />
      <Photo />
    </>
  )
}

export default Main
