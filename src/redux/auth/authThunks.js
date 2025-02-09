import { registerWithEmail, signInWithEmail, signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./"

export const startEmailSignIn = ({email, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithEmail({ email, password });

        if (!result.ok) return dispatch(logout(result.errorMessage));

        delete result.ok;
        dispatch(login(result));
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();

        if (!result.ok) return dispatch(logout(result.errorMessage));

        delete result.ok;
        dispatch(login(result));
    }
}

export const startRegisterWithEmail = (formInputs) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await registerWithEmail(formInputs);
        
        if (!result.ok) return dispatch(logout(result.errorMessage));

        delete result.ok;
        dispatch(login(result));
    }
}