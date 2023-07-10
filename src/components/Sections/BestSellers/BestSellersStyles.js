import styled from 'styled-components'
import { MainGradient, LightColor, PinkColor, RedColor } from '../../../styles/colors'
import { Section, Title as ElementsTitle } from '../../../styles/elements'
import { FontText } from '../../../styles/fonts'

export const Wrapper = styled(Section)`
  background-color: ${RedColor};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
`

export const WavesBottom = styled.div`
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

  .fill {
    fill: ${LightColor};
  }
`

export const WavesTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(134% + 1.3px);
    height: 50px;
    transform: rotateY(180deg);
  }

  .grad {
    fill: url(#MyGradientBottom);
  }
`
