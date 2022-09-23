import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const LOCAL_STORAGE_FAV_KEY = 'github repo like'

interface GithubState {
    favourites: string[]
}

const initialState: GithubState = {
    favourites: JSON.parse(localStorage.getItem(LOCAL_STORAGE_FAV_KEY) ?? '[]')
}

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addFafourites(state, action: PayloadAction<string>) {
            state.favourites.push(action.payload)
            localStorage.setItem(LOCAL_STORAGE_FAV_KEY, JSON.stringify(state.favourites))
        },
        removeFavourites(state, action: PayloadAction<string>) {
            state.favourites = state.favourites.filter(f => f !== action.payload)
            localStorage.setItem(LOCAL_STORAGE_FAV_KEY, JSON.stringify(state.favourites))
        }
    }
})

export const gihubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer