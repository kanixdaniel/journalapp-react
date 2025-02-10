import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const greenDarkTheme = createTheme({
    palette: {
        primary: {
            main: '#04471c'
        },
        secondary: {
            main: '#f1faee'
        },
        error: {
            main: red.A400
        }
    }
})