import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {Header} from '../../components/Header/Header'
import {fetchFilms} from '../../__data__/filmsSlice'
import {filmsSelector, isFetchingSelector} from '../../__data__/selectors/film'
import {CardStyled, FormStyled} from './style'
import {Link} from 'react-router-dom'

export const Main: React.FC = () => {
    const [text, setText] = React.useState('')
    const dispatch = useDispatch()
    const films = useSelector(filmsSelector)
    const loader = useSelector(isFetchingSelector)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    const submitHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        if (text.length) {
            dispatch(fetchFilms({titleMovie: text}))
        }
    }

    return (
        <>
            <Header/>
            <main>
                <FormStyled>
                    <input onChange={handleChange} value={text} type="text"/>
                    <button type="submit" onClick={submitHandler}>Искать</button>
                </FormStyled>
                {loader ? <h2>Loading...</h2> : (
                    <CardStyled>
                        {films?.map((film) => (
                            <Link key={film.kinopoisk_id} to={`/film/${film.kinopoisk_id}`}>
                                <div>
                                    <img src={film.info.poster} alt="poster"/>
                                    <h4>{film.info.rus}</h4>
                                </div>
                            </Link>
                        ))}
                    </CardStyled>
                )}
            </main>
        </>
    )
}
