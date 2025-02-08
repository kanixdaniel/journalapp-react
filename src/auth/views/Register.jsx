import { Button, Grid2, TextField, Typography, Link } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Google } from "@mui/icons-material"
import { Link as RouterLink } from "react-router"

export const Register = () => {
    return (
        <AuthLayout title="Crear una cuenta">
            <form>
                <Grid2 container spacing={2}>
                    <TextField
                        label="Nombre completo"
                        type="text"
                        placeholder="Octavio Roca de Leija"
                        sx={{ mb: 1 }}
                        fullWidth
                    />
                    <TextField
                        label="Correo"
                        type="email"
                        placeholder="correo@google.com"
                        sx={{ mb: 1 }}
                        fullWidth
                    />
                    <TextField
                        label="Contraseña"
                        type="password"
                        sx={{ mb: 2 }}
                        fullWidth
                    />
                    <Button sx={{mb:2}} variant="contained" fullWidth>
                        <Typography textTransform="capitalize">Crear cuenta</Typography>
                    </Button>
                </Grid2>
            </form>
            <Grid2 container justifyContent="end">
                <Typography sx={{mr: 1}}>¿Ya tienes una cuenta?</Typography>
                <Link align="right" component={RouterLink} color="primary" to="/auth/login">
                    Iniciar sesión
                </Link>
            </Grid2>
        </AuthLayout>
    )
}
