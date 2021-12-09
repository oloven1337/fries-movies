import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'

import {filmsSlice} from './filmsSlice'

const rootReducer = combineReducers({
    films: filmsSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
