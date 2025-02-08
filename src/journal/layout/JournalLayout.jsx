import { Box, Toolbar } from '@mui/material';
import { Navbar, Sidebar } from '../components';

const drawerWidth = 300;

export const JournalLayout = ({ children }) => {
    return (
        <>
            {/* Navbar */}
            <Navbar drawerWidth={drawerWidth} />

            {/* Sidebar */}
            <Sidebar drawerWidth={drawerWidth} />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    backgroundColor: 'secondary.main',
                    ml: { sm: `${drawerWidth}px`}
                }}
            >
                {/* view container */}
                <Toolbar />
                {children}
            </Box>
        </>
    )
}
