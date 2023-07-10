import { Wrapper, Top, PhotosBlock } from './PhotosStyles'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPhotos } from '../../../store/features/photosSlice'
import PhotoCell from '../../PhotoCell'
import { Title, SubTitle } from '../../../styles/elements'
import LocalizedStrings from 'react-localization'
import l10nResources from '../Sections.l10n'

const l10n = new LocalizedStrings(l10nResources)

const PhotoSection = () => {
  const dispatch = useDispatch()
  const photos = useSelector(state => state.photos)

  useEffect(() => {
    dispatch(getPhotos())
  }, [dispatch])

  return (
    <Wrapper>
      <Top>
        <Title $light>{l10n.photos.title1}</Title>
        <SubTitle $light>{l10n.photos.title2}</SubTitle>
      </Top>

      <PhotosBlock>
        {photos.map(photo => (
          <PhotoCell key={photo.id} photo={photo} />
        ))}
      </PhotosBlock>
      <SubTitle $light>{l10n.photos.subTitle}</SubTitle>
    </Wrapper>
  )
}

export default PhotoSection
