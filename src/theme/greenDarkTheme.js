import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const greenDarkTheme = createTheme({
    palette: {
        primary: {
            main: '#31572c'
        },
        secondary: {
            main: '#ecf39e'
        },
        error: {
            main: red.A400
        }
    }
})