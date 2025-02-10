import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
    },
    reducers: {
        addNewEmptyNote: (state, { payload }) => {
            state.notes.push(payload);
            state.isSaving = false
        },
        setActiveNote: (state, { payload }) => {
            state.active = payload;
        },
        setNotes: (state, { payload }) => {
            state.notes = payload
        },
        setSaving: (state, { payload }) => {
            state.isSaving = payload;
        },
        updateNotes: (state, action) => {

        },
        deleteNoteById: (state, action) => {

        },
    }
});

export const {
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNotes,
    deleteNoteById,
} = journalSlice.actions;