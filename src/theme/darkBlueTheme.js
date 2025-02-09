import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const darkBlueTheme = createTheme({
    palette: {
        primary: {
            main: '#16425b'
        },
        secondary: {
            main: '#d9dcd6'
        },
        error: {
            main: red.A400
        }
    }
})