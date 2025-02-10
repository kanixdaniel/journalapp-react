import { Box, Fab, IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { Note, NothingSelected } from "../views"
import { Add } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../redux/journal"

export const Journal = () => {
    const dispatch = useDispatch();
    const { isSaving, active } = useSelector(state => state.journal);

    const onNewNote = () => {
        dispatch(startNewNote());
    }

    return (
        <JournalLayout>
            {
                !!active
                    ? <Note />
                    : <NothingSelected />
            }

            {/* Floating button */}
            <Box
                sx={{ position: 'fixed', right: 30, bottom: 30}}
                className="animate__animated animate__fadeInUp"
            >
                <Fab
                    onClick={onNewNote}
                    disabled={isSaving}
                    color="primary"
                    variant="extended"
                    aria-label="agregar nota"
                >
                    <Add sx={{mr: 1}} />
                    Agregar nueva nota
                </Fab>
            </Box>
        </JournalLayout>
    )
}
