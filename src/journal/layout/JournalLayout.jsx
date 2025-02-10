import { Box, Snackbar, Toolbar } from '@mui/material';
import { Navbar, Sidebar } from '../components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMessageOnSaved } from '../../redux/journal';

const drawerWidth = 300;

export const JournalLayout = ({ children }) => {
    const dispatch = useDispatch();
    const { messageOnSaved, active } = useSelector(state => state.journal);
    const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);

    useEffect(() => {
        if (messageOnSaved !== '') return setIsOpenSnackbar(true);
        setIsOpenSnackbar(false);
    }, [messageOnSaved]);

    const onCloseSnackbar = () => {
        dispatch(setMessageOnSaved(''));
        setIsOpenSnackbar(false);
    }

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={isOpenSnackbar}
                onClose={onCloseSnackbar}
                message={messageOnSaved}
                autoHideDuration={4000}
                key={drawerWidth}
                sx={{
                    display: !!active ? 'none' : '',
                    '.css-1wckuhe-MuiPaper-root-MuiSnackbarContent-root': {
                        backgroundColor: 'primary.main',
                        color: 'secondary.main'
                    }
                }}
            />
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
                    ml: { sm: `${drawerWidth}px` }
                }}
            >
                {/* view container */}
                <Toolbar />
                {children}
            </Box>
        </>
    )
}
