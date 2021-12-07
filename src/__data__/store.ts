import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
