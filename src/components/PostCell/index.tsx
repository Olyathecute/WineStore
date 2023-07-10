import { Name, Img } from './PostCellStyles'
import { Cell } from '../../styles/elements'

interface Post {
  id: number
  name: string
  img: string
  text: number
}

const PostCell: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Cell>
      <Img src={post.img} alt={post.name} />
      <Name>{post.name}</Name>
    </Cell>
  )
}

export default PostCell
