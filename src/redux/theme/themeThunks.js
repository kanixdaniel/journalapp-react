import { switchTheme } from "./themeSlice";

export const onChangeTheme = () => {
    return async (dispatch, getState) => {
        const { currentTheme } = getState().theme;
        const newTheme = currentTheme === 'greenDark' ? 'blueDark' : 'greenDark';
        localStorage.setItem('theme', newTheme);
        dispatch(switchTheme(newTheme));
    }
}