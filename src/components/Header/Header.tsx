import React from 'react'
import {Link} from 'react-router-dom'

import {HeaderStyled} from './style'

import icon from './netflix.png'
import {Switch} from 'antd'

interface Props {
    toggleTheme: () => void,
    theme: string
}

export const Header: React.FC<Props> = ({toggleTheme, theme}) => {
    return (
        <HeaderStyled>
            <ul>
                <li>
                    <Link to="/">
                        <img src={icon} alt="Фильмы"/>
                        <h1>Бонжур 😁</h1>
                    </Link>
                </li>
                <li>
                    <Switch
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                        checkedChildren="Light"
                        unCheckedChildren="Dark"
                    />
                </li>
            </ul>
        </HeaderStyled>
    )
}
