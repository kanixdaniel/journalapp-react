import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { greenDarkTheme } from './';
import { darkBlueTheme } from './';
import { useSelector } from 'react-redux';

export const AppTheme = ({ children }) => {
    const { currentTheme } = useSelector(state => state.theme);

    return (
        <ThemeProvider theme={currentTheme === 'greenDark' ? greenDarkTheme : darkBlueTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
