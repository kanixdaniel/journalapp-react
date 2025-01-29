import { useEffect, useMemo, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { DeleteOutline, SaveOutlined, UploadFileOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

import { useForm } from "../../../hooks/useForm"
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from "../../../store/journal"
import { ImageGallery } from "../components"

export const NoteView = () => {

  const { activeNote, messageSaved, isSaving } = useSelector(state => state.journal);
  const dispatch = useDispatch();

  const { body, date, title, onInputChange, formState } = useForm(activeNote);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('¡Listo!', messageSaved, 'success')
    }
  }, [messageSaved])


  const onSaveNote = () => {
    dispatch(startSaveNote())
  }

  const onFileInputChange = ({target}) => {
    if(target.files.length === 0) return;
    console.log('subiendo archivos')
    dispatch(startUploadingFiles(target.files));
  }

  const onDelete = () => {
    dispatch(startDeletingNote());
  }

  return (
    <Grid
      className='animate__animated animate__fadeIn animate__faster'
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ mb: 1 }}>

      <Grid item>
        <Typography fontSize={39} fontWeight="light">{dateString}</Typography>
      </Grid>

      <Grid item>
        <input 
          type="file"
          multiple
          ref={fileInputRef}
          onChange={onFileInputChange}
          style={{display: 'none'}}
        />
        <IconButton 
          color="primaryDark" 
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadFileOutlined />
        </IconButton>
        <Button
          disabled={isSaving}
          onClick={onSaveNote}
          color="primaryDark"
          sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
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
          sx={{ border: 'none', mb: 1 }}
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

      <Grid container justifyContent='end'>
        <Button
          onClick={onDelete}
          sx={{mt: 2}}
          color='error'
        >
          <DeleteOutline />
          Borrar
        </Button>
      </Grid>

      {/* Galeria de imagenes */}
      <ImageGallery images={activeNote.imageURLs} />
    </Grid>
  )
}
