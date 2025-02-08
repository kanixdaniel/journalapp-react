import { Save } from "@mui/icons-material"
import { Box, Button, Grid2, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const Note = () => {
    return (
        <Box
            sx={{ minHeight: 'calc(100vh - 112px)'}}
        >
            <Grid2
                container
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography fontSize={39} fontWeight="light">8 Feb 2025</Typography>
                <Button startIcon={<Save />} size="large">
                    Guardar
                </Button>
            </Grid2>

            <Grid2 container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingresa un título"
                    label="Título"
                    sx={{border: 'none', mb: 1}}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Que sucedió hoy?"
                    rows={5}
                    sx={{border: 'none', mb: 1}}
                />
            </Grid2>

            <ImageGallery />
        </Box>
    )
}
