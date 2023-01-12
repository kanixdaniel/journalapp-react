import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const lightPurpleTheme = createTheme({
    palette: {
        primary: {
            main: '#B9B8FF'
        },
        primaryDark: {
            main: '#262254'
        },
        secondary: {
            main: '#BDFF40'
        },
        error: {
            main: red.A400
        }
    }
});