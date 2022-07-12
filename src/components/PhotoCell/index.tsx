import { Img } from './PhotoCellStyles'

interface Photo {
  id: number
  img: string
}

const PhotoCell: React.FC<{ photo: Photo }> = ({ photo }) => {
  return <Img src={photo.img} alt={`picture${photo.id}`} />
}

export default PhotoCell
