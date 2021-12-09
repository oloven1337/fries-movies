import React from 'react'
import 'antd/dist/antd.css'

import gnev from './gnev.jpg'
import osman from './osman.jpg'
import mk from './mk.jpg'

import {CarouselItemStyled, CarouselStyled} from './style'
import {Button} from '../../../components/Button/Button'
import {Link} from 'react-router-dom'

export const CarouselFilms: React.FC = () => {

    return (
        <CarouselStyled autoplay dotPosition="right">
            <CarouselItemStyled photo={osman}>
                <Link to="/film/1311615">
                    <Button>Смотреть</Button>
                </Link>
            </CarouselItemStyled>
            <CarouselItemStyled photo={gnev}>
                <Link to="/film/1311615">
                    <Button>Смотреть</Button>
                </Link>
            </CarouselItemStyled>
            <CarouselItemStyled photo={mk}>
                <Link to="/film/8062">
                    <Button>Смотреть</Button>
                </Link>
            </CarouselItemStyled>
        </CarouselStyled>
    )
}
