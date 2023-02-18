import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { useForm } from "../../../hooks/useForm"
import { ImageGallery } from "../components"

export const NoteView = () => {

  const { activeNote } = useSelector(state => state.journal)

  const { body, date, title, onInputChange, formState} = useForm(activeNote);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date])

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
            <Button color="primaryDark" sx={{padding:2}}>
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
