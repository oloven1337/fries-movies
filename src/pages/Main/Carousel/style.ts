import styled from 'styled-components'

import {Carousel} from 'antd'

interface Props {
    photo: string
}

export const CarouselStyled = styled(Carousel)`
  margin: 0 auto;
  width: 600px;

  @media (max-width: 768px) {
    width: 350px;
  }
`

export const CarouselItemStyled = styled.div<Props>`
  background: ${props => `url(./${props.photo})`} center/cover;
  border-radius: 16px;
  height: 300px;
  text-align: center;
  position: relative;

  button {
    font-size: 10px;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  @media (max-width: 768px) {
    height: 180px;
  }
`
