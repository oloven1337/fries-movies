import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {chooseMovieSelector} from '../../__data__/selectors/film'
import {useParams} from 'react-router-dom'
import {fetchFilmById} from '../../__data__/filmsSlice'

export const Film: React.FC = () => {
    const {kinopoisk_id} = useParams()
    const dispatch = useDispatch()
    const {info, link} = useSelector(chooseMovieSelector)

    React.useEffect(() => {
        dispatch(fetchFilmById({kinopoisk_id}))
    }, [kinopoisk_id, dispatch])

    return (
        <>
            <img src={info.poster} alt="poster"/>
            <iframe allowFullScreen src={link} title="Films" />
        </>
    )
}
