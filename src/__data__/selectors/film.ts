import {RootState} from '../store'

export const filmsSelector = ((state:RootState) => state.films.films)
export const isFetchingSelector = ((state:RootState) => state.films.isFetching)
export const chooseMovieSelector = ((state:RootState) => state.films.chooseMovie)
