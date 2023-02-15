import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid 
        className='animate__animated animate__fadeIn animate__faster'
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{mb:1}}>
        
        <Grid item>
            <Typography fontSize={39} fontWeight="light">28 de Agosto, 2023</Typography>
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
            />
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                color="primaryDark"
                placeholder="¿Que tienes en mente?"
                minRows={10}
            />
        </Grid>

        {/* Galeria de imagenes */}
        <ImageGallery />
    </Grid>
  )
}
