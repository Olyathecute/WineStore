import { Wrapper, Text, PostsBlock, Svg } from './PostsStyles'
import PostCell from '../../PostCell'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPosts } from '../../../store/features/postsSlice'
import { Title } from '../../../styles/elements'
import LocalizedStrings from 'react-localization'
import l10nResources from '../Sections.l10n'

const l10n = new LocalizedStrings(l10nResources)

const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Wrapper>
      <Title>{l10n.posts.title}</Title>
      <PostsBlock>
        {posts.map(post => (
          <PostCell key={post.id} post={post} />
        ))}
      </PostsBlock>
    </Wrapper>
  )
}

export default Posts
