import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"

import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

import { useForm } from "../../../hooks/useForm"
import { setActiveNote, startSaveNote } from "../../../store/journal"
import { ImageGallery } from "../components"

export const NoteView = () => {

  const { activeNote, messageSaved, isSaving } = useSelector(state => state.journal);
  const dispatch = useDispatch();

  const { body, date, title, onInputChange, formState} = useForm(activeNote);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if(messageSaved.length > 0) {
      Swal.fire('¡Listo!', messageSaved, 'success')
    }
  }, [messageSaved])
  
  
  const onSaveNote = () => {
    dispatch(startSaveNote())
  }

  return (
    <Grid 
        className='animate__animated animate__fadeIn animate__faster'
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{mb:1}}>
        
        <Grid item>
            <Typography fontSize={39} fontWeight="light">{dateString}</Typography>
        </Grid>

        <Grid item>
            <Button 
              disabled={isSaving}
              onClick={onSaveNote}
              color="primaryDark" 
              sx={{padding:2}}>
                <SaveOutlined sx={{fontSize: 30, mr:1}} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                color="primaryDark"
                placeholder="Ingresa un título"
                label="título"
                sx={{border: 'none', mb: 1}}
                name="title"
                value={title}
                onChange={onInputChange}
            />
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                color="primaryDark"
                placeholder="¿Que tienes en mente?"
                minRows={10}
                name="body"
                value={body}
                onChange={onInputChange}
            />
        </Grid>

        {/* Galeria de imagenes */}
        <ImageGallery />
    </Grid>
  )
}
