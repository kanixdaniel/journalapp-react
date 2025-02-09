import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { themeSlice } from './theme'
import { journalSlice } from './journal'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        theme: themeSlice.reducer,
        journal: journalSlice.reducer,
    },
})