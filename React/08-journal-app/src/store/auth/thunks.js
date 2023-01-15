import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredencials } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredencials());
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredencials());
        const result = await signInWithGoogle();
    }
}