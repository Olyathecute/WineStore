import styled from 'styled-components'
import { LightColor, PinkColor, TransparentBlack } from '../../styles/colors'
import { Section } from '../../styles/elements'
import { Title, Image as Picture, SubTitle, Text, LayoutContainer } from '../../styles/elements'

export const Wrapper = styled.div`
  background-color: ${LightColor};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const PostsWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  margin: 20px 0;
`

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  &:hover {
    cursor: pointer;
    background-color: ${TransparentBlack};
    border-radius: 10px;
  }
`

export const Image = styled(Picture)`
  width: 200px;
  height: 200px;
`

export const PostTitle = styled(SubTitle)`
  margin: 1rem 0;
`

export const PostText = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  margin: 0;
`
