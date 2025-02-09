import { Box, Fab, IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { Note, NothingSelected } from "../views"
import { Add } from "@mui/icons-material"

export const Journal = () => {
    return (
        <JournalLayout>
            {/* Nothing selected */}
            <NothingSelected />

            {/* Note view */}
            {/* <Note /> */}

            {/* Floating button */}
            <Box
                sx={{ position: 'fixed', right: 30, bottom: 30}}
                className="animate__animated animate__fadeInUp"
            >
                <Fab color="primary" variant="extended" aria-label="add">
                    <Add sx={{mr: 1}} />
                    Agregar nueva nota
                </Fab>
            </Box>
        </JournalLayout>
    )
}
