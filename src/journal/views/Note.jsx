import { Save } from "@mui/icons-material"
import { Box, Button, Grid2, Snackbar, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks";
import { useEffect, useMemo, useState } from "react";
import { setActiveNote, setMessageOnSaved, startSaveNote } from "../../redux/journal";

export const Note = () => {
    const dispatch = useDispatch();
    const { active, isSaving, messageOnSaved } = useSelector(state => state.journal);
    const { title, body, date, onInputChange, formState } = useForm(active);
    const dateString = useMemo(() => new Date(date).toDateString(), [date]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (messageOnSaved !== '') return setIsOpen(true);
        setIsOpen(false);
    }, [messageOnSaved]);

    const onSaveNote = () => {
        dispatch(setActiveNote(formState));
        dispatch(startSaveNote());
    }

    const onCloseSnackbar = () => {
        dispatch(setMessageOnSaved(''));
        setIsOpen(false);
    }

    return (
        <Box
            sx={{ minHeight: 'calc(100vh - 112px)' }}
            className="animate__animated animate__fadeIn"
        >
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={isOpen}
                onClose={onCloseSnackbar}
                message={messageOnSaved}
                autoHideDuration={4000}
                key={active.id}
                sx={{ 
                    left: '325px !important',
                    '.css-1wckuhe-MuiPaper-root-MuiSnackbarContent-root': {
                        backgroundColor: 'primary.main',
                        color: 'secondary.main'
                    }
                }}
            />
            <Grid2
                container
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography fontSize={39} fontWeight="light">{dateString}</Typography>
                <Button
                    startIcon={<Save />}
                    size="large"
                    onClick={onSaveNote}
                    disabled={isSaving}
                >
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
                    sx={{ border: 'none', mb: 1 }}
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
