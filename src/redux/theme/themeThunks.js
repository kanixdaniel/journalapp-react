import { switchTheme } from "./themeSlice";

export const onChangeTheme = (currentTheme) => {
    return async (dispatch) => {
        const newTheme = currentTheme === 'greenDark' ? 'blueDark' : 'greenDark';
        localStorage.setItem('theme', newTheme);
        dispatch(switchTheme(newTheme));
    }
}