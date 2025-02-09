import { useState } from 'react';
import { AccountCircle, EventNote, Logout, Menu as MenuIcon, Settings } from '@mui/icons-material';
import { AppBar, Avatar, Divider, Grid2, IconButton, ListItemIcon, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../redux/auth';
import { onChangeTheme } from '../../redux/theme';

export const Navbar = ({ drawerWidth = 240 }) => {
    const { displayName, photoURL } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const onOpenMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    }

    const onSwitchTheme = () => {
        dispatch(onChangeTheme())
    }

    const onLogout = () => {
        dispatch(startLogout());
    }

    return (
        <AppBar
            position="fixed"
            sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}
        >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Grid2 container alignItems="center" sx={{flexGrow: 1}} >
                    <EventNote sx={{ mr: 2, display: { sm: 'none' } }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            display: { sm: 'none' } 
                        }}
                    >
                        JOURNAL APP
                    </Typography>
                </Grid2>
                <Grid2 sx={{ flexGrow: 0 }}>
                    <Tooltip title="Opciones del usuario">
                        <IconButton sx={{ p: 0 }} onClick={onOpenMenu}>
                            {
                                photoURL
                                    ? <Avatar alt={displayName} src={photoURL} />
                                    : <AccountCircle color='secondary' />
                            }
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px', '& ul': { backgroundColor: 'secondary.main', color: 'primary.main' } }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={isOpenMenu}
                        onClose={() => setIsOpenMenu(false)}
                        onClick={() => setIsOpenMenu(false)}
                    >
                        <MenuItem>
                            {displayName}
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={onSwitchTheme}>
                            <ListItemIcon>
                                <Settings color='primary' fontSize="small" />
                            </ListItemIcon>
                            Cambiar tema
                        </MenuItem>
                        <MenuItem onClick={onLogout}>
                            <ListItemIcon>
                                <Logout color='primary' fontSize="small" />
                            </ListItemIcon>
                            Cerrar sesión
                        </MenuItem>
                    </Menu>
                </Grid2>
            </Toolbar>
        </AppBar>
    );
}
