import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'

export interface IFilm {
    link: string,
    kinopoisk_id: string,
    info: {
        rus: string,
        poster: string
    }
}

interface IState {
    films: IFilm[]
    chooseMovie: IFilm,
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
            poster: ''
        }
    },
    isFetching: false,
    isError: false
}

interface ISearchType {
    titleMovie: string
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
    }
})

