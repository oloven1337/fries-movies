import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Main} from './pages/Main/Main'
import {ThemeProvider} from 'styled-components'
import {Film} from './pages/Film/Film'

import {Header} from './components/Header/Header'

import {darkTheme, GlobalStyled, lightTheme} from './themes'

export const App = () => {
    const [theme, setTheme] = React.useState('light')

    const toggleTheme = React.useCallback(() => {
        localStorage.setItem('theme', theme)
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }, [theme])

    // React.useEffect(() => {
    //     const localTheme = localStorage.getItem('theme')
    // }, [])

    return (
        <ThemeProvider theme={theme === 'light' ? darkTheme : lightTheme}>
            <Header theme={theme} toggleTheme={toggleTheme}/>
            <GlobalStyled/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="film/:kinopoisk_id" element={<Film/>}/>
            </Routes>
        </ThemeProvider>
    )
}
