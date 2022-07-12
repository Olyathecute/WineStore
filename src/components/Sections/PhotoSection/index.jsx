import { Wrapper, Top, Title, Message, PhotosBlock } from './PhotoSectionStyles'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPhotos } from '../../../store/features/photosSlice'
import PhotoCell from '../../PhotoCell'

const PhotoSection = () => {
  const dispatch = useDispatch()
  const photos = useSelector(state => state.photos)

  useEffect(() => {
    dispatch(getPhotos())
  }, [dispatch])

  return (
    <Wrapper>
      <Top>
        <Title>Show your moments!</Title>
        <Title>See our Instagram</Title>
      </Top>

      <PhotosBlock>
        {photos.map(photo => (
          <PhotoCell key={photo.id} photo={photo} />
        ))}
      </PhotosBlock>
      <Message>Share your photo with #FullGlass</Message>
    </Wrapper>
  )
}

export default PhotoSection
