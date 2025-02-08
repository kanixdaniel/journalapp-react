import * as React from 'react';
import { EventNote, Menu } from '@mui/icons-material';
import { AppBar, Avatar, Grid2, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';

export const Navbar = ({ drawerWidth = 240 }) => {
    return (
        <AppBar
            position="sticky"
            sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}
        >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <Menu />
                </IconButton>
                <Grid2 container alignItems="center" sx={{flexGrow: 1}} >
                    <EventNote sx={{ mr: 2 }} />
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
                        }}
                    >
                        JOURNAL APP
                    </Typography>
                </Grid2>
                <Grid2 sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip>
                </Grid2>
            </Toolbar>
        </AppBar>
    );
}
