import { StickyNote2TwoTone } from "@mui/icons-material"
import { Divider, Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../redux/journal";

export const SidebarItem = ({ note }) => {
    const dispatch = useDispatch();

    const onSelectItem = () => {
        dispatch(setActiveNote(note));
    }

    return (
        <>
            <ListItem
                disablePadding
                onClick={onSelectItem}
                className="animate__animated animate__fadeInRight"
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
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: '1'
                                }
                            }}
                            primary={note.title}
                        />
                        <ListItemText
                            sx={{ '& p': { color: 'white' } }}
                            secondary={new Date(note.date).toDateString()}
                        />
                    </Grid2>
                </ListItemButton>
            </ListItem>
            <Divider
                sx={{ backgroundColor: 'secondary.main' }}
                className="animate__animated animate__fadeInRight"
            />
        </>
    )
}
