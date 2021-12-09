import {createGlobalStyle} from "styled-components";

declare module 'styled-components' {
    interface DefaultTheme {
        body: string,
        backgroundColor: string,
        color: string
    }
}


export const darkTheme = {
    body: '#191a1f',
    color: 'white',
    backgroundColor: '#191a1f'
}

export const lightTheme = {
    body: '#e5e5e5',
    color: '#191a1f',
    backgroundColor: '#fff'
}

export const GlobalStyled = createGlobalStyle`
  body {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 10px;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    background-color: ${props => props.theme.backgroundColor};
    transition: .5s;
  }
  
  h4 {
    color: ${props => props.theme.color};
  }
`
