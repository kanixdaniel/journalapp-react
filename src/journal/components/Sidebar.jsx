import { EventNote } from "@mui/icons-material"
import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { useState } from "react"
import { useSelector } from "react-redux"
import { SidebarItem } from "./"

export const Sidebar = ({ drawerWidth = 240 }) => {
    const { notes } = useSelector(state => state.journal);
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
                        backgroundColor: 'primary.main'
                    },
                }}
            >
                <Toolbar 
                    sx={{ backgroundColor: 'secondary.main', display: { xs: 'none', sm: 'flex' } }}
                >
                    <EventNote color="primary" sx={{ mr: 2 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        color="primary"
                        sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            textDecoration: 'none',
                        }}
                    >
                        JOURNAL APP
                    </Typography>
                </Toolbar>
                <Divider />
                <List /* onClick={() => handleDrawerClose(false)} */>
                    {
                        notes.map(note => (
                            <SidebarItem key={note.id} {...note} />
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
