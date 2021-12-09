import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'

export interface IFilm {
    link: string,
    kinopoisk_id: string,
    info: {
        rus: string,
        poster: string,
        rating: {
            vote_num_imdb: string
        }
    }
}

interface Genre {
    title: string,
    data: IFilm[]
}

interface IState {
    films: IFilm[]
    chooseMovie: IFilm,
    genres: Genre[],
    isFetching: boolean,
    isError: boolean
}

const initialState: IState = {
    films: [],
    chooseMovie: {
        link: '',
        kinopoisk_id: '',
        info: {
            rus: '',
            poster: '',
            rating: {
                vote_num_imdb: ''
            }
        }
    },
    genres: [],
    isFetching: false,
    isError: false
}

interface ISearchType {
    titleMovie: string
}

interface IGenresType {
    genre: string
}

interface IFetchFilmById {
    kinopoisk_id: string | undefined
}

export const fetchFilmById = createAsyncThunk(
    'films/fetchFilmById',
    async ({kinopoisk_id = ''}: IFetchFilmById) => {
        try {
            const {data} = await axios.get(`https://bazon.cc/api/search?token=545a8acbd841e88fb58b92f71d6e8b17&kp=${kinopoisk_id}`)
            return data
        } catch (error) {

        }
    }
)

export const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    async ({titleMovie}: ISearchType) => {
        try {
            const res = await axios.get(`https://bazon.cc/api/search?token=545a8acbd841e88fb58b92f71d6e8b17&title=${titleMovie}`)
            const {data} = await res
            return data
        } catch (err) {
            console.log('error', err)
        }
    }
)

export const fetchByGenres = createAsyncThunk(
    'films/fetchByGenres',
    async ({genre}: IGenresType) => {
        try {
            const {data} = await axios.get(`https://bazon.cc/api/json?token=545a8acbd841e88fb58b92f71d6e8b17&type=film&page=1&cat=${genre}`)
            return {data, genre}
        } catch (error) {
            console.log(error)
        }
    }
)

interface IPayload {
    results: IFilm[],
}

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFilms.pending, (state: IState) => {
            state.isError = false
            state.isFetching = true
        })
        builder.addCase(fetchFilms.fulfilled, (state: IState, action: PayloadAction<IPayload>) => {
            state.films = action.payload.results
            state.isFetching = false
        })
        builder.addCase(fetchFilms.rejected, (state: IState) => {
            state.isFetching = false
            state.isError = false
        })
        builder.addCase(fetchFilmById.pending, (state: IState) => {
            state.isError = false
            state.isFetching = true
        })
        builder.addCase(fetchFilmById.fulfilled, (state: IState, action: PayloadAction<any>) => {
            state.isFetching = false
            state.chooseMovie = action.payload.results[0]
        })
        builder.addCase(fetchFilmById.rejected, (state: IState) => {
            state.isFetching = false
            state.isError = false
        })
        builder.addCase(fetchByGenres.pending, (state: IState) => {
            state.isError = false
            state.isFetching = true
        })
        builder.addCase(fetchByGenres.fulfilled, (state: IState, action: PayloadAction<any>) => {
            state.isFetching = false
            // state.genres = action.payload.results
            state.genres?.push({title: action.payload?.genre, data: action.payload.data.results})
            state.genres.map(genre => genre.data.sort((a, b) =>
                Number(b.info.rating.vote_num_imdb) - Number(a.info.rating.vote_num_imdb))
            )
        })
        builder.addCase(fetchByGenres.rejected, (state: IState) => {
            state.isFetching = false
            state.isError = false
        })
    }
})

