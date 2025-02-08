import { StickyNote2TwoTone } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const Sidebar = ({ drawerWidth = 240 }) => {
    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent"
                open={true}
                // onClose={handleDrawerClose}
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
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">Memos</Typography>
                </Toolbar>
                <Divider />
                <List>
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
