import styled from 'styled-components'
import { LightColor, RedColor, DarkRedColor } from '../../../styles/colors'
import { Section } from '../../../styles/elements'
import { FontText } from '../../../styles/fonts'

export const Wrapper = styled(Section)`
  background-color: ${LightColor};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
`

export const PostsBlock = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Waves = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(134% + 1.3px);
    height: 120px;
  }

  .fill-light {
    fill: ${LightColor};
  }

  .fill-red {
    fill: ${RedColor};
  }
`
