import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal/journalSlice";
import { checkingCredencials, login, logout } from "./"

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredencials());
  }
}

export const startCreatingUserWithEmailPassword = ({ displayName, email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredencials());

    const result = await registerUserWithEmailPassword({ displayName, email, password });
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredencials());

    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredencials());

    const result = await loginWithEmailPassword({email, password});
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  }
}

export const startLogout = () => {
  return async(dispatch) => {
    await logoutFirebase();
    dispatch(clearNotesLogout())
    dispatch(logout());
  }
}