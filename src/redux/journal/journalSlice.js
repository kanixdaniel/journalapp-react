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
        setMessageOnSaved: (state, { payload }) => {
            state.messageOnSaved = payload;
        },
        updateNote: (state, { payload }) => {
            state.notes = state.notes.map(note => note.id === payload.id ? payload : note);
        },
        setUploadedImages: (state, { payload }) => {
            state.active.imageUrls = [...payload, ...state.active.imageUrls];
        },
        deleteNoteById: (state, { payload }) => {
            state.notes = state.notes.filter(note => note.id !== payload);
            state.active = null;
        },
        clearJournalState: (state) => {
            state.isSaving = false;
            state.messageOnSaved = '';
            state.notes = [];
            state.active = null;
        },
    }
});

export const {
    addNewEmptyNote,
    clearJournalState,
    deleteNoteById,
    setActiveNote,
    setMessageOnSaved,
    setNotes,
    setSaving,
    setUploadedImages,
    updateNote,
} = journalSlice.actions;