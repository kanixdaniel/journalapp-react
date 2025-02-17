import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, Typography, TextField, Alert } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../../store/auth';
import { useMemo } from 'react';

const formData = {
  email: 'daniel@kanixgroup.com',
  password: '123456'
}

export const LoginPage = () => {

  const {status, errorMessage} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const { formState, email, password, onInputChange} = useForm(formData);

  const isAuthenticating =  useMemo(() => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword(formState));
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title='Inicio de sesión'>
      <form 
        onSubmit={onSubmit}
        className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
          <Grid item xs={12} sx={{mb: 2}}>
            <TextField 
              label='Correo'
              type='email'
              placeholder='correo@ejemplo.com'
              value={email}
              name='email'
              fullWidth
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField 
              label='Contraseña'
              type='password'
              placeholder='Ingresa tu contraseña'
              value={password}
              name='password'
              fullWidth
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid 
              item 
              xs={12}
              display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>
                {errorMessage}
              </Alert>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button 
                type='submit'
                variant='contained'
                fullWidth
                disabled={isAuthenticating}>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button 
                variant='contained'
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isAuthenticating}>
                <Google />
                <Typography sx={{ml: 1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
