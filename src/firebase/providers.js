import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result); // para obtener token
        const {displayName, email, photoURL, uid} = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        };
    } catch (error) {
        console.error(error);
        const {code, message} = error;
        return {
            ok: false,
            errorCode: code, 
            errorMessage: message
        }
    }
}