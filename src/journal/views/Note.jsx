import { Save } from "@mui/icons-material"
import { Box, Button, Grid2, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useSelector } from "react-redux";
import { useForm } from "../../hooks";
import { useMemo } from "react";

export const Note = () => {
    const { active } = useSelector(state => state.journal);
    const { title, body, date, onInputChange, formState } = useForm(active);
    const dateString = useMemo(() => new Date(date).toDateString(), [date])

    return (
        <Box
            sx={{ minHeight: 'calc(100vh - 112px)'}}
            className="animate__animated animate__fadeIn"
        >
            <Grid2
                container
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography fontSize={39} fontWeight="light">{ dateString }</Typography>
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
                    onChange={onInputChange}
                    name="title"
                    value={title}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Que sucedió hoy?"
                    rows={5}
                    sx={{ border: 'none', mb: 1 }}
                    onChange={onInputChange}
                    name="body"
                    value={body}
                />
            </Grid2>

            <ImageGallery />
        </Box>
    )
}
