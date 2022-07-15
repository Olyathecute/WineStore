import { Wrapper, Top, Title1, Title2, Message, PhotosBlock } from './PhotosStyles'
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
        <Title1>Show your moments!</Title1>
        <Title2>See our Instagram</Title2>
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
