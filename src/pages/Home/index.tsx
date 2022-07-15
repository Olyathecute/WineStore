import Main from '../../components/Sections/Main'
import BestSellers from '../../components/Sections/BestSellers'
import Posts from '../../components/Sections/Posts'
import GiftCard from '../../components/Sections/GiftCard'
import Discount from '../../components/Sections/Discount'
import Photo from '../../components/Sections/Photos'

const Home: React.FC = () => {
  return (
    <>
      <Main />
      <BestSellers />
      <Posts />
      <Discount />
      <GiftCard />
      <Photo />
    </>
  )
}

export default Home
