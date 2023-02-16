import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: true,
    messageSaved: '',
    notes: [],
    activeNote: null
  },
  reducers: {
    addNewEmptyNote: (state, action) => {
      console.log(state.isSaving);
    },
    setActiveNote: (state, action) => {
      console.log(state.isSaving);
    },
    setNote: (state, action) => {
      console.log(state.isSaving);
    },
    setSaving: (state) => {
      console.log(state.isSaving);
    },
    updateNote: (state, action) => {
      console.log(state.isSaving);
    },
    deleteNoteById: (state, action) => {
      console.log(state.isSaving);
    },
  }
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNote,
  setSaving,
  updateNote,
  deleteNoteById
} = journalSlice.actions;