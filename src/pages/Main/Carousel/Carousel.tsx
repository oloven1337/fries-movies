import React from 'react'
import 'antd/dist/antd.css'

import gnev from './gnev.jpg'
import osman from './osman.jpg'
import mk from './mk.jpg'

import {CarouselItemStyled, CarouselStyled} from "./style";
import {Button} from "../../../components/Button/Button";

export const CarouselFilms: React.FC = () => {

    return (
        <CarouselStyled autoplay dotPosition="right">
            <CarouselItemStyled photo={osman}>
                <Button>Смотреть</Button>
            </CarouselItemStyled>
            <CarouselItemStyled photo={gnev}>
                <Button>Смотреть</Button>
            </CarouselItemStyled>
            <CarouselItemStyled photo={mk}>
                <Button>Смотреть</Button>
            </CarouselItemStyled>
        </CarouselStyled>
    )
}
