import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Main} from "./pages/Main/Main";
import {Film} from "./pages/Film/Film";
import {darkTheme, GlobalStyled, lightTheme} from "./themes";
import {ThemeProvider} from 'styled-components';
import {Header} from "./components/Header/Header";

export const App = () => {
    const [theme, setTheme] = React.useState('dark')

    const toggleTheme = React.useCallback(() => {
        localStorage.setItem('theme', theme)
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }, [theme])

    React.useEffect(() => {
        const localTheme = localStorage.getItem('theme')
    }, [])

    return (
        <ThemeProvider theme={theme === 'light' ? darkTheme : lightTheme}>
            <Header toggleTheme={toggleTheme}/>
            <GlobalStyled/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="film/:kinopoisk_id" element={<Film/>}/>
            </Routes>
        </ThemeProvider>

    );
};
