import { collection, getDocs } from "firebase/firestore/lite";
import { firebaseDb } from "../firebase/config";

export const loadNotes = async (uid) => {
    if (!uid) throw new Error('No se proporcionó UID del usuario');

    const collectionRef = collection(firebaseDb, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);

    const notes = [];
    docs.forEach(doc => {
        notes.push({ id: doc.id, ...doc.data() })
    });

    return notes;
}