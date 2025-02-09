import { Button, Grid2, TextField, Typography, Link, Alert } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from "react-router"
import { useForm } from "../../hooks"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startRegisterWithEmail } from "../../redux/auth"

export const Register = () => {
    const dispatch = useDispatch();
    const {status, errorMessage} = useSelector(state => state.auth);
    const {
        fullName, email, password, onInputChange,
        fullNameError, emailError, passwordError, isFormValid
    } = useForm({
        fullName: 'Kanix Perez',
        email: 'kanix@google.com',
        password: 'Abc!1234',
    });
    const isAuthenticating = useMemo(() => status === 'checking', [status]);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        // Mostrar msjs de error y retornar si los hay
        setIsFormSubmitted(true);
        if(!isFormValid) return;

        // Crear usuario con email y hacer login
        dispatch(startRegisterWithEmail({fullName, email, password}));
    }

    return (
        <AuthLayout title="Crear una cuenta">
            <form onSubmit={onSubmit}>
                <Grid2 container spacing={2}>
                    <TextField
                        label="Nombre completo"
                        type="text"
                        placeholder="Octavio Roca de Leija"
                        sx={{ mb: 1 }}
                        fullWidth
                        required
                        name="fullName"
                        value={fullName}
                        onChange={onInputChange}
                        error={!!fullNameError && isFormSubmitted}
                        helperText={fullNameError}
                    />
                    <TextField
                        label="Correo"
                        type="email"
                        placeholder="correo@google.com"
                        sx={{ mb: 1 }}
                        fullWidth
                        required
                        name="email"
                        value={email}
                        onChange={onInputChange}
                        error={!!emailError && isFormSubmitted}
                        helperText={emailError}
                    />
                    <TextField
                        label="Contraseña"
                        type="password"
                        sx={{ mb: 1 }}
                        fullWidth
                        required
                        name="password"
                        value={password}
                        onChange={onInputChange}
                        error={!!passwordError && isFormSubmitted}
                        helperText={passwordError}
                    />

                    <Alert sx={{ display: !!errorMessage ? '' : 'none', width: '100%' }} severity="error">{errorMessage}</Alert>
                    <Button disabled={isAuthenticating} type="submit" sx={{ mb: 2 }} variant="contained" fullWidth>
                        <Typography textTransform="capitalize">Crear cuenta</Typography>
                    </Button>
                </Grid2>
            </form>
            <Grid2 container justifyContent="end">
                <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
                <Link align="right" component={RouterLink} color="primary" to="/auth/login">
                    Iniciar sesión
                </Link>
            </Grid2>
        </AuthLayout>
    )
}
