import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { lightPurpleTheme } from './';

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ lightPurpleTheme }>
      <CssBaseline />
      { children }
    </ThemeProvider>
  )
}
