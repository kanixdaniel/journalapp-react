import { EventNote, StickyNote2TwoTone } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useState } from "react"

export const Sidebar = ({ drawerWidth = 240 }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleDrawerClose = (newValue) => {
        setIsOpen(newValue);
    }

    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent"
                open={isOpen}
                onClose={() => handleDrawerClose(false)}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        backgroundColor: 'primary.main',
                        color: 'white'
                    },
                }}
            >
                <Toolbar sx={{ display: { xs: 'none', sm: 'flex' } }}>
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
                </Toolbar>
                <Divider />
                <List /* onClick={() => handleDrawerClose(false)} */>
                    {
                        ['enero', 'febrero', 'marzo'].map(mes => (
                            <ListItem key={mes} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <StickyNote2TwoTone color="secondary" />
                                    </ListItemIcon>
                                    <Grid2>
                                        <ListItemText primary={mes} />
                                        <ListItemText color="primary" secondary="lorem" />
                                    </Grid2>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
