import { Google } from "@mui/icons-material"
import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router"

export const Login = () => {
    return (
        <Grid2
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 5 }}
        >
            <Grid2
                size={{ xs: 11, sm: 6, md: 4, lg: 3, xl: 2 }}
                sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
                className="box-shadow"
            >
                <Typography align="center" color="primary" variant="h4" sx={{ mb: 2 }}>Login</Typography>
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
                                <Typography textTransform="capitalize" sx={{ml: 1}}>Google</Typography>
                            </Button>
                        </Grid2>
                    </Grid2>
                </form>
                <Grid2 container justifyContent="end">
                    <Link align="right" component={RouterLink} color="primary" to="/auth/register">
                        Crear una cuenta
                    </Link>
                </Grid2>
            </Grid2>
        </Grid2>
    )
}
