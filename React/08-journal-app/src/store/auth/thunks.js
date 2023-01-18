import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredencials, login, logout } from "./"

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredencials());
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredencials());

        const result = await signInWithGoogle();
        if(!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
    }
}

export const startCreatingUserWithEmailPassword = ({ displayName, email, password }) => {
    return async(dispatch) => {
        dispatch(checkingCredencials());

        const result = await registerUserWithEmailPassword({ displayName, email, password });
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
    }
}