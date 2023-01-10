import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, Typography, TextField } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear cuenta'>
      <form>
        <Grid container>
          <Grid Item xs={12} sx={{mb: 2}}>
            <TextField 
              label='Nombre completo'
              type='text'
              placeholder='Jonh Snow'
              fullWidth
            />
          </Grid>

          <Grid Item xs={12} sx={{mb: 2}}>
            <TextField 
              label='Correo'
              type='email'
              placeholder='correo@ejemplo.com'
              fullWidth
            />
          </Grid>

          <Grid Item xs={12}>
            <TextField 
              label='Contraseña'
              type='password'
              placeholder='Ingresa tu contraseña'
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid contaner direction='row' justifyContent='end'>
            <Typography sx={{mr:1}}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Iniciar sesión
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
