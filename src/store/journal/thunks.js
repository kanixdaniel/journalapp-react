import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { fileUpload, loadNotes } from "../../helpers";
import { addNewEmptyNote, deleteNoteById, savingNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";

export const startNewNote = () => {
  return async(dispatch, getState) => {
    dispatch(setSaving());
    // Obtener el UID
    const {uid} = getState().auth;

    const newNote = {
      title: '',
      body: '',
      imageURLs: [],
      date: new Date().getTime(),
    }

    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    // dispatchs
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  }
}

export const startLoadingNotes = () => {
  return async(dispatch, getState) => {
    const { uid } = getState().auth;
    if(!uid) throw new Error('El UID del usuario no existe!');

    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  }
}

export const startSaveNote = () => {
  return async(dispatch, getState) => {
    dispatch(savingNote());
    const { uid } = getState().auth;
    const { activeNote } = getState().journal;
    if (!uid) throw new Error('El UID del usuario no existe!');

    const noteToFireStore = {...activeNote};
    delete noteToFireStore.id;

    const docRef = doc(firebaseDB, `${uid}/journal/notes/${activeNote.id}`);
    await setDoc(docRef, noteToFireStore, {merge: true});

    dispatch(updateNote(activeNote));
  }
}

export const startUploadingFiles = (files = []) => {
  return async(dispatch) => {
    dispatch(savingNote());
    
    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }

    const photosUrls = await Promise.all(fileUploadPromises);
    dispatch(setPhotosToActiveNote(photosUrls));
  }
}

export const startDeletingNote = () => {
  return async(dispatch, getState) => {
    const {uid} = getState().auth;
    const {activeNote} = getState().journal;
    
    const docRef = doc(firebaseDB, `${uid}/journal/notes/${activeNote.id}`);
    await deleteDoc(docRef);

    dispatch(deleteNoteById(activeNote.id));
  }
}