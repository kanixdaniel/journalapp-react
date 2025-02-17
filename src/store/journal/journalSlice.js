import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    activeNote: null,
    imageURLs: []
  },
  reducers: {
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload;
      state.isSaving = false;
      state.messageSaved = '';
    },
    setPhotosToActiveNote: (state, action) => {
      state.activeNote.imageURLs = [...state.activeNote.imageURLs, ...action.payload];
      state.isSaving = false;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
    },
    savingNote: (state) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map( note => 
        note.id === action.payload.id
        ? action.payload
        : note
      );
      state.messageSaved = `¡${action.payload.title} se actualizó correctamente!`
    },
    deleteNoteById: (state, action) => {
      state.activeNote = null;
      state.notes = state.notes.filter(note => note.id !== action.payload);
      state.messageSaved = `¡${action.payload.title}, ha sido eliminada correctamente!`
    },
    clearNotesLogout: (state, action) => {
      state.isSaving = false;
      state.messageSaved = '';
      state.notes = null;
      state.activeNote = null;
      state.imageURLs = null;
    },
  }
});

export const {
  addNewEmptyNote,
  deleteNoteById,
  clearNotesLogout,
  savingNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} = journalSlice.actions;