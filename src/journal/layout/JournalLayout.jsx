import { Box } from '@mui/material';
import { Navbar } from '../components/NavBar';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
    return (
        <>
            {/* Navbar */}
            <Navbar drawerWidth={drawerWidth} />

            {/* Sidebar */}

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, backgroundColor: 'secondary.main', height: '100%' }}
            >
                {/* view container */}
                {children}
            </Box>
        </>
    )
}
