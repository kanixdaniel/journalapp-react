import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvideer = new GoogleAuthProvider();

export const loginWithEmailPassword = async ({ email, password }) => {
  const correo = email;
  try {
    const result = await signInWithEmailAndPassword(firebaseAuth, correo, password);

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      // User Info
      displayName, email, photoURL, uid
    }

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage
    }
  }
}

export const registerUserWithEmailPassword = async ({ displayName, email, password }) => {
    try {
        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        
        await updateProfile(firebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvideer);
    /* const credentials = GoogleAuthProvider.credentialFromResult(result);
    console.log({credentials}); */

    const { displayName, email, photoURL, uid } = result.user;

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