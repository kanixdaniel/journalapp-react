import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers";
import { addNewEmptyNote, savingNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice";

export const startNewNote = () => {
  return async(dispatch, getState) => {
    dispatch(setSaving());
    // Obtener el UID
    const {uid} = getState().auth;

    const newNote = {
      title: '',
      body: '',
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