import React from 'react'
import {Link} from 'react-router-dom'

import {HeaderStyled} from './style'

import icon from './icon.png'

export const Header: React.FC = () => {
    return (
        <HeaderStyled>
            <ul>
                <Link to="/">
                    <li>
                        <img src={icon} alt="Фильмы"/>
                        <span>Бонжур 😁</span>
                    </li>
                </Link>
                <Link to="/">
                    <li>contacts</li>
                </Link>
            </ul>
        </HeaderStyled>
    )
}
