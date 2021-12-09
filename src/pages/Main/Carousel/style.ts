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
  background-size: 100%;
  border-radius: 16px;
  height: 300px;
  text-align: center;
  position: relative;
  transition: background 0.2s;

  &:hover {
    background-size: 110%;
  }

  button {
    position: absolute;
    font-size: 10px;
    bottom: 10px;
    right: 10px;
  }

  @media (max-width: 768px) {
    height: 180px;
  }
`
