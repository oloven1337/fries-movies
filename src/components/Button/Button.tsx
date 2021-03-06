import React from 'react'

import {ButtonStyled} from './style'

interface Props {
    clickHandler?: (event: React.MouseEvent<HTMLElement>) => void,
    type?: string,
}


export const Button: React.FC<Props> = ({children, clickHandler}) => (
    <ButtonStyled onClick={clickHandler}>{children}</ButtonStyled>
)
