import { InfoOutlined } from "@mui/icons-material"
import { Grid2, Typography } from "@mui/material"

export const NothingSelected = () => {
    return (
        <Grid2
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            className="animate__animated animate__fadeIn"
            sx={{ minHeight: 'calc(100vh - 112px)', backgroundColor: 'secondary.main', padding: 5 }}
        >
            <InfoOutlined color="primary" sx={{ fontSize: 70, mb: 1 }} />
            <Typography align="center" color="primary" variant="h4" sx={{ mb: 2 }}>
                Selecciona o crea una nota
            </Typography>
        </Grid2>
    )
}
