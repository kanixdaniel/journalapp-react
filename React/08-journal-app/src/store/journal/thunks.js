import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, setSaving } from "./journalSlice";

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
  }
}