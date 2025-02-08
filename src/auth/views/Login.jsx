import { Google } from "@mui/icons-material"
import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router"
import { AuthLayout } from "../layout/AuthLayout"

export const Login = () => {
    return (
        <AuthLayout title="Inicio de sesión">
            <form>
                <Grid2 container spacing={2}>
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
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Button variant="contained" fullWidth>
                            <Typography textTransform="capitalize">Iniciar Sesión</Typography>
                        </Button>
                    </Grid2>
                    <Grid2 sx={{ mb: 2 }} size={{ xs: 12, md: 6 }}>
                        <Button variant="contained" fullWidth>
                            <Google />
                            <Typography textTransform="capitalize" sx={{ ml: 1 }}>Google</Typography>
                        </Button>
                    </Grid2>
                </Grid2>
            </form>
            <Grid2 container justifyContent="end">
                <Link align="right" component={RouterLink} color="primary" to="/auth/register">
                    Crear una cuenta
                </Link>
            </Grid2>
        </AuthLayout>
    )
}
