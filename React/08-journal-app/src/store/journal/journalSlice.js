import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    activeNote: null
  },
  reducers: {
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload;
      state.isSaving = false;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
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
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById
} = journalSlice.actions;