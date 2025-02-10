import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDb } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, setMessageOnSaved, setNotes, setSaving, setUploadedImages, updateNote } from "./";
import { fileUpload, loadNotes } from "../../helpers";

export const startLoadingAllNotes = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(setSaving(true));
            const { uid } = getState().auth;
    
            const notes = await loadNotes(uid);
            dispatch(setNotes(notes));
            dispatch(setSaving(false));
        } catch (error) {
            console.error(error);
            dispatch(setSaving(false));
            dispatch(setMessageOnSaved('No fue posible recuperar sus notas. Intente más tarde'));
        }
    }
}

export const startNewNote = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(setSaving(true));
            const { uid } = getState().auth;
    
            const newNote = {
                title: '',
                body: '',
                date: new Date().getTime(),
                imageUrls: []
            }
    
            const newDoc = doc(collection(firebaseDb, `${uid}/journal/notes`));
            await setDoc(newDoc, newNote);
    
            newNote.id = newDoc.id;
    
            dispatch(addNewEmptyNote(newNote));
            dispatch(setActiveNote(newNote));
            dispatch(setSaving(false));
        } catch (error) {
            console.error(error);
            dispatch(setSaving(false));
            dispatch(setMessageOnSaved('No fue posible crear una nueva nota. Intente más tarde'));
        }
    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(setSaving(true));
            const { uid } = getState().auth;
            const { active: note } = getState().journal;
    
            const noteToFirestore = { ...note };
            // Se borra el id, porque si se manda a Firestore crea una nueva nota
            delete noteToFirestore.id;
    
            const docRef = doc(firebaseDb, `${uid}/journal/notes/${note.id}`);
            await setDoc(docRef, noteToFirestore, { merge: true });
            dispatch(updateNote(note));
            dispatch(setMessageOnSaved('Nota actualizada correctamente'));
            dispatch(setSaving(false));
        } catch (error) {
            console.error(error);
            dispatch(setSaving(false));
            dispatch(setMessageOnSaved('No fue posible actualizar la nota. Intente más tarde'));
        }
    }
}

export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
        try {
            dispatch(setSaving(true));

            const fileUploadPromises = [];
            for (const file of files) {
                fileUploadPromises.push(fileUpload(file));
            }
            const imageUrls = await Promise.all(fileUploadPromises);

            dispatch(setUploadedImages(imageUrls));
            dispatch(setSaving(false));
        } catch (error) {
            console.error(error);
            dispatch(setSaving(false));
            dispatch(setMessageOnSaved(error.message));
        }
    }
}