import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        currentTheme: 'greenDark' // greenDark , blueDark
    },
    reducers: {
        setTheme: (state, {payload}) => {
            state.currentTheme = payload;
        },
        switchTheme: (state, {payload}) => {
            state.currentTheme = payload;
        },
    }
});

export const { setTheme, switchTheme } = themeSlice.actions;