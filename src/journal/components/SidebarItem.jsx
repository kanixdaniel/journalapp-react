import { StickyNote2TwoTone } from "@mui/icons-material"
import { Divider, Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

export const SidebarItem = ({ title, date }) => {
    return (
        <>
            <ListItem
                disablePadding
                className="animate__animated animate__fadeInUp"
            >
                <ListItemButton>
                    <ListItemIcon>
                        <StickyNote2TwoTone color="secondary" />
                    </ListItemIcon>
                    <Grid2>
                        <ListItemText
                            sx={{
                                '& span': {
                                    color: 'secondary.main',
                                    fontSize: 18,
                                    overflow: 'hidden',
                                    display: '-webkit-box',
                                    '-webkit-box-orient': 'vertical',
                                    '-webkit-line-clamp': '1'
                                }
                            }}
                            primary={title}
                        />
                        <ListItemText
                            sx={{ '& p': { color: 'white' } }}
                            secondary={new Date(date).toDateString()}
                        />
                    </Grid2>
                </ListItemButton>
            </ListItem>
            <Divider sx={{ backgroundColor: 'secondary.main'}} />
        </>
    )
}
