import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result); // para obtener token
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        };
    } catch (error) {
        console.error(error);
        const { code, message } = error;
        return {
            ok: false,
            errorCode: code,
            errorMessage: getErrorMessage(message)
        }
    }
}

export const signInWithEmail = async () => {

}

export const registerWithEmail = async ({ fullName, email, password }) => {
    try {
        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const { uid, photoURL } = resp.user;

        await updateProfile(firebaseAuth.currentUser, { displayName: fullName });

        return {
            ok: true,
            displayName: fullName,
            email,
            photoURL,
            uid
        };
    } catch (error) {
        console.error(error);
        const { code, message } = error;
        return {
            ok: false,
            errorCode: code,
            errorMessage: getErrorMessage(message)
        }
    }
}

const getErrorMessage = (firebaseError) => {
    switch (firebaseError) {
        case 'Firebase: Error (auth/email-already-in-use).':
            return 'Este usuario ya fue registrado'
        case 'Firebase: Error (auth/popup-closed-by-user).':
            return 'Ha cerrado la ventana emergente antes de completar el inicio de sesión. Intente de nuevo'
        default:
            return firebaseError;
    }
}