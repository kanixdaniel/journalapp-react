import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { greenDarkTheme } from './';

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={greenDarkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
