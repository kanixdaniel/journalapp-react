import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { firebaseAuth } from "../firebase/config"
import { login, logout } from "../redux/auth"
import { setTheme } from "../redux/theme"

export const useCheckFirebaseAuth = () => {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.auth);

    useEffect(() => {
        const selectedTheme = localStorage.getItem('theme') || 'greenDark';
        console.log(selectedTheme)
        dispatch(setTheme(selectedTheme));

        onAuthStateChanged(firebaseAuth, async (user) => {
            if (!user) return dispatch(logout());

            // dispatch(login(user));
            const { uid, email, displayName, photoURL } = user;
            dispatch(login({ uid, email, displayName, photoURL }));
        });
    }, []);

    return {
        status
    };
}
