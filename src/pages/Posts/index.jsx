import { Title, LayoutContainer } from '../../styles/elements'
import LocalizedStrings from 'react-localization'
import l10nResources from './Posts.l10n'
import { Wrapper, PostsWrapper, PostWrapper, Image, PostTitle, PostText } from './PostsStyles'
import { posts } from '../../data/postsData'

const l10n = new LocalizedStrings(l10nResources)

const Posts = () => {
  return (
    <LayoutContainer>
      <Wrapper>
        <Title>{l10n.title}</Title>
        <PostsWrapper>
          {posts.map(post => (
            <PostWrapper key={post.id}>
              <Image src={post.img} />
              <PostTitle>{post.name}</PostTitle>
              <PostText>{post.text.slice(0, 60)}...</PostText>
            </PostWrapper>
          ))}
        </PostsWrapper>
      </Wrapper>
    </LayoutContainer>
  )
}

export default Posts
