import { LocalFireDepartment, TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box 
        component="nav"
        sx={{ width: {sm: drawerWidth}, flexShrink: {sm:0} }}>
        <Drawer
            variant="permanent"
            open
            sx={{
                display: {sx: 'block'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}>
            
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Daniel Pérez Gonzalez
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map( mes => (
                        <ListItem key={mes} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={mes} />
                                    <ListItemText secondary={'Lorem ipsum dolor sit amet consectetur.'} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
