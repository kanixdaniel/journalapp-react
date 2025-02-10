import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDb } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, setNotes, setSaving } from "./";
import { loadNotes } from "../../helpers";

export const startLoadingAllNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes))
    }
}

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving(true));
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(firebaseDb, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}