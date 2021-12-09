import React from 'react'

import {ButtonStyled} from './style'

interface Props {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void,
    type?: string
}


export const Button: React.FC<Props> = ({children}) => (
    <ButtonStyled>{children}</ButtonStyled>
)
