import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvideer = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvideer);
        /* const credentials = GoogleAuthProvider.credentialFromResult(result);
        console.log({credentials}); */

        const {displayName, email, photoURL, uid} = result.user;

        return {
            ok: true,
            // User Info
            displayName, email, photoURL, uid
        }

    } catch (error) {
        // console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
        }
    }
}