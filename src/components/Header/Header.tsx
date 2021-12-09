import React from 'react'
import {Link} from 'react-router-dom'

import {HeaderStyled} from './style'

import icon from './netflix.png'
import {Button} from '../Button/Button'

interface Props {
    toggleTheme: () => void
}

export const Header: React.FC<Props> = ({toggleTheme}) => {
    return (
        <HeaderStyled>
            <ul>
                <li>
                    <Link to="/">
                        <img src={icon} alt="Фильмы"/>
                        <span>Бонжур 😁</span>
                    </Link>
                </li>
                <li>
                    <Button clickHandler={toggleTheme}>Сменить тему</Button>
                </li>
            </ul>
        </HeaderStyled>
    )
}
