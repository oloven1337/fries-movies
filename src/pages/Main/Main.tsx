import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {fetchByGenres, fetchFilms} from '../../__data__/filmsSlice'
import {filmsByGenresSelector, filmsSelector, isFetchingSelector} from '../../__data__/selectors/film'
import {CardStyled, FormStyled, MainStyled} from './style'
import {Link} from 'react-router-dom'
import {CarouselFilms} from './Carousel/Carousel'
import {Button} from '../../components/Button/Button'
import {RootState} from "../../__data__/store";

export const Main: React.FC = () => {
    const [text, setText] = React.useState('')
    const dispatch = useDispatch()
    const films = useSelector(filmsSelector)
    const loader = useSelector(isFetchingSelector)
    const filmsByGenres = useSelector(filmsByGenresSelector)

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }, [])

    const submitHandler = React.useCallback((event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        if (text.length) {
            dispatch(fetchFilms({titleMovie: text}))
        }

    }, [text, dispatch])

    React.useEffect(() => {
        dispatch(fetchByGenres({genre: 'аниме'}))
    }, [dispatch])

    // React.useEffect(() => {
    //     dispatch(fetchByGenres({genre: 'телесериал'}))
    // }, [dispatch])

    return (
        <>
            <MainStyled>
                <FormStyled>
                    <input onChange={handleChange} value={text} type="text" placeholder="Поиск"/>
                    <Button type="submit" clickHandler={submitHandler}>
                        Искать
                    </Button>
                </FormStyled>
                {films?.length === 0 && <CarouselFilms/>}
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
                <h2>Аниме</h2>
                {loader ? <h2>loading</h2> : (
                    <CardStyled genre>
                        {filmsByGenres?.map(genre => genre.data?.map(film =>
                                <div key={film.link}>
                                    <Link key={film.kinopoisk_id} to={`/film/${film.kinopoisk_id}`}>
                                        <div>
                                            <img src={film.info.poster} alt="poster"/>
                                            <h4>{film.info.rus}</h4>
                                        </div>
                                    </Link>
                                </div>
                            )
                        )}
                    </CardStyled>
                )}
            </MainStyled>
        </>
    )
}
