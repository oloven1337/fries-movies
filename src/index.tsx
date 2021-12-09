import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {createGlobalStyle} from 'styled-components'

import {store} from './__data__/store'
import {Main} from './pages/Main/Main'
import {Film} from './pages/Film/Film'

const GlobalStyled = createGlobalStyle`
  body {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 10px;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
  }
`

const Router = () => (
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="film/:kinopoisk_id" element={<Film/>}/>
    </Routes>
)

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyled/>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
)
