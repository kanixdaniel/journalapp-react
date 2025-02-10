import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageOnSaved: '',
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
        setMessageOnSave: (state, { payload }) => {
            state.messageOnSaved = payload;
        },
        updateNote: (state, { payload }) => {
            state.notes = state.notes.map(note => note.id === payload.id ? payload : note);
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
    setMessageOnSave,
    updateNote,
    deleteNoteById,
} = journalSlice.actions;