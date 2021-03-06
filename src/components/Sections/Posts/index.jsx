import { Wrapper, Text, PostsBlock, Svg } from './PostsStyles'
import PostCell from '../../PostCell'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPosts } from '../../../store/features/postsSlice'

const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Wrapper>
      <Text>Learn more about wine</Text>
      <PostsBlock>
        {posts.map(post => (
          <PostCell key={post.id} post={post} />
        ))}
      </PostsBlock>
    </Wrapper>
  )
}

export default Posts
